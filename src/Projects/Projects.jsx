import React from 'react';
import './Projects.css';

const Projects = ({ card }) => {
    // if (bgcolor) {
    //     cardStyle.backgroundColor = bgcolor;
    //   }
    const id = `card${card}`;
    return (
        <div id={id} className="projects">
            <div>
                <h2 className="about__text">My Projects</h2>
                <p className="about__description">
                    
                </p>
            </div>
        </div>
    );
};

export default Projects;