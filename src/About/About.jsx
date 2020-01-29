import React from "react";
import "./About.css";

const About = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="about">
      <div class="about-container">
        <div>
          <img
            src={require("../img/wireframes.jpg")}
            alt="https://www.pexels.com/photo/white-printer-paper-196645/"
            class="about-image"
          />
        </div>
        <div class="about-text">
          <h2 class="about-heading-2">A Little Bit About Me</h2>
          <hr />
          <p class="about-description">
            My name is William Mitchell and I am 24 years of age from Australia.
            Of late 2019 I finished my Bachelor of Science in Information
            Technology, Majoring in Enterprise Systems at the
            <br></br>
            <a class="about-link" href="https://www.uts.edu.au">University of Technology Sydney</a>
            .
            <br />
            <br />
            In my spare time I'm always eager to expand on my software
            development knowledge. Whether it's learning a new language,
            frameworks, a online course or working on my own projects, I'm
            always enjoying software development.
            <br />
            <br />
            If you have any questions or would like to get in contact with me,
            please do not hesitate to use the link at the bottom!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
