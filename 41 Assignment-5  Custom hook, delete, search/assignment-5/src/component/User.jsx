import style from "./user.module.css";

const User = ({ id, name, email, phone, onhandleDelete }) => {
  const handleDelete = (id) => {
    onhandleDelete(id);
  };

  return (
    <article className={style.user}>
      <div>
        <h4>{id}</h4>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <button
          className={style.btn}
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default User;
