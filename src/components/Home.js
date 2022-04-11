import React from "react";
import "../App.css";
import "../CSS/Home.css";
import Particle from "./particles";

export default function Home() {
  return (
    <div className="Page">
      <Particle />
      <div className="about2">
        <h1 style={{ color: "white" }}>Home</h1>
      </div>
      <div className="MainText">
        <p className="Intro">Hi There.</p>
        <p className="Intro">
          I'm <strong>Arnas Juravicius.</strong>
        </p>
        <p className="Jobs">
          | React/React-Native Dev | MEAN STACK | Problem Solver |
        </p>
      </div>
      <div className="Intro">
        <h1>About me</h1>
      </div>
    </div>
  );
}
