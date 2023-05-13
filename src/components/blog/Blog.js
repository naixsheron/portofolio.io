import React from "react";
import Title from "../home/Title";
import underCo from "../../assets/under.jpg";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-2 max-sm:grid-cols-1  gap-10">
        <div className="px-6">
          <BlogCard
            image={underCo}
            title="May 13, 2023"
            subTitle="Under Construction"
            category="Gold"
          />
        </div>
        <div className="px-6"></div>
      </div>
    </div>
  );
};

export default Blog;
