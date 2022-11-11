import { Fragment, FunctionComponent } from "react";
import Image from "next/image";
import ExternalLink from "@root/components/shared/ExternalLink.component";

import { useAppSelector } from "@root/store/hooks";
import { selectTheme } from "@root/store/reducers/theme.reducer";

import seWebring from "@root/public/seWebring.png";
import styles from "./Footer.component.module.scss";

const Footer: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <Fragment>
      <div className={`my-2 mx-auto border-b border-solid ${styles["separator-" + theme]}`} />
      <footer className={`mb-2 text-sm md:text-xs flex ${styles["fg-" + theme]}`}>
        <span>Copyright &copy; { new Date().getUTCFullYear() } - <span className="font-bold">Rajat Patwari</span></span>
        <ExternalLink href="https://se-webring.xyz" className="ml-auto my-auto">
          <Image src={seWebring} alt="University of Waterloo Software Engineering Webring" className={`opacity-60 h-2 w-3 ${theme === "dark" ? "invert" : ""}`} />
        </ExternalLink>
      </footer>
    </Fragment>
  );
};

export default Footer;
