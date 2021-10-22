import React, { Component } from "react";
import Counter from "./counter";

// !This component is the parent of counter.jsx component.

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
