import AarrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
    {/* top bar - navdisenyo */}
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className='text-white/60 hidden md:block'>
        Streamline your workflow & Boost Your productivity with us.
      </p>
      <div className='inline-flex gap-1 items-center'>
        <p>Get started for free, book an apportment.</p>
        <AarrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
    </div>

    {/* navbar - navdisenyo */}

    <div className='py-5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Image src={Logo} alt="navdisenyo" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className='hidden md:flex gap-6 text-black/60 items-center'>
            <a href='/'>Home</a>
            <a href='#'>Features</a>
            <a href='#'>Customers</a>
            <a href='/services'>Services</a>
            <a href='#'>Contact</a>
            <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Apportment</button>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
};
