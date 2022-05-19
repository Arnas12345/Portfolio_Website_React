import React from "react";
import "../CSS/Projects.css";

export default function Project() {
  function viewProject(link) {
    var baseURL = "https://github.com/Arnas12345/";
    baseURL += link;
    var win = window.open(baseURL, "_blank");
    win.focus();
  }

  return (
    <div className="Project">
      <div className="projectBox a">
        <img
          src={require("../Images/Projects/AStar.png")}
          className="ProjectImage"
          alt="A*"
        />
        <p className="ProjectHeader">A* Search</p>
        <p className="ProjectInfo">
          This was a project was to explore different sorting algorithms to find
          the shortest path. The goal was to create the A* Search Algorithm
          using Java. Setting a start and end point the algorithm will find the
          shortest path to the end point going around random obstacles.
        </p>
        <button
          onClick={() => viewProject("A_Star_Algorithm_Java")}
          className="viewProjectButton"
        >
          View
        </button>
      </div>
      <div className="projectBox b">
        <img
          src={require("../Images/Projects/Loop.png")}
          className="ProjectImage"
          alt="Loop"
        />
        <p className="ProjectHeader">Loop Socail Media</p>
        <p className="ProjectInfo">
          This project created a social media platform similar to LinkedIn.
          Users could apply for job openings and place adverts for positions.
          The website was created using HMTL, JavaScript and CSS for front-end
          and PHP for back-end.
        </p>
        <button
          onClick={() => viewProject("Loop_Social_Network_Site")}
          className="viewProjectButton"
        >
          View
        </button>
      </div>
      <div className="projectBox c">
        <img
          src={require("../Images/Projects/Parkinsons.png")}
          className="ProjectImage"
          alt="Parkinsons"
        />
        <p className="ProjectHeader">Parkinsons Predictor</p>
        <p className="ProjectInfo">
          This project was to predict the attribute total_UPDRS using several
          regression techniques such as Random Forrest using the sample
          Parkinsons dataset provided. This project was created using Python,
          Jupyter Notebook and the Sklearn Library.
        </p>
        <button
          onClick={() => viewProject("Parkinsons-prediction")}
          className="viewProjectButton"
        >
          View
        </button>
      </div>
      <div className="projectBox d">
        <img
          src={require("../Images/Projects/RL.png")}
          className="ProjectImage"
          alt="RL"
        />
        <p className="ProjectHeader">Atari RL</p>
        <p className="ProjectInfo">
          This project was to teach a Reinforcment Learning agent how to become
          better at an Atari game Asteroids using the OpenAI Gym enviroment,
          Python, Sklearn and a Jupyter Notebook.
        </p>
        <button
          onClick={() => viewProject("Reinforcment_Learning_Atari_Asteroids")}
          className="viewProjectButton"
        >
          View
        </button>
      </div>
      <div className="projectBox e">
        <img
          src={require("../Images/Projects/ImageClassification.png")}
          className="ProjectImage"
          alt="ImageClassification"
        />
        <p className="ProjectHeader">Image Classification</p>
        <p className="ProjectInfo">
          This project classify images that are Lego figures using Neural
          Networks. We evaluated the classifier by getting the models accuracy
          and training/validation loss, getting the precision, recall, F1-Score.
          Furthermore we used a confusion matrix to look for true positives,
          etc.
        </p>
        <button
          onClick={() => viewProject("Lego_Figure_Classification_ML")}
          className="viewProjectButton"
        >
          View
        </button>
      </div>
      <div className="projectBox f">
        <img
          src={require("../Images/Projects/ReactNative.png")}
          className="ProjectImage"
          alt="ImageClassification"
        />
        <p className="ProjectHeader">React Native App</p>
        <p className="ProjectInfo">
          For my Final Year Project in College, I created a Mental Health
          Wellbeing application using React Native, something I would have to
          teach myself. The application was deployed on both Android and iOS
          becoming very adept at React and React Native.
        </p>
        <button
          onClick={() =>
            viewProject("Cross_Platform_Relaxtion_Application__ReactNative")
          }
          className="viewProjectButton"
        >
          View
        </button>
      </div>
    </div>
  );
}
