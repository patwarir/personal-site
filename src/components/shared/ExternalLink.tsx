import { FunctionComponent, PropsWithChildren } from "react";

const ExternalLink: FunctionComponent<PropsWithChildren<{ href: string; className?: string; }>> = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" className={props.className}>
    {props.children}
  </a>
);

export default ExternalLink;
