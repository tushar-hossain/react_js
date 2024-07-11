import style from "./todo.module.css";

import { FaRegTrashCan } from "react-icons/fa6";

function Todo(props) {
  const { title, desc } = props.todo;

  const { id } = props;

  const handleClick = (id) => {
    props.onRemeoveTodos(id);
  };

  return (
    <article className={style.todo}>
      <div className={style.body}>
        <h1>{title} </h1>
        <p>{desc}</p>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          handleClick(id);
        }}
      >
        <FaRegTrashCan />
      </button>
    </article>
  );
}

export default Todo;
