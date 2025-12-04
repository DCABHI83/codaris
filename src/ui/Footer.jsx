import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='bg-black text-white'>
        {/* Main Footer */}
        <div className='max-w-7xl mx-auto px-4 py-16'>
          <div className='grid md:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='md:col-span-2'>
              <h3 className='text-3xl font-bold mb-4'>Codaris</h3>
              <p className='text-gray-400 mb-6 max-w-md'>
                We craft beautiful, functional websites that help businesses grow. 
                From design to deployment, we've got you covered.
              </p>
              
              {/* Contact Info */}
              <div className='space-y-3'>
                <a href="mailto:codarisdev@gmail.com" className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors'>
                  <HiMail className='w-5 h-5' />
                  codarisdev@gmail.com
                </a>
                <a href="tel:+918210072406" className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors'>
                  <HiPhone className='w-5 h-5' />
                  +91 82100 72406
                </a>
                <div className='flex items-center gap-3 text-gray-400'>
                  <HiLocationMarker className='w-5 h-5' />
                  Noida, India
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-3'>
                <li>
                  <a href="#home" className='text-gray-400 hover:text-white transition-colors'>Home</a>
                </li>
                <li>
                  <a href="#services" className='text-gray-400 hover:text-white transition-colors'>Services</a>
                </li>
                <li>
                  <a href="#work" className='text-gray-400 hover:text-white transition-colors'>Our Work</a>
                </li>
                <li>
                  <a href="#pricing" className='text-gray-400 hover:text-white transition-colors'>Pricing</a>
                </li>
                <li>
                  <a href="#team" className='text-gray-400 hover:text-white transition-colors'>Team</a>
                </li>
                <li>
                  <a href="#contact" className='text-gray-400 hover:text-white transition-colors'>Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className='text-lg font-semibold mb-4'>Services</h4>
              <ul className='space-y-3'>
                <li className='text-gray-400'>UI/UX Design</li>
                <li className='text-gray-400'>Web Development</li>
                <li className='text-gray-400'>Brand Identity</li>
                <li className='text-gray-400'>E-commerce</li>
                <li className='text-gray-400'>SEO Optimization</li>
                <li className='text-gray-400'>Maintenance</li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className='mt-12 pt-8 border-t border-gray-800'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='flex gap-4'>
                <a 
                  href="https://www.linkedin.com/company/110202938/admin/dashboard/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 bg-gray-800 hover:bg-white rounded-lg flex items-center justify-center transition-colors group'
                >
                  <FaLinkedin className='w-5 h-5 text-gray-400 group-hover:text-black transition-colors' />
                </a>
                <a 
                  href="https://github.com/codarisdev-debug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 bg-gray-800 hover:bg-white rounded-lg flex items-center justify-center transition-colors group'
                >
                  <FaGithub className='w-5 h-5 text-gray-400 group-hover:text-black transition-colors' />
                </a>

                
            
                <a 
                  href="https://www.instagram.com/codaris.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 bg-gray-800 hover:bg-white rounded-lg flex items-center justify-center transition-colors group'
                >
                  <FaInstagram className='w-5 h-5 text-gray-400 group-hover:text-black transition-colors' />
                </a>
              
              </div>

              {/* Newsletter */}
              <div className='flex gap-2'>
                <input 
                  type="email" 
                  placeholder="Subscribe to newsletter"
                  className='bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors'
                />
                <button className='bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400'>
              <p>© {currentYear} YourAgency. All rights reserved.</p>
              <div className='flex gap-6'>
                <a href="#privacy" className='hover:text-white transition-colors'>Privacy Policy</a>
                <a href="#terms" className='hover:text-white transition-colors'>Terms of Service</a>
                <a href="#cookies" className='hover:text-white transition-colors'>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
