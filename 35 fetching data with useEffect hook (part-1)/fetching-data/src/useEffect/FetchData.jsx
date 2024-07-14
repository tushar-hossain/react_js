import { useState, useEffect } from "react";

const FetchData = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.userId}</p>
              <h4>{todo.title} </h4>
            </div>
          );
        })}
    </div>
  );
};

export default FetchData;
