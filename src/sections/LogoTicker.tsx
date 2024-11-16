import InfiniteLogoScroll from '@/components/infinite-logo-scroll'
import Image from 'next/image';

export const LogoTicker = () => {
  const logos = [
    '/logo-acme.png?height=200&width=200',
    '/logo-apex.png?height=200&width=200',
    '/logo-celestial.png?height=200&width=200',
    '/logo-quantum.png?height=200&width=200',
    '/logo-echo.png?height=200&width=200',
    '/logo-pulse.png?height=200&width=200',
  ]
  return (
    <div className='bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <div className='flex gap-10 flex-none'>
            <InfiniteLogoScroll logos={logos} speed={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
