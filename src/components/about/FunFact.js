import React from "react";
import { SiEpicgames } from "react-icons/si";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdAgriculture } from "react-icons/md";
import FunCard from "./FunCard";

const FunFact = () => {
  return (
    <div className="max-sm:grid-cols-1 max-lg:grid-cols-2 px-0 grid grid-cols-4 pb-10">
      <FunCard icon={<AiOutlineAreaChart />} des="Stock trading actions" />
      <FunCard icon={<SiEpicgames />} des="Playing Dota 2" />
      <FunCard icon={<BiCameraMovie />} des="Watching  movies" />
      <FunCard icon={<MdAgriculture />} des="Future agriculture trends" />
    </div>
  );
};

export default FunFact;
