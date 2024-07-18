import User from "./User";
import style from "./users.module.css";

const Users = (props) => {
  return (
    <section className={style.users}>
      {props.users.map((user) => {
        return <User {...user} key={user.id} onhandleDelete={props.onhandleDelete} />;
      })}
    </section>
  );
};

export default Users;
