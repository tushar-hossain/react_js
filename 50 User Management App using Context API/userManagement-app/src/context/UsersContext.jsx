import { createContext, useState } from "react";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, userName: "Shahin" },
    { id: 2, userName: "Nadia" },
    { id: 3, userName: "Tushar" },
  ]);

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
