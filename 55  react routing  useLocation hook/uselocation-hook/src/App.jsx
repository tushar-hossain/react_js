import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
          <NavLink to="/contact" className="NavLink">
            Contact
          </NavLink>
          <NavLink to="/blogs" className="NavLink">
            Blogs
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
