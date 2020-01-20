import React from "react";
import "./Home.css";

const Home = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} className="home">
      <div className="home_container">
        <h2 className="home_heading_2">William Mitchell</h2>
        <p className="home_description"></p>
      </div>
    </div>
  );
};

export default Home;
