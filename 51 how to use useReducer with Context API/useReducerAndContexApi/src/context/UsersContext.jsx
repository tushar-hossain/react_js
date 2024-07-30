import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/useUserReduce";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    addUsers: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUsers: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
