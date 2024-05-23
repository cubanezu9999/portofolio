import React from "react";
import MainNavigation from "./MainNavigation";
import VerticalNavigation from "./VerticalNavigation";
import classes from "./Projects.module.css";
import { store } from "../../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getDocs(collection(store, "ro")).then((data) => {
      const resultdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setItem(resultdata);
      console.log(item);
    });
  }, []);

  return (
    <div>
      <MainNavigation />
      <div className={classes.container}>
        <VerticalNavigation />{" "}
        <div className={classes.main}>
          <ul>
            {item.map((it, index) => (
              <ProjectsCard
                key={index + "dan"}
                title={it.name}
                description={it.description}
                tehnology={it.tehnology}
                link={it.link}
                image={it.pictures[0]}
                pictures={it.pictures}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
