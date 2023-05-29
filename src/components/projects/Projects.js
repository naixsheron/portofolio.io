import React from "react";
import proiect1 from "../../assets/proiect1.jpg";
import bee from "../../assets/bee.jpg";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-10">
        <div className="px-6">
          <a href="https://gilded-cassata-988dcf.netlify.app/">
            <ProjectCard
              title="React App"
              category="E-commerce"
              image={proiect1}
            />
          </a>
        </div>
        <div className="px-6">
          <a href="https://albinadeaur1.onrender.com/">
            <ProjectCard title="MERN App" category="E-commerce" image={bee} />
          </a>
        </div>
        <div className="px-6"></div>
      </div>
    </div>
  );
};

export default Projects;
