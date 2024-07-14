import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;

  return (
    <article>
      <div className={style.todo}>
        <h3>{title} </h3>
        <p>{desc} </p>
      </div>
    </article>
  );
};

export default Todo;
