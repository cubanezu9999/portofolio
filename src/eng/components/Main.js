import React from "react";
import classes from "./Main.module.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className={classes.container}>
      <img src="devportrait.jpg" alt="me" className={classes.picture}></img>
      <div className={classes.description}>
        Born in Romania, currently living in Birmingham UK, I am a passionate
        web developer at the start of my career. I design, develop and maintain
        web application for everybody.
      </div>
      <div className={classes.links}>
        <Link
          to="/About"
          className={classes.link}
          style={{ textDecoration: "none" }}>
          About
        </Link>{" "}
        <Link
          to="/Projects"
          className={classes.link}
          style={{ textDecoration: "none" }}>
          Projects
        </Link>
      </div>
    </div>
  );
}
