import React from "react";

import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 (Generative Pre-trained Transformer 3) is a language processing tool developed by OpenAI that can understand and generate human-like text. It's a powerful technology that has the potential to revolutionize various industries and make communication more efficient and effective."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Exploring the Boundless Possibilities of AI: The Future of GPT-3 and
          Beyond
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Chatbots in GPT-3 refer to artificially intelligent programs that use GPT-3's natural language processing capabilities to converse with humans in a human-like manner. With GPT-3, chatbots can understand and respond to complex requests, making them a valuable tool for businesses looking to automate customer service and support."
        />
        <Feature
          title="Knowledgebase"
          text="A knowledgebase in GPT-3 refers to a database of information that has been pre-processed and made available for the language model to access and use. By leveraging GPT-3's NLP abilities, it can analyze and understand the context of a question and provide relevant information from the knowledgebase in a human-like manner."
        />
        <Feature
          title="Education"
          text="In education, GPT-3 can be used to provide personalized learning experiences for students. With its natural language processing capabilities, GPT-3 can analyze and understand student inputs and provide relevant and engaging educational content. It can also provide intelligent feedback and suggestions to help students learn more effectively."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
