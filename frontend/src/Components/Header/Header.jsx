import { NavLink, Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">HR APP</Link>
      </h1>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-employee">Add</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
