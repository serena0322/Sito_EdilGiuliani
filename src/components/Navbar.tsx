'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault(); 
      
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start', 
        });
        
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.replaceState(null, '', '/'); 
    }
  };

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg shadow-slate-200/50 rounded-2xl px-6 py-1.5 flex justify-between items-center transition-all duration-300">
          
          <Link 
            href="/" 
            onClick={handleScrollToTop}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div
              className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110 shrink-0"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskComposite: 'intersect',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskComposite: 'source-in',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat'
              }}
            >
              <Image
                src="/logo_sfondo.jpeg"
                alt="Logo EdilGiuliani"
                fill
                className="object-contain"
                priority 
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black leading-none tracking-tighter text-slate-900 uppercase">
                EDIL<span className="text-red-600">GIULIANI</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase leading-none mt-1">
                Costruzioni Civili
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            
            <Link 
              href="/" 
              onClick={handleScrollToTop}
              className="text-slate-600 hover:text-red-600 font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer"
            >
              Home
            </Link>

            <Link 
              href="/#chi-siamo" 
              onClick={(e) => handleSmoothScroll(e, 'chi-siamo')}
              className="text-slate-600 hover:text-red-600 font-bold uppercase text-xs tracking-widest transition-colors"
            >
              Chi Siamo
            </Link>
            
            <Link 
              href="/#restauro" 
              onClick={(e) => handleSmoothScroll(e, 'restauro')}
              className="text-slate-600 hover:text-red-600 font-bold uppercase text-xs tracking-widest transition-colors"
            >
              Lavori
            </Link>
            
            <Link 
              href="/contatti" 
              className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-red-500 transition-all shadow-md shadow-red-200/50 hover:-translate-y-0.5 active:scale-95"
            >
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}