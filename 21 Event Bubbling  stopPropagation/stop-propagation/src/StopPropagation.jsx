import { useState } from "react";

export default function StopPropagation() {
  const [count, setCount] = useState(0);

  const parentHandler = () => {
    console.log("Parent Handler");
  };
  const childHandler = (e) => {
    e.stopPropagation();
    setCount(count + 1);
    console.log("Child Handler");
  };
  return (
    <div onClick={parentHandler}>
      <h1>Count : {count}</h1>
      <button onClick={childHandler}>Click me</button>
    </div>
  );
}
