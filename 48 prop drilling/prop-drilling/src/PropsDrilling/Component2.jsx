import Component3 from "./Component3";

const Component2 = (props) => {
  return (
    <div>
      <Component3 users={props.users} />
    </div>
  );
};

export default Component2;
