import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
   <>
   
   <div className='flex flex-col justify-center items-center gap-4 mt-10'>
   <div className='flex flex-col gap-2'>
    <h1 className='text-7xl font-inter font-bold'>On-Demand Design</h1>
    <h1><span className='text-5xl'>for</span> <span className='text-7xl font-instrument italic'>Scaling Brands.</span></h1>
    <p className='text-xl text-[#B5B5B5]'>Design subscription, made for those who move fast and scale faster.</p>
   </div>

   <div className='flex gap-4 mt-10'>
    <a href="tel:+918210072406" className='group relative overflow-hidden bg-[#E34400] text-white rounded-2xl px-5 py-2 transition-all duration-300 hover:shadow-lg'>
      <span className='relative inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full'>Book a Call</span>
      <span className='absolute left-0 right-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 px-5 py-2'>Book a Call</span>
    </a>
    <NavLink className='group relative overflow-hidden bg-white text-[#E34400] border-2 border-[#E34400] rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-[#E34400] hover:text-white hover:shadow-lg'>
      <span className='relative inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full'>See Pricing</span>
      <span className='absolute left-0 right-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 px-5 py-2'>See Pricing</span>
    </NavLink>
   </div>

   </div>
   </>
  )
}

export default Hero
