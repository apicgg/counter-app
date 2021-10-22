import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
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
    this.setState({ value: this.state.value + 1 });
  };

  //  !This one below is a wrapper method for passing parameters into event handling.
  //  **This needs to be done by passing the same arrow function into the event itself as below.
  /*  
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  */

  // ** In case like 'dialog box' we need to use children props.
  // **In this case direct rendering is fine with passing attribute as a key inside counter!

  render() {
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt='random pic' /> */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        {/* {this.renderTags()}
        {this.state.tags.length === 0 && "Please create a new tag!"} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
