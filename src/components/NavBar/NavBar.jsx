import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [navActive,setNavActive] = useState(false)
  return (
    <div className='h-[10vh] max-w-screen border-b-2 bg-white'>
        <div className='w-[95%] md:w-[95%] lg:w-full xl:w-full h-full flex justify-between items-center mx-auto px-0 md:px-0 lg:px-[10vw] xl:px-[10vw] '>
            <div className='flex gap-2 justify-center items-center'>
                {!navActive && <FaBars className='font-semibold text-xl block md:block lg:hidden xl:hidden' onClick={()=>setNavActive(prev =>!prev)}/>}
                {navActive && <FaTimes className='font-semibold text-xl block md:block lg:hidden xl:hidden' onClick={()=>setNavActive(prev =>!prev)}/> }
                <h1 className='font-semibold text-2xl md:text-2xl lg:text-4xl xl:text-4xl' style={{WebkitTextStroke:".3px #0d7a5f"}}>EZService Hub</h1>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-11 ' >
                    <li>
                        <button className='font-medium text-[17px] hidden md:hidden lg:block xl:block'>Services</button>
                    </li>
                    <li className='hidden md:hidden lg:block xl:block'>
                        <div  className='font-medium text-[17px]'>
                            <button>Sign up</button>
                            <span> / </span>
                            <button>Log in</button>
                        </div>
                    </li>
                    <li>
                        <button className='font-semibold hidden md:hidden lg:block xl:block text-[17px] border border-[#0d7a5f] text-[#0d7a5f] px-8 rounded-2xl py-1'>Become a Tasker</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar