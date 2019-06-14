import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <span>
          <button
            onClick={this.props.onAdd}
            className="btn btn-secondary btn-sm m-2"
          >
            Add Counter
          </button>
          <button
            onClick={this.props.onResetAll}
            className="btn btn-warning btn-sm m-2"
          >
            Reset All Counters
          </button>
        </span>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
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
