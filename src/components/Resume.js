import React from "react";
import Particle from "./particles";
import PDF from "./PDF";
import "../CSS/Resume.css";
import "../CSS/Projects.css";

export default function Resume() {
  return (
    <div className="Page">
      <Particle />
      <div className="row Projects">
        <div style={{ marginTop: 70 }}>
          <h1 className="Intro2">Resume.</h1>
          <div className="AboutMeUnderline"></div>
          <div className="PDFHolder">
            <PDF />
          </div>
        </div>
      </div>
    </div>
  );
}
