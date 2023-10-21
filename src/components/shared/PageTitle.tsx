import { FunctionComponent } from "react";

const PageTitle: FunctionComponent<{ children: React.ReactNode }> = (props) => {
  return (
    <h1 className="text-6xl md:text-8xl text-center my-4">{props.children}</h1>
  );
};

export default PageTitle;
