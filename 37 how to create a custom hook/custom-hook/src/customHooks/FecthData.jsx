import customEffect from "./customEffect";

const FecthData = () => {
  // const { data, isLoading, error } = customEffect("https://jsonplaceholder.typicode.com/todos");
  const { data, isLoading, error } = customEffect("https://jsonplaceholder.typicode.com/todos");

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title} </p>;
    });

  const loadingMessage = <p>fetching data is loading...</p>;
  const errorMessage = <p>{error}</p>;

  return (
    <div>
      <h1>Todos</h1>
      {todosElement}
      {isLoading && loadingMessage}
      {error && errorMessage}
    </div>
  );
};

export default FecthData;
