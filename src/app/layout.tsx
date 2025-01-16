import { config as FontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { FunctionComponent, PropsWithChildren } from "react";

import Navbar from "@/components/shared/Navbar";

import "./globals.css";

FontAwesomeConfig.autoAddCss = false;

export const metadata: Metadata = {
  title: "Rajat Patwari - Software Engineer",
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className="antialiased">
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
