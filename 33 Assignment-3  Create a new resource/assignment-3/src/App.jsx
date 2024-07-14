import { useState } from "react";

import Todos from "./NewTodo_Component/Todos";
import style from "./NewTodo_Component/app.module.css";
import NewTodo from "./NewTodo_Component/NewTodo";

function App() {
  const [todo, setTodo] = useState([]);

  // newTodo data fetch methods

  const handleTodo = (todo) => {
    setTodo((prevtodo) => {
      return [...prevtodo, { todo }];
    });
  };

  return (
    <div className={style.form}>
      <h1 style={{ color: "white", textAlign: "center" }}>Collect Data from a Form</h1>
      <div className={style.newtodos}>
        <NewTodo newtodo={handleTodo} />
      </div>
      <Todos todos={todo} />
    </div>
  );
}

export default App;
