import Component2 from "./Component2";

const users = {
  id: 101,
  name: "Tushar Hossain",
};

const Component1 = () => {
  return (
    <div>
      <Component2 users={users} />
    </div>
  );
};

export default Component1;
