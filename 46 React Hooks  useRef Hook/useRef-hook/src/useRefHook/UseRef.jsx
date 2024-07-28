import { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log({ userName, password });
    userNameRef.current.style.color = "red";
    userNameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">userName : </label>
        <input type="text" name="userName" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UseRef;
