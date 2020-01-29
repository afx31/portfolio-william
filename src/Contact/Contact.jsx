import React from "react";
import "./Contact.css";
import icons from "../img/svg/sprite.svg";

const Contact = ({ card }) => {
  const id = `card${card}`;
  return (
    <div id={id} class="contact">
      <div class="contact-container">
        <div class="contact-heading-2">Get In Touch</div>
        <p class="contact-text">
          If you have questions or wish to get in touch, please contact me via
          the link below
        </p>
        <a class="contact-email" href="mailto: willmitchellcodes@gmail.com">
          Contact Me
        </a>
        <div class="contact-text">You can also find me here:</div>
        <div>
          <a href="https://www.linkedin.com/in/wmitchell2/">
            <svg class="icon-linkedin">
              <use xlinkHref={`${icons}#icon-linkedin`} />
            </svg>
          </a>
          <a href="https://github.com/afx31">
            <svg class="icon-github">
              <use xlinkHref={`${icons}#icon-github`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
