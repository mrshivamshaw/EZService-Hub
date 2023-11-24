import React from 'react'
import reviewsData from '../../data/review.json'
import logo from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/US_TP_Logo_2x.webp'
import midLeft from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_left_shape.9b13a86d.svg'
import { IoStar } from "react-icons/io5";

const Review = () => {
    const reviews = reviewsData.reviews
  return (
    <div className='w-full h-auto relative flex flex-col justify-center items-center gap-[4vh] mt-[20vh] mb-[15vh]'>
        <div className='absolute left-0 -top-[250px]'><img src={midLeft} alt="midLeft" /></div>
        <div className='w-[85%] mx-auto '>
            <h1 className='w-full text-center text-4xl font-bold text-[#386842]' style={{WebkitTextStroke:".3px #0d7a5f"}}>See what happy customers are saying about EZService Hub</h1>
        </div>
        <div className='flex flex-wrap w-[85%] mx-auto justify-center items-center gap-x-10 gap-y-7'>
            {
                reviews.map((review)=>(
                    <div key={review.id} className='flex flex-col p-4 items-start justify-start w-[368px] h-[294px] '>
                        <div className='flex justify-center items-center gap-2'>
                            <h1 className='text-lg font-bold'>{review.userName}</h1>
                            <div className='flex gap-1 text-yellow-300'>

                            <IoStar/><IoStar/><IoStar/><IoStar/><IoStar/>
                            </div>
                        </div>
                        <p className='line-clamp-6 text-lg font-light'>{review.comment}</p>
                        <h1 className='text-xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>{review.service}</h1>
                    </div>
                ))
            }
        </div>
        <div className='h-[100px] -mt-8'>
            <img src={logo} alt="logo" className='h-full'/>
        </div>
    </div>
  )
}

export default Review