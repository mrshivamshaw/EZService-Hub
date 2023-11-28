import React from 'react'
import feedback from '../../assets/becomeAtasker/testimonial-779c1bf4e9d375692264bddc09568995.png'
import { RiDoubleQuotesL } from "react-icons/ri";

const FeedBack = () => {
  return (
    <div className='w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] mx-auto my-[10vh]'>
        <div className='flex mb-10 justify-start md:justify-start lg:justify-center xl:justify-center items-center gap-3'><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div><div className='w-3 h-3 bg-[#40864f] rounded-full'></div><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div></div>

        <div className='flex  flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-center items-start'>
            <div className=' flex  flex-col justify-center items-start gap-6 pt-[6vh]'>
                <RiDoubleQuotesL className='text-6xl font-bold text-[#40864f]'/>
                <h1 className='-mt-7 text-2xl font-normal'>I love TaskRabbit! I was able to get out of debt, tackle bills, provide for my family, and still have enough room to save for future goals.</h1>
                <p className='text-lg text-black/75'>Karsheem W., New York, NY</p>
            </div>
            <img src={feedback} alt="feed" className='w-full'/>
        </div>
        <div className='flex my-[10vh] justify-start md:justify-start lg:justify-center xl:justify-center items-center gap-3'><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div><div className='w-3 h-3 bg-[#40864f] rounded-full'></div><div className='h-1 w-16 bg-[#40864f] rounded-lg'></div></div>

    </div>
  )
}

export default FeedBack