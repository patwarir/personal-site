import { Fragment, FunctionComponent, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faCodeBranch, faUniversity, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ThemeContext } from "ps-theme";

import Title from "views/sectioning/Title";
import Section from "views/sectioning/Section";

import styles from "./Home.module.scss";

const ProfileButton: FunctionComponent<{ title: string, link: string, icon: IconDefinition }> = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="col">
      <a rel="noopener noreferrer" target="_blank" href={props.link} className={"btn " + styles["profile-btn-" + themeContext.theme] + " w-100 mb-1 mb-md-0"}>
        <FontAwesomeIcon fixedWidth icon={props.icon} /> {props.title}
      </a>
    </div>
  );
};

const HistoryGraph: FunctionComponent = () => {
  return (
    <div>
      History Graph
    </div>
  );
};

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Title title="Hi There!" />
      <main>
        <Section title="About Me">
          <p className="mb-0">
            I'm a student at the <FontAwesomeIcon icon={faUniversity} /> <span className="fst-italic">University of Waterloo</span> studying <FontAwesomeIcon icon={faCodeBranch} /> <span className="fst-italic">Software Engineering</span> (BSE).
            I've been interested in programming and software development for nearly {new Date().getUTCFullYear() - 2015} years and continuously learning since then.
            I'm a full stack developer that usually focuses on web and desktop development, but I'd be willing to try new tools/technologies/toolchains if given the opportunity.
            Feel free to contact me at <span className="fw-bold">rajatpatwari@gmail.com</span> for any questions.
          </p>
          <h3 className="mt-1 mb-0">Profiles</h3>
          <div className="row row-cols-1 row-cols-md-4 g-2 mb-0">
            <ProfileButton title="GitHub" link="https://github.com/patwarir" icon={faGithub} />
            <ProfileButton title="GitLab" link="https://gitlab.com/patwarir" icon={faGitlab} />
            <ProfileButton title="Acclaim" link="https://youracclaim.com/users/rajat-patwari/badges" icon={faAngleDoubleUp} />
            <ProfileButton title="LinkedIn" link="https://linkedin.com/in/patwarir" icon={faLinkedin} />
          </div>
        </Section>
        <Section title="History">
          <HistoryGraph />
        </Section>
      </main>
    </Fragment>
  );
};

export default Home;
