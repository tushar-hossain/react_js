import User from "./User";

const Users = ({ users }) => {
  return <section className="users">{users && users.map((user) => <User key={user.id} {...user} />)}</section>;
};

export default Users;
