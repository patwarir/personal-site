import { Fragment, FunctionComponent } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

fontAwesomeConfig.autoAddCss = false;

import "@root/shared.global.scss";

import { Provider } from "react-redux";
import store from "@root/store/global.store";

import { useAppSelector } from "@root/store/hooks";
import { selectTheme } from "@root/store/reducers/theme.reducer";

import Navbar from "@root/components/shared/Navbar.component";
import Footer from "@root/components/shared/Footer.component";

import styles from "./app.page.module.scss";

const Body: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <div className={`h-screen overflow-scroll ${styles["bg-" + theme]}`}>
      <Navbar />
      <div className="container mx-auto px-2 md:px-0">
        <div className={styles["fg-" + theme]}>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const App: FunctionComponent<AppProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta name="author" content="Rajat Patwari" />
      </Head>

      <noscript>JavaScript is required to run this application.</noscript>
      <Provider store={store}>
        <Body {...props} />
      </Provider>
    </Fragment>
  );
};

export default App;
