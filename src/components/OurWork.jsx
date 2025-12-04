import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'

const OurWork = () => {
  const images = [image1, image2, image3, image4,image5,image6,image7,image8,image9];
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="w-full overflow-hidden py-16 mt-5">
        
        <div className="relative flex">
          <motion.div
            className="flex gap-6 px-3"
            animate={{
              x: [0, -((300 + 24) * images.length)],
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
