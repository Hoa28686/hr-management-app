import { NavLink, Link } from "react-router";
import "./Header.css";
import { IoClose } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
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
        <Link to="/" className="nav-logo">
          HR APP
        </Link>

        <nav className={`nav-menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink className="nav-link" to="/" onClick={hideMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/add-employee"
                onClick={hideMenu}
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about" onClick={hideMenu}>
                About
              </NavLink>
            </li>
          </ul>

          {/* close button */}
          <IoClose className="nav-close" onClick={hideMenu} />
        </nav>

        <div id="nav-button">
          {darkTheme ? (
            <FiSun className="nav-theme" onClick={toggleTheme} />
          ) : (
            <FiMoon className="nav-theme" onClick={toggleTheme} />
          )}
          <LuMenu className="nav-mini-menu" onClick={() => setShowMenu(true)} />
        </div>
      </div>
    </header>
  );
};
export default Header;
