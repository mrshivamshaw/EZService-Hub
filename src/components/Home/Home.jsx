import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import ikea from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/Size_Default__Background_White__Language_en-US-CA__Logo_IKEA.webp'
import { IoSearchOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GiDrill } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaBroomSolid } from "react-icons/lia";
import { GiFruitTree } from "react-icons/gi";
import { LiaHammerSolid } from "react-icons/lia";
import { MdOutlineFormatPaint } from "react-icons/md";
import { LiaFireSolid } from "react-icons/lia";
import topRight from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_right_shape.46afcf8f.svg'
import topleft from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/top_left_shape.a6553437.svg'

const Home = () => {
    const [category,setCategory] = useState("Assembly");
    const services = [
        {
            icon : <VscTools className='text-3xl'/>,
            service:"Assembly"
        },
        {
            icon : <GiDrill className='text-3xl'/>,
            service:"Mounting"
        },
        {
            icon : <CiDeliveryTruck className='text-3xl'/>,
            service:"Moving"
        },
        {
            icon : <LiaBroomSolid className='text-3xl'/>,
            service:"Cleaning"
        },
        {
            icon : <LiaBroomSolid className='text-3xl'/>,
            service:"Outdoor Help"
        },
        {
            icon : <GiFruitTree className='text-3xl'/>,
            service:"Home Repairs"
        },
        {
            icon : <MdOutlineFormatPaint className='text-3xl'/>,
            service:"Painting"
        },
        {
            icon : <LiaFireSolid className='text-3xl'/>,
            service:"Trending"
        },

    ]
  return (
    <div className='max-w-screen h-auto relative'>
        <NavBar/>
        <div className='absolute right-0'>
            <img src={topRight} alt="topright" />
        </div>
        <div className='absolute left-0 top-[20vh]'>
            <img src={topleft} alt="topleft" />
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-5'>
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
                        <div onClick={()=>setCategory(service.service)} key={index} className={category===`${service.service}` ? 'flex flex-col justify-center items-center gap-4 text-[#65bdd1]  border-b-2 border-[#65bdd1] pb-3 cursor-pointer' : 'flex flex-col justify-center items-center gap-4 cursor-pointer'}>
                            {service.icon}
                            <span className='text-lg'>{service.service}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home