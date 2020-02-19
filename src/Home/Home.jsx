import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Home.css";
import icons from "../img/svg/sprite.svg";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-image-superlow-res" />
      <div className="home-image-low-res" />
      <div className="home-image-high-res" />
      <div className="home-container">
        <h2 className="home-heading-2">HI, I'M WILL</h2>
        <p className="home-description">
          Junior Web, Mobile & Application Developer
        </p>
        <ScrollTo selector={"#about"}>
          <svg className="expandarrow-icon">
            <use xlinkHref={`${icons}#icon-expand-arrow`} />
          </svg>
        </ScrollTo>
      </div>
    </div>
  );
};

export default Home;
