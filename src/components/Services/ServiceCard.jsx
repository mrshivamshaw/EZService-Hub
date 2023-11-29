import React from "react";
import "./services.css";
import { motion } from "framer-motion";

const ServiceCard = ({ items, description, image, heading }) => {
  return (
    <div className="w-full md:w-full lg:w-[380px] xl:w-[380px] h-auto main border rounded-md border-slate-300">
      <div className="w-full h-[200px]">
        <img src={image} alt="j" className="w-full rounded-md h-full " />
      </div>
      <div className="flex flex-col justify-start items-start p-5 w-full gap-3">
        <div className="border-b-[1.8px] pb-5 w-full">
          <h1 className="text-lg font-semibold text-[#386842]">{heading}</h1>
          <p className="text-[1rem] text-black/70">{description}</p>
        </div>
        {items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
            key={index}
            className="text-base text-[#386842] font-[460] cursor-pointer"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
