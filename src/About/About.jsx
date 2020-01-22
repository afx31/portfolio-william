import React from "react";
import "./About.css";
import icons from "../img/svg/sprite.svg";

const About = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="about">
      <div class="about_container">
        <h2 class="about_heading_2">A LITTLE BIT ABOUT ME</h2>
        <div class="about_image">
          <img src={require("./avatar.png")} alt="ree" class="avatar_image" />
        </div>
        <div class="about_text">
          <p class="about_description">
            My name is William Mitchell and I am 24 years of age from Australia.
            Of late 2019 I finished my Bachelor of Science in Information
            Technology, Majoring in Enterprise Systems at the 
            <br></br>
            <a href="https://www.uts.edu.au">University of Technology Sydney</a>
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
        <div class="about_row">
          <h2 class="hobby_heading_2">MY OTHER INTERESTS / HOBBIES</h2>
          <div class="about_column">            
            <div class="about_card">
              <img
                src={require("./icon-controller.png")}
                alt="Controller"
                class="hobby-icons"
              />
              <h5 class="hobby_heading_5">Gaming</h5>
            </div>
          </div>

          <div class="about_column">
            <div class="about_card">
              <img
                src={require("./icon-steering-wheel.png")}
                alt="Steering Wheel"
                class="hobby-icons"
              />
              <h5 class="hobby_heading_5">Automotive</h5>
            </div>
          </div>

          <div class="about_column">
            <div class="about_card">
              <img
                src={require("./icon-mt-fuji.png")}
                alt="Mt Fuji"
                class="hobby-icons"
              />
              <h5 class="hobby_heading_5">Japan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
