import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center px-6 md:px-12 py-5 relative'>
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className='w-30 md:w-24 h-auto object-contain' />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-8 text-[#B5B5B5] font-mono text-base'>
          <a href="#home" className='hover:text-black transition-colors'>Home</a>
          <a href="#work" className='hover:text-black transition-colors'>Work</a>
          <a href="#pricing" className='hover:text-black transition-colors'>Pricing</a>
          <a href="#services" className='hover:text-black transition-colors'>Services</a>
          <a href="#contact" className='hover:text-black transition-colors'>Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <a 
          href="#contact"
          className='hidden md:block bg-black text-white rounded-xl px-6 py-2.5 font-bold text-sm hover:bg-gray-800 transition-colors'
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button - Higher z-index */}
        <button 
          onClick={toggleMenu}
          className='md:hidden text-3xl text-gray-800 z-[60] relative'
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation Sidebar */}
        <div 
          className={`
            fixed top-0 right-0 h-full w-72 bg-white shadow-2xl 
            transform transition-transform duration-300 ease-in-out z-50
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
        >
          <div className='flex flex-col gap-6 p-8 mt-20'>
            <a 
              href="#home" 
              onClick={toggleMenu} 
              className='text-lg font-mono text-[#B5B5B5] hover:text-black transition-colors py-2 border-b border-gray-100'
            >
              Home
            </a>
            <a 
              href="#work" 
              onClick={toggleMenu} 
              className='text-lg font-mono text-[#B5B5B5] hover:text-black transition-colors py-2 border-b border-gray-100'
            >
              Work
            </a>
            <a 
              href="#about" 
              onClick={toggleMenu} 
              className='text-lg font-mono text-[#B5B5B5] hover:text-black transition-colors py-2 border-b border-gray-100'
            >
              About
            </a>
            <a 
              href="#pricing" 
              onClick={toggleMenu} 
              className='text-lg font-mono text-[#B5B5B5] hover:text-black transition-colors py-2 border-b border-gray-100'
            >
           Pricing
            </a>
            <a 
              href="#contact" 
              onClick={toggleMenu} 
              className='text-lg font-mono text-[#B5B5B5] hover:text-black transition-colors py-2 border-b border-gray-100'
            >
              Contact
            </a>

            {/* Mobile CTA Button */}
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className='bg-black text-white rounded-xl px-6 py-3 font-bold text-center hover:bg-gray-800 transition-colors mt-6'
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            onClick={toggleMenu}
            className='fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm'
          />
        )}
      </div>
    </>
  )
}

export default Header
