import { useState } from "react";
import style from "./newtodo.module.css";

function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange={handleChange} />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea onChange={handleChange} type="text" name="desc" id="desc" value={desc} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default NewTodo;
