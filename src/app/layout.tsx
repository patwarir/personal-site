import { FunctionComponent } from "react";
import type { Metadata } from "next";
import { config as FontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

FontAwesomeConfig.autoAddCss = false;

import "./globals.css";

const title = "Rajat Patwari | Software Engineer";
const url = "https://rajatpatwari.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  authors: [
    { name: "Rajat Patwari", url: url },
  ],
  title: title,
  openGraph: {
    type: "website",
    url: url,
  },
  themeColor: "#084298",
};

const RootLayout: FunctionComponent<{ children: React.ReactNode }> = (props) => {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
