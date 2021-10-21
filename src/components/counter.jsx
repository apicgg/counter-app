import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imgUrl: 'https://picsum.photos/200',
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // **This is former approach for binding 'this' keyword. Use arrow function if possible.
  /* 
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // **This one is a wrapper method for passing parameters into event handling. This needs to be done by passing the same arrow function into the event itself as below.
  /*  
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  */

  render() {
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt='random pic' /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        {this.renderTags()}
        {this.state.tags.length === 0 && "Please create a new tag!"}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
