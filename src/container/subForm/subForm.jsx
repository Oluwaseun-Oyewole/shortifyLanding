import React from "react";
import "./subForm.css";
import "./formMobile.css";

const SubForm = () => {
  return (
    <div class="short__form-link" data-aos="fade-up">
      <div class="short__form-input">
        <div class="short__form-input-text">
          <label for="text"></label>
          <input
            type="text"
            name="link"
            id="shortenlink"
            placeholder="Shorten a link here..."
            aria-labelledby="please shortenlink text"
          />
          <p id="link">Please add a link</p>
        </div>
        <button type="submit" class="shorten">
          Shorten It!{" "}
        </button>
      </div>
    </div>
  );
};

export default SubForm;
