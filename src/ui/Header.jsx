import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='flex justify-between md:justify-around p-5 items-center relative'>
        {/* Logo */}
        <div>
          <h1 className='text-2xl font-bold'>Logo</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex navlinks gap-10 text-[#B5B5B5] font-mono text-xl'>
          <a href="#home" className='hover:text-black transition-colors'>Home</a>
          <a href="#work" className='hover:text-black transition-colors'>Work</a>
          <a href="#about" className='hover:text-black transition-colors'>About</a>
          <a href="#services" className='hover:text-black transition-colors'>Services</a>
          <a href="#contact" className='hover:text-black transition-colors'>Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden md:block bg-black text-white rounded-xl px-4 py-2 font-bold text-[1rem] hover:bg-gray-800 transition-colors'>
          <a href="#contact">Let's Talk</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='md:hidden text-3xl text-gray-800 z-50'
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
        >
          <div className='flex flex-col gap-6 p-8 mt-20'>
            <a href="#home" onClick={toggleMenu} className='text-xl font-mono text-[#B5B5B5] hover:text-black transition-colors'>
              Home
            </a>
            <a href="#work" onClick={toggleMenu} className='text-xl font-mono text-[#B5B5B5] hover:text-black transition-colors'>
              Work
            </a>
            <a href="#about" onClick={toggleMenu} className='text-xl font-mono text-[#B5B5B5] hover:text-black transition-colors'>
              About
            </a>
            <a href="#services" onClick={toggleMenu} className='text-xl font-mono text-[#B5B5B5] hover:text-black transition-colors'>
              Services
            </a>
            <a href="#contact" onClick={toggleMenu} className='text-xl font-mono text-[#B5B5B5] hover:text-black transition-colors'>
              Contact
            </a>

            {/* Mobile CTA Button */}
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className='bg-black text-white rounded-xl px-4 py-2 font-bold text-center hover:bg-gray-800 transition-colors mt-4'
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            onClick={toggleMenu}
            className='fixed inset-0 bg-black/50 z-30 md:hidden'
          />
        )}
      </div>
    </>
  )
}

export default Header
