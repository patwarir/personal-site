import { Fragment, FunctionComponent } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const PageTitle: FunctionComponent<{ title: string | JSX.Element, subtitle?: string | JSX.Element }> = (props) => {
  return (
    <header>
      <div className="text-center mb-2">
        <h1 className="display-1 font-weight-bold mb-0">{props.title}</h1>
        {props.subtitle && <p className="text-muted mb-0">{props.subtitle}</p>}
        {props.children}
      </div>
    </header>
  );
};

export const Section: FunctionComponent<{ title: string | JSX.Element, subtitle?: string | JSX.Element, headerChildren?: JSX.Element }> = (props) => {
  return (
    <section className="mb-4">
      <header>
        <h2 className="display-6 mb-0">{props.title}</h2>
        {props.subtitle && <p className="text-muted mb-0">{props.subtitle}</p>}
        {props.headerChildren}
      </header>
      {props.children}
    </section>
  );
};

export const Link: FunctionComponent<{ href: string, prefetch?: boolean, external?: boolean, styling?: string, icon?: IconDefinition }> = (props) => {
  const router = useRouter();

  const icon = (props.icon && <Fragment><FontAwesomeIcon fixedWidth icon={props.icon} />{props.children && " "}</Fragment>);
  const link = props.external
    ? (<a href={props.href} target="_blank" rel="noopener noreferrer" className={props.styling}>{icon}{props.children}</a>)
    : (<NextLink href={props.href} prefetch={props.prefetch}><a className={props.styling + (router.pathname.startsWith(props.href) ? " active" : "")}>{icon}{props.children}</a></NextLink>);

  return link;
};
