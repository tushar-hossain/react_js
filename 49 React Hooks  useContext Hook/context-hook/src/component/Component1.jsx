import { useState } from "react";

import Component2 from "./Component2";
import { UseContext } from "./UseContext";

const userData = { id: 101, name: "Tushar" };
const Component1 = () => {
  const [user, setUser] = useState(userData);
  const [text, setText] = useState("hello i am text");

  return (
    <UseContext.Provider value={{ user, text }}>
      <Component2 />
    </UseContext.Provider>
  );
};

export default Component1;
