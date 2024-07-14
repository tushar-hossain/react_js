import Todo from "./Todo";
import style from "./todos.module.css";
const Todos = (props) => {
  return (
    <section className={style.todos}>
      {props.todos.map((todos) => (
        <Todo key={todos.id} todo={todos.todo} />
      ))}
    </section>
  );
};

export default Todos;
