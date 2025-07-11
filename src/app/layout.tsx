import { config as FontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { FunctionComponent, PropsWithChildren } from "react";

import Navbar from "@/components/shared/Navbar";

import "./globals.css";

FontAwesomeConfig.autoAddCss = false;

export const metadata: Metadata = {
  title: "Rajat Patwari - Software Developer",
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className="antialiased min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-4 lg:mt-0 lg:h-[calc(100vh-8rem)] lg:flex lg:justify-center lg:items-center">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
