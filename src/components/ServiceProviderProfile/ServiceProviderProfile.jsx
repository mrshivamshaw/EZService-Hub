import React from "react";
import serviceProviderData from "../../data/serviceProvider.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const serviceProviders = serviceProviderData.serviceProviders;
import profie from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/download.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const ServiceProviderProfile = () => {
  const serviceTypeUrl = useParams();
  console.log(serviceTypeUrl);
  var servicer = {};
  serviceProviders.map((serviceProvider) => {
    if (serviceProvider.serviceType === serviceTypeUrl.serviceProvider) {
      servicer = serviceProvider;
    }
  });
  console.log(servicer);

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <NavBar />
      <div className="w-[93%] md:w-[93%] lg:w-[80%] xl:w-[80%] mx-auto py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start md:items-start lg:items-center xl:items-center ">
          <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row  justify-center items-start md:items-start lg:items-center xl:items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="w-[260px] rounded-full "
            >
              <img
                src={servicer.img}
                alt="img"
                className="rounded-full w-full h-[260px]"
              />
            </motion.div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-baseline gap-2">
                <motion.span
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.4 },
                  }}
                  className="text-3xl font-bold"
                  style={{ WebkitTextStroke: ".3px #309847" }}
                >
                  {servicer.name}
                </motion.span>
                <div className="flex justify-center items-center gap-[2px]">
                  <motion.span
                    initial={{ opacity: 0.2 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1, delay: 1 },
                    }}
                    className="py-[1px] px-2 rounded-2xl bg-green-300 text-base font-semibold"
                  >
                    Elite
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0.2 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1, delay: 1 },
                    }}
                    className="py-[1px] px-2 rounded-2xl bg-cyan-100 text-base font-semibold"
                  >
                    Great Value
                  </motion.span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 text-lg font-semibold">
                <motion.div
                  initial={{ opacity: 0.2 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1 },
                  }}
                  className="flex justify-start items-center gap-3"
                >
                  <FaStar className="text-yellow-300 " />
                  <span className="-ml-2 ">{servicer.rating}</span>
                </motion.div>
                <span className="w-full text-start text-sm text-black/50">
                  {"(291 reviews)"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-start lg:items-end xl:items-end w-full md:w-full xl:w-auto lg:w-auto gap-1">
            <h1 className="font-bold text-2xl text-[#386842]" v>
              ${servicer.hourlyRate}/hr
            </h1>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="px-4 py-2 border border-[#386842] w-full hover:text-[#386842] text-white hover:opacity-80 hover:scale-90 transition-all duration-500 rounded-3xl text-lg font-semibold bg-[#386842] hover:bg-white"
            >
              Select & continue
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#386842] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            About{" "}
            <span style={{ WebkitTextStroke: ".3px #309847", color: "black" }}>
              me
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-base font-normal "
          >
            {servicer.about}
          </motion.p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#386842] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            Skills &{" "}
            <span
              className="text-black"
              style={{ WebkitTextStroke: ".3px #386842" }}
            >
              Experenice
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.4 },
            }}
            className="text-base font-normal "
          >
            {servicer.skill}
          </motion.p>
        </div>
        <div className="flex flex-col gap-9  justify-start items-start">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#386842] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            Reviews for{" "}
            <span
              className="text-black"
              style={{ WebkitTextStroke: ".3px #386842" }}
            >
              {servicer.serviceType}
            </span>
          </h1>
          {servicer.reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-start items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                  className="w-[100px] h-[100px]  rounded-full"
                >
                  <img
                    src={profie}
                    alt="pro"
                    className="w-full h-full rounded-full"
                  />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h1
                    className="text-lg font-medium"
                    style={{ WebkitTextStroke: ".3px #386842" }}
                  >
                    {review.name}
                  </h1>
                  <div className=" flex justify-start items-center text-lg gap-[2px]">
                    <FaStar className="text-yellow-300" />
                    <span className="text-sm font-semibold">
                      {servicer.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-baseline gap-1">
                <motion.span
                  initial={{ opacity: 0.2 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1 },
                  }}
                  className="font-bold text-[#386842]"
                >
                  {servicer.serviceType}{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0.2 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1 },
                  }}
                  className="text-black/80 text-xs font-medium"
                >
                  {" "}
                  {review.date}
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.4 },
                }}
                className="font-[350]"
              >
                {review.comment}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceProviderProfile;
