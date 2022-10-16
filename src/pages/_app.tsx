import { Fragment, FunctionComponent } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "@root/shared.css";

fontAwesomeConfig.autoAddCss = false;

const Body: FunctionComponent<AppProps> = (props) => {
  return (
    <props.Component {...props.pageProps} />
  );
};

const App: FunctionComponent<AppProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <noscript>JavaScript is required to run this application.</noscript>
      <Body {...props} />
    </Fragment>
  );
};

export default App;
