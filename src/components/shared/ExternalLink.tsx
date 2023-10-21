import { FunctionComponent } from "react";

const ExternalLink: FunctionComponent<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className={props.className}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
