import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <nav>
          <a href="/">Home</a> <br />
          <a href="/blogs">Blogs</a>
          <br />
          <a href="/contact">Contact</a>
        </nav> */}

        <nav className="navigation">
          <NavLink to="/" className="nav .active">
            Home
          </NavLink>
          <NavLink to="blogs" className="nav">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="nav">
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
