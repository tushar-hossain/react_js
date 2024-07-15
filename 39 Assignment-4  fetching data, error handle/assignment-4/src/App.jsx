import { useState, useEffect } from "react";
import "./components/index.css";

import Users from "./components/Users";
function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("users data is not successfull");
        } else {
          return res.json();
        }
      })
      .then((user) => {
        setUsers(user);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Users Management App</h1>
      {/* {users &&
        users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })} */}

      <Users users={users} />

      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
