import { useState } from "react";

import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {console.log("rendering")}
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message count={count} />
    </div>
  );
}

export default App;
