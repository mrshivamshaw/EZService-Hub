import React from 'react'
import { TiInputChecked } from "react-icons/ti";
const HomeCard = ({category,title,p1,p2,bg}) => {
  return (
    <div className={category === title ?"block w-[75%] bg-[#e2f1fb] mx-auto relative rounded-2xl":"hidden"}>
        <div className='ml-[6vw] w-[90%] h-[90%] py-9 '>
          <div className='absolute left-7 top-[15vh] bg-white w-[23vw] h-[46vh] flex flex-col justify-center items-start gap-9 px-9 rounded-xl'>
            <p className='text-3xl font-semibold'>{title}</p>
            <div className='flex justify-center items-center gap-3'><TiInputChecked className='text-[30px] w-[10%]'/><p className='text-lg font-light w-[90%]'>{p1}</p></div>
            <div className='flex justify-center items-center gap-3'><TiInputChecked className='text-[30px] w-[10%]'/><p className='text-lg font-light w-[90%]'>{p2}</p></div>
          </div>
          <img src={bg} alt={title} className='w-full h-auto'/>
        </div>
    </div>
  )
}

export default HomeCard