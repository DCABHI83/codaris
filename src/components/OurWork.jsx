import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/image 1.avif'
import image2 from '../assets/image 2.webp'
import image3 from '../assets/image 3.jpg'
import image4 from '../assets/image 4.avif'

const OurWork = () => {
  const images = [image1, image2, image3, image4];
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="w-full overflow-hidden py-16 mt-5">
        
        <div className="relative flex">
          <motion.div
            className="flex gap-6 px-3"
            animate={{
              x: [0, -((500 + 24) * images.length)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((img, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-[500px] h-[350px] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`Work ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default OurWork
