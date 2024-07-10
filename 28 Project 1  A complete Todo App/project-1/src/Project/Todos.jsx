import Todo from "./Todo";
import style from "./todos.module.css";

function Todos(props) {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} />
      ))}
    </section>
  );
}

export default Todos;
