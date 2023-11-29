import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="relative w-[100vw] border-b-2 bg-white">
      <div className="w-[95%] md:w-[95%] lg:w-full xl:w-full h-[10vh] flex justify-center md:justify-center lg:justify-between xl:justify-between items-center mx-auto px-0 md:px-0 lg:px-[10vw] xl:px-[10vw] ">
        <div className="flex gap-2 justify-center items-center">
          {!navActive && (
            <FaBars
              className="font-semibold text-xl block md:block lg:hidden xl:hidden absolute left-3"
              onClick={() => setNavActive((prev) => !prev)}
            />
          )}
          <Link to="/">
            <h1
              className="font-semibold text-2xl md:text-2xl lg:text-4xl xl:text-4xl "
              style={{ WebkitTextStroke: ".3px #0d7a5f" }}
            >
              EZService Hub
            </h1>
          </Link>
        </div>

        <div>
          <ul className="flex justify-center items-center gap-2 md:gap-2 lg:gap-11 xl:gap-11 ">
            <Link to="/services">
              <li className="hidden md:hidden lg:block xl:block">
                <button className="font-medium text-lg md:text-lg lg:text-[17px] xl:text-[17px] ">
                  Services
                </button>
              </li>
            </Link>
            <li className="hidden md:hidden lg:block xl:block">
              <div className="font-medium text-[17px]">
                <Link to="/signin">
                  <button>Sign up</button>
                </Link>
                <span> / </span>
                <Link to="/login">
                  <button>Log in</button>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/become-a-tasker">
                <button className="font-semibold hidden md:hidden lg:block xl:block  text-sm md:text-sm lg:text-[17px] xl:text-[17px] border border-[#0d7a5f] hover:bg-[#0d7a5f] hover:text-white transition-all duration-300 text-[#0d7a5f] px-3 md:px-3 lg:px-8 xl:px-8 rounded-2xl py-1 md:py-1 lg:py-2 xl:py-2">
                  Become a Tasker
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navActive && (
        <div className="w-full z-50 top-0 absolute h-[110vh] overflow-hidden block md:block lg:hidden xl:hidden ">
          <div className="w-full h-full flex fixed top-0">
            <div className="w-[85vw] flex bg-white p-4">
              <div className="flex flex-col gap-5 justify-start mx-auto w-full">
                <div className="relative">
                  {navActive && (
                    <FaTimes
                      className="font-semibold mt-4 mb-2 ml-[30vw] text-end w-full text-xl block md:block lg:hidden xl:hidden"
                      onClick={() => setNavActive((prev) => !prev)}
                    />
                  )}
                </div>
                <Link to={"/services"}>
                  <div className="text-[#386842] border-b-2 border-t-2 w-full text-lg pl-2 pb-5 pt-5 flex justify-start items-center gap-1">
                    <span>services</span>{" "}
                    <FaChevronRight className=" text-[.8rem]" />
                  </div>
                </Link>
                <Link to={"/login"}>
                  <div className="text-[#386842] border-b-2 font-semibold w-full text-xl pl-2 pb-5">
                    Log in
                  </div>
                </Link>
                <Link to={"/signin"}>
                  <div className="text-[#386842] border-b-2 font-semibold w-full text-xl pl-2 pb-5">
                    Sign in
                  </div>
                </Link>
                <Link to={"/become-a-tasker"}>
                  <div className="text-[#386842] border-b-2 font-semibold w-full text-xl pl-2 pb-5">
                    Become a Tasker
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-[15vw] h-full bg-black/30"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
