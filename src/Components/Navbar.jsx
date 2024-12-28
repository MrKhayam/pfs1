import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Avatar } from '@mui/material';



const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
      <header className="w-full h-14 fixed p-2 font-[Poppins">
        <nav className="md:w-[90%] w-full h-full mx-auto flex items-center justify-between">
          <div className="logo font-semibold text-xl flex items-center gap-2">
            <Avatar
              alt="Khayam"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCH1LHaI8OdoN_zLKNSp9RFn6Qu-FEQKa8w&s"
            />
            <h1>Khayam Ijaz</h1>{" "}
          </div>
          <ul className="md:flex gap-7 hidden items-center">
            <li>
              <NavLink to="/" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                Projects
              </NavLink>
            </li>
          </ul>
          <NavLink to="/contact" className="bg-[#CFEDFF] md:block hidden transition-all duration-300 hover:bg-[#b0e1ff] px-5 py-2 rounded-md">
            Contact Me
          </NavLink>
          <RiMenu4Fill
            onClick={() => setNav(true)}
            size={25}
            cursor="pointer"
            className="md:hidden block"
          />
        </nav>
        <nav
          className={`absolute right-0 top-0 z-30 backdrop-blur-sm bg-[#ffffffc8] w-[75%] transition-all duration-300 h-screen ${
            nav ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <IoClose
            className="absolute top-4 right-4"
            onClick={() => setNav(false)}
            size={25}
            cursor="pointer"
          />
          <div className="w-full p-8 mt-5 flex flex-col gap-5">
            <ul className="flex md:hidden gap-7 flex-col justify-center">
              <li>
                <NavLink to="/" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  Projects
                </NavLink>
              </li>
            </ul>
            <NavLink to="/contact" className="bg-[#CFEDFF] md:hidden block transition-all duration-300 hover:bg-[#b0e1ff] px-5 py-2 rounded-md">
              Contact Me
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
