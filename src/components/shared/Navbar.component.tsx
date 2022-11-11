import { Fragment, FunctionComponent, ReactNode, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "@root/components/shared/ExternalLink.component";

import { useAppDispatch, useAppSelector } from "@root/store/hooks";
import { selectTheme, toggleTheme } from "@root/store/reducers/theme.reducer";

import { faBars, faFile, faMoon, faSun, faTimes, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.component.module.scss";

const NavbarThemeTogger: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const getIconFromTheme = () => {
    if (theme === "light") {
      return faMoon;
    } else if (theme === "dark") {
      return faSun;
    } else {
      return faTriangleExclamation;
    }
  };

  return (
    <button onClick={() => dispatch(toggleTheme())} className={`ml-4 ${styles["fg-" + theme]}`}>
      <FontAwesomeIcon icon={getIconFromTheme()} fixedWidth className="align-text-top" />
    </button>
  );
};

type NavbarLinkProps = {
  href: string,
  className?: string | undefined,
  children: ReactNode,
};

const NavbarLink: FunctionComponent<NavbarLinkProps> = (props) => {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
};

const NavbarItems: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const [ expanded, setExpanded ] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <button onClick={() => toggleExpand()} className={`md:hidden border rounded-lg my-auto px-1 py-0.5 w-20 ${styles["border-theme-togger-" + theme]}`}>
        <FontAwesomeIcon icon={expanded ? faTimes : faBars} fixedWidth className="text-sm" /> {expanded ? "Hide" : "Menu"}
      </button>
      <ul className={`${expanded ? "collapse" : "hidden"} md:flex flex-col md:flex-row md:gap-4`}>
        <li>
          <NavbarLink href="/other">
            <FontAwesomeIcon icon={faTriangleExclamation} fixedWidth className="align-text-middle text-sm" /> Other
          </NavbarLink>
        </li>
        <li>
          <ExternalLink href="https://rajatpatwari.com/RajatPatwari_Resume.pdf">
            <FontAwesomeIcon icon={faFile} fixedWidth className="align-text-middle text-sm" /> Resume
          </ExternalLink>
        </li>
      </ul>
    </Fragment>
  );
};

const Navbar: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <header className={`mb-2 px-2 md:px-8 py-4 sticky top-0 z-50 shadow-md flex ${styles["bg-" + theme]}`}>
      <div>
        <NavbarLink href="/" className={`text-2xl font-bold ${styles["fg-lead-" + theme]}`}>
          Rajat Patwari
        </NavbarLink>
        <NavbarThemeTogger />
      </div>
      <div className={`ml-auto my-auto ${styles["fg-" + theme]}`}>
        <NavbarItems />
      </div>
    </header>
  );
};

export default Navbar;
