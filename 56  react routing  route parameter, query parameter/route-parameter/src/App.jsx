import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import User from "./pages/User";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="*" element={<Error />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="/user/:userid" element={<User />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
