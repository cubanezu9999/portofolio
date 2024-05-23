import MainNavigatoion from "./MainNavigation";
import VerticalNavigation from "./VerticalNavigation";
import Main from "./Main";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.mobile}>
      <MainNavigatoion />
      <div className={classes.container}>
        <VerticalNavigation />
        <Main />
      </div>
    </div>
  );
}

export default Layout;
