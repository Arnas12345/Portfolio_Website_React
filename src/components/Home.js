import React from "react";
import "../App.css";
import "../CSS/Home.css";
import Particle from "./particles";

export default function Home() {
  return (
    <div className="Page">
      <Particle />
      <div className="row IntoText" style={{ height: "95vh", marginRight: 0 }}>
        <div className="MainText col-md-7">
          <h1 className="Intro">Hi There.</h1>
          <h1 className="Intro">
            I'm <strong className="Name">Arnas Juravicius.</strong>
          </h1>
          <h1 className="Intro">SOFTWARE ENGINEER</h1>
        </div>
        <div className="col-md-5">
          <img
            src={require("../Images/man-at-desk.png")}
            className="ManAtDesk"
            alt="Logo"
          />
        </div>
      </div>
      <div>
        <h1 className="Intro">
          A LITTLE <strong className="Name">ABOUT ME</strong>
        </h1>
        <div className="AboutMeText">
          <p className="AboutMeFont">
            I am a recent graduate from the University of Limerick where I
            obtained a First Class Honors in a Bachelor of Science in Computer
            Systems.
          </p>
          <p className="AboutMeFont">
            I am of Lithuanian descent and have spent all my life in Ireland
            therefore I am fluent in both English and Lithuanian.
          </p>
          <p className="AboutMeFont" style={{ marginBottom: 50 }}>
            I am currently seeking to relocate to Barcelona in search of a
            software engineering role.
          </p>
        </div>
      </div>
    </div>
  );
}
