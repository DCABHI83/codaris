import React from 'react'
import Hero from '../components/Hero'
import OurWork from '../components/OurWork'
import Services from '../components/Services'
import Contact from './Contact'
import Review from '../components/Review'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import OurTeam from '../components/OurTeam'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {
  const whatsappNumber = '6205961622' // Replace with your WhatsApp number
  const whatsappMessage = 'Hi! I am interested in your services.'

  return (
    <>
      <Hero/>
      <OurWork/>
      <Services/>
      <Pricing/>
      <Faq/>
      <Contact/>
      <Review/>
      <OurTeam/>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <FaWhatsapp className='text-white text-3xl' />
      </motion.a>
    </>
  )
}

export default Home
