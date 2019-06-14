import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    // array of counter objects
    counters: []
  };

  constructor() {
    super();
    console.log("App constructor");
  }

  componentDidMount() {
    //Ajax call
    this.setState({});
  }

  handleIncrement = counter => {
    console.log("Increment id: ", counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    console.log("Decrement id: ", counter.id);
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleResetCounter = counter => {
    console.log("Reset id: ", counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };

  handleDeleteCounter = counterId => {
    console.log("Delete counter id:", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAddCounter = () => {
    let x = this.state.counters.length;
    if (x !== 0) {
      x = this.state.counters[x - 1].id;
    }
    console.log("Add counter id:", x + 1);
    const counters = [...this.state.counters, { id: x + 1, value: 0 }];
    this.setState({ counters });
  };

  handleResetAll = () => {
    console.log("Reset all.");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          numCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleResetCounter}
            onDelete={this.handleDeleteCounter}
            onAdd={this.handleAddCounter}
            onResetAll={this.handleResetAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
