import React from "react";
import "./About.css";

const About = ({ card }) => {
  // if (bgcolor) {
  //     cardStyle.backgroundColor = bgcolor;
  //   }
  const id = `card${card}`;
  return (
    <div id={id} className="about">
      <div className="about_container">
        <div class="about_image">
            <img 
                src="./r34-menu5.jpg"
                alt="ree"
                className="about_image"
            />
        </div>
        <div className="about_text">
          <h2 className="heading-2">About me</h2>
          <p className="about_description">
            My name is Svein Jakob and I am 21 years of age. I live in Norway,
            where I was born and raised. At the moment I am studying a Bachelors
            degree in
            <span class="weighted">Computer Engineering</span> at the Norwegian
            University of Science and Technology, often referred to as{" "}
            <span class="weighted">NTNU</span>.<br />
            <br />
            In my free time I am always eager to learn more. I have taken several
            web development courses online in order to learn as much as possible
            besides university. I am interested in all things
            <span class="weighted">technology</span> related and I am an
            enthusiastic football fan. <br />
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
