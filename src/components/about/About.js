import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyService from "./MyService";
import FunFact from "./FunFact";

const About = () => {
  return (
    <section id="about" className="w-full ">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="services" />
      <MyService />
      <Title title="Other" subTitle="hobbies" />
      <FunFact />
    </section>
  );
};

export default About;
