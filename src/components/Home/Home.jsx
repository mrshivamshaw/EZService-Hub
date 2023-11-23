import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import ikea from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/Size_Default__Background_White__Language_en-US-CA__Logo_IKEA.webp'
import { IoSearchOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiDrill } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaBroomSolid } from "react-icons/lia";
import { GiFruitTree } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineFormatPaint } from "react-icons/md";
import { LiaFireSolid } from "react-icons/lia";
import topRight from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_right_shape.46afcf8f.svg'
import topleft from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_left_shape.a6553437.svg'
import HomeCard from '../HomeCard/HomeCard';
import assembly from '../../assets/homeCard/Shot_01_Assembly_0243_5__2_.png'
import mounting from '../../assets/homeCard/mounting-reverse_1__2_.png'
import moving from '../../assets/homeCard/Shot_09_HeavyLifting_0071__2__1__2_.png'
import cleaning from '../../assets/homeCard/Shot_12_Cleaning_0039_1__3_.png'
import it from '../../assets/homeCard/JCI_OpenBlue_Enterprise-Manager_Image_576X324.png'
import repair from '../../assets/homeCard/HomeRepair_3_950x491.png'
import painting from '../../assets/homeCard/Homepage_Painting.png'
import trending from '../../assets/homeCard/Shot_15_Plumbing_0142_12__2_.png'
import HomeCardBottom from './HomeCardBottom';
import ServiceProvider from '../ServiceProvider/ServiceProvider';
import Review from '../Review/Review';

const Home = () => {
    const [category,setCategory] = useState("Assembly");
    const services = [
        {
            icon : <VscTools className='text-3xl'/>,
            service:"Assembly",
            title : "Assembly",
            p1: "Assemble or disassemble furniture items by unboxing, building, and any cleanup.",
            p2:"Now Trending: Curved sofas, computer desks, and sustainable materials.",
            img: assembly
        },
        {
            icon : <GiDrill className='text-3xl'/>,
            service:"Mounting",
            title : "Mounting",
            p1: "Securely mount your TV, shelves, art, mirrors, dressers, and more.",
            p2:"Now Trending: Gallery walls, art TVs, and wraparound bookcases.",
            img: mounting
        },
        {
            icon : <CiDeliveryTruck className='text-3xl'/>,
            service:"Moving",
            title : "Moving",
            p1: "Moving help such as packing/unpacking, loading, and lifting heavy items.",
            p2:"Now Trending: Single-item moves, apartment moves, and junk removal.",
            img: moving
        },
        {
            icon : <LiaBroomSolid className='text-3xl'/>,
            service:"Cleaning",
            title : "Cleaning",
            p1: "Clean your home or office; deep clean appliances and other spaces.",
            p2:"Now Trending: Eco-friendly products, home cleaning checklists, and cleaning hacks.",
            img: cleaning
        },
        {
            icon : <HiOutlineComputerDesktop className='text-3xl'/>,
            service:"IT services",
            title : "IT services",
            p1: "Assemble or disassemble furniture items by unboxing, building, and any cleanup.",
            p2:"Now Trending: Curved sofas, computer desks, and sustainable materials.",
            img: it
        },
        {
            icon : <GiFruitTree className='text-3xl'/>,
            service:"Home Repairs",
            title : "Home Repairs",
            p1: "Home improvements like plumbing, electrical, and appliance installation.",
            p2:"Now Trending: Chandeliers, brass faucets, and smart toilets.",
            img: repair
        },
        {
            icon : <MdOutlineFormatPaint className='text-3xl'/>,
            service:"Painting",
            title : "Painting",
            p1: "Paint walls, ceilings, molding, and doors; includes prep and cleanup.",
            p2:"Now Trending: Color blocking, stripe details, and statement colors.",
            img: painting
        },
        {
            icon : <LiaFireSolid className='text-3xl'/>,
            service:"Trending",
            title : "Trending",
            p1: "Discover the hottest tasks that will level up your space.",
            p2:"Explore these trending tasks and book a skilled Tasker to enjoy the convenience and peace of mind that comes with it all!",
            img: trending
        },

    ]
  return (
    <div className='max-w-screen h-auto relative '>
        <NavBar/>
        <div className='absolute right-0'>
            <img src={topRight} alt="topright" />
        </div>
        <div className='absolute left-0 top-[20vh]'>
            <img src={topleft} alt="topleft" />
        </div>
        <div className='max-w-screen h-auto flex flex-col justify-center items-center gap-5'>
            <div className='w-full h-auto pl-[15vw]'>
                <img src={ikea} alt="ikea" className='w-[7vw] h-auto'/>
            </div>
            <div className='w-[42vw] h-auto'>
                <h1 className='text-[8.6vh] font-bold text-center text-[#386842] leading-tight' style={{WebkitTextStroke:".3px #000"}}>
                    Book trusted help for home tasks
                </h1>
            </div>
            <div className='outline outline-1 w-[45vw] h-[8vh] flex items-center rounded-[30px] mt-8'>
                <input type="text" style={{all:"unset",width:"100%",height:"100%",padding:"1px 30px",fontSize:"22px"}} placeholder='What do you need help with?'/>
                <button className='p-4 bg-[#386842] rounded-r-[30px]'><IoSearchOutline className='text-3xl text-white'/></button>
            </div>
            <div className='flex justify-center items-center h-auto w-full gap-[6vw] mt-12 border-b-2 '>
                {
                    services.map((service,index)=>(
                        <div onClick={()=>setCategory(service.service)} key={index} className={category===`${service.service}` ? 'flex flex-col justify-center items-center gap-4 text-[#40864f]  border-b-2 border-[#386842] pb-3 cursor-pointer' : 'flex flex-col justify-center items-center gap-4 cursor-pointer'}>
                            {service.icon}
                            <span className='text-lg font-semibold'>{service.service}</span>
                        </div>
                    ))
                }
            </div>
            <div className='w-full h-auto my-[4vh]'>
                {
                    services.map((service,index)=>(
                        <HomeCard key={index} category = { category } title={service.title} p1={service.p1} p2={service.p2} bg={service.img}/>
                    ))
                }
            </div>
            <HomeCardBottom/>
            <ServiceProvider/>
            <Review/>
        </div>
    </div>
  )
}

export default Home