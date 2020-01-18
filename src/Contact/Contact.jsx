import React from 'react';
import './Contact.css';

const Contact = ({ card }) => {
    // if (bgcolor) {
    //     cardStyle.backgroundColor = bgcolor;
    //   }
    const id = `card${card}`;
    return (
        <div id={id} className="about">
            <h1>
                <br>
                </br>
                Contact Card #{card}
            </h1>
        </div>
    );
};

export default Contact;