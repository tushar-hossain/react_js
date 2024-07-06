import { useState } from "react";

export default function CountApp() {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  const handlerDecrement = () => {
    setCount(count - 1);
  };

  const handlerRest = () => {
    setCount((previousCount) => previousCount - previousCount);
  };

  return (
    <div className="mainDiv">
      <h1>Counter App</h1>
      <div className="counterApp">
        <h3>Count : {count}</h3>
        <button onClick={handlerIncrement} disabled={count === 5 ? true : false}>
          +
        </button>
        <button onClick={handlerDecrement} disabled={count === -5 ? true : false}>
          -
        </button>
        <button onClick={handlerRest}>0</button>
      </div>
    </div>
  );
}
