import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import gridtemplateImage from "../img/gridtemplateImage.png";
import portfolioImage from "../img/portfolioImage.png";
import mernImage from "../img/mernImage.png";

const Projects = () => {
  const projects = [
    {
      title: "MERN-Stack Template",
      image: mernImage,
      demoLink: "https://rocky-tundra-15421.herokuapp.com/",
      githubLink: "https://github.com/afx31/mern-template",
      description:
        "This is a MERN-Stack template website containing a user account system where the user can register & login through their own account. It was created to show my API routing/MERN skillset, to develop it more & use for other projects as a starting template.",
      languages: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Grid Template Example",
      image: gridtemplateImage,
      demoLink: "https://afx31.github.io/information-grid-website/",
      githubLink: "https://github.com/afx31/information-grid-website",
      description:
        "This is a example website for my portfolio to show a simple grid layout page with information and images, which could easily be adapted into a business landing page or a shop cartel website.",
      languages: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "My Portfolio",
      image: portfolioImage,
      demoLink: "https://afx31.github.io/portfolio-william/",
      githubLink: "https://github.com/afx31/portfolio-william",
      description:
        "The website your currently viewing! My portfolio built in React using a Scroll package to assist with smooth transitioning when scrolling between each page. It contains my past projects and skillset.",
      languages: ["HTML", "CSS", "JavaScript", "React"]
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-heading-2">My Projects</h1>
      <div className="projects-row-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            description={project.description}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
