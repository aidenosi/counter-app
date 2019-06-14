import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // array of counter objects
    counters: [0, 0, 0, 0].map((value, i) => ({
      id: i + 1,
      value
    }))
  };

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
    console.log("Reset handler called.");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <span>
          <button
            onClick={this.handleAddCounter}
            className="btn btn-secondary btn-sm m-2"
          >
            Add Counter
          </button>
          <button
            onClick={this.handleResetAll}
            className="btn btn-warning btn-sm m-2"
          >
            Reset All Counters
          </button>
        </span>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDeleteCounter}
            onReset={this.handleResetCounter}
            counter={counter}
          >
            {/*The <h4> is a Child of the Counter*/}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
