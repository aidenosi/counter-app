import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    /* array of counter objects */
    counters: [0, 0, 0, 0].map((value, i) => ({
      id: i + 1,
      value
    }))
  };

  handleDelete = counterId => {
    console.log("Delete handler called on id:", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    let x = this.state.counters.length;
    if (x !== 0) {
      x = this.state.counters[x - 1].id;
    }
    console.log("Add handler called with id:", x + 1);
    const counters = [...this.state.counters, { id: x + 1, value: 0 }];
    this.setState({ counters });
  };

  handleClearAll = () => {};

  render() {
    return (
      <div>
        <span>
          <button onClick={this.handleAdd} className="btn-secondary btn-sm m-2">
            Add Counter
          </button>
          <button
            onClick={this.handleClearAll}
            className="btn-warning btn-sm m-2"
          >
            Clear All Counters
          </button>
        </span>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
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
