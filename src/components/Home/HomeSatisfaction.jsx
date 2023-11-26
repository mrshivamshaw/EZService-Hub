import React from 'react'
import English from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/English_2x.webp'
import BottomRight from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_right_shape_second.5a721d7c.svg'
import img2 from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/how_it_works_pic_updated.webp'

const HomeSatisfaction = () => {
  return (
    <div className='relative w-[100vw] h-auto overflow-x-hidden'>
        <div className='w-full md:w-full lg:w-[80%] xl:w-[80%] mx-auto flex flex-col items-start gap-[3vh] mb-[10vh]'>
            <h1 className='w-[93%] md:w-[93%] lg:w-full xl:w-full text-start text-4xl font-bold mx-auto' style={{WebkitTextStroke:".3px #0d7a5f"}}>Your satisfaction, <span className='text-[#386842]'>guaranteed</span></h1>
            <div className='absolute right-0 top-10 hidden md:hidden lg:block xl:block'><img src={BottomRight} alt="right" /></div>
            <div className='flex flex-wrap w-[93%] md:w-[93%] lg:w-full xl:w-full mx-auto justify-between items-start gap-8 '>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                        Happiness Pledge    
                    </h1>
                    <p className='text-xl'>If you’re not satisfied, we’ll work to make it right.</p>
                    <div className='w-[300px] h-auto'><img src={English} alt="lowerLogo" className='w-full h-auto'/></div>
                </div>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                    Vetted Taskers    
                    </h1>
                    <p className='text-xl'>Taskers are always background checked before joining the platform.</p>
                </div>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                    Dedicated Support    
                    </h1>
                    <p className='text-xl'>Friendly service when you need us – every day of the week.</p>
                </div>
            </div>
            <div className='relative w-[93%] md:w-[93%] lg:w-[75%] xl:w-[75%] h-auto mx-auto mt-[12vh] '>
                <img src={img2} alt="img2" className='w-full h-auto'/>
                <div className='flex flex-col gap-6 static mx-auto lg:absolute xl:absolute top-9 -left-20 bg-white p-3 md:p-3 lg:p-10 xl:p-10 w-full md:w-full lg:w-[400px] xl:w-[400px] h-auto md:h-auto lg:h-[400px] xl:h-[400px] rounded-md shadow-lg'>
                    <div><h1 className='text-xl md:text-xl lg:text-2xl xl:text-2xl font-semibold'>How it works</h1></div>
                    <div className='flex justify-start items-center gap-8'>
                        <span className='text-lg md:text-lg lg:text-3xl xl:text-3xl px-6 py-[15px] bg-slate-300 rounded-full'>1</span>
                        <p className='text-base md:text-base lg:text-xl xl:text-xl'>Choose a Tasker by price, skills, and reviews.</p>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <span className='text-lg md:text-lg lg:text-3xl xl:text-3xl px-6 py-[15px]'>2</span>
                        <p className='text-base md:text-base lg:text-xl xl:text-xl'>Schedule a Tasker as early as today.</p>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <span className='text-lg md:text-lg lg:text-3xl xl:text-3xl px-6 py-[15px] bg-teal-100 text-center rounded-full'>3</span>
                        <p className='text-base md:text-base lg:text-xl xl:text-xl' >Chat, pay, tip, and review all in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSatisfaction 