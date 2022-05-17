import React from "react";
import "../App.css";
import "../CSS/About.css";
import Particle from "./particles";

export default function About() {
  return (
    <div className="Page">
      <Particle />
      <div className="row IntroText2">
        <div className="MainText col-md-7" style={{ marginTop: 150 }}>
          <h1 className="Intro2">Get To Know Me.</h1>
          <div className="AboutMeUnderline"></div>
          <div className="AboutMeText2">
          <p className="AboutMeFont">
            I am from <strong className="Name">Sligo, Ireland</strong> and I am relocating to <strong className="Name">Barcelona </strong>
            to pursue <strong className="Name">software engineering</strong>. 
          </p>
          <p className="AboutMeFont">
            Over my College and work experience I have developed many <strong className="Name">new skills</strong> and I have learnt many 
            <strong className="Name">new technologies</strong>.
            Being very skilled in <strong className="Name">JavaScript, PYthon, and Java</strong>.
          </p>
          <p className="AboutMeFont">
            I like to use <strong className="Name">modern libraries</strong> and <strong className="Name">frameworks</strong> using
            <strong className="Name">Node.js</strong>.
            For my <strong className="Name">Final Year Project</strong> in College,
            I created a <strong className="Name">mental-health wellbeing application</strong> using <strong className="Name">React Native</strong>.
            I developed this website using <strong className="Name">React</strong>. 
          </p>
          <p className="AboutMeFont">
            Apart from coding I enjoy all forms of <strong className="Name">sports, fitness, technologies, and the automotive industry</strong>.
          </p>
        </div>
        </div>
        <div className="col-md-5">
          <img
            src={require("../Images/man-at-desk2.png")}
            className="ManAtDesk"
            alt="Logo"
          />
        </div>
      </div>
      <div>
        <h1 className="Intro2" style={{ marginTop: 50}}>Skills.</h1>
        <div className="AboutMeUnderline"></div>
          <div className="Skills">
          <div class="box a">
            <img
            src={require("../Images/Reat.png")}
            className="SkillLogo"
            alt="React"
            />
          </div>
          <div class="box b">
            <img
            src={require("../Images/nodejs.png")}
            className="SkillLogo"
            alt="NodeJS"
            />
          </div>
          <div class="box c">
            <img
            src={require("../Images/PHP.png")}
            className="SkillLogo"
            alt="PHP"
            />
          </div>
          <div class="box d">
            <img
            src={require("../Images/Python.png")}
            className="SkillLogo"
            alt="Python"
            />
          </div>
          <div class="box e">
            <img
            src={require("../Images/Java.png")}
            className="SkillLogo"
            alt="Java"
            />
          </div>
          <div class="box f">
            <img
            src={require("../Images/JS.png")}
            className="SkillLogo"
            alt="JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
