import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img src="devel.jpg" alt="icon" className={classes.ico}></img>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.name}>
            <Link to="">Daniel Budris</Link>
          </li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
          <li>
            <Link to="/Projects"> Projects </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
