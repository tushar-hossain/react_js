import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2"

function App() {
  return (
    <div>
      <Card1 name="Card1" desc="This is a Card1 Desc." />
      <Card2 name="Card2" desc="This is a Card2 Desc." />
    </div>
  );
}

export default App;
