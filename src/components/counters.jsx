import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  i = 0;
  state = {
    counters: [
      /* array of counter objects */
      { id: ++this.i, value: 0 },
      { id: ++this.i, value: 0 },
      { id: ++this.i, value: 0 },
      { id: ++this.i, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {/* Map each counter object to a Counter with key and value attributes*/}
        {this.state.counters.map(counter => (
          <Counter id={counter.id} value={counter.value}>
            {/*The <h4> is a Child of the Counter*/}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
