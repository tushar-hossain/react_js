import { useState } from "react";
import User from "./User";

const Users = () => {
  // const [usersName, setUsersName] = useState("Tushar hossain");
  // const [usersId, setUsersId] = useState(101);

  const [user, setUser] = useState({
    id: 10212015,
    name: "Tushar Hossain",
  });

  return (
    <>
      {/* <User usersName={usersName} usersId={usersId} /> */}
      <User user={user} />
    </>
  );
};

export default Users;
