import React from 'react'

const HomeCardBottom = () => {
  return (
    <div className='w-full flex items-center justify-center gap-16 py-10 ' style={{backgroundImage: "linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)"}}>
        <div>
            <h2 className='text-2xl font-semibold'>Furniture Assemblies:</h2>
            <h1 className='text-3xl text-[#386842] font-semibold'>3.4 million+</h1>
        </div>
        <div>
            <h2 className='text-2xl font-semibold'>Moving tasks:</h2>
            <h1 className='text-3xl text-[#386842] font-semibold'>1.5 million+</h1>
        </div>
        <div>
            <h2 className='text-2xl font-semibold'>Items mounted:</h2>
            <h1 className='text-3xl text-[#386842] font-semibold'>1 million+</h1>
        </div>
        <div>
            <h2 className='text-2xl font-semibold'>Home Repairs:</h2>
            <h1 className='text-3xl text-[#386842] font-semibold'>700,000+</h1>
        </div>
        <div>
            <h2 className='text-2xl font-semibold'>Homes cleaned:</h2>
            <h1 className='text-3xl text-[#386842] font-semibold'>890,000+</h1>
        </div>
    </div>
  )
}

export default HomeCardBottom