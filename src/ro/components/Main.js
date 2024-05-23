import React from "react";
import classes from "./Main.module.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className={classes.container}>
      <img src="devportrait.jpg" alt="me" className={classes.picture}></img>
      <div className={classes.description}>
        Nascut in Romania,acum locuiesc in Birmingham UK,sunt un programator la
        inceput de drum care proiecteaza,dezvolta si mentine aplicatii web
        pentru toti.
      </div>
      <div className={classes.links}>
        <Link
          to="/About"
          className={classes.link}
          style={{ textDecoration: "none" }}>
          Despre
        </Link>{" "}
        <Link
          to="/Projects"
          className={classes.link}
          style={{ textDecoration: "none" }}>
          Proiecte
        </Link>
      </div>
    </div>
  );
}
