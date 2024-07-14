import { useState, useEffect } from "react";

const FetchData = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  const isLoadingMessage = <p> Todos is Loading...</p>;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("fetching data is not successfull.");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && isLoadingMessage}
      {todosElement}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FetchData;
