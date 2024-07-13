import { useState } from "react";
import style from "./toggle.module.css";
const Toggle = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.toggle}>
      <div className={style.main}>
        <h3>{title} </h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default Toggle;
