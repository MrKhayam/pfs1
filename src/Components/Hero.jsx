import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="md:w-[90%] h-full mx-auto flex items-center justify-between">
        <div className="left w-1/2 gap-5">
          <h1 className="md:text-5xl font-semibold">Hello I'm Khayam</h1>
          <p className="text-lg mt-2">
            I create designs that tell stories and leave a lasting impact. From
            logos to branding, I turn your ideas into clear, memorable visuals
            that connect with your audience.
          </p>
          <div className="btns w-full mt-3 flex gap-3 items-center">
            <NavLink className="bg-[#CFEDFF] px-5 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300 shadow">
              Contact Me
            </NavLink>
            <NavLink className="border-[#CFEDFF] flex gap-2 hover:gap-4 items-center border-2 px-7 py-3 rounded-md hover:bg-[#b0e1ff] transition-all duration-300">
              Learn More <FaArrowRightLong />
            </NavLink>
          </div>
        </div>
        <div className="right flex items-center justify-center">
          <div className="image overflow-hidden w-[95%] md:h-full flex items-center justify-center">
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
