export default function Child(props) {
  let childData = "I am Child Component (App)";

  props.onChildData(childData);

  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}
