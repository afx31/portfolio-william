import React from "react";
import "./Skills.css";
import icons from "../img/svg/sprite.svg";

const webSkills = [
  { name: "HTML5", svgName: "#icon-html5" },
  { name: "CSS3", svgName: "#icon-css3" },
  { name: "Javascript", svgName: "#icon-javascript" },
  { name: "NodeJS", svgName: "#icon-node-js" },
  { name: "React", svgName: "#icon-react" },
  { name: "Firebase", svgName: "#icon-firebase" },
  { name: "MongoDB", svgName: "#icon-mongodb" }
];
const mobileSkills = [
  { name: "Android", svgName: "#icon-android" },
  { name: "React Native", svgName: "#icon-react" },
  { name: "RN Firebase", svgName: "#icon-firebase" }
];
const appSkills = [
  { name: "Java", svgName: "#icon-java" },
  { name: "C#", svgName: "#icon-csharp" },
  { name: "C++", svgName: "#icon-cplusplus" },
  { name: ".NET", svgName: "#icon-dot-net" },
  { name: "ASP.NET", svgName: "#icon-dot-net" }
];

const Skills = () => {
  const showColumns = (name, array) => {
    return (
      <div className="skills-column">
        <h1 className="skills-category-title">{name}</h1>
        <div className="skills-svg-container">
          {array.map((svg, i) => (
            <div key={i} className="skills-card">
              <svg className="skills-svg">
                <use xlinkHref={`${icons}${svg.svgName}`} />
              </svg>
              <h1 className="skills-svg-name">{svg.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">What I Have Learned</h1>
      <div className="skills-row">
        {showColumns("Web", webSkills)}
        {showColumns("Mobile", mobileSkills)}
        {showColumns("Applications", appSkills)}
      </div>
    </div>
  );
};

export default Skills;
