import style from "./todos.module.css";

import Todo from "./Todo";

function Todos(props) {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemeoveTodos={props.onRemeoveTodos} />
      ))}
    </section>
  );
}

export default Todos;
