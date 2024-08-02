import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </nav>
  );
};

export default NavBar;
