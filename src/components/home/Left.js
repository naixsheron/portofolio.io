import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsCloudLightningFill } from "react-icons/bs";
import { FiInstagram, FiSend } from "react-icons/fi";
import CV from "../../assets/cv.pdf";

import { profileImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["JavaScript", "ReactJS", "NodeJS", "Html / Css"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="max-sm:w-4/12 max-lg:w-2/12 w-5/12 h-full bg-bodyColor rounded-2xl shadow-textShadow z-10">
      <div className="w-full h-3/5 max-sm:h-auto max-lg:h-auto">
        <img
          className=" w-full h-full max-sm:w-full max-lg:w-full  max-sm:h-2/4 max-lg:h-2/4 object-cover rounded-2xl max-md:h-2/4"
          src={profileImg}
          alt="profileImage"
          loading="priority"
        />
      </div>
      <div className="w-full h-2/5 max-sm:h-2/3 ">
        {/* containe intro */}
        <div className="flex flex-col items-center gap-2 py-10 max-sm:gap-2 max-lg:py-2 max-sm:py-1 max-md:py-3">
          <h1 className="text-textColor max-sm:px-3  text-4xl font-semibold max-sm:ml- max-sm:text-base max-md:text-lg max-lg:text-2xl">
            Florin Gabor
          </h1>
          <p className=" text-base text-designColor tracking-wide max-sm:text-xs max-md:text-base">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2  max-sm:flex-col  ">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl max-sm:text-base  ">
              <a
                href="https://github.com/naixsheron"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl max-sm:text-base">
              <a
                href="https://www.facebook.com/naix.sheron/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl max-sm:text-base">
              <a
                href="https://www.instagram.com/fg_sheron/"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram />
              </a>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl max-sm:text-base">
              <a
                href="https://www.linkedin.com/in/florin-gabor1987/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
        {/* buttons */}
        <div className="flex h-14 max-lg:h-10 max-lg:block ">
          <a
            className="max-lg:w-full w-1/2 h-full flex justify-center borderRight items-center gap-2 border-t-[1px] border-t-zinc-800 max-sm:text-xs text-sm tracking-wide uppercase hover:text-designColor duration-300"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV
              <BsCloudLightningFill />
            </button>
          </a>
          <a
            className="max-lg:w-full w-1/2 h-full flex justify-center borderRight items-center gap-2 border-t-[1px] border-t-zinc-800 max-sm:text-xs text-sm tracking-wide uppercase hover:text-designColor duration-300"
            href="https://www.linkedin.com/in/florin-gabor1987/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Contact me
              <FiSend />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
