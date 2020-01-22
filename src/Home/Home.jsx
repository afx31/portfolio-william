import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Home.css";
import icons from "../img/svg/sprite.svg";

const Home = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="home">
      <div className="home_container">
        <h2 className="home_heading_2">HI, I'M WILL</h2>
        <p className="home_description">
          Junior Web, Mobile & Application Developer
        </p>
        <ScrollTo selector={`#card${"about"}`}>
          <svg class="expandarrow_icon">
            <use xlinkHref={`${icons}#icon-expand-arrow`} />
          </svg>
        </ScrollTo>
      </div>
    </div>
  );
};

export default Home;
