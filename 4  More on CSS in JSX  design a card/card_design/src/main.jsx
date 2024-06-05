import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="card">
      <h1 className="todoApp">Todo App</h1>
      <p className="cardTitle">Card Title</p>
      <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="card-footer">Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="card">
      <h1 className="todoApp">Todo App</h1>
      <p className="cardTitle">Card Title</p>
      <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="card-footer">Lorem ipsum dolor sit amet.</p>
    </div>
  </React.StrictMode>
);
