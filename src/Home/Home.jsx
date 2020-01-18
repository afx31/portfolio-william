import React from 'react';
import './Home.css';

const Home = ({ card }) => {
    // if (bgcolor) {
    //     cardStyle.backgroundColor = bgcolor;
    //   }
    const id = `card${card}`;
    return (
        <div id={id} className="home">
            <div>
                <h2 className="about__text">William Mitchell</h2>
                <p className="about__description">
                    
                </p>
            </div>
        </div>
    );
};

export default Home;