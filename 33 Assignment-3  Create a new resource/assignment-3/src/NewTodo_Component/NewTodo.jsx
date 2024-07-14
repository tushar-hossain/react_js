import { useState } from "react";

import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todos, setTodos] = useState([{ title: "", desc: "" }]);
  const { title, desc } = todos;

  const handleChange = (e) => {
    setTodos((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newtodo(todos);
    setTodos({ title: "", desc: "" });
  };

  return (
    <div className={style.newTodo}>
      <form onSubmit={handleSubmit}>
        <div className={style.title}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={handleChange} />
        </div>

        <div className={style.desc}>
          <label htmlFor="desc">Description: </label>
          <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default NewTodo;
