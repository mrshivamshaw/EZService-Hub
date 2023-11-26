import React from 'react'
import getHelp from '../../data/getHelp.json'
import { FaChevronRight } from "react-icons/fa6";
import img1 from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/bot_left_shape.1d9561ce.svg'
import img2 from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/bot_right_shape.67c5e775.svg'

const Gethelp = getHelp.getHelp
 
const GetHelp = () => {
  return (
    <div className='max-w-[100vw] h-auto mx-auto pb-[15vh] relative'>
        <div className='hidden md:hidden lg:block xl:block'><img src={img1} alt="left" className='absolute -bottom-10 z-0'/></div>
        <div className='hidden md:hidden lg:block xl:block'><img src={img2} alt="right" className='absolute right-0'/></div>
        <div className='flex flex-col w-[93%] md:w-[93%] lg:w-[80%] xl:w-[80%] mx-auto gap-[8vh]'>
            <div><h1 className='w-full text-start text-4xl font-bold text-[#386842]' style={{WebkitTextStroke:".3px #000"}}>Get help Today</h1></div>
            <div className='flex flex-wrap w-full gap-5'>
                {
                    Gethelp.map((help,index)=>(
                        <button key={index} className='border-[1px] border-black rounded-2xl py-[3px] px-4 text-sm md:text-sm lg:text-2xl xl:text-lg font-medium'>{help}</button>
                    ))
                }
            </div>
            <div className='flex gap-3 justify-start items-center w-full'><button className='text-xl font-semibold text-[#386842]'>All Services <FaChevronRight className='inline'/></button></div>
        </div>
    </div>
  )
}

export default GetHelp