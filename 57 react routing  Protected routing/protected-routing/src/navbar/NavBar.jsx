import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-blog">Add-Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default NavBar;
