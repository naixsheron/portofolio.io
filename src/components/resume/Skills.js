import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4 max-sm:col-span-9">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4 ">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              Web Development
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[45%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              Web Design
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[35%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
        </div>
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4 ">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              JavaScript
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[55%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              React JS
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[45%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              HTML
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              CSS
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[65%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              Node JS
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[25%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4 max-sm:col-span-9">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4 ">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              English
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[65%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="max-sm:text-sm text-base text-textColor -mb-1.5">
              Romanian
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 bg-designColor"></span>
            </span>
          </div>
        </div>
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <div className="flex align-center p-2 ml-1">
          <span className="text-designColor px-2">
            <GiCheckMark />
          </span>
          <p className="max-sm:text-xs text-base text-textColor -mb-1.5">
            Website hosting
          </p>
        </div>
        <div className="flex align-center p-2 ml-1">
          <span className="text-designColor px-2">
            <GiCheckMark />
          </span>
          <p className="max-sm:text-xs text-base text-textColor -mb-1.5">
            Advertising service
          </p>
        </div>
        <div className="flex align-center p-2 ml-1">
          <span className="text-designColor px-2">
            <GiCheckMark />
          </span>
          <p className="max-sm:text-xs text-base text-textColor -mb-1.5">
            Web Apps
          </p>
        </div>
        <div className="flex align-center p-2 ml-1">
          <span className="text-designColor px-2">
            <GiCheckMark />
          </span>
          <p className="max-sm:text-xs text-base text-textColor -mb-1.5">
            Create logo design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
