import { FunctionComponent } from "react";

import Footer from "@/components/shared/Footer";

import styles from "./home.module.css";

const Home: FunctionComponent = () => (
  <div className="container px-2 md:px-1 mx-auto">
    <main>
      <h1 className={`text-6xl md:text-8xl text-center mb-4 md:mb-8 ${styles["fadeInDownAnimation"]}`}>Hi There! 👋</h1>

      <p>
        I&apos;m a Software Developer who graduated from the University of Waterloo
        and I&apos;ve been interested in programming and software development for over {new Date().getUTCFullYear() - 2016} years. Over multiple
        internships, I&apos;ve had the opportunity to work with web, cloud and mobile technologies. I also love diving into low-level systems programming, such as figuring out why a compiler
        works or how operating systems are designed. Please feel free to contact me at <span className="font-mono text-sm">rajatpatwari@gmail.com</span>{" "}
        for any questions or opportunities!
      </p>
    </main>

    <div className="pb-4 border-b border-solid border-gray-500" />

    <Footer />
  </div>
);

export default Home;
