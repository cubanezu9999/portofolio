import { useState } from "react";
import Maineng from "./eng/Maineng";
import Mainro from "./ro/Mainro";
import classes from "./App.module.css";

function App() {
  const [showEng, setShowEng] = useState(true);

  function switchlang() {
    setShowEng((prevState) => !prevState);
  }

  const label = "Language";
  return (
    <>
      <div className={classes.container}>
        <div className={classes.toggle_switch}>
          <input
            type="checkbox"
            className={classes.checkbox}
            name={label}
            id={label}
            onChange={switchlang}
          />
          <label className={classes.label} htmlFor={label}>
            <span className={classes.inner} />
            <span className={classes.switch} />
          </label>
        </div>
      </div>
      {showEng ? <Maineng /> : <Mainro />}
    </>
  );
}

export default App;
