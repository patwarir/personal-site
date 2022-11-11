import { FunctionComponent, ReactNode } from "react";

export type ExternalLinkProps = {
  href: string,
  className?: string | undefined,
  children: ReactNode,
};

const ExternalLink: FunctionComponent<ExternalLinkProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className={props.className}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
