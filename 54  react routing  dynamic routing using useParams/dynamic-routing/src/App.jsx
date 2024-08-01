import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/blogs" className="nav-link">
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
