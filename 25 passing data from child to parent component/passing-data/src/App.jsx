import Child from "./childComponemt/Child";

function App() {
  let data = "I am Parent Component";

  const ChildData = (parentData) => {
    console.log(parentData);
  };

  return (
    <div>
      <Child data={data} onChildData={ChildData} />
    </div>
  );
}

export default App;
