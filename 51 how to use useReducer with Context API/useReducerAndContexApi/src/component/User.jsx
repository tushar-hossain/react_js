import { useUsersContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, userName } = user;

  const { deleteUsers } = useUsersContext();

  const handleDelete = (id) => {
    deleteUsers(id);
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
