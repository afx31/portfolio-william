import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <ScrollTo selector={`#card${"home"}`}>
            <button className="nav_button">HOME</button>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"about"}`}>
            <button className="nav_button">ABOUT</button>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"skills"}`}>
            <button className="nav_button">SKILLS</button>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"projects"}`}>
            <button className="nav_button">PROJECTS</button>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"projects"}`}>
            <button className="nav_button">CONTACT</button>
          </ScrollTo>
        </li>
      </ul>
      {/* <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div> */}
    </nav>
  );
};

export default Navbar;
