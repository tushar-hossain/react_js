import { Component } from "react";

export default class ChangeEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  changeHandler = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    const { changeValue } = this.state;

    return (
      <div>
        <input type="text" onChange={this.changeHandler} />
        <span>
          <button>SignUp</button>
        </span>
        <p>{changeValue}</p>
      </div>
    );
  }
}
