import React from "react";

const ServiceCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 max-sm:px-1 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
      <span className="text-4xl text-designColor mb-2">{icons}</span>
      <h2 className="font-titleFont text-lg max-sm:text-sm  font-semibold">
        {title}
      </h2>
      <p className="max-sm:text-xs sm:text-sm lg:text-base max-sm:text-start text-center text-zinc-400 px-6">
        {subTitle}
      </p>
    </div>
  );
};

export default ServiceCard;
