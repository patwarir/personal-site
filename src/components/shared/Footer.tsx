import { Fragment, FunctionComponent } from "react";
import Image from "next/image";

import ExternalLink from "@/components/shared/ExternalLink";

import seWebring from "./seWebring.png";

const Footer: FunctionComponent = () => {
  return (
    <Fragment>
      <footer className="flex">
        <span className="text-sm">Copyright &copy; { new Date().getUTCFullYear() } - <span className="font-bold underline">Rajat Patwari</span></span>
        <ExternalLink href="https://se-webring.xyz" className="ml-auto my-auto">
          <Image src={seWebring} alt="University of Waterloo Software Engineering Webring" className="h-fit w-4" />
        </ExternalLink>
      </footer>
    </Fragment>
  );
};

export default Footer;
