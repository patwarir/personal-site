import { FunctionComponent, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeContext } from "ps-theme";

import Navbar from "views/utils/Navbar";
import Footer from "views/utils/Footer";
import Error from "views/utils/Error";

import Home from "views/Home";
import Blog from "views/Blog";

import styles from "./App.module.scss";

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/vertex" component={() => { window.location.replace("https://rajatpatwari.com/vertex"); return null; }} />
      <Route path="/wundu" component={() => { window.location.replace("https://rajatpatwari.com/wundu"); return null; }} />
      <Route path="/resume" component={() => { window.location.replace("https://rajatpatwari.com/resume"); return null; }} />
      <Route component={Error} />
    </Switch>
  );
};

const App: FunctionComponent = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={styles["app-container"]}>
      <Router>
        <Navbar />

        <div className={styles["app-" + themeContext.theme] + " " + styles["app-fill"] }>
          <div className="container">
            <div className="my-2">
              <Routes />
            </div>

            <hr className="my-2" />

            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
