import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  // const { userid } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
  };

  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Find user</button>
      </form>

      {/* <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("age")}</h1>
      <h1>{searchParams.get("name")}</h1> */}
      {/* <h1>{userid}</h1>  */}
    </div>
  );
};

export default User;
