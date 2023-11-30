import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ikea from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/Size_Default__Background_White__Language_en-US-CA__Logo_IKEA.webp";
import { IoSearchOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiDrill } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { LiaBroomSolid } from "react-icons/lia";
import { GiFruitTree } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdCircle, MdOutlineFormatPaint, MdOutlineQuestionMark, MdQuestionMark } from "react-icons/md";
import { LiaFireSolid } from "react-icons/lia";
import topRight from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_right_shape.46afcf8f.svg";
import topleft from "../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_left_shape.a6553437.svg";
import HomeCard from "../HomeCard/HomeCard";
import assembly from "../../assets/homeCard/Shot_01_Assembly_0243_5__2_.png";
import mounting from "../../assets/homeCard/mounting-reverse_1__2_.png";
import moving from "../../assets/homeCard/Shot_09_HeavyLifting_0071__2__1__2_.png";
import cleaning from "../../assets/homeCard/Shot_12_Cleaning_0039_1__3_.png";
import it from "../../assets/homeCard/JCI_OpenBlue_Enterprise-Manager_Image_576X324.png";
import repair from "../../assets/homeCard/HomeRepair_3_950x491.png";
import painting from "../../assets/homeCard/Homepage_Painting.png";
import trending from "../../assets/homeCard/Shot_15_Plumbing_0142_12__2_.png";
import HomeCardBottom from "./HomeCardBottom";
import ServiceProvider from "../ServiceProvider/ServiceProvider";
import Review from "../Review/Review";
import HomeSatisfaction from "./HomeSatisfaction";
import GetHelp from "../GetHelp/GetHelp";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Home = () => {
  const [category, setCategory] = useState("Assembly");
  const services = [
    {
      icon: <VscTools className="text-3xl" />,
      service: "Assembly",
      title: "Assembly",
      p1: "Assemble or disassemble furniture items by unboxing, building, and any cleanup.",
      p2: "Now Trending: Curved sofas, computer desks, and sustainable materials.",
      img: assembly,
    },
    {
      icon: <GiDrill className="text-3xl" />,
      service: "Mounting",
      title: "Mounting",
      p1: "Securely mount your TV, shelves, art, mirrors, dressers, and more.",
      p2: "Now Trending: Gallery walls, art TVs, and wraparound bookcases.",
      img: mounting,
    },
    {
      icon: <CiDeliveryTruck className="text-3xl" />,
      service: "Moving",
      title: "Moving",
      p1: "Moving help such as packing/unpacking, loading, and lifting heavy items.",
      p2: "Now Trending: Single-item moves, apartment moves, and junk removal.",
      img: moving,
    },
    {
      icon: <LiaBroomSolid className="text-3xl" />,
      service: "Cleaning",
      title: "Cleaning",
      p1: "Clean your home or office; deep clean appliances and other spaces.",
      p2: "Now Trending: Eco-friendly products, home cleaning checklists, and cleaning hacks.",
      img: cleaning,
    },
    {
      icon: <HiOutlineComputerDesktop className="text-3xl" />,
      service: "IT services",
      title: "IT services",
      p1: "Assemble or disassemble furniture items by unboxing, building, and any cleanup.",
      p2: "Now Trending: Curved sofas, computer desks, and sustainable materials.",
      img: it,
    },
    {
      icon: <GiFruitTree className="text-3xl" />,
      service: "Home Repairs",
      title: "Home Repairs",
      p1: "Home improvements like plumbing, electrical, and appliance installation.",
      p2: "Now Trending: Chandeliers, brass faucets, and smart toilets.",
      img: repair,
    },
    {
      icon: <MdOutlineFormatPaint className="text-3xl" />,
      service: "Painting",
      title: "Painting",
      p1: "Paint walls, ceilings, molding, and doors; includes prep and cleanup.",
      p2: "Now Trending: Color blocking, stripe details, and statement colors.",
      img: painting,
    },
    {
      icon: <LiaFireSolid className="text-3xl" />,
      service: "Trending",
      title: "Trending",
      p1: "Discover the hottest tasks that will level up your space.",
      p2: "Explore these trending tasks and book a skilled Tasker to enjoy the convenience and peace of mind that comes with it all!",
      img: trending,
    },
  ];
  return (
    <div className="max-w-[100vw] h-auto relative overflow-hidden overflow-x-hidden">
      <NavBar />
      <button className="flex justify-center items-center gap-2 font-bold text-white hover:text-[#386842] bg-[#386842] hover:bg-white border border-[#386842] px-2 md:px-2 lg:px-4 xl:px-4 py-2 top-[90vh] md:top-[90vh] lg:top-[93vh] xl:top-[93vh] left-3 rounded-3xl text-2xl fixed z-20">
         <span><GoQuestion/></span><span className="text-base hidden md:hidden lg:block xl:block">Help</span>
      </button>
      <div className="absolute right-0 hidden md:hidden lg:block xl:block">
        <img src={topRight} alt="topright" />
      </div>
      <div className="absolute left-0 top-[20vh] hidden md:hidden lg:block xl:block">
        <img src={topleft} alt="topleft" />
      </div>
      <div className="w-[100vw] overflow-hidden h-auto flex flex-col justify-center items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.6, delay: 0.3 },
          }}
          className="h-auto mt-[10vh] md:mt-[10vh] lg:mt-[20vh] xl:mt-[20vh] w-full pl-4 md:pl-4 lg:pl-0 xl:pl-0 mx-auto"
        >
          <h1
            className="text-4xl md:text-[8.6vh] lg:text-[8.6vh] xl:text-[8.6vh] font-bold text-start md:text-center lg:text-center xl:text-center text-[#386842] leading-tight"
            style={{ WebkitTextStroke: ".3px #000" }}
          >
            Book trusted help <br /> for home tasks
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1, transition: { duration: 1.6, delay: 0.3 } }}
          className="outline outline-1 w-[95%] md:w-[60vw] lg:w-[45vw] xl:w-[45vw] h-[8vh] flex items-center rounded-[30px] mt-8"
        >
          <input
            type="text"
            style={{
              all: "unset",
              width: "100%",
              height: "100%",
              padding: "1px 30px",
              fontSize: "22px",
            }}
            placeholder="What do you need help with?"
          />
          <button className="p-4 bg-[#386842] rounded-r-[30px] h-full flex justify-center items-center">
            <IoSearchOutline className="text-3xl text-white" />
          </button>
        </motion.div>
        <div className="w-full">
          <div className="flex mx-auto justify-center items-center h-auto w-auto md:w-auto lg:w-[85%] xl:w-[85%] gap-[6vw] mt-12 border-b-2 overflow-x-scroll pl-[79vw] lg:pl-0 xl:pl-0 md:pl-[79vw] pr-5 md:pr-5 lg:pr-0 xl:pr-0 md:overflow-x-scrolllg:overflow-x-hidden xl:overflow-x-hidden">
            {services.map((service, index) => (
              <div
                onClick={() => setCategory(service.service)}
                key={index}
                className={
                  category === `${service.service}`
                    ? " flex flex-col justify-center items-center gap-4 text-[#40864f]  border-b-2 border-[#386842] pb-3 cursor-pointer"
                    : " flex flex-col justify-center items-center gap-4 cursor-pointer"
                }
              >
                {service.icon}
                <span className="text-[2vh] text-center font-semibold">
                  {service.service}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto my-[2vh] md:my-[2vh] lg:my-[4vh] xl:my-[4vh]">
          {services.map((service, index) => (
            <HomeCard
              key={index}
              category={category}
              title={service.title}
              p1={service.p1}
              p2={service.p2}
              bg={service.img}
            />
          ))}
        </div>
        <HomeCardBottom />
        <ServiceProvider />
        <Review />
        <HomeSatisfaction />
        <GetHelp />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
