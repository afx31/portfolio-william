import React from "react";
import "./Contact.css";
import icons from "../img/svg/sprite.svg";

const Contact = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="contact">
      <div class="contact_container">
        <div class="contact_heading_2">Get In Touch</div>
        <p class="contact_text">
          If you have questions or wish to get in touch, please contact me via
          the link below
        </p>
        <a class="contact_email" href="mailto: post4wjm@gmail.com">
          post4wjm@gmail.com
        </a>
        <div class="contact_text">You can also find me here:</div>
        <div>
          <a href="www.linkedin.com/in/william-mitchell-243a8310a/">
            <svg class="contact_icon">
              <use xlinkHref={`${icons}#icon-linkedin`} />
            </svg>
          </a>
          <a href="https://github.com/afx31">
            <svg class="contact_icon">
              <use xlinkHref={`${icons}#icon-github`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
