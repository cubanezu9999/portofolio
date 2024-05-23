import React from "react";
import classes from "./ProjectCard.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ProjectsCard(props) {
  const [openModal, setOpenModal] = React.useState(false);

  function modal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  return (
    <li className={classes.list}>
      {openModal && (
        <div className={classes.modal}>
          <Carousel
            className={classes.carouselstyle}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            showIndicators={false}>
            {props.pictures.map((pic, index) => (
              <div>
                <img key={index} src={pic} alt="" />
              </div>
            ))}
          </Carousel>
          <div onClick={closeModal} className={classes.modalbutton}>
            Close(X)
          </div>
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.tehnology}>
          Tehnology used:{props.tehnology}
        </div>
        <div className={classes.link}>
          <a href={props.link} target="_blank" rel="noreferrer">
            See the project
          </a>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.button} onClick={modal}>
          See More Pictures
        </div>
        <img src={props.image} alt="project-pic" className={classes.image} />
      </div>
    </li>
  );
}
