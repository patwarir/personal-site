import { Fragment, FunctionComponent } from "react";
import PageTitle from "@root/components/shared/PageTitle.component";

const Index: FunctionComponent = () => {
  return (
    <Fragment>
      <PageTitle>Welcome!</PageTitle>
      <p>Hello, World!</p>
    </Fragment>
  );
};

export default Index;
