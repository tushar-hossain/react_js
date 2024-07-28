import { Component, createRef } from "react";

// Ref Class -> directly dom element accessing

export default class RefClass extends Component {
  constructor(props) {
    super(props);

    this.userName = createRef();
    this.userPassword = createRef();

    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.userName.current.value);
    this.userName.current.style.color = "white";
    this.userName.current.style.backgroundColor = "red";
    console.log(this.userPassword.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="userName">UserName: </label>
          <input type="text" name="userName" id="userName" ref={this.userName} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" ref={this.userPassword} />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}
