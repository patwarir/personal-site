import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBlog, faCode, faFileAlt, faLayerGroup, faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "@root/pages/_app";
import { Link } from "@root/components/shared/shared";

const NavbarThemeToggler: FunctionComponent = () => {
  const [ theme, setTheme ] = useTheme();

  const switchTheme = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="nav-item me-auto my-auto">
      <button type="button" onClick={() => switchTheme()} className={"small text-light bg-ps-" + (theme === "light" ? "blue" : "gray") + " border-0"}>
        <FontAwesomeIcon fixedWidth icon={theme === "light" ? faMoon : faSun} />
      </button>
    </div>
  );
};

const NavbarItems: FunctionComponent = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item"><Link href="/blog" prefetch={false} styling="nav-link" icon={faBlog}>Blog</Link></li>
      <li className="nav-item"><Link href="/vertex" external styling="nav-link" icon={faCode}>Vertex</Link></li>
      <li className="nav-item"><Link href="/wundu" external styling="nav-link" icon={faLayerGroup}>Wundu</Link></li>
      <li className="nav-item"><Link href="/RajatPatwari_Resume.pdf" external styling="nav-link" icon={faFileAlt}>Resume</Link></li>
    </ul>
  );
};

const Navbar: FunctionComponent = () => {
  const [ theme, _ ] = useTheme();
  const [ expanded, setExpanded ] = useState(false);

  return (
    <nav className={"navbar navbar-expand-md navbar-dark sticky-top bg-ps-" + (theme === "light" ? "blue" : "gray") + " px-md-4"}>
      <div className="container-fluid">
        <Link href="/" styling="navbar-brand">Rajat Patwari</Link>
        <NavbarThemeToggler />
        <button type="button" className="navbar-toggler small" onClick={() => setExpanded(!expanded)}>
          <FontAwesomeIcon fixedWidth icon={expanded ? faTimes : faBars} /> {expanded ? "Close" : "Menu"}
        </button>
        <div className={"navbar-collapse" + (expanded ? "" : " collapse")}>
          <NavbarItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
