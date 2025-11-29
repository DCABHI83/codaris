import React from 'react'

const Hero = () => {
  return (
   <>
   
   <div className='flex flex-col justify-center items-center gap-4 mt-20 px-4'>
   <div className='flex flex-col gap-2 max-w-2xl'>
    <h1 className='text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-center'>On-Demand Design</h1>
    <h1 className='text-center'>
      <span className='text-3xl md:text-4xl lg:text-5xl'>for</span>{' '}
      <span className='text-4xl md:text-6xl lg:text-7xl font-instrument italic'>Scaling Brands.</span>
    </h1>
    <p className='text-base md:text-lg lg:text-xl text-[#B5B5B5] text-center mt-2'>
      Design subscription, made for those who move fast and scale faster.
    </p>
   </div>

   <div className='flex flex-col sm:flex-row gap-4 mt-10'>
    <a 
      href="tel:+918210072406" 
      className='group relative overflow-hidden bg-[#E34400] text-white rounded-full px-8 py-3 font-medium transition-all duration-300 hover:shadow-lg text-center'
    >
      <span className='relative inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full'>
        Book a Call
      </span>
      <span className='absolute left-0 right-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 px-8 py-3'>
        Book a Call
      </span>
    </a>
    
    <a 
      href="#pricing"
      className='group relative overflow-hidden bg-white text-[#E34400] border-2 border-[#E34400] rounded-full px-8 py-3 font-medium transition-all duration-300 hover:bg-[#E34400] hover:text-white hover:shadow-lg text-center'
    >
      <span className='relative inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full'>
        See Pricing
      </span>
      <span className='absolute left-0 right-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 px-8 py-3'>
        See Pricing
      </span>
    </a>
   </div>

   </div>
   </>
  )
}

export default Hero
