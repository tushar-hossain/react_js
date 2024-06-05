import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1 className="styleHeading">I am heading One</h1>

    <h1 style={{ backgroundColor: "purple", color: "white", textAlign: "center" }}>I am heading Two</h1>
  </React.StrictMode>
);
