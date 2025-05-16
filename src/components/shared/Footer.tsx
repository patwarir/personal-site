import Image from "next/image";
import { FunctionComponent } from "react";

import ExternalLink from "@/components/shared/ExternalLink";

const Footer: FunctionComponent = () => (
  <footer className="flex justify-between items-center mt-2">
    <span className="text-sm">Copyright &copy; {new Date().getUTCFullYear()} - Rajat Patwari</span>
    <ExternalLink href="https://se-webring.xyz">
      <Image src="/seWebring.png" alt="University of Waterloo Software Engineering Webring" width={20} height={20} />
    </ExternalLink>
  </footer>
);

export default Footer;
