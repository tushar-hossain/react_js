import { useUsersContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, userName } = user;

  const { users, setUsers } = useUsersContext();

  const handleDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <article className="user">
      <h3>{id}</h3>
      <h3>{userName}</h3>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
