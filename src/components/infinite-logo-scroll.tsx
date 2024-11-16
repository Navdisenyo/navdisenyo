'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

interface InfiniteLogoScrollProps {
  logos: string[]
  speed?: number
}

export default function InfiniteLogoScroll({ logos, speed = 20 }: InfiniteLogoScrollProps) {
  const [loopNum, setLoopNum] = useState(2)
  const [width, setWidth] = useState(0)
  const controls = useAnimationControls()

  useEffect(() => {
    const calculateWidth = () => {
      const logoSetWidth = logos.length * 150
      const windowWidth = window.innerWidth
      const requiredSets = Math.ceil(windowWidth / logoSetWidth) + 1
      setLoopNum(requiredSets)
      setWidth(logoSetWidth * requiredSets)
    }

    calculateWidth()
    window.addEventListener('resize', calculateWidth)

    return () => window.removeEventListener('resize', calculateWidth)
  }, [logos])

  useEffect(() => {
    controls.start({
      x: -width / 2,
      transition: {
        duration: width / (2 * speed),
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    })
  }, [controls, width, speed])

  return (
    <div className="relative flex overflow-x-hidden bg-muted">
      <motion.div
        className="flex items-center whitespace-nowrap py-12"
        initial={{ x: 0 }}
        animate={controls}
      >
        {Array(loopNum)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex items-center justify-around px-4" style={{ width: `${logos.length * 150}px` }}>
              {logos.map((logo, index) => (
                <div key={index} className="mx-4 flex w-36 items-center justify-center">
                  <Image src={logo} alt={`Logo ${index + 1}`} width={100} height={100} className="max-h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          ))}
      </motion.div>
    </div>
  )
}