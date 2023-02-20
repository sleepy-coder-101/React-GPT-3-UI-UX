import React from "react";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        {/* <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1> */}
        <h1 className="gradient__text">
          The possibilities of AI exceed what you can imagine
        </h1>
        <p>
          Learn about the latest advancements in GPT-3 technology and its
          potential impact on various industries, including healthcare,
          education, and business. Explore real-world examples of how GPT-3 is
          already being used and discover what the future may hold for this
          powerful language model.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
