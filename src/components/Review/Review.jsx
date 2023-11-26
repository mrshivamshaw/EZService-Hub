import React from "react";
import reviewsData from "../../data/review.json";
import logo from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/US_TP_Logo_2x.webp";
import midLeft from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_left_shape.9b13a86d.svg";
import { IoStar } from "react-icons/io5";

const Review = () => {
  const reviews = reviewsData.reviews;
  return (
    <div className="w-[100vw] overflow-x-hidden h-auto relative flex flex-col justify-center items-center gap-[4vh] mt-[20vh] mb-[15vh]">
      <div className="absolute left-0 -top-[250px] hidden md:hidden lg:block xl:block">
        <img src={midLeft} alt="midLeft" />
      </div>
      <div className="w-[100%] mx-auto ">
        <h1
          className="text-4xl font-bold w-[95%] md:w-[95%] lg:w-[80%] mx-auto xl:w-[80%] text-star pl-2 md:pl-2 lg:pl-12 xl:pl-12 text-[#386842] text-start md:text-start lg:text-center xl:text-center"
          style={{ WebkitTextStroke: ".3px #0d7a5f" }}
        >
          See what happy customers are saying about EZService Hub
        </h1>
      </div>
      <div className="flex flex-wrap w-[100%] md:w-[85%] lg:w-[85%] xl:w-[85%] mx-auto justify-center items-center gap-x-10 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col p-4 items-start justify-start w-[95%] md:w-[95%] lg:w-[368px] xl:w-[368px] h-[294px] "
          >
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-lg font-bold">{review.userName}</h1>
              <div className="flex gap-1 text-yellow-300">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
            <p className="line-clamp-6 text-lg font-light">{review.comment}</p>
            <h1
              className="text-xl font-semibold pt-2 text-[#386842]"
              style={{ WebkitTextStroke: ".3px #386842" }}
            >
              {review.service}
            </h1>
          </div>
        ))}
      </div>
      <div className="h-[100px] w-full md:w-full xl:w-auto lg:w-auto -mt-8">
        <img src={logo} alt="logo" className="h-full w-full " />
      </div>
    </div>
  );
};

export default Review;
