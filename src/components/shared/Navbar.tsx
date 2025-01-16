import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

import ExternalLink from "@/components/shared/ExternalLink";

import styles from "./navbar.module.css";

const Navbar: FunctionComponent = () => (
  <header className={`sticky px-2 md:px-8 py-2 shadow flex justify-between items-center ${styles["navbar"]}`}>
    <span className="text-2xl font-bold">Rajat Patwari</span>
    <ExternalLink href="/RajatPatwari_Resume.pdf">
      <FontAwesomeIcon icon={faFileLines} /> Resume
    </ExternalLink>
  </header>
);

export default Navbar;
