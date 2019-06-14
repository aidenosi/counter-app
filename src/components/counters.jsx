import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onAdd,
      onResetAll,
      counters,
      onIncrement,
      onDecrement,
      onDelete,
      onReset
    } = this.props;

    return (
      <div>
        <span>
          <button onClick={onAdd} className="btn btn-secondary btn-sm m-2">
            Add Counter
          </button>
          <button onClick={onResetAll} className="btn btn-warning btn-sm m-2">
            Reset All Counters
          </button>
        </span>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onReset={onReset}
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
