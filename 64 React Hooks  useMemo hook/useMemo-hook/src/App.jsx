import { useCallback, useState } from "react";

import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleMessageCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {console.log("Rendering")}
      {toggle ? "On" : "Off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message count={count} onhandleMessageCount={handleMessageCount} />
    </div>
  );
}

export default App;
