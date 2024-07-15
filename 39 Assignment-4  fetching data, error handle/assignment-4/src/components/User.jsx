const User = ({ id, name, email, phone }) => {
  return (
    <article className="user">
      <div>
        <h3>{id} </h3>
        <h3>{name} </h3>
        <p>{email} </p>
        <a href="#">{phone} </a>
      </div>
    </article>
  );
};

export default User;
