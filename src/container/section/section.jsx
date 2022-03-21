import React from "react";
import "./section.css";
import { brandImage, IconFullyCustomized, iconDetailedImage } from "./import";
import "./mobileSection.css";

const section = () => {
  return (
    <section class="short__section">
      <h1 data-aos="fade-up" data-aos-delay="100">
        Advance Statistics
      </h1>
      <p class="short__section-intro" data-aos="fade-up" data-aos-delay="200">
        Track how your links are performing across the web with our Advance
        dashboard.
      </p>
      <div class="short__section-stat">
        <div class="short__section-stats first-stat" data-aos="fade-up">
          <div class="short__section-brand">
            <img src={brandImage} alt="brand" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div class="short__section-stats second-stat" data-aos="fade-up">
          <div class="short__section-brand">
            <img src={IconFullyCustomized} alt="icon" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div class="short__section-stats third-stat" data-aos="fade-up">
          <div class="short__section-brand">
            <img src={iconDetailedImage} alt="icon" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default section;
