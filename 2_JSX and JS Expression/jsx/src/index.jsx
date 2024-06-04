import React from "react";
import ReactDOM from "react-dom/client";

const title = "Todo Apps";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eveniet?";

const date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

day = indexCount(day);
month = indexCount(month);

function indexCount(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Current Date:</p>
      <p>{day + " / " + month + " / " + year}</p>
    </div>
  </React.StrictMode>
);
