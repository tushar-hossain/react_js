import { FaRegTrashAlt } from "react-icons/fa";
import style from "./todo.module.css"

function Todo(props) {
  const { title, desc } = props.todo;
  return (
    <article className={style.todo}>
      <div>
        <h2>{title}</h2>
        <p>{desc} </p>
      </div>
      <div>
        <button className={style.btn}>
          <FaRegTrashAlt />
        </button>
      </div>
    </article>
  );
}

export default Todo;
