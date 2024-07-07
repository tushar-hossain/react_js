import { useState } from "react";

export default function FormData() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  //   const handlerNameChange = (e) => {
  //     setUser({ name: e.target.value, email, password });
  //   };
  //   const handlerEmailChange = (e) => {
  //     setUser({ name, email: e.target.value, password });
  //   };
  //   const handlerPasswordChange = (e) => {
  //     setUser({ name, email, password: e.target.value });
  //     };

  const changeHandler = (e) => {
    // let formFild = e.target.name;
    // if (formFild === "name") {
    //   setUser({ name: e.target.value, email, password });
    // } else if (formFild === "email") {
    //   setUser({ name, email: e.target.value, password });
    // } else if (formFild === "password") {
    //   setUser({ name, email, password: e.target.value });
    // }
    // console.log(formFild);

    console.log(setUser({ ...user, [e.target.name]: e.target.value }));
  };

  const handlerForm = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form action="" onSubmit={handlerForm}>
        <div className="form-style">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} onChange={changeHandler} required />
        </div>

        <div className="form-style">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={changeHandler} required />
        </div>

        <div className="form-style">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={password} id="password" onChange={changeHandler} required />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
