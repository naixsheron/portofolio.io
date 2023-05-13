import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="resume" />
      <Education />
      <Title title="My" subTitle="skills" />
      <Skills />
    </section>
  );
};

export default Resume;
