import React from 'react'
import reviewsData from '../../data/review.json'
import { IoStar } from "react-icons/io5";

const Review = () => {
    const reviews = reviewsData.reviews
  return (
    <div className='w-full h-auto relative flex flex-col justify-center items-center gap-[4vh] my-[20vh]'>
        <div className='w-[85%] mx-auto '>
            <h1 className='w-full text-center text-4xl font-semibold text-[#386842]' style={{WebkitTextStroke:".3px #0d7a5f"}}>See what happy customers are saying about Taskrabbit</h1>
        </div>
        <div className='flex flex-wrap w-[85%] mx-auto justify-center items-center gap-x-10 gap-y-7'>
            {
                reviews.map((review)=>(
                    <div key={review.id} className='flex flex-col p-4 items-start justify-start w-[24vw] h-[39vh] '>
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
    </div>
  )
}

export default Review