import React from "react";
import "../CSS/About.css";

export default function Skills() {
  return (
    <div className="Tools">
      <div class="box a">
        <img
          src={require("../Images/Tools/Linux.png")}
          className="SkillLogo"
          alt="Linux"
        />
      </div>
      <div class="box b">
        <img
          src={require("../Images/Tools/VSC.png")}
          className="SkillLogo"
          alt="VSC"
        />
      </div>
      <div class="box c">
        <img
          src={require("../Images/Tools/PostMan.png")}
          className="SkillLogo"
          alt="PostMan"
        />
      </div>
      <div class="box d">
        <img
          src={require("../Images/Tools/Mongo.png")}
          className="SkillLogo"
          alt="Mongo"
        />
      </div>
      <div class="box e">
        <img
          src={require("../Images/Tools/Git.png")}
          className="SkillLogo"
          alt="Git"
        />
      </div>
    </div>
  );
}
