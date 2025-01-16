import { FunctionComponent, PropsWithChildren } from "react";

import ExternalLink from "@/components/shared/ExternalLink";

import styles from "./profile-button.module.css";

const ProfileButton: FunctionComponent<PropsWithChildren<{ href: string; }>> = (props) => (
  <ExternalLink href={props.href} className={`py-2 w-full text-center rounded-lg ${styles["profile-button"]}`}>
    {props.children}
  </ExternalLink>
);

export default ProfileButton;
