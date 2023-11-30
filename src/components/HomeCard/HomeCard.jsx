import React from "react";
import { motion } from "framer-motion";
import { TiInputChecked } from "react-icons/ti";
const HomeCard = ({ category, title, p1, p2, bg }) => {
  return (
    <div
      className={
        category === title
          ? "block w-[100%] rounded-2xl transition-all duration-500"
          : "hidden"
      }
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0.1, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="z-20 lg:absolute xl:absolute static md:static left-36 shadow-none md:shadow-none lg:shadow-lg xl:shadow-lg top-24 bg-white w-full md:w-full lg:w-[340px] xl:w-[340px] h-auto md:h-auto lg:h-[360px] xl:h-[360px] flex flex-col justify-center items-start gap-3 md:gap-3 lg:gap-9 xl:gap-9 px-3 md:px-9 lg:px-9 xl:px-9 rounded-xl mb-9 "
        >
          <p className="text-3xl font-semibold">{title}</p>
          <div className="flex justify-start items-start gap-3">
            <TiInputChecked className="text-[30px] w-[10%]" />
            <p className="text-lg font-light w-[90%]">{p1}</p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <TiInputChecked className="text-[30px] w-[10%]" />
            <p className="text-lg font-light w-[90%]">{p2}</p>
          </div>
        </motion.div>
        <div className="w-full  md:w-full lg:w-[70%] xl:w-[70%] h-auto  bg-[#e2f1fb] py-2 md:py-2 xl:py-8 lg:py-8 pl-8 md:pl-3 lg:pl-14 xl:pl-14 rounded-2xl pr-2 md:pr-2 lg:pr-7 xl:pr-7 mx-auto">
          <img src={bg} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
