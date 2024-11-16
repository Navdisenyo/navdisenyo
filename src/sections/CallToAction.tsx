import ArrowIcon from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
        <div className="container">
          <div className='max-w-[478px] mx-auto relative'>
            <div className='flex justify-center'>
              {/* <div className='tag'>Grow your Business</div> */}
            </div>
            <h2 className='text-center text-3xl md:text-5xl md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#04418b] text-transparent bg-clip-text mt-5'>Book an apportment</h2>
            <p className='text-center text-[16px] leading-[30px] tracking-tight text-[#0a0a0a] mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress & motivate our efforts.</p>
            <Image src={starImage} alt='star' width={360} className='absolute -left-[350px] -top-[137px]'/>
            <Image src={springImage} alt='spring' width={360} className='absolute -right-[331px] -top-[19px]'/>
          </div>
          <div className='flex gap-2 mt-10 justify-center'>
            <button className="btn btn-primary">Get started</button>
                <button className="btn btn-text gap-1">
                  <span className=''>Learn more</span>
                  <ArrowIcon className="h-5 w-5"/>
            </button>
          </div>
   
        </div>
      </section>
  );
};
