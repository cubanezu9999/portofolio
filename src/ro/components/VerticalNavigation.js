import React from "react";
import classes from "./VerticalNavigation.module.css";

export default function VerticalNavigation() {
  return (
    <div className={classes.container}>
      <a href="https://x.com/d_budris" target="_blank" rel="noreferrer">
        <img src="x-social.svg" alt="github" className={classes.image}></img>{" "}
      </a>
      <a
        href="https://github.com/cubanezu9999"
        target="_blank"
        rel="noreferrer">
        <img
          src="icons8-github-500.svg"
          alt="github"
          className={classes.image}></img>{" "}
      </a>
    </div>
  );
}
