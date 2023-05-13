import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import SideNav from "./components/home/SideNav";

const Home = () => {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    });
  }, []);

  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="w-16 h-96 bg-transparent flex flex-col gap-4 max-sm:w-10 max-sm:mr-1 max-lg:w-10 max-lg:mr-1">
        <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group max-sm:opacity-0">
          <div
            onClick={() => setSidenav(true)}
            className="flex flex-col gap-1.5 overflow-hidden "
          >
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        {/* other icons */}
        {/* sidenav */}
        {sidenav && (
          <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                <SideNav />
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute flex items-center justify-center top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}
        {/* end sidenav */}
        <div className="w-full h-80  bg-bodyColor  rounded-3xl py-6 flex flex-col items-center justify-between">
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl max-sm:text-sm flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
          >
            <FaUser />
            <span
              className="absolute text-black font-medium  text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
            >
              Abouts
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl max-sm:text-sm flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
          >
            <IoIosPaper />
            <span
              className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
            >
              Resume
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl max-sm:text-sm flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
          >
            <MdWork />
            <span
              className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
            >
              Projects
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(true) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl max-sm:text-sm flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
          >
            <SiGooglechat />
            <span
              className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
            >
              Blog
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className="w-full h-6 text-textColor text-xl flex max-sm:text-sm items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
          >
            <FaEnvelope />
            <span
              className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
            >
              Contact
            </span>
          </span>
          <a href="https://wa.me/0733025345">
            <span className="w-full h-6 text-textColor text-xl max-sm:text-sm flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group ">
              <BsTelephonePlusFill />
              <span
                className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
              >
                Call
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/* Left part start */}

        <Left />

        {/* Right part start */}
        <div className="max-sm:w-10/12 w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[96%] overflow-y-scroll  scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
