import React from "react";

function Wellcome() {
  return (
    <div>
      <h1>wellcome</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function Wellcome2() {
  return React.createElement("div", {}, React.createElement("h1", {}, "wellcome2"), React.createElement("p", {}, "Lorem ipsum dolor sit amet."));
}

export default function App() {
  return (
    <div>
      <Wellcome />
      <Wellcome2 />
    </div>
  );
}
