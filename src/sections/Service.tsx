import React from 'react'
import ServiceBoxes from "@/components/ServiceBoxes"

export const Services = () => {
    return (
        <section className='bg-gradient-to-b from-[#d4ddff] to-[#FFFFFF] py-24 overflow-x-clip'>
        <div className="">
          <div className='max-w-[648px] mx-auto'>
            <div className='flex justify-center'>
              <div className='tag'>Grow your Business</div>
            </div>
            <h2 className='text-center text-3xl md:text-5xl md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#04418b] text-transparent bg-clip-text mt-5'>Our Services</h2>
            <p className='text-center text-[16px] leading-[30px] tracking-tight text-[#0a0a0a] mt-5'>We provide comprehensive solutions including SaaS, Trading Bot & crypto-exchange development. Additionally, we offer expert Digital Marketing services to help grow your business to the next level.</p>
          </div>
          <div className='relative'>
           {/* <ServiceBoxes /> */}
          </div>
   
        </div>
      </section>
    );
  };
