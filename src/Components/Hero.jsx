import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="md:w-[90%] w-full p2 h-full mx-auto flex md:flex-row flex-col-reverse md:items-center md:justify-between justify-center">
        <div className="left w-[95%] md:w-1/2 mt-3 md:block flex flex-col items-center mx-auto">
          <h1 className="md:text-5xl text-2xl font-semibold">Hello I'm Khayam</h1>
          <p className="md:text-lg mt-2 md:text-left text-center">
            I create designs that tell stories and leave a lasting impact. From
            logos to branding, I turn your ideas into clear, memorable visuals
            that connect with your audience.
          </p>
          <div className="btns md:w-full w-[90%] mt-3 flex md:flex-row flex-col gap-3 items-center">
            <NavLink className="bg-[#CFEDFF] md:w-auto w-full text-center px-5 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300 shadow">
              Contact Me
            </NavLink>
            <NavLink className="border-[#CFEDFF] md:w-auto w-full justify-center flex gap-2 hover:gap-4 items-center border-2 px-7 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300">
              Learn More <FaArrowRightLong />
            </NavLink>
          </div>
        </div>
        <div className="right mt-10 md:mt-0 md:w-1/2 w-full flex items-center justify-center">
          <div className="image overflow-hidden w-full md:w-[95%] md:h-full flex items-center justify-center">
            <img
              src="https://www.pngplay.com/wp-content/uploads/13/Graphic-Art-Transparent-PNG.png"
              alt="Graphic Designing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
