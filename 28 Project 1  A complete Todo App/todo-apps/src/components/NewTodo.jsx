import { useState } from "react";

import style from "./newtodo.module.css";

function NewTodo(props) {
  const [todo, setTodo] = useState([{ title: "", desc: "" }]);

  const { title, desc } = todo;

  const handleChange = (e) => {
    setTodo((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onhandleTodos(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style.field}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={handleChange} />
        </div>
        <div className={style.field}>
          <label htmlFor="desc">Description: </label>
          <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange} />
        </div>
        <button className={style.btn2} type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
