import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Home.css";
import icons from "../img/svg/sprite.svg";

const Home = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="home">
      <div className="home-image-low-res">
        <div className="home-image-high-res">
          <div className="home-container">
            <h2 className="home-heading-2">HI, I'M WILL</h2>
            <p className="home-description">
              Junior Web, Mobile & Application Developer
            </p>
            <ScrollTo selector={`#card${"about"}`}>
              <svg className="expandarrow-icon">
                <use xlinkHref={`${icons}#icon-expand-arrow`} />
              </svg>
            </ScrollTo>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
