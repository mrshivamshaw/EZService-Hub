import React from 'react'

const NavBar = () => {
  return (
    <div className='h-[10vh] max-w-screen border-b-2 bg-white'>
        <div className='w-full h-full flex justify-between items-center px-[10vw] '>
            <div>
                <h1 className='font-semibold text-4xl' style={{WebkitTextStroke:".3px #0d7a5f"}}>EZService Hub</h1>
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
                        <button className='font-semibold text-[17px] border border-[#0d7a5f] text-[#0d7a5f] px-8 rounded-2xl py-1'>Become a Tasker</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar