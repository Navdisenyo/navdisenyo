'use client'

import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // useMotionValueEvent(scrollYProgress, 'change', (latestValue) => console.log(latestValue))
  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag">eCommerce & Blockchain Development</div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-[#04418b] text-transparent bg-clip-text mt-6">Create Amazing <br></br> Business Websites</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              With well over a decade of web development & design experience, Navdisenyo has the skills & expertise to create amazing business websites, eCommerce sites, Blockchain & Crypto Exchange Development, Digital Marketing. Contact us for a no-obligation quote  it is completely free!</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get started</button>
              <button className="btn btn-text gap-1">
                <span className=''>Learn more</span>
                <ArrowIcon className="h-5 w-5"/>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img src={cogImage.src} 
            alt="eCommerce" 
            className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
            animate ={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
            />
            <motion.img src={cylinderImage.src} 
            width={220} height={220} 
            alt='cylinder' className='hidden md:block -top-8 -left-32 md:absolute'
            style={{
              translateY: translateY,
            }}
            />
            <motion.img src={noodleImage.src} 
            width={220} alt='noodle' className='hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]'
            style={{
              rotate: 30,
              translateY: translateY,
            }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
