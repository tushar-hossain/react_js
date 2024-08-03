import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5174/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;
