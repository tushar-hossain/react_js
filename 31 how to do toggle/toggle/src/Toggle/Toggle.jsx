import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div style={{ backgroundColor: "pink", padding: "1rem" }}>
        {toggle && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptate voluptatem veritatis, alias officiis ab veniam, rerum nulla officia
            iure saepe dolorem esse voluptatibus modi id aut libero porro delectus?
          </p>
        )}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
