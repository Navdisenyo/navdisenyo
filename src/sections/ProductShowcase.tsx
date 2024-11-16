'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your Productivity</div>
          </div>
          <h2 className='text-center text-3xl md:text-5xl md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#04418b] text-transparent bg-clip-text mt-5'>How can we help you?</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>We provide best web development services to startups & entrepreneurs who are looking for a startup website, eCommerce website or crypto-exchange website.</p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='product' className='mt-10' />
          <motion.img 
          src={pyramidImage.src} 
          alt='pyramid' 
          height={262} width={262} 
          className='hidden md:block absolute -right-36 -top-32' 
          style={{
            translateY,
          }}
          />
          <motion.img 
          src={tubeImage.src} 
          alt='tube' 
          height={248} width={248} 
          className='hidden md:block absolute bottom-24 -left-36' 
          style={{
            translateY,
          }}
          />
        </div>
 
      </div>
    </section>
  );
};
