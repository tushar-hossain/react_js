
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <Card titleTex="Call Mother" descTex="This is a desc1" />
      <Card titleTex="Call Father" descTex="This is a desc2" />
      <Card titleTex="Call Wife" descTex="This is a desc3" />
    </div>
  );
}

export default App;
