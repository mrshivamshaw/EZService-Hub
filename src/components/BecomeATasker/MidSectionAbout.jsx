import React from 'react'

const MidSectionAbout = () => {
  return (
    <div className='w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto flex flex-col justify-start md:justify-start lg:justify-center xl:justify-center items-start md:items-start lg:items-center xl:items-center my-[10vh] gap-5'>
        <h1 className='text-4xl font-bold' style={{WebkitTextStroke:".3px #40864f"}}>Flexible work, at your fingertips</h1>
        <p className='text-start md:text-start lg:text-center xl:text-center text-xl font-[350]'>Find local jobs that fit your skills and schedule. <br /> With TaskRabbit, you have the freedom and <br /> support to be your own boss.</p>
        <div className='flex justify-start items-center gap-3'><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div><div className='w-3 h-3 bg-[#40864f] rounded-full'></div><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div></div>
    </div>
  )
}

export default MidSectionAbout