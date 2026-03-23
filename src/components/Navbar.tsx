'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    setIsMenuOpen(false);

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
    setIsMenuOpen(false);

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
        <div ref={navRef} className="relative bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg shadow-slate-200/50 rounded-2xl px-6 py-1.5 flex justify-between items-center transition-all duration-300">

          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 md:gap-4 group cursor-pointer"
          >
            <div
              className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Logo EdilGiuliani"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none tracking-tighter text-slate-900 uppercase">
                EDIL<span className="text-red-600">GIULIANI</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase leading-none mt-1">
                Costruzioni Civili
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
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
              href="/#servizi"
              onClick={(e) => handleSmoothScroll(e, 'servizi')}
              className="text-slate-600 hover:text-red-600 font-bold uppercase text-xs tracking-widest transition-colors"
            >
              Servizi
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-red-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl shadow-slate-200/50 rounded-2xl md:hidden flex flex-col">
              <Link
                href="/"
                onClick={handleScrollToTop}
                className="text-center text-slate-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest py-2.5 px-2 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#chi-siamo"
                onClick={(e) => handleSmoothScroll(e, 'chi-siamo')}
                className="text-center text-slate-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest py-2.5 px-2 transition-colors"
              >
                Chi Siamo
              </Link>
              <Link
                href="/#servizi"
                onClick={(e) => handleSmoothScroll(e, 'servizi')}
                className="text-center text-slate-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest py-2.5 px-2 transition-colors"
              >
                Servizi
              </Link>
              <Link
                href="/#restauro"
                onClick={(e) => handleSmoothScroll(e, 'restauro')}
                className="text-center text-slate-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest py-2.5 px-2 transition-colors"
              >
                Lavori
              </Link>
              <div className="pt-2 mt-1">
                <Link
                  href="/contatti"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-red-600 text-white px-4 py-2.5 rounded-xl font-bold uppercase text-[10px] tracking-widest text-center shadow-md active:scale-95 transition-all"
                >
                  Contatti
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}