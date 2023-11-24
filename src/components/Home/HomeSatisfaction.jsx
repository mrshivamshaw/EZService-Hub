import React from 'react'
import English from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/English_2x.webp'

const HomeSatisfaction = () => {
  return (
    <div className='w-full h-auto '>
        <div className='w-[80%] mx-auto flex flex-col items-start gap-[3vh] mb-[10vh]'>
            <h1 className='w-full text-start text-4xl font-bold ' style={{WebkitTextStroke:".3px #0d7a5f"}}>Your satisfaction, <span className='text-[#386842]'>guaranteed</span></h1>
            <div className='flex w-full justify-between items-center '>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                        Happiness Pledge    
                    </h1>
                    <p className='text-xl'>If you’re not satisfied, we’ll work to make it right.</p>
                </div>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                        Happiness Pledge    
                    </h1>
                    <p className='text-xl'>If you’re not satisfied, we’ll work to make it right.</p>
                </div>
                <div className='flex flex-col items-start gap-[1.5vh] w-[337px]'>
                    <h1 className='text-2xl font-semibold pt-2 text-[#386842]' style={{WebkitTextStroke:".3px #386842"}}>
                        Happiness Pledge    
                    </h1>
                    <p className='text-xl'>If you’re not satisfied, we’ll work to make it right.</p>
                </div>
            </div>
            <div className='w-[300px] h-auto'><img src={English} alt="lowerLogo" className='w-full h-auto'/></div>
        </div>
    </div>
  )
}

export default HomeSatisfaction 