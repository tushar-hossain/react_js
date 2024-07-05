import { useState } from "react";

export default function Count2() {
  const [count, setCount] = useState(0);

  function handlerIncrement() {
    setCount(count + 1);
  }

  const handlerDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handlerIncrement}>Increment</button>
      <button onClick={handlerDecrement} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}
