import React from "react";
import serviceProviderData from "../../data/serviceProvider.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const serviceProviders = serviceProviderData.serviceProviders;

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
    <div className="w-[100vw] h-[100vh] ">
      <div className="w-[80%] mx-auto bg-slate-200">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="w-[160px] rounded-full">
              <img
                src={servicer.img}
                alt="img"
                className="rounded-full w-full h-[160px]"
              />
            </div>
            <div>
              <div className="flex gap-2">
                <span>{servicer.name}</span>
                <span>Elite</span>
                <span>Great Value</span>
              </div>
              <div className="flex justify-start items-center">
                <FaStar />
                <span>{servicer.rating}</span>
                <span>{"(291 reviews)"}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <h1>${servicer.hourlyRate}/hr</h1>
            <button>Select & continue</button>
          </div>
        </div>
        <div>
          <h1>About me</h1>
          <p>{servicer.about}</p>
        </div>
        <div>
          <h1>Skills & Experenice</h1>
          <p>{servicer.skill}</p>
        </div>
        <h1>Reviews for {servicer.serviceType}</h1>
        <div className="flex flex-col gap-9">
          {servicer.reviews.map((review) => (
            <div className="flex flex-col">
              <div className="flex justify-start items-center">
                <div className="w-[150px] h-[150px] bg-slate-100 rounded-full"></div>
                <div>
                  <h1>{review.name}</h1>
                  <div>
                    <span>
                      <FaStar />
                    </span>
                    <span>{servicer.rating}</span>
                  </div>
                </div>
              </div>
              <div>
                <span>{servicer.serviceType}</span>
                <span>on{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
