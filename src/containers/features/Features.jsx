import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Natural Language Generation",
    text: "GPT-3 can create human-like language, write articles, or answer questions.",
  },
  {
    title: "Few-Shot Learning",
    text: "GPT-3 can learn and generalize from a small amount of examples.",
  },
  {
    title: "Multilingual Support",
    text: "GPT-3 can work with multiple languages, making it valuable for cross-lingual tasks.",
  },
  {
    title: "Large-Scale Processing",
    text: "With 175 billion parameters, GPT-3 is one of the largest language models available, able to handle complex tasks and generate sophisticated responses.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Unleashing the Potential of GPT-3: Shaping the Future with
          Next-Generation Language Processing
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
