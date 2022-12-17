import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex  w-[100%] justify-start items-center h-20 px-4  text-black  relative">
      <div className="md:flex flex-row justify-between absolute  z-10">
        <img src={logo} alt="/" />
        <div className="hidden md:flex justify-start  ml-[20%] lg:ml-[130%]">
          <ul className="hidden md:flex  text-white">
            <li className="mx-4 hover:cursor-pointer hover:text-gray-300">
              About
            </li>
            <li className="mx-4 hover:cursor-pointer hover:text-gray-300">
              Services
            </li>
            <li className="mx-4 hover:cursor-pointer hover:text-gray-300">
              Projects
            </li>
          </ul>
          <div className="  items-center  md:ml-[40%] hidden md:flex  ">
            <button className="hover:text-white uppercase font-semibold  bg-white hover:bg-Darkblue w-24 rounded-xl text-gray-900">
              contact
            </button>
          </div>
        </div>
      </div>

      {/* hamburger */}
      <div
        onClick={handleNav}
        className="md:hidden z-10 ml-[90%] hover:cursor-pointer "
      >
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <img src={hamburger} alt="/" />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={
          nav
            ? "absolute text-black left-0 z-10 top-[100%] h-[400%] w-[80%] ml-10  bg-white px-4 py-14  flex flex-col"
            : "absolute left-0 top-[-1000%]"
        }
      >
        <div className="flex flex-col mx-auto w-fit">
          <ul className="flex flex-col  text-gray-400 font-semibold ">
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              About
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              Services
            </li>
            <li className="my-3 hover:cursor-pointer hover:text-gray-300">
              Projects
            </li>
          </ul>
          <button className="-ml-5 font-bold text-Verydarkdesaturatedblue uppercase rounded-2xl bg-Yellow w-24 h-8 my-5">
            contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
