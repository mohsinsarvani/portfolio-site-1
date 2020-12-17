import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Link, Divider } from "@material-ui/core";

import style from "../styles/footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="#"
    >
      GitHub
    </Link>
    <Divider orientation="vertical" />
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="#"
    >
      LinkedIn
    </Link>
    <Divider orientation="vertical" />
    <Link
      component={OutboundLink}
      color="textSecondary"
      href="#"
    >
      Twitter
    </Link>
  </footer>
);

export default Footer;
