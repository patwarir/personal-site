import { FunctionComponent, PropsWithChildren } from "react";

const ExternalLink: FunctionComponent<PropsWithChildren<{ href: string; label?: string; className?: string; }>> = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" className={props.className} aria-label={props.label}>
    {props.children}
  </a>
);

export default ExternalLink;
