import React from "react";
import { motion } from "framer-motion";
import feedback from "../../assets/becomeAtasker/testimonial-779c1bf4e9d375692264bddc09568995.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const FeedBack = () => {
  return (
    <div className="w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto my-[10vh]">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1, delay: 0.4 } }}
        className="flex mb-10 justify-start md:justify-start lg:justify-center xl:justify-center items-center gap-3"
      >
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
        <div className="w-3 h-3 bg-[#40864f] rounded-full"></div>
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
      </motion.div>

      <div className="flex  flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-center items-start">
        <div className=" flex  flex-col justify-center items-start gap-6 pt-[6vh]">
          <RiDoubleQuotesL className="text-6xl font-bold text-[#40864f]" />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="-mt-7 text-2xl font-normal"
          >
            I love EZService! I was able to get out of debt, tackle bills,
            provide for my family, and still have enough room to save for future
            goals.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-lg text-black/75"
          >
            Karsheem W., New York, NY
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
          src={feedback}
          alt="feed"
          className="w-full"
        />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1, delay: 0.4 } }}
        className="flex my-[10vh] justify-start md:justify-start lg:justify-center xl:justify-center items-center gap-3"
      >
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
        <div className="w-3 h-3 bg-[#40864f] rounded-full"></div>
        <div className="h-1 w-16 bg-[#40864f] rounded-lg"></div>
      </motion.div>
    </div>
  );
};

export default FeedBack;
