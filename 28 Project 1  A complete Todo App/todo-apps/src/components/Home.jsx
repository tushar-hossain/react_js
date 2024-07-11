import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import style from "./home.module.css";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

export default function Home() {
  const [todo, setTodos] = useState([]);

  const handleTodos = (todo) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((previousTodos) => {
      const filter = previousTodos.filter((todo) => todo.id !== id);
      return filter;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onhandleTodos={handleTodos} />
      <Todos todos={todo} onRemeoveTodos={handleRemoveTodo} />
    </div>
  );
}
