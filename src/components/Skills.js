import React from "react";
import "../CSS/About.css";

export default function Skills() {
  return (
    <div className="Skills">
      <div class="box a">
        <img
          src={require("../Images/Skills/Reat.png")}
          className="SkillLogo"
          alt="React"
        />
      </div>
      <div class="box b">
        <img
          src={require("../Images/Skills/nodejs.png")}
          className="SkillLogo"
          alt="NodeJS"
        />
      </div>
      <div class="box c">
        <img
          src={require("../Images/Skills/PHP.png")}
          className="SkillLogo"
          alt="PHP"
        />
      </div>
      <div class="box d">
        <img
          src={require("../Images/Skills/Python.png")}
          className="SkillLogo"
          alt="Python"
        />
      </div>
      <div class="box e">
        <img
          src={require("../Images/Skills/Java.png")}
          className="SkillLogo"
          alt="Java"
        />
      </div>
      <div class="box f">
        <img
          src={require("../Images/Skills/JS.png")}
          className="SkillLogo"
          alt="JS"
        />
      </div>
    </div>
  );
}
