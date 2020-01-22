import React from "react";
import "./Projects.css";

const Projects = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="projects">
      <div class="projects-container">
        <h2 class="projects-heading-2">My Projects</h2>
        <p class="projects-description">Content coming soon!</p>
      </div>
    </div>
  );
};

export default Projects;
