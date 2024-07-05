import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  const handlerChange = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handlerChange}>Increment</button>
    </div>
  );
}
