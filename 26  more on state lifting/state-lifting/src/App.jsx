import Todo from "./TodoApps/Todo";
import NewTodo from "./TodoApps/NewTodo";

function App() {
  const handlerNewTodo = (NewTodo) => {
    console.log(NewTodo);
  };

  return (
    <div>
      <Todo />

      <NewTodo onhandlerNewTodo={handlerNewTodo} />
    </div>
  );
}

export default App;
