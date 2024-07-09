import React, { useState } from "react";

function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handlerInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmitted = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
  };

  return (
    <form action="" onSubmit={handleSubmitted}>
      <label htmlFor="todo">NewTodo: </label>
      <input type="text" name="todo" id="todo" value={todo} onChange={handlerInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
