import React from "react";
import signUP from "../../assets/becomeAtasker/gettingStarted/SignUp.png";
import profile from "../../assets/becomeAtasker/gettingStarted/profile-66b4a664320caa8c94ded811b3ec10dc.png";
import eligibility from "../../assets/becomeAtasker/gettingStarted/eligibility-68ec13c65cd448418fc4e27e0590d779.png";
import pay from "../../assets/becomeAtasker/gettingStarted/pay.png";
import schedule from "../../assets/becomeAtasker/gettingStarted/set_schedule-3cc95ece540a56dd1da9e407fffa0b84.png";
import jobs from "../../assets/becomeAtasker/gettingStarted/getting_jobs-037938907c55e3d9ae963b4a182b3150.png";

const GettingStarted = () => {
  return (
    <div className="w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto my-10">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="w-full text-start md:text-start lg:text-center xl:text-center text-4xl font-bold">
          Getting Started
        </h1>

        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-baseline gap-[3vw]">
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={signUP} alt="signup" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">1. Sign up</h1>
            <p className="text-lg font-[350]">
              Create your account. Then download the Tasker app to continue
              registration.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={profile} alt="profile" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">2. Build your profile</h1>
            <p className="text-lg font-[350]">
            Select what services you want to offer and where.

            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={eligibility} alt="eligibility" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">3. Verify your eligibility to task</h1>
            <p className="text-lg font-[350]">Confirm your identity and submit business verifications, as required.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-baseline gap-[3vw]">
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={pay} alt="pay" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">4. Pay registration fee</h1>
            <p className="text-lg font-[350]">
            In applicable cities, we charge a $25 registration fee that helps us provide the best service to you.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={schedule} alt="schedule" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">5. Set your schedule and work area</h1>
            <p className="text-lg font-[350]">
            Set your weekly availability and opt in to receive same-day jobs.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full md:w-full lg:w-[33%] xl:w-[33%]">
            <img src={jobs} alt="jobs" className="w-12 h-auto" />
            <h1 className="text-3xl font-bold">6. Start getting jobs</h1>
            <p className="text-lg font-[350]">
            Grow your business on your own terms.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
