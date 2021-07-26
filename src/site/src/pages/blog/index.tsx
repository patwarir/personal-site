import { Fragment, FunctionComponent } from "react";
import Head from "next/head";

const Blog: FunctionComponent = () => {
  return (
    <Fragment>
      <Head>
        <meta property="og:url" content="https://rajatpatwari.com/blog" />

        <title>Blog | Rajat Patwari | Software Developer</title>
        <meta property="og:title" content="Blog | Rajat Patwari | Software Developer" />

        <meta name="description" content="Rajat Patwari's blog." />
        <meta name="og:description" content="Rajat Patwari's blog." />
      </Head>

      <p className="mb-0">Blog</p>
    </Fragment>
  );
};

export default Blog;
