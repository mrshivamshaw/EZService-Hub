import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import landing from "../../assets/becomeAtasker/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.png";
import MidSectionAbout from "./MidSectionAbout";
import GettingStarted from "./GettingStarted";
import FeedBack from "./FeedBack";
import LastSection from "./LastSection";
import Footer from "../Footer/Footer";
import MidCardSection from "./MidCardSection";
import { motion } from "framer-motion";

const BecomeATasker = () => {
  return (
    <div className=" max-w-[100vw]  bg-white overflow-x-hidden">
      <div className="w-full border-b-2 flex justify-start items-center h-[10vh] ">
        <Link to="/">
          <h1
            className="font-semibold text-start text-2xl md:text-2xl lg:text-4xl xl:text-4xl ml-[10vw]"
            style={{ WebkitTextStroke: ".3px #0d7a5f" }}
          >
            EZService Hub
          </h1>
        </Link>
      </div>
      <div className="w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%]  mx-auto mt-[6vh] ">
        <div className="w-full flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center md:justify-center lg:justify-between xl:justify-between items-center md:items-center lg:items-start xl:items-start gap-6 ">
          <motion.div
            initial={{ opacity: 0.5 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.4 },
            }}
            className="w-[60%] hidden md:hidden lg:block xl:block"
          >
            <img src={landing} alt="landing" className="w-full h-auto" />
          </motion.div>
          <div className="w-auto flex flex-col justify-between items-start h-auto gap-6 ">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.6 },
              }}
              className="text-4xl font-bold  text-[#40864f]"
              style={{ WebkitTextStroke: ".3px #000" }}
            >
              Earn money your way
            </motion.h1>
            <p className="text-lg font-normal opacity-95">
              See how much you can make tasking on EZService Hub
            </p>
            <form
              action=""
              className="flex flex-col justify-start w-full  gap-6"
            >
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="area" className="text-xl font-semibold ">
                  Select your area
                </label>
                <motion.input
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, delay: 0.3 },
                  }}
                  type="text"
                  placeholder="Gujrat"
                  id="area"
                  className="w-full text-lg py-2 px-3 rounded-lg font-normal border-[2px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="area" className="text-xl font-semibold ">
                  Choose a Category
                </label>
                <motion.input
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, delay: 0.3 },
                  }}
                  type="text"
                  placeholder="Help Moving"
                  id="area"
                  className="w-full text-lg py-2 px-3 rounded-lg font-normal border-[2px]"
                />
              </div>
              <div className=" w-full">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1.5, delay: 1.3 },
                  }}
                  className="w-full text-start text-5xl font-bold"
                  style={{ WebkitTextStroke: ".3px #309847" }}
                >
                  <span>$45</span>
                  <span className="w-full text-start text-xl font-normal ml-1">
                    per hour
                    <AiOutlineQuestionCircle className="inline ml-1" />
                  </span>
                </motion.span>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.4 },
                }}
                type="submit"
                className="w-full text-center bg-[#40864f] py-2 rounded-3xl text-lg text-white border-[1px] hover:scale-x-95 transition-all duration-200 hover:bg-white hover:border-[#40864f] hover:text-[#40864f] border-black"
              >
                Get starter
              </motion.button>
              <div className="text-lg font-normal w-full flex items-center justify-center gap-2">
                <span>Already have an account?</span>
                <Link to="/signin">
                  <span className="text-[#40864f]"> Sign in</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MidSectionAbout />
      <MidCardSection />
      <GettingStarted />
      <FeedBack />
      <LastSection />
      <Footer />
    </div>
  );
};

export default BecomeATasker;
