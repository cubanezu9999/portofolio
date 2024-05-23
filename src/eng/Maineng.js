import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Maineng() {
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
