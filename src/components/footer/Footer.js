import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Subarna Shrestha</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/crsthasubarna/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/subarna.shrestha.7712/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://twitter.com/crsthasubarna"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Crstha. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
