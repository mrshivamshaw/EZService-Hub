import React from "react";
import bg from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/bgImage.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={backgroundStyle}
    >
      <form>
        <div className="bg-white flex flex-col justify-start md:justify-start lg:justify-center xl:justify-center items-center px-4 md:px-4 lg:px-16 xl:px-16 py-10 font-semibold rounded-3xl gap-3 w-screen md:w-screen lg:w-auto xl:w-auto h-screen md:h-screen lg:h-auto xl:h-auto">
          <Link to="/">
            <h1
              className="text-5xl font-bold w-full text-center"
              style={{ WebkitTextStroke: ".9px #0d7a5f" }}
            >
              EZService Hub
            </h1>
          </Link>

          <input
            type="text"
            placeholder="First Name"
            className="w-full py-2 px-3 rounded-lg font-normal border-[2px] mt-8"
          />

          <input
            type="text"
            placeholder="Second Name"
            className="w-full py-2 px-3 rounded-lg font-normal border-[2px]"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full py-2 px-3 rounded-lg font-normal border-[2px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 rounded-lg font-normal border-[2px]"
          />
          <input
            type="text"
            placeholder="Zip code"
            className="w-full py-2 px-3 rounded-lg font-normal border-[2px]"
          />

          <p className="w-full text-center text-base font-normal">
            By clicking below and creating an account, I agree <br /> to
            EZService’s Terms of{" "}
            <span className="text-[#386842] font-medium">Service</span> and{" "}
            <span className="text-[#386842] font-medium">Privacy Policy.</span>
          </p>
          <button className="w-full bg-[#386842] text-white text-center py-[1.3vh] rounded-3xl">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
