import Users from "./component/Users";
import NewUser from "./component/NewUser";
import UsersProvider from "./context/UsersContext";
import "./index.css";

const App = () => {
  return (
    <UsersProvider>
      <div>
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
  );
};

export default App;
