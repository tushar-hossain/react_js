import { useState } from "react";

import NewTodo from "./NewTodo";
import Todos from "./Todos";
import style from "./home.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
    setTodos((previous) => {
      return [...previous, { todo }];
    });
    console.log(todos);
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>

      <NewTodo onNewTodo={handleTodo} />
      <Todos todos={todos} />
    </div>
  );
}
