import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import landing from '../../assets/becomeAtasker/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.png'
const BecomeATasker = () => {
    const [navActive,setNavActive] = useState(false)

  return (
    <div className=' w-[100vw]  bg-white overflow-hidden'>
        <div className='w-[95%] border-b-2 md:w-[95%] lg:w-full xl:w-full h-[10vh] flex justify-between items-center mx-auto px-0 md:px-0 lg:px-[10vw] xl:px-[10vw] '>
            <div className='flex gap-2 justify-center items-center'>
                {!navActive && <FaBars className='font-semibold text-xl block md:block lg:hidden xl:hidden' onClick={()=>setNavActive(prev =>!prev)}/>}
                {navActive && <FaTimes className='font-semibold text-xl block md:block lg:hidden xl:hidden' onClick={()=>setNavActive(prev =>!prev)}/> }
                <Link to='/'>
                    <h1 className='font-semibold text-2xl md:text-2xl lg:text-4xl xl:text-4xl' style={{WebkitTextStroke:".3px #0d7a5f"}}>EZService Hub</h1>
                </Link>
            </div>
        </div>
        <div className='w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%]  mx-auto mt-[6vh] '>
            <div className='w-full flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center md:justify-center lg:justify-between xl:justify-between items-center md:items-center lg:items-start xl:items-start gap-6 '>
                <div className='w-[60%] hidden md:hidden lg:block xl:block'>
                    <img src={landing} alt="landing"  className='w-full h-auto'/>
                </div>
                <div className='w-auto flex flex-col justify-between items-start h-auto gap-6 '>
                    <h1 className='text-4xl font-bold  text-[#309847]' style={{WebkitTextStroke:".3px #000"}}>Earn money your way</h1>
                    <p className='text-lg font-normal opacity-95'>See how much you can make
                    tasking on EZService Hub</p>
                    <form action="" className='flex flex-col justify-start w-full  gap-6'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="area" className="text-xl font-semibold ">Select your area</label>
                            <input type="text" placeholder='Gujrat' id='area' className='w-full text-lg py-2 px-3 rounded-lg font-normal border-[2px]'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="area" className="text-xl font-semibold ">Choose a Category</label>
                            <input type="text" placeholder='Help Moving' id='area' className='w-full text-lg py-2 px-3 rounded-lg font-normal border-[2px]'/>
                        </div>
                        <div className=' w-full'>
                            <span className='w-full text-start text-5xl font-bold'>$45
                            <span className='w-full text-start text-xl font-normal ml-1'>per hour<AiOutlineQuestionCircle className='inline ml-1'/></span></span>
                        </div>
                        <button type='submit' className='w-full text-center bg-[#309847] py-2 rounded-3xl text-lg text-white border-[1px] hover:scale-x-95 transition-all duration-200 hover:bg-white hover:border-[#309847] hover:text-[#309847] border-black'>Get starter</button>
                        <div className='text-lg font-normal w-full flex items-center justify-center gap-2'>
                            <span>Already have an account?</span>
                            <Link to='/signin'>
                                <span className='text-[#309847]'> Sign in</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BecomeATasker