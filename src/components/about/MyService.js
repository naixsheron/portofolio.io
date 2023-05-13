import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const div = () => {
  return (
    <div className="max-xl:grid-cols-1 grid grid-cols-2">
      <ServiceCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle=" Services also include custom web application development, e-commerce
        solutions, and website maintenance and support, providing a
        comprehensive approach to meet the diverse needs of businesses and
        organizations."
      />
      <ServiceCard
        icons={<FaAppStoreIos />}
        title="Front-End Developer"
        subTitle=" Through my expertise in React JS, I offer efficient and innovative solutions for creating dynamic user interfaces, integrating with back-end technologies, and building scalable and maintainable web applications."
      />
    </div>
  );
};

export default div;
