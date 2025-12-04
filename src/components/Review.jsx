import React from 'react'
import { motion } from 'framer-motion'

const Review = () => {
  const testimonials = [
    {
      id: 1,
      text: "Before, we wasted time going back and forth with designers. Now we get clean, clear visuals on the first try. Which lets us focus on what really matters.",
      name: "Arjun Sharma",
      position: "Product Manager, NovaTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      text: "It's not just about looking good. It's about showing up confidently every time. That's what they help us do, and it's changed how our team feels about our brand.",
      name: "Priya Patel",
      position: "Brand Strategist, Studio Hive",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      text: "We were struggling to present ourselves professionally until we worked with them. Now our brand looks like it belongs with the leaders in our space.",
      name: "Rahul Verma",
      position: "Founder, GrowthLoop",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      text: "The attention to detail is incredible. Every design element feels intentional and perfectly aligned with our brand vision. Truly exceptional work.",
      name: "Ananya Reddy",
      position: "CEO, PixelCraft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 5,
      text: "They transformed our entire digital presence. What used to take weeks now happens in days, with better results every single time.",
      name: "Vikram Desai",
      position: "Creative Director, Sparkle Studios",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <div>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-[#B5B5B5] font-mono text-xl'>TESTIMONIALS</h1>
          <h1 className='text-5xl font-inter'>We love what we do, and <span className='text-6xl font-instrument italic'>they love the results.</span></h1>
        </div>

        {/* Marquee Section */}
        <div className='relative overflow-hidden mt-16'>
          {/* Gradient Fades */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10' />
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10' />

          {/* Scrolling Testimonials */}
          <motion.div
            className='flex gap-6'
            animate={{
              x: [0, -((400 + 24) * testimonials.length)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className='shrink-0 w-[400px] bg-gray-50 rounded-2xl p-8 border border-gray-100'
              >
                {/* Stars */}
                <div className='flex gap-1 mb-6'>
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className='w-6 h-6 fill-orange-500' 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className='text-gray-700 leading-relaxed mb-8 min-h-[120px]'>
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className='flex items-center gap-4'>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                  <div>
                    <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                    <p className='text-sm text-gray-500'>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Review
