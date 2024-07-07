import { useState } from "react";

export default function FormData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerNameChange = (e) => {
    setName(e.target.value);
  };
  const handlerEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlerPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlerSubmitted = (e) => {
    // console.log(name, email, password);
    e.preventDefault();
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
  };

  return (
    <div>
      <h1>Register</h1>

      <form action="" onSubmit={handlerSubmitted}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} required onChange={handlerNameChange} />
        </div>

        <div>
          <label htmlFor="name">Email: </label>
          <input type="email" name="email" id="email" value={email} required onChange={handlerEmailChange} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={password} required onChange={handlerPasswordChange} />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
