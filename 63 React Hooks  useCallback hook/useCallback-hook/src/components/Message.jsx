import { memo } from "react";

const Message = ({ count, counter }) => {
  return (
    <div>
      {console.log("Message")}
      <h1>send {count} message</h1>
      <button onClick={counter}>Message Increment</button>
    </div>
  );
};

export default memo(Message);
