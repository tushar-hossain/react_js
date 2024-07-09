import React, { useState } from "react";

import NewTodo from "./NewTodo";
import Todos from "./Todos";

const todos = [];

function Home() {
  const [todo, setTodo] = useState(todos);

  const handleTodo = (NewTodo) => {
    setTodo([...todo, NewTodo]);
  };

  return (
    <div>
      <NewTodo onNewTodo={handleTodo} />

      <Todos todos={todo} />
    </div>
  );
}

export default Home;
