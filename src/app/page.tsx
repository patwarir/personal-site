import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

import Footer from "@/components/shared/Footer";
import ProfileButton from "@/components/shared/ProfileButton";

const Home: FunctionComponent = () => (
  <div className="container px-2 md:px-1 mx-auto mt-4">
    <main>
      <h1 className="text-6xl md:text-8xl text-center">Hi There! 👋</h1>

      <h2 className="text-4xl">About Me</h2>
      <p>
        I&apos;m a student at the <FontAwesomeIcon icon={faGraduationCap} /> <span className="italic">University of Waterloo</span>{" "}
        studying <FontAwesomeIcon icon={faCodeBranch} /> <span className="italic">Software Engineering</span> and I&apos;ve been
        interested in programming and software development for over {new Date().getUTCFullYear() - 2016} years. Over multiple
        internships, I&apos;ve had the opportunity to be a mobile and full-stack web developer focusing on frontend, backend and infrastructure
        technologies. I also love diving into lower-level systems programming, such as figuring out why a compiler
        works or how operating systems are designed. Please feel free to contact me at <span className="font-mono text-sm">rajatpatwari@gmail.com</span>{" "}
        for any opportunities or questions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1">
        <ProfileButton href="https://linkedin.com/in/patwarir">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </ProfileButton>
        <ProfileButton href="https://github.com/patwarir">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </ProfileButton>
        <ProfileButton href="https://gitlab.com/patwarir">
          <FontAwesomeIcon icon={faGitlab} /> GitLab
        </ProfileButton>
      </div>
    </main>

    <div className="pb-2 border-b border-solid border-gray-500" />

    <Footer />
  </div>
);

export default Home;
