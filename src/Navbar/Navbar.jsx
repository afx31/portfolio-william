import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <ScrollTo selector={`#card${'home'}`}>
          <h4>The Nav</h4>
        </ScrollTo>
      </div>
      <ul className="nav-links">
        <li>
          <ScrollTo selector={`#card${'home'}`}>
            <p>Home</p>
          </ScrollTo>
        </li>
        <p>|</p>
        <li>
          <ScrollTo selector={`#card${'about'}`}>
            <p>About</p>
          </ScrollTo>
        </li>
        <p>|</p>
        <li>
          <ScrollTo selector={`#card${'skills'}`}>
            <p>Skills</p>
          </ScrollTo>
        </li>
        <p>|</p>
        <li>          
          <ScrollTo selector={`#card${'projects'}`}>
            <p>Projects</p>
          </ScrollTo>
        </li>
        <p>|</p>
        <li>
          <ScrollTo selector={`#card${'contact'}`}>
            <p>Contact</p>
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
