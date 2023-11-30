import React from "react";
import { motion } from "framer-motion";
import google from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/google-play.e0aec133.svg";
import playstore from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/download-ios.6f846953.svg";
import footerImage from "../../assets/becomeAtasker/footer_image-3940156b7767e8eecbd8246ddeef5190f193d826948275a779861e2f41839446.png";

const LastSection = () => {
  return (
    <div className="w-full relative h-[40vh]">
      <img
        src={footerImage}
        alt="footerImage"
        className="absolute bottom-1 z-0 w-full h-full hidden md:hidden lg:block xl:block"
      />
      <div className="z-10 w-[95%] py-20 md:w-[95%] lg:w-[80%] h-full relative xl:w-[80%] mx-auto flex flex-col justify-center items-start md:items-start lg:items-center xl:items-center gap-5">
        <motion.h1
          initial={{ opacity: 0.2, scale: 1.3 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 0.4 },
          }}
          className="text-4xl font-bold"
        >
          Ready to make money your way?
        </motion.h1>
        <motion.button
          initial={{ opacity: 0.2, scale: 0.4 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.6, delay: 0.4 },
          }}
          className=" px-[5vw] text-center bg-[#40864f] py-2 rounded-3xl  text-white border-[1px] hover:scale-x-95 transition-all duration-200 hover:bg-white hover:border-[#40864f] hover:text-[#40864f] border-black text-xl font-bold"
        >
          Get Started
        </motion.button>
        <div className="flex flex-col md:flex-col gap-1 lg:flex-row xl:flex-row justify-center items-center">
          <img src={playstore} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
