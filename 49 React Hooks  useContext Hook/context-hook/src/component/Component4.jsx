import { useContext } from "react";

import { UseContext } from "./UseContext";

const Component4 = () => {
  const userContext = useContext(UseContext);

  const { user, text } = userContext;
  return (
    <div>
      <h1>{text}</h1>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Component4;
