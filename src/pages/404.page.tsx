import { Fragment, FunctionComponent } from "react";
import PageTitle from "@root/components/shared/PageTitle.component";

const Error404: FunctionComponent = () => {
  return (
    <Fragment>
      <PageTitle>Error 404</PageTitle>
      <p className="text-red-500">Oh no! We couldn&apos;t find that page!</p>
    </Fragment>
  );
};

export default Error404;
