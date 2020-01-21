import React from "react";
import "./Projects.css";

const Projects = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="projects">
      <div class="projects_container">
        <h2 class="projects_heading_2">My Projects</h2>
        <p class="projects_description">Content coming soon!</p>
      </div>
    </div>
  );
};

export default Projects;
