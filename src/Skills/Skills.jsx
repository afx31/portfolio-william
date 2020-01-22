import React from "react";
import "./Skills.css";
import icons from "../img/svg/sprite.svg";

const Skills = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="skills">
      <div class="skills_container">
        <div class="row">

          <div class="column_top">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">REACT</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column_top">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">JAVASCRIPT</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column_top">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-html5`} />
                </svg>
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-css3`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">HTML5 & CSS3</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column_top">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">FIREBASE</h5>
                <p class="card_description_text">
                JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">REACT NATIVE</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">JAVASCRIPT</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-react-native-firebase`} />
                </svg>
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-css3`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">JAVASCRIPT</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming language out there thus
                  far. Its flexibility combined with the number of frameworks
                  and community support is fantastic.
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card_header">
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-github`} />
                </svg>
                <svg class="card_icon">
                  <use xlinkHref={`${icons}#icon-git`} />
                </svg>
              </div>
              <div class="card_description">
                <h5 class="card_heading_5">VERSION CONTROL</h5>
                <p class="card_description_text">
                  JavaScript is my favourite programming languagt there thus
                  far. Its flexibility combined with the 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
