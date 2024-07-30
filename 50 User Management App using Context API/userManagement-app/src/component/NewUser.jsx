import { useState } from "react";

import { useUsersContext } from "../hooks/useUsersContext";

const NewUser = () => {
  const [username, setUsername] = useState("");

  const { setUsers } = useUsersContext();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), userName: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };

  return (
    <div>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUserNameChange} required />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default NewUser;
