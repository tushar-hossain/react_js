import React from "react";
import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const todos = [
  {
    id: uuidv4(),
    title: "Title 1",
    desc: "This is a desc 1",
  },
  {
    id: uuidv4(),
    title: "Title 2",
    desc: "This is a desc 2",
  },
  {
    id: uuidv4(),
    title: "Title 3",
    desc: "This is a desc 3",
  },
  {
    id: uuidv4(),
    title: "Title 4",
    desc: "This is a desc 4",
  },
  {
    id: uuidv4(),
    title: "Title 5",
    desc: "This is a desc 5",
  },
];

function App() {
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      {todos.map(({ id, title, desc }) => (
        <Card key={id} titleTex={title} descText={desc} />
      ))}
    </div>
  );
}

export default App;
