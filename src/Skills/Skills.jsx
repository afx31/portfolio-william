import React from 'react';
import './Skills.css';

const Skills = ({ card }) => {
    // if (bgcolor) {
    //     cardStyle.backgroundColor = bgcolor;
    //   }
    const id = `card${card}`;
    return (
        <div id={id} className="skills">
            <h1>
                <br>
                </br>
                    Skills Card #{card}
            </h1>
        </div>
    );
};

export default Skills;