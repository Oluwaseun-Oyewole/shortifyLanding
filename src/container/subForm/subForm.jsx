import React, { useState, useEffect } from "react";
import "./subForm.css";
import "./formMobile.css";

const SubForm = () => {
  return (
    <div>
      <div class="short__form-link" data-aos="fade-up">
        <form class="short__form-input">
          <div class="short__form-input-text">
            <label for="text"></label>
            <input
              type="text"
              name="link"
              id="shortenlink"
              placeholder="Shorten a link here..."
              aria-labelledby="please shortenlink text"
            />
          </div>
          <button type="submit" class="shorten">
            Shorten It!{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubForm;

// <div class="lists">
// {loading ? shortLink : console.log("nothing to display")}
// </div>
