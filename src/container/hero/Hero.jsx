import "./Hero.css";
import React, { useState } from "react";
import heroImage from "../../assets/illustration-working.svg";
import "./heroMobile.css";

const Hero = () => {
  return (
    <section class="short__hero">
      <div class="short__hero-container">
        <div class="short__hero-div">
          <h1
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            More than just shorter links
          </h1>
          <p
            class="build"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            class="started"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            Get Started
          </button>
        </div>
        <div
          class="illustration-img"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <img src={heroImage} class="intro-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
