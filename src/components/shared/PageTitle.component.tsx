import { FunctionComponent, ReactNode } from "react";

export type PageTitleProps = {
  children: ReactNode,
};

const PageTitle: FunctionComponent<PageTitleProps> = (props) => {
  return (
    <h1 className="text-6xl md:text-8xl text-center mb-2">{props.children}</h1>
  );
};

export default PageTitle;
