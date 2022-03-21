import React from "react";
import "./footer.css";
import logo from "../../assets/logowhite.svg";
import "./mobileFooter.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="short__footer-logo" data-aos="fade-up" data-aos-delay="50">
          <img src={logo} alt="logo" />
        </div>
        <div
          class="short__footer-footer1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ul>
            <li class="short__footer-diff">Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div
          class="short__footer-footer2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <ul>
            <li class="short__footer-diff">Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div
          class="short__footer-footer3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <ul>
            <li class="short__footer-diff">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div class="icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
