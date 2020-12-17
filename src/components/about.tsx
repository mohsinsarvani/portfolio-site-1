import React from "react";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Link, IconButton } from "@material-ui/core";

import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

import style from "../styles/about.module.css";

type Props = {
  avatar: any;
};

const About = ({ avatar }: Props) => {
  return (
    <div className={style.about}>
      <div className={style.imageWrapper}>
        <Img
          fixed={avatar.childImageSharp.fixed}
          className={style.avatar}
          alt="Alex Nault"
        />
      </div>
      <div className={style.content}>
        <Typography variant="h3" component="h1" gutterBottom>
          {"Hi, I'm "}
          <span className={style.highlight}>John Deo</span>
          {" and I solve problems using software."}
        </Typography>
        <Typography>
          {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "}
          
          
          .
        </Typography>
        <div className={style.social}>
          <IconButton
            edge="start"
            component={OutboundLink}
            href="#"
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
            href="#"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
            href="#"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component={OutboundLink}
            href="#"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default About;
