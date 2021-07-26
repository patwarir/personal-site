import { Fragment, FunctionComponent } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faCodeBranch, faUniversity, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useTheme } from "@root/pages/_app";
import { Link, PageTitle, Section } from "@root/components/shared/shared";
import HistoryTimeline from "@root/components/index/HistoryTimeline";

const ProfileButton: FunctionComponent<{ href: string, icon?: IconDefinition }> = (props) => {
  const [ theme, _ ] = useTheme();

  return (
    <div className="col">
      <Link href={props.href} external styling={"btn btn-ps-" + (theme === "light" ? "blue" : "gray") + " w-100 mb-1 mb-md-0"} icon={props.icon}>{props.children}</Link>
    </div>
  );
};

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Head>
        <meta property="og:url" content="https://rajatpatwari.com" />

        <title>Rajat Patwari | Software Developer</title>
        <meta property="og:title" content="Rajat Patwari | Software Developer" />

        <meta name="description" content="Rajat Patwari's personal website." />
        <meta name="og:description" content="Rajat Patwari's personal website." />
      </Head>

      <PageTitle title="Hi There!" />
      <main>
        <Section title="About Me">
          <p className="mb-0">
            I&apos;m a student at the <FontAwesomeIcon icon={faUniversity} /> <span className="fst-italic">University of Waterloo</span> studying{" "}
            <FontAwesomeIcon icon={faCodeBranch} /> <span className="fst-italic">Software Engineering</span> (BSE)
            and I&apos;ve been interested in programming and software development for nearly {new Date().getUTCFullYear() - 2015} years.
            I&apos;m a full stack developer who focuses on web and desktop development, but would be more than willing to try new things if given the opportunity.
            Feel free to contact me at <span className="font-monospace small">rajatpatwari@gmail.com</span> for any questions.
          </p>
          <h3 className="mt-2 mb-0">Profiles</h3>
          <div className="row row-cols-1 row-cols-md-4 g-2 mb-0">
            <ProfileButton href="https://github.com/patwarir" icon={faGithub}>GitHub</ProfileButton>
            <ProfileButton href="https://gitlab.com/patwarir" icon={faGitlab}>GitLab</ProfileButton>
            <ProfileButton href="https://credly.com/users/rajat-patwari/badges" icon={faAngleDoubleUp}>Credly</ProfileButton>
            <ProfileButton href="https://linkedin.com/in/patwarir" icon={faLinkedin}>LinkedIn</ProfileButton>
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
