import { useEffect, useState } from "react";

import style from './styling.module.css'


const Styling = () => {
  // const error = true;

  const [name, setName] = useState('');
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {    
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  })

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      {/* <h1 style={{ color: error ? "red" : "green", backgroundColor: error ? "black" : "orange" }}>I am new Styling</h1> */}

      {/* 
      <input type="text" value={name} onChange={handleChange} style={{backgroundColor: validInput?'green':"red"}} /> */}

      <input type="text" value={name} onChange={handleChange} className={validInput? style.valid:style.invalid} />

    </div>
  );
};

export default Styling;
