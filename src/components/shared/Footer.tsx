import Image from "next/image";
import { FunctionComponent } from "react";

import ExternalLink from "@/components/shared/ExternalLink";

const Footer: FunctionComponent = () => (
  <footer className="flex justify-between items-center">
    <span className="text-sm">Copyright &copy; {new Date().getUTCFullYear()} - <span className="font-bold underline">Rajat Patwari</span></span>
    <ExternalLink href="https://se-webring.xyz">
      <Image src="/seWebring.png" alt="University of Waterloo Software Engineering Webring" width={20} height={20} />
    </ExternalLink>
  </footer>
);

export default Footer;
