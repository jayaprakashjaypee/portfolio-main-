import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, } from "react-scroll";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-r from-zinc-50 to-[#C1EFFF]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-4xl">Hi, I'm </p>
        <h1 className=" pt-3 text-4xl sm:text-7xl font-bold">
          Jayaprakash
        </h1>
        <h2 className=" pb-2 text-2xl sm:text-4xl font-bold">
          A  Full stack Developer
        </h2>
        <p className="text-2xl sm:text-4xl">
          Currently, I'm Focused on building responsive full-stack web
          application
        </p>
        <div>
          <button className="text-black group rounded-lg border-black border-2 px-6 py-2 my-2 flex items-center hover:bg-black hover:text-white ">
            <Link className="group" to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="pl-3 group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
        <div>
          <div className="flex row smallContainer">
            <div className="flex-col">
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"  rel="noopener"
                href="https://www.linkedin.com/in/jaya-prakash-2089a9210//"
              >
                <FaLinkedin size={30} />
                <span className="ml-3">Linkedin</span>
              </a>
              
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"  rel="noopener"
                href="https://github.com/jayaprakashjaypee"
              >
                <FaGithub size={30} />
                <span className="ml-3">Github</span>
              </a>
            </div>
            <div className="flex-col">
              <a
                className="flex items-center pr-3 py-2 my-2"
                target="_blank"  rel="noopener"
                href="https://drive.google.com/file/d/177gfetq-w3q8EXNwyDcQSEtG_-aLv1Ur/view?usp=share_lin"
              >
                <BsFillPersonLinesFill size={30} />
                <span className="ml-3">Resume</span>
              </a>
              <a
                className="flex items-center  py-2 my-2 "
                target="_blank"  rel="noopener"
                href="mailto:jayaprakash.m786@gmail.com"
              >  
                <HiOutlineMail size={30} />
                <span className="ml-3">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
