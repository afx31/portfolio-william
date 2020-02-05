import React from "react";
import "./Skills.css";
import icons from "../img/svg/sprite.svg";

const Skills = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="skills">
      <div className="skills-container">
        <h1 className="skills-heading-1">MY SKILL SET</h1>
        <div className="skills-section">
          <div className="skills-row">
            <h2 className="skills-heading-2">Web</h2>
            <hr />
            <ul className="item-list">
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-html5`} />
                </svg>
                <p>HTML5</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-css3`} />
                </svg>
                <p>CSS3</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-javascript`} />
                </svg>
                <p>JAVASCRIPT</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <p>REACT</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
                <p>FIREBASE</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-node-dot-js`} />
                </svg>
                <p>NODE.JS</p>
              </li>
            </ul>
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="skills-row">
            <h2 className="skills-heading-2">Mobile</h2>
            <hr />
            <ul className="item-list">
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-android`} />
                </svg>
                <p>ANDROID</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-react`} />
                </svg>
                <p>REACT NATIVE</p>
              </li>
              <li>
                <svg className="item-icon">
                  <use xlinkHref={`${icons}#icon-firebase`} />
                </svg>
                <p>RN FIREBASE</p>
              </li>
            </ul>
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="skills-row">
            <h2 className="skills-heading-2">Applications</h2>
            <hr />
            <ul className="item-list">
              <li>
                <img
                  src={require("../img/icon-csharp.png")}
                  alt="https://www.pngguru.com/free-transparent-background-png-clipart-fvjvy"
                  className="item-icon"
                />
                <p>C#</p>
              </li>
              <li>
                <img
                  src={require("../img/icon-dotnet.png")}
                  alt="https://www.pngguru.com/free-transparent-background-png-clipart-aworh"
                  className="item-icon"
                />
                <p>.NET</p>
              </li>
              <li>
                <img
                  src={require("../img/icon-aspnet.png")}
                  alt="https://www.pngguru.com/free-transparent-background-png-clipart-jnjcv"
                  className="item-icon"
                />
                <p>ASP.NET</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
