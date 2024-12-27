import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
      <header className="w-full h-14 p-2 font-[Poppins">
        <nav className="md:w-[90%] w-full h-full mx-auto flex items-center justify-between">
          <h1 className="logo font-semibold text-xl">Khayam Ijaz</h1>
          <ul className="md:flex gap-7 hidden items-center">
            <li>
              <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                Projects
              </NavLink>
            </li>
          </ul>
          <button className="bg-[#CFEDFF] md:block hidden transition-all duration-300 hover:bg-[#b0e1ff] px-5 py-2 rounded-md">
            Contact Me
          </button>
          <RiMenu4Fill
            onClick={() => setNav(true)}
            size={25}
                      cursor="pointer"
                      className='md:hidden block'
          />
        </nav>
        <nav
          className={`absolute right-0 top-0 backdrop-blur-sm bg-[#ffffff6f] w-[75%] transition-all duration-300 h-full ${
            nav ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <IoClose
            className="absolute top-4 right-4"
            onClick={() => setNav(false)}
            size={25}
            cursor="pointer"
          />
          <div className="w-full p-10 mt-5 flex flex-col gap-5">
            <ul className="flex md:hidden gap-7 flex-col justify-center">
              <li>
                <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#484848] cursor-pointer transition-all duration-300 hover:text-black font-semibold">
                  Projects
                </NavLink>
              </li>
            </ul>
            <button className="bg-[#CFEDFF] md:hidden block transition-all duration-300 hover:bg-[#b0e1ff] px-5 py-2 rounded-md">
              Contact Me
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
