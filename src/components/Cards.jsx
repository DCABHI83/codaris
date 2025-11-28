import React from 'react'
import bottle from '../assets/bottle.avif'
import lappy from '../assets/lappy.avif'
import web from '../assets/web.avif'

const Cards = ({ index }) => {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'We create intuitive, scalable interfaces that not only look good but actually guide users and drive results. Whether it\'s for mobile apps, websites, or SaaS platforms — we design products people love to use.',
      image: lappy,
      tags: ['Wireframing', 'User Flow', 'Hi-Fi UI Design', 'Design System', 'Prototyping', 'UX Research']
    },
    {
      id: 2,
      title: 'Brand Identity',
      description: 'We help founders shape how their brand looks, sounds, and feels. From logo to typography to colors, we craft a system that\'s distinct, aligned, and built to grow with your business.',
      image: bottle,
      tags: ['Colour Palette', 'Logo', 'Business Collateral', 'Social Media Post', 'Mockup', 'Brand Voice Direction']
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'We build custom websites using powerful no-code tools — meaning you get beautiful, fast, and functional builds without the dev lag. Ideal for marketing sites, portfolios, landing pages, or simple platforms.',
      image: web,
      tags: ['Responsive', 'Optimization', 'CMS Setup', 'Domain Setup', 'Animation & Interaction', 'SEO']
    }
  ];

  const service = services[index];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col h-full bg-linear-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg p-8 min-h-[500px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center h-full">
          {/* Image Section - Fixed aspect ratio */}
          <div className="lg:w-1/2 w-full h-[350px] rounded-2xl overflow-hidden flex-shrink-0">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full flex flex-col">
            <h2 className="text-5xl font-bold mb-6">{service.title}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {service.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-800 flex items-center gap-2 shadow-sm"
                >
                  <svg 
                    className="w-4 h-4 text-orange-600" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
