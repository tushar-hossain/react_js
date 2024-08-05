import { useCallback, useState } from "react";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const counter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {console.log("rendering")}
      {toggle ? "On" : "Off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message count={count} counter={counter} />
    </div>
  );
}

export default App;
