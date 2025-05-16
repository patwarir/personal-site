import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

import ExternalLink from "@/components/shared/ExternalLink";

import styles from "./navbar.module.css";

const Navbar: FunctionComponent = () => (
  <header className={`sticky top-0 z-10 px-2 md:px-8 py-2 shadow flex justify-between items-center ${styles["navbar"]}`}>
    <span className="text-2xl font-bold">Rajat Patwari</span>
    <div className="flex gap-x-4 md:gap-x-6">
      <ExternalLink href="https://linkedin.com/in/patwarir" label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </ExternalLink>
      <ExternalLink href="https://github.com/patwarir" label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </ExternalLink>
      <ExternalLink href="https://gitlab.com/patwarir" label="GitLab">
        <FontAwesomeIcon icon={faGitlab} />
      </ExternalLink>
      <ExternalLink href="/RajatPatwari_Resume.pdf" label="Resume">
        <FontAwesomeIcon icon={faFileLines} /> Resume
      </ExternalLink>
    </div>
  </header>
);

export default Navbar;
