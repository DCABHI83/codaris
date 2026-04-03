import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'

const CARD_WIDTH = 500
const GAP = 24
const DURATION = 20

const OurWork = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
  const duplicatedImages = [...images, ...images]

  const x = useMotionValue(0)
  const controlsRef = useRef(null)
  const isPausedRef = useRef(false)

  const totalWidth = (CARD_WIDTH + GAP) * images.length

  const startAnimation = () => {
    x.set(0)
    controlsRef.current = animate(x, -totalWidth, {
      ease: "linear",
      duration: DURATION,
      repeat: Infinity,
      repeatType: "loop",
    })
  }

  useEffect(() => {
    startAnimation()
    return () => controlsRef.current?.stop()
  }, [])

  const handleMouseEnter = () => {
    isPausedRef.current = true
    controlsRef.current?.stop()
  }

  const handleMouseLeave = () => {
    isPausedRef.current = false
    const current = x.get()
    const remaining = Math.abs(current) / totalWidth  // fraction already traveled
    const remainingDuration = DURATION * (1 - remaining)

    controlsRef.current = animate(x, -totalWidth, {
      ease: "linear",
      duration: remainingDuration,
      onComplete: () => {
        if (!isPausedRef.current) startAnimation()
      },
    })
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-6 px-3"
          style={{ x }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedImages.map((img, index) => (
            <motion.div
              key={index}
              className={`shrink-0 w-[${CARD_WIDTH}px] h-[350px] rounded-2xl overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Work ${(index % images.length) + 1}`}
                className="w-full h-full object-contain"
                draggable="false"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default OurWork