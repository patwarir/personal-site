import { Context, createContext, Dispatch, Fragment, FunctionComponent, SetStateAction, useContext, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "@root/global.scss";

import Navbar from "@root/components/shared/Navbar";
import Footer from "@root/components/shared/Footer";

import styles from "./app.module.scss";

config.autoAddCss = false;

export type Theme = "light" | "dark";
export type ThemeContextValue = [ Theme, Dispatch<SetStateAction<Theme>> ];

const defaultTheme: Theme = "light";

export const ThemeContext: Context<ThemeContextValue> = (createContext(null) as unknown) as Context<ThemeContextValue>;

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

const Body: FunctionComponent<AppProps> = (props) => {
  const [ theme, setTheme ] = useState(defaultTheme as Theme);

  return (
    <div className={styles["app"]}>
      <ThemeContext.Provider value={[ theme, setTheme ]}>
        <Navbar />

        <div className={styles["body"] + " text-ps-" + (theme === "light" ? "black" : "white") + " bg-ps-" + (theme === "light" ? "white" : "black")}>
          <div className="container">
            <div className="mt-2 mb-0">
              <props.Component {...props.pageProps} />
            </div>

            <hr className="my-2" />

            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

const MyApp: FunctionComponent<AppProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#084298" />

        <meta property="og:type" content="website" />
        <meta name="author" content="Rajat Patwari" />

        <link rel="icon" href="/icon.png" />
        <meta property="og:image" content="https://rajatpatwari.com/icon.png" />
      </Head>

      <noscript>JavaScript is required to run this application.</noscript>
      <Body {...props} />
    </Fragment>
  );
};

export default MyApp;
