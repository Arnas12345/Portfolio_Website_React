import React from "react";
import "../App.css";
import "../CSS/Home.css";
import Particle from "./particles";

export default function Home() {
  return (
    <div className="Page">
      <Particle />
      <div className="row IntroText">
        <div className="MainText col-md-7" style={{ marginTop: 150 }}>
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
        <h1 className="Intro" style={{ marginBottom: 25 }}>
          A LITTLE <strong className="Name">ABOUT ME</strong>
        </h1>
        <div className="AboutMeUnderline"></div>
        <div className="AboutMeText">
          <p className="AboutMeFont">
            I am a recent <strong className="Name">graduate</strong> from the{" "}
            <strong className="Name">University of Limerick</strong> where I
            obtained a <strong className="Name">First Class Honors</strong> in a{" "}
            <strong className="Name">
              Bachelor of Science in Computer Systems.
            </strong>
          </p>
          <p className="AboutMeFont">
            I am of <strong className="Name">Lithuanian</strong> descent and
            have grown up in <strong className="Name">Ireland</strong> therefore
            I am <strong className="Name">fluent</strong> in both{" "}
            <strong className="Name">English</strong> and{" "}
            <strong className="Name">Lithuanian.</strong>
          </p>
          <p className="AboutMeFont" style={{ marginBottom: 70 }}>
            I am currently <strong className="Name">seeking</strong> to{" "}
            <strong className="Name">relocate</strong> to{" "}
            <strong className="Name">Barcelona</strong> in search of a{" "}
            <strong className="Name">software engineering role.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
