import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageTitle from "@/components/shared/PageTitle";
import ExternalLink from "@/components/shared/ExternalLink";

import styles from "./page.module.css";

const ProfileButton: FunctionComponent<{ href: string; children: React.ReactNode }> = (props) => {
  return (
    <ExternalLink href={props.href} className={`py-2 w-full text-center rounded-md ${styles["btn-bg"]} ${styles["btn-fg"]}`}>
      {props.children}
    </ExternalLink>
  );
};

const Home: FunctionComponent = () => {
  return (
    <div className="h-screen overflow-scroll">
      <Navbar />
      <div className="container mx-auto px-2 md:px-0">
        <main>
          <PageTitle>Hi There!</PageTitle>

          <h2 className="text-4xl mb-1">About Me</h2>
          <p>
            I&apos;m a student at the <FontAwesomeIcon icon={faGraduationCap} /> <span className="italic">University of Waterloo</span>{" "}
            studying <FontAwesomeIcon icon={faCodeBranch} /> <span className="italic">Software Engineering</span> and I&apos;ve been
            interested in programming and software development for over { new Date().getUTCFullYear() - 2016 } years. Over multiple
            internships, I&apos;ve had the opportunity to be a full-stack web developer focusing on frontend, backend and infrastructure
            technologies. I also love diving into lower-level systems programming, such as figuring out why something like a compiler
            works or how operating systems are designed. Please feel free to contact me at <span className="font-mono text-sm">rajatpatwari@gmail.com</span>{" "}
            for any opportunities or questions.
          </p>

          <div className="mb-2"></div>

          {/* <h2 className="text-4xl mb-1">Profiles</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1">
            <ProfileButton href="https://linkedin.com/in/patwarir">
              <FontAwesomeIcon icon={faLinkedin} className="mr-1" fixedWidth /> LinkedIn
            </ProfileButton>
            <ProfileButton href="https://github.com/patwarir">
              <FontAwesomeIcon icon={faGithub} className="mr-1" fixedWidth /> GitHub
            </ProfileButton>
            <ProfileButton href="https://gitlab.com/patwarir">
              <FontAwesomeIcon icon={faGitlab} className="mr-1" fixedWidth /> GitLab
            </ProfileButton>
          </div>

          <div className="mb-2"></div>

          {/* <h2 className="text-4xl mb-1">Timeline</h2> */}
        </main>

        <div className="mx-auto my-1 border-b border-solid" />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
