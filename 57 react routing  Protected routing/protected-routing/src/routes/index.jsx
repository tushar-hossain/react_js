import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
// pages
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Error from "../pages/Error";

import NavBar from "../navbar/NavBar";
import Protected from "./Protected";

const Index = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {isLoggedin ? (
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedin);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedin);
            }}
          >
            Log In
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-blog"
            element={
              <Protected isLoggedin={isLoggedin}>
                <AddBlog />
              </Protected>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
