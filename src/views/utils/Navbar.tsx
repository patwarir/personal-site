import { FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faLayerGroup, faMoon, faRss, faSun, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "ps-theme";

import styles from "./Navbar.module.scss";

const NavbarThemeToggler: FunctionComponent = () => {
  const themeContext = useContext(ThemeContext);
  const setTheme = (): void => {
    if (themeContext.theme === "light") {
      themeContext.setTheme("dark");
    } else if (themeContext.theme === "dark") {
      themeContext.setTheme("light");
    } else {
      themeContext.setTheme("light");
    }
  };
  const getIcon = (): IconDefinition => {
    if (themeContext.theme === "light") {
      return faMoon;
    } else if (themeContext.theme === "dark") {
      return faSun;
    } else {
      return faMoon;
    }
  };

  return (
    <div className="nav-item me-auto my-auto">
      <button onClick={() => setTheme()} className={"small " + styles["navbar-btn-" + themeContext.theme]}>
        <FontAwesomeIcon icon={getIcon()} />
      </button>
    </div>
  );
};

const NavbarItems: FunctionComponent = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to="/blog" className="nav-link">
          <FontAwesomeIcon fixedWidth icon={faRss} /> Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/vertex" className="nav-link">
          <FontAwesomeIcon fixedWidth icon={faCode} /> Vertex
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/wundu" className="nav-link">
          <FontAwesomeIcon fixedWidth icon={faLayerGroup} /> Wundu
        </Link>
      </li>
    </ul>
  );
};

const Navbar: FunctionComponent = () => {
  const themeContext = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={"navbar navbar-expand-md navbar-dark " + styles["navbar-bg-" + themeContext.theme] + " px-md-4"}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand my-auto">Rajat Patwari</Link>
        <NavbarThemeToggler />
        <button type="button" className="navbar-toggler" onClick={() => setExpanded(!expanded)}>
          <span className="small"><FontAwesomeIcon icon={expanded ? faTimes : faBars} /> {expanded ? "Close" : "Menu"}</span>
        </button>
        <div className={"navbar-collapse" + (expanded ? "" : " collapse")}>
          <NavbarItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
