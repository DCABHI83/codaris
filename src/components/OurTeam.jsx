import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaDribbble, FaBehance, FaInstagram } from 'react-icons/fa'
import ayush from '../assets/ayush.jpeg'
import aman from '../assets/aman.jpeg'
import arpit from '../assets/arpit.jpeg'
import abhishek from '../assets/abhishekl.jpeg'
const OurTeam = () => {
  const team = [
    {
      name: 'Arpit Kumar Agrahari',
      role: 'Lead Developer',
      image: arpit,
      bio: 'Full-stack developer with 5+ years of experience building scalable web applications.',
      email: 'omagrahari55@gmail.com',
      phone: '+91 95990 56856',
      socials: {
        linkedin: 'https://linkedin.com/in/arpit-agrahari-54aa192a1',
        github: 'https://github.com/Arpit10110',
       
      }
    },
    {
      name: 'Aman Kummar Kar',
      role: 'UI/UX Designer,AI/ML Engineer',
      image: aman,
      bio: 'Creative designer passionate about crafting beautiful and intuitive user experiences.',
      email: 'amankar125@gmail.com',
      phone: '+91 82521 84741',
      socials: {
        linkedin: 'https://linkedin.com/in/aman-kar-4b1804259',
        github :'https://github.com/Arpit10110'
      }
    },
    {
      name: 'Abhishek Kumar',
      role: 'Full Stack Developer',
      image: abhishek,
      bio: 'Specialized in building robust APIs and scalable backend systems with modern technologies.',
      email: 'araj10569@gmail.com',
      phone: '+91 82100 72406',
      socials: {
        linkedin: 'https://linkedin.com/in/abhishek-kumar-72313820b',
        github: 'https://github.com/DCABHI83',
      
      }
    },
    {
      name: 'Ayush Kumar Gupta',
      role: 'Marketing & SEO Specialist',
      image: ayush,
      bio: 'Expert in digital marketing strategies and SEO optimization to grow your online presence.',
      email: 'ag7452517@gmail.com',
      phone: '+91 62059 61622',
      socials: {
        linkedin: 'https://www.linkedin.com/in/ayush-kumar-gupta-792a93227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://instagram.com/ayush__gupta_06'
      }
    }
  ];

  return (
    <>
      <div className='py-16 px-4'>
        {/* Header */}
        <div className='flex flex-col items-center mb-16'>
          <h3 className='text-gray-400 font-mono text-sm uppercase tracking-wider mb-4'>Our Team</h3>
          <h1 className='text-5xl md:text-6xl font-inter font-bold text-center mb-4'>
            Meet the <span className='font-instrument italic text-6xl md:text-7xl'>creative minds</span>
          </h1>
          <p className='text-xl text-gray-600 text-center max-w-2xl'>
            A passionate team of developers, designers, and strategists dedicated to bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group'
            >
              {/* Image */}
              <div className='relative overflow-hidden'>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className='w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Details */}
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                <p className='text-sm text-gray-500 mb-3'>{member.role}</p>
                <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className='space-y-2 mb-4 pb-4 border-b border-gray-200'>
                  <a 
                    href={`mailto:${member.email}`}
                    className='flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors'
                  >
                    <HiMail className='w-4 h-4' />
                    <span className='truncate'>{member.email}</span>
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className='flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors'
                  >
                    <HiPhone className='w-4 h-4' />
                    {member.phone}
                  </a>
                </div>

                {/* Social Links */}
                <div className='flex gap-3'>
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaLinkedin className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                  {member.socials.github && (
                    <a 
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaGithub className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaTwitter className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                  {member.socials.dribbble && (
                    <a 
                      href={member.socials.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaDribbble className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                  {member.socials.behance && (
                    <a 
                      href={member.socials.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaBehance className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a 
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-9 h-9 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors group/social'
                    >
                      <FaInstagram className='w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors' />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurTeam
