import propTypes from "prop-types";

const User = (props) => {
  console.log(props);

  return (
    <div>
      {/* <h1>{props.usersName}</h1>
      <h1>{props.usersId}</h1> */}

      <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>
    </div>
  );
};

// User.propTypes = {
//   usersName: propTypes.string,
//   usersId: propTypes.number,
// };

// User.defaultProps = {
//   usersName: "default name",
//   usersId: 0,
// };

User.propTypes = {
  // user: propTypes.object.isRequired,
  user: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  }),
};

export default User;
