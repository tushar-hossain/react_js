import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
