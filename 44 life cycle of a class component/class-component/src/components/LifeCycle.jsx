import { Component } from "react";

// Mounting -> constructor -> render -> ComponentDidMount
// Updating -> props/state -> componentDidUpdate -> render
// Unmounting ->

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleChange = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    {
      console.log("render");
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleChange}>+</button>
      </div>
    );
  }
}
