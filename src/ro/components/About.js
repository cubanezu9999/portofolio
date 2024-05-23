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
          <h1 className={classes.title}>Despre Acest Portofoliu</h1>
          <p className={classes.text}>
            Acesta este primul meu Website Portofoliu si este facut cu React si
            Firebase.In mod normal ,primul portofoliu se face cu HTML,CSS si
            Vanilla Javascript dar eu nu sunt un programator normal.Datorita
            integrarii Firebase, pot foarte usor sa auag sau sa sterg proiecte
            din portofoliu .ceea ce imi face mie viata mai usoara pe viitor.
          </p>
          <h1 className={classes.title}>Contact Form</h1>
          <div className={classes.formcontainer}>
            <form onSubmit={submit} className={classes.form}>
              <label htmlFor="name" className={classes.label}>
                Nume
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
                Adresa de Email:
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
                Mesaj
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
