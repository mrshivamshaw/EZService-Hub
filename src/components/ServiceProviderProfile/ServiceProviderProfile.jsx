import React from "react";
import serviceProviderData from "../../data/serviceProvider.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const serviceProviders = serviceProviderData.serviceProviders;
import profie from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/download.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

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
    <div className="max-w-[100vw] h-[100vh] ">
      <NavBar />
      <div className="w-[93%] md:w-[93%] lg:w-[80%] xl:w-[80%] mx-auto py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start md:items-start lg:items-center xl:items-center ">
          <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row  justify-center items-start md:items-start lg:items-center xl:items-center gap-5">
            <div className="w-[260px] rounded-full ">
              <img
                src={servicer.img}
                alt="img"
                className="rounded-full w-full h-[260px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-baseline gap-2">
                <span
                  className="text-3xl font-bold"
                  style={{ WebkitTextStroke: ".3px #309847" }}
                >
                  {servicer.name}
                </span>
                <div className="flex justify-center items-center gap-[2px]">
                <span className="py-[1px] px-2 rounded-2xl bg-green-300 text-base font-semibold">
                  Elite
                </span>
                <span className="py-[1px] px-2 rounded-2xl bg-cyan-100 text-base font-semibold">
                  Great Value
                </span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 text-lg font-semibold">
                <div className="flex justify-start items-start gap-3">
                  <FaStar className="text-yellow-300 " />
                  <span className="-ml-2 ">{servicer.rating}</span>
                </div>
                <span className="w-full text-start">{"(291 reviews)"}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-start lg:items-end xl:items-end w-full md:w-full xl:w-auto lg:w-auto gap-1">
            <h1 className="font-bold text-2xl text-[#309847]" v>
              ${servicer.hourlyRate}/hr
            </h1>
            <button
              className="px-4 py-2 border w-full text-white hover:opacity-80 hover:scale-90 transition-all duration-500 rounded-3xl text-lg font-semibold bg-[#309847]"
              style={{ WebkitTextStroke: ".3px #000" }}
            >
              Select & continue
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#309847] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            About{" "}
            <span style={{ WebkitTextStroke: ".3px #309847", color: "black" }}>
              me
            </span>
          </h1>
          <p className="text-base font-normal opacity-90">{servicer.about}</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#309847] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            Skills &{" "}
            <span
              className="text-black"
              style={{ WebkitTextStroke: ".3px #309847" }}
            >
              Experenice
            </span>
          </h1>
          <p className="text-base font-normal opacity-90">{servicer.skill}</p>
        </div>
        <div className="flex flex-col gap-9  justify-start items-start">
          <h1
            className="text-3xl font-medium pb-[1px] px-2 border-b-[3px] border-b-red-400 text-[#309847] "
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            Reviews for{" "}
            <span
              className="text-black"
              style={{ WebkitTextStroke: ".3px #309847" }}
            >
              {servicer.serviceType}
            </span>
          </h1>
          {servicer.reviews.map((review) => (
            <div className="flex flex-col gap-2">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[100px] h-[100px]  rounded-full">
                  <img
                    src={profie}
                    alt="pro"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1
                    className="text-lg font-medium"
                    style={{ WebkitTextStroke: ".3px #309847" }}
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
                <span className="font-bold text-[#309847]">
                  {servicer.serviceType}{" "}
                </span>
                <span className="text-black/80 text-xs font-medium">
                  {" "}
                  {review.date}
                </span>
              </div>
              <div className="font-[350]">{review.comment}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceProviderProfile;
