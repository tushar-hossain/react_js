import Card from "./components/Card";
import Data from "./data.json";
import "./style.css";

function App() {
  // first step

  let items = [];
  // for (let i = 0; i < Data.length; i++) {
  //   items.push(<Card key={[i]} titleTex={Data[i].title} desctext={Data[i].desc} />);
  // }

  // second step
  // items = Data.map((item, ind) => <Card key={ind} titleTex={item.title} desctext={item.desc} />);

  return (
    <div>
      <h1 className="heading">Todo App</h1>
      {/* {items} */}

      {Data.map((item, ind) => (
        <Card key={ind} titleTex={item.title} desctext={item.desc} />
      ))}
    </div>
  );
}

export default App;
