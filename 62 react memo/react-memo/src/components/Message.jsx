import { memo } from "react";

const Message = ({ count }) => {
  return (
    <div>
      {console.log("message rendering")}
      <p>send {count} message</p>
    </div>
  );
};

export default memo(Message);
