import { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;

    // if (isLogin) {
    //   return <div>
    //     <HomePage />
    //   </div>
    // } else {
    //   return <div>
    //     <LoginPage />
    //   </div>
    // }

    // let element = isLogin ? <HomePage /> : <LoginPage />;
    // return <div>
    //   {element}
    // </div>

    // short circuit
    // return <div>
    //   {isLogin && <HomePage />}
    // </div>;

    return <div>{isLogin ? <HomePage /> : <LoginPage />}</div>;
  }
}
