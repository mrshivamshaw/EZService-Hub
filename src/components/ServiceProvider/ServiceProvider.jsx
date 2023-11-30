import React from "react";
import { motion } from "framer-motion";
import serviceProviderData from "../../data/serviceProvider.json";
import { GoArrowRight } from "react-icons/go";
import midShape from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_right_shape_first.bfe4482f.svg";
import { Link } from "react-router-dom";
const ServiceProvider = () => {
  const serviceProviders = serviceProviderData.serviceProviders;
  return (
    <div className="w-[100vw] mt-12 h-auto mx-auto relative flex flex-col justify-center items-center gap-10 ">
      <div className="absolute right-0 -top-40 hidden md:hidden lg:block xl:block z-20">
        <img src={midShape} alt="mid shape" />
      </div>
      <h1
        className="text-4xl font-bold w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] text-star pl-2 md:pl-2 lg:pl-12 xl:pl-12 text-[#386842]"
        style={{ WebkitTextStroke: ".3px #0d7a5f" }}
      >
        Service providers
      </h1>
      <div className="flex flex-wrap justify-center items-center  gap-x-12 gap-y-8 w-[95%] md:w-[95%] xl:w-[80%] lg:w-[80%] h-auto mx-auto ">
        {serviceProviders.map((provider) => (
          <Link key={provider.id} to={`/service/${provider.serviceType}`}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
              className="mx-auto w-[300px] md:w-[330px] lg:w-[330px] xl:w-[330px] flex justify-center items-start gap-7 flex-col h-auto rounded-b-xl bg-[#f0faf5] hover:bg-white shadow-md cursor-pointer"
            >
              <div className="w-full h-auto">
                <img
                  src={provider.img}
                  alt="jh"
                  className="w-[100%] md:w-[100%] lg:w-[330px] xl:w-[330px] h-[250px] md:h-[200px] lg:h-[200px] xl:h-[200px] "
                />
              </div>
              <div className="px-3 w-full">
                <h1
                  className="font-bold"
                  style={{ WebkitTextStroke: ".3px #0d7a5f" }}
                >
                  {provider.name}
                </h1>
                <h1
                  className="font-bold"
                  style={{ WebkitTextStroke: ".3px #0d7a5f" }}
                >
                  {provider.serviceType}
                </h1>
                <h1
                  className="text-sm font-semibold"
                  style={{ WebkitTextStroke: ".3px #0d7a5f" }}
                >
                  Location :{" "}
                  <span className="font-normal ">{provider.location}</span>
                </h1>
                <h1
                  className="text-sm font-semibold"
                  style={{ WebkitTextStroke: ".3px #0d7a5f" }}
                >
                  Timing :{" "}
                  <span className="font-normal">{provider.availability}</span>{" "}
                </h1>
                <div className="flex justify-between pb-3">
                  <h1 className="text-sm font-semibold">
                    Hourly rate :{" "}
                    <span className="text-[#386842] text-lg font-bold">
                      ${provider.hourlyRate}
                    </span>
                  </h1>
                  <div className="text-white hover:text-[#386842] bg-[#386842] hover:bg-white border border-[#386842] rounded-3xl text-sm font-medium flex justify-center items-center gap-1 px-3">
                    <button className=" text-center">view</button>
                    <GoArrowRight className=" text-xs font-bold" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvider;
