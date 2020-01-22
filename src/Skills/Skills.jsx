import React from "react";
import "./Skills.css";
import icons from "../img/svg/sprite.svg";

const Skills = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="skills">
      <div class="skills-container">
        <h1 class="skills-heading-1">MY SKILL SET</h1>
        <div class="skills-section">
          <div class="skills-row">
            <h2 class="skills-heading-2">Web</h2>
            <span class="divider-web"></span>
            <ul class="item-list">
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-html5`} />
                </svg>
                <p>HTML5</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-css3`} />
                </svg>
                <p>CSS3</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
                <p>JAVASCRIPT</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <p>REACT</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
                <p>FIREBASE</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-node-dot-js`} />
                </svg>
                <p>NODE.JS</p>
              </li>
            </ul>
          </div>
{/* //////////////////////////////////////////////////////////////////////// */}
          <div class="skills-row">
            <h2 class="skills-heading-2">Mobile</h2>
            <span class="divider-mobile"></span>
            <ul class="item-list">
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-android`} />
                </svg>
                <p>ANDROID</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <p>REACT NATIVE</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
                <p>RN FIREBASE</p>
              </li>
            </ul>
          </div>
{/* //////////////////////////////////////////////////////////////////////// */}
          <div class="skills-row">
            <h2 class="skills-heading-2">Applications</h2>
            <span class="divider-applications"></span>
            <ul class="item-list">
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-csharp`} />
                </svg>
                <p>C#</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-.NET`} />
                </svg>
                <p>.NET</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
                <p>JAVASCRIPT</p>
              </li>
              <li>
                <svg class="item-icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <p>REACT</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;