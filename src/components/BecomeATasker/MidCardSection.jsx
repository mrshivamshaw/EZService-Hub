import React from "react";
import { motion } from "framer-motion";
import mobile from "../../assets/becomeAtasker/mobile.png";
import grow from "../../assets/becomeAtasker//grow.png";
import rates from "../../assets/becomeAtasker/rates.png";
import drilling from "../../assets/becomeAtasker/group-61-f9c4ed29423ef98b38ccc784ddff3996.png";

const MidCardSection = () => {
  return (
    <div className="w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto ">
      <div className="w-full flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center gap-[3vw]">
        <div className="flex flex-col justify-start items-start gap-2">
          <img src={mobile} alt="mobile" className="w-12 h-auto" />
          <h1 className="text-3xl font-bold">Be your own boss</h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-lg font-[350]"
          >
            Work how, when, and where you want. Offer services in 50+ categories
            and set a flexible schedule and work area.
          </motion.p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <img src={grow} alt="mobile" className="w-12 h-auto" />
          <h1 className="text-3xl font-bold">Set your own rates</h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-lg font-[350]"
          >
            You keep 100% of what you charge, plus tips! Invoice and get paid
            directly through our secure payment system.
          </motion.p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <img src={rates} alt="mobile" className="w-12 h-auto" />
          <h1 className="text-3xl font-bold">Grow your business</h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-lg font-[350]"
          >
            We connect you with clients in your area, and ways to market
            yourself — so you can focus on what you do best.
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-start my-[10vh] gap-5">
        <motion.img
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
          src={drilling}
          alt="drill"
          className="w-full md:w-full lg:w-[65%] xl:w-[65%]"
        />
        <div className="w-full md:w-full lg:w-[35%] xl:w-[35%] flex flex-col justify-start items-start pt-4 gap-7">
          <h1
            className="text-3xl font-bold"
            style={{ WebkitTextStroke: ".3px #40864f" }}
          >
            What is EZService Hub?
          </h1>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-lg font-[400]"
          >
            EZService Hub connects busy people in need of help with trusted
            local Taskers who can lend a hand with everything from home repairs
            to errands. As a Tasker, you can get paid to do what you love, when
            and where you want — all while saving the day for someone in your
            city.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1, delay: 0.4 } }}
        className="flex justify-start md:justify-start lg:justify-center xl:justify-center items-center gap-3"
      >
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
        <div className="w-3 h-3 bg-[#40864f] rounded-full"></div>
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
      </motion.div>
    </div>
  );
};

export default MidCardSection;
