import { useGlobalContext } from "../../../utils/context";
import { i18n } from "../../../utils/i18n";
import { links } from "../../../utils/data";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

import React from "react";

const SidebarMenu = () => {
  const {
    state: { direction },
  } = useGlobalContext();
  const classes = useStyles({ direction });
  const translation = direction === "rtl" ? i18n.links.fa : i18n.links.en;
  return (
    <ul>
      {Object.keys(links).map((link) => {
        const { id, icon, url } = links[link];
        return (
          <li key={id}>
            <Link to={url} className={classes.link}>
              {icon}
              {translation[link]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenu;
