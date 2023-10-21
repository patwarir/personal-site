import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

import ExternalLink from "@/components/shared/ExternalLink";

import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <header className={`sticky top-0 z-50 px-2 md:px-8 py-3 shadow-md flex ${styles["bg"]}`}>
      <span className={`mr-auto text-2xl font-bold ${styles["text-fg"]}`}>Rajat Patwari</span>
      <ExternalLink href="https://rajatpatwari.com/RajatPatwari_Resume.pdf" className={`ml-auto my-auto ${styles["text-fg"]}`}>
        <FontAwesomeIcon icon={faFileLines} className="mr-1" /> Resume
      </ExternalLink>
    </header>
  );
};

export default Navbar;
