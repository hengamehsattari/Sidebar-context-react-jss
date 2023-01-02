import { social } from "../../../utils/data";
import styles from "./sidebarSocials.module.css";
import React from "react";

const SidebarSocials = () => {
  return (
    <ul className={styles["social-icons"]}>
      {social.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarSocials;
