import React from "react";
import bg from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/bgImage.jpg";
import { Link } from "react-router-dom";

const LogIn = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-[100vw] h-screen flex justify-center items-center"
      style={backgroundStyle}
    >
      <div className="bg-white flex flex-col justify-start md:justify-start lg:justify-center xl:justify-center items-center px-4 md:px-4 lg:px-16 xl:px-16 py-10 font-semibold rounded-3xl gap-3 w-screen md:w-screen lg:w-auto xl:w-auto h-screen md:h-screen lg:h-auto xl:h-auto">
        <Link to="/">
          <h1
            className="text-5xl font-bold w-full text-center"
            style={{ WebkitTextStroke: ".9px #0d7a5f" }}
          >
            EZService Hub
          </h1>
        </Link>
        <div className="w-full">
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="email" className="text-sm text-black/50">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full py-3 px-3 rounded-lg font-normal border-[2px]"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="pass" className="text-sm text-black/50">
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              className="w-full py-3 px-3 rounded-lg font-normal border-[2px]"
            />
            <p className="text-[#386842] font-semibold text-sm">
              Forgot password?
            </p>
          </div>
        </div>
        <button className="w-full bg-[#386842] text-white text-center py-[1.3vh] rounded-3xl">
          Log in
        </button>
        <p className="w-full text-center text-base font-normal">
          Signed up with <br />
          Facebook or Google?{" "}
          <span className="text-[#386842] font-medium">Create Password</span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
