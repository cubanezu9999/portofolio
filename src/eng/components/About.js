import React from "react";
import MainNavigation from "./MainNavigation";
import VerticalNavigation from "./VerticalNavigation";
import classes from "./About.module.css";
import { useRef } from "react";
import { store } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
export default function About() {
  const fullnameRef = useRef();
  const useremailRef = useRef();
  const messageRef = useRef();
  async function submit() {
    const fullname = fullnameRef.current.value;
    const email = useremailRef.current.value;
    const message = messageRef.current.value;
    await addDoc(collection(store, "messages"), { fullname, email, message });
    alert("Your message was submitted");
  }
  return (
    <div>
      <MainNavigation />
      <div className={classes.container}>
        <VerticalNavigation />
        <div className={classes.main}>
          <h1 className={classes.title}>About the Portofolio</h1>
          <p className={classes.text}>
            This is my first portfolio website made with React and Firebase.
            Normally, beginners do the portfolio website in HTML with CSS and
            some JavaScript, but I am not like all beginners. It gives me an
            easier way to add more projects directly to the database, is hosted
            on Firebase and be contacted directly from here.
          </p>
          <h1 className={classes.title}>Contact Form</h1>
          <div className={classes.formcontainer}>
            <form onSubmit={submit} className={classes.form}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                ref={fullnameRef}
                className={classes.inputtext}
                placeholder="Your Name"
                required
              />
              <br />
              <label htmlFor="email" className={classes.label}>
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className={classes.inputtext}
                ref={useremailRef}
                placeholder="Your Email"
                required
              />
              <label htmlFor="message" className={classes.label}>
                Message
              </label>
              <textarea
                required
                id="message"
                rows="6"
                cols="100"
                ref={messageRef}
                className={classes.textarea}
              />
              <div className={classes.submit} onClick={submit}>
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
