import React from "react";
import "../App.css";
import "../CSS/About.css";
import Particle from "./particles";

export default function About() {
  return (
    <div className="Page">
      <Particle />
      <div className="about2">
        <h1 style={{ color: "white" }}>About</h1>
      </div>
    </div>
  );
}
