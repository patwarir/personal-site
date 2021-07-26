import { Fragment, FunctionComponent } from "react";
import Head from "next/head";

const My404: FunctionComponent = () => {
  return (
    <Fragment>
      <Head>
        <title>Error | Rajat Patwari | Software Developer</title>
        <meta property="og:title" content="Error | Rajat Patwari | Software Developer" />

        <meta name="description" content="The page you were looking for was not found." />
        <meta name="og:description" content="The page you were looking for was not found." />
      </Head>

      <h2 className="display-6 mb-0">Error (404)</h2>
      <p className="mb-0">The page you were looking for was not found.</p>
    </Fragment>
  );
};

export default My404;
