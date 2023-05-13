import React from "react";

const AboutMe = () => {
  return (
    <div className="lg:flex  pb-6 ">
      <div className="w-full lg:w-1/2 text-zinc-400 p-6 max-sm:p-4 borderRight  flex flex-col ">
        <div className="py-6 lg:w-full">
          <h2 className=" font-semibold mb-1 text-lg">
            Hello! I'm Florin Gabor
          </h2>
          <p className="max-sm:text-xs sm:text-sm lg:text-base leading-6">
            I am currently pursuing a career transition into the IT industry, as
            I am passionate about technology and its ever-evolving nature. After
            resigning from my previous job, I have been dedicating my time to
            learning and acquiring new skills in programming and other
            IT-related fields.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6 max-sm:p-3 ">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Age: </span>
            35
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Residence: </span>
            Romania
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Job status: </span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Address: </span>
            Oradea, BH
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
