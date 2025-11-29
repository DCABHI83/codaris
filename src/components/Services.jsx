import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Cards from './Cards'

const Services = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div className='flex flex-col items-center py-15'>
        <motion.div 
          className='flex flex-col gap-2 mb-16 px-4 text-center'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>
            <span className='text-6xl'>We help brands show up with</span>{' '}
            <span className='text-5xl font-birthstone'>clarity,</span>
          </h1>
          <h1 className='text-4xl'>
            <span className='text-5xl font-birthstone'>confidence,</span> and{' '}
            <span className='text-5xl font-birthstone'>design </span>that actually works.
          </h1>
        </motion.div>
        
        <div ref={containerRef} className="w-full relative">
          <StackCard containerRef={containerRef} index={0} />
          <StackCard containerRef={containerRef} index={1} />
          <StackCard containerRef={containerRef} index={2} />
        </div>
      </div>
    </>
  )
}

const StackCard = ({ containerRef, index }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        scale,
        top: `calc(-5vh + ${index * 50}px)`,
      }}
      className="sticky h-screen flex items-center justify-center"
    >
      <motion.div style={{ y }} className="w-full">
        <Cards index={index} />
      </motion.div>
    </motion.div>
  );
};

export default Services
