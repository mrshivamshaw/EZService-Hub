import React from "react";
import { motion } from "framer-motion";

const HomeCardBottom = () => {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: -40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      className="w-full flex flex-wrap max-w-screen items-center justify-center gap-16 py-10 "
      style={{
        backgroundImage: "linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)",
      }}
    >
      <div className="w-[180px]">
        <h2 className="text-2xl font-semibold">Furniture Assemblies:</h2>
        <h1 className="text-3xl text-[#386842] font-semibold">3.4 million+</h1>
      </div>
      <div className="w-[180px]">
        <h2 className="text-2xl font-semibold">Moving tasks:</h2>
        <h1 className="text-3xl text-[#386842] font-semibold">1.5 million+</h1>
      </div>
      <div className="w-[180px]">
        <h2 className="text-2xl font-semibold">Items mounted:</h2>
        <h1 className="text-3xl text-[#386842] font-semibold">1 million+</h1>
      </div>
      <div className="w-[180px]">
        <h2 className="text-2xl font-semibold">Home Repairs:</h2>
        <h1 className="text-3xl text-[#386842] font-semibold">700,000+</h1>
      </div>
      <div className="w-[180px]">
        <h2 className="text-2xl font-semibold">Homes cleaned:</h2>
        <h1 className="text-3xl text-[#386842] font-semibold">890,000+</h1>
      </div>
    </motion.div>
  );
};

export default HomeCardBottom;
