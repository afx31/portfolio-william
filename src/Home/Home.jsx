import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Home.css";
import icons from "../img/svg/sprite.svg";

const Home = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="home">
      <div class="home-container">
        <h2 class="home-heading-2">HI, I'M WILL</h2>
        <p class="home-description">
          Junior Web, Mobile & Application Developer
        </p>
        <ScrollTo selector={`#card${"about"}`}>
          <svg class="expandarrow-icon">
            <use xlinkHref={`${icons}#icon-expand-arrow`} />
          </svg>
        </ScrollTo>
      </div>
    </div>
  );
};

export default Home;
