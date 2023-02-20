import React from "react";

import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Stay in the loop on the latest with GPT-3 through our blog
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="Is GPT-3 and OpenAI the future of technology?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Jan 13, 2023"
            title="What does the future of computing look like with GPT-3 and OpenAI?"
          />
          <Article
            imgUrl={blog03}
            date="Dec 05, 2022"
            title="Are GPT-3 and OpenAI leading the charge in the future of technology?"
          />
          <Article
            imgUrl={blog04}
            date="Nov 12, 2021"
            title="What kind of revolution in language processing is GPT-3 and OpenAI bringing to the future?"
          />
          <Article
            imgUrl={blog05}
            date="Jun 06, 2022"
            title="Are GPT-3 and OpenAI blazing a trail into the future?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
