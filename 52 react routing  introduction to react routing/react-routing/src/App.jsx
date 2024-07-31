import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routing/Home";
import Contact from "./routing/Contact";
import About from "./routing/About";
import Error from "./routing/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
