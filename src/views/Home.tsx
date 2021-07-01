import { Fragment, FunctionComponent, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faCodeBranch, faUniversity, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ThemeContext } from "ps-theme";

import HistoryTimeline from "views/utils/HistoryTimeline";

import styles from "./Home.module.scss";

const Section: FunctionComponent<{ title: string }> = (props) => {
  return (
    <section className="mb-4">
      <header>
        <h2 className="display-6 text-decoration-underline mb-0">{props.title}</h2>
      </header>
      {props.children}
    </section>
  );
};

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

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <header>
        <div className="text-center mb-2">
          <h1 className="display-1 font-weight-bold mb-0">Hi There!</h1>
        </div>
      </header>
      <main>
        <Section title="About Me">
          <p className="mb-0">
            I'm a student at the <FontAwesomeIcon icon={faUniversity} /> <span className="fst-italic">University of Waterloo</span> studying <FontAwesomeIcon icon={faCodeBranch} /> <span className="fst-italic">Software Engineering</span> (BSE)
            and I've been interested in programming and software development for nearly {new Date().getUTCFullYear() - 2015} years.
            I'm a full stack developer who focuses on web and desktop development, but would be more than willing to try new things if given the opportunity.
            Feel free to contact me at <span className="font-monospace small">rajatpatwari@gmail.com</span> for any questions.
          </p>
          <h3 className="mt-1 mb-0">Profiles</h3>
          <div className="row row-cols-1 row-cols-md-4 g-2 mb-0">
            <ProfileButton title="GitHub" link="https://github.com/patwarir" icon={faGithub} />
            <ProfileButton title="GitLab" link="https://gitlab.com/patwarir" icon={faGitlab} />
            <ProfileButton title="Acclaim" link="https://youracclaim.com/users/rajat-patwari/badges" icon={faAngleDoubleUp} />
            <ProfileButton title="LinkedIn" link="https://linkedin.com/in/patwarir" icon={faLinkedin} />
          </div>
        </Section>
        <Section title="Timeline">
          <HistoryTimeline />
        </Section>
      </main>
    </Fragment>
  );
};

export default Home;
