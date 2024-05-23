import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import classes from "./Mainro.Module.css";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Mairo() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}
