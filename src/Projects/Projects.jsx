import React from "react";
import "./Projects.css";

const Projects = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="projects">
      <div className="projects-container">
        <h2 className="projects-heading-2">My Projects</h2>
        <p className="projects-description">Content coming soon!</p>
      </div>
    </div>
  );
};

export default Projects;
