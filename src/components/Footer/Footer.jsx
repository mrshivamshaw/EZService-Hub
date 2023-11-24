import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa6'
import img1 from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/google-play.e0aec133.svg'
import img2 from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/download-ios.6f846953.svg'

const Footer = () => {
  return (
    <div className='w-full h-auto max-w-screen bg-slate-400 p-10 z-10'>
        <div className='w-[80%] mx-auto flex flex-col justify-start gap-6'>
            <div className='flex justify-start items-center gap-6 text-2xl '>
                <p className='text-black/50'>Follow us! We're friendly:</p>
                <span className='flex justify-center items-center gap-6 text-white cursor-pointer'><FaTiktok/><span> |</span></span>
                <span className='flex justify-center items-center gap-6 text-white cursor-pointer'><FaInstagram/><span> |</span></span>
                <span className='flex justify-center items-center gap-6 text-white cursor-pointer'><FaFacebook/><span> |</span></span>
                <span className='flex justify-center items-center gap-6 text-white cursor-pointer'><FaTwitter/><span> |</span> </span>
                <span className='flex justify-center items-center gap-6 text-white cursor-pointer'><FaLinkedin/></span>
            </div>
            <div className='flex justify-between items-start w-full'>
                <div className='flex flex-col justify-start items-center gap-2'>
                    <h1 className='w-full text-start text-xl text-black/50 font-semibold'>Discover</h1>
                    <div className='flex flex-col justify-start items-start  gap-1 text-white text-md font-bold'>
                        <h2>Become a Tasker</h2>
                        <h2>Services By City</h2>
                        <h2>All Services</h2>
                        <h2>Elite Taskers</h2>
                        <h2>Help</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center gap-2'>
                    <h1 className='w-full text-start text-xl text-black/50 font-semibold'>Company</h1>
                    <div className='flex flex-col justify-start items-start  gap-1 text-white text-md font-bold'>
                        <h2>About us</h2>
                        <h2>Careers</h2>
                        <h2>Press</h2>
                        <h2>EzService for Good</h2>
                        <h2>Blog</h2>
                        <h2>Terms Privacy</h2>
                        <h2>California Consumer Notice</h2>
                        <h2>Do Not Sell My Personal Information</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center gap-2'>
                    <h1 className='w-full text-start text-xl text-black/50 font-semibold'>Download our app</h1>
                    <div className='flex flex-col justify-start items-start  gap-1 text-white text-md font-bold'>
                        <p>Tackle your to-do list wherever you are with our <br /> mobile app.</p>
                        <div className='flex flex-col gap-7 justify-center items-center mt-10'>
                            <img src={img1} alt="google" className='w-[15vw]'/>
                            <img src={img2} alt="iso"  className='w-[15vw]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer