import { NavLink, Link } from "react-router";
import "./Header.css";
import {
  RiCloseLine,
  RiMenuLine,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (prevTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkTheme) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
    setDarkTheme(!darkTheme);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className="header">
      <div className=" container">
        <h1>
          <Link to="/" className="nav-logo">
            HR APP
          </Link>
        </h1>

        <nav className={`nav-menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav-list">
            <NavLink className="nav-link" to="/" onClick={hideMenu}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/add-employee" onClick={hideMenu}>
              Add
            </NavLink>
            <NavLink className="nav-link" to="/about" onClick={hideMenu}>
              About
            </NavLink>
          </ul>

          {/* close button */}
          <RiCloseLine className="nav-close" onClick={hideMenu} />
        </nav>

        <div id="nav-button">
          {darkTheme ? (
            <RiSunLine className="nav-theme" onClick={toggleTheme} />
          ) : (
            <RiMoonLine className="nav-theme" onClick={toggleTheme} />
          )}
          <RiMenuLine
            className="nav-mini-menu"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
