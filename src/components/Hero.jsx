import React from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

   {/* Floating Contact Buttons */}
   <div className='fixed bottom-8 right-8 flex flex-col gap-4 z-[99999]'>
     
     {/* WhatsApp Button */}
     <motion.a
       href="https://wa.me/918210072406?text=Hi!%20I%20am%20interested%20in%20your%20services."
       target='_blank'
       rel='noopener noreferrer'
       className='group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-xl transition-all'
       initial={{ scale: 0, opacity: 0 }}
       animate={{ 
         scale: [0, 1.1, 1],
         opacity: 1
       }}
       transition={{ 
         duration: 0.5,
         delay: 1,
         ease: "easeOut"
       }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
     >
       <motion.div
         animate={{ 
           rotate: [0, 15, -15, 0]
         }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           repeatDelay: 3,
           ease: "easeInOut"
         }}
       >
         <FaWhatsapp className='text-white text-2xl' />
       </motion.div>
       
       {/* Tooltip */}
       <span className='absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
         Chat on WhatsApp
       </span>
     </motion.a>

     {/* Call Button */}
     <motion.a
       href="tel:+918210072406"
       className='group relative w-14 h-14 bg-[#E34400] hover:bg-[#C73A00] rounded-full flex items-center justify-center shadow-xl transition-all'
       initial={{ scale: 0, opacity: 0 }}
       animate={{ 
         scale: [0, 1.1, 1],
         opacity: 1
       }}
       transition={{ 
         duration: 0.5,
         delay: 1.2,
         ease: "easeOut"
       }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
     >
       <motion.div
         animate={{ 
           rotate: [0, 20, -20, 0]
         }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           repeatDelay: 3,
           delay: 0.5,
           ease: "easeInOut"
         }}
       >
         <FaPhone className='text-white text-xl' />
       </motion.div>
       
       {/* Tooltip */}
       <span className='absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
         Call Us Now
       </span>
     </motion.a>
   </div>
   </>
  )
}

export default Hero
