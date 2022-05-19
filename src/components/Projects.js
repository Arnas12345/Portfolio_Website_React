import React from "react";
import "../App.css";
import "../CSS/Projects.css";
import Particle from "./particles";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="Page">
      <Particle />
      <div className="row Projects">
        <div style={{ marginTop: 70 }}>
          <h1 className="Intro2">Projects.</h1>
          <h1 className="ProjectHeader">
            Just some of the <strong className="Name">projects </strong> I have
            done.
          </h1>
          <div className="AboutMeUnderline"></div>
          <Project />
        </div>
      </div>
    </div>
  );
}
