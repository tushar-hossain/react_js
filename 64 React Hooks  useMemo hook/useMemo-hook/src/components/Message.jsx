import { useMemo } from "react";
import { memo } from "react";

const Message = ({ count, onhandleMessageCount }) => {
  const calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 5000000000; index++) {
      number++;
    }
    return number;
  }, []);

  return (
    <div>
      <h2> Number: {calculatedNumber}</h2>
      {console.log("message")}
      <h1>send {count} message</h1>
      <button onClick={onhandleMessageCount}>Increment Message Count</button>
    </div>
  );
};

export default memo(Message);
