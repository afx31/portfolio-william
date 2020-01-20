import React from "react";
import "./About.css";

const About = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="about">
      <div className="about_container">
        <div class="about_image">
            <img 
                src={require("./create.jpeg")}
                alt="ree"
                className="about_image"
            />
        </div>
        <div className="about_text">
          <h2 className="about_heading_2">About me</h2>
          <p className="about_description">
            My name is William Mitchell and I am 24 years of age from Australia.
            Of late 2019 I finished my Bachelor of Science in Information Technology,
            Majoring in Enterprise Systems at the University of Technology Sydney.
            <br /><br />
            In my spare time I'm always eager to expand on my software development knowledge.
            Whether it's learning a new language, frameworks, a online course or working on my 
            own projects, I'm always enjoying software development.
            <br /><br />
            If you have any questions or would like to get in contact with me,
            please do not hesitate to use the link at the bottom!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
