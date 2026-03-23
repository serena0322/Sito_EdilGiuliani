'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/'); 
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-8 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-6">
              <div className="mb-0">
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none block">
                  <span className="text-white-900">Edil</span>
                  <span className="text-red-600">Giuliani</span>
                </span>
                <p className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mt-1">
                  Costruzioni Civili
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed hidden sm:block">
              Soluzioni costruttive d'eccellenza e rigore tecnico.
              Dalla gestione del cantiere alla consegna chiavi in mano.
            </p>
          </div>

          <div>
            <h4 className="text-red-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-3 md:mb-6">Navigazione</h4>
            <ul className="space-y-2 md:space-y-4 text-xs md:text-sm font-medium">
              <li><Link href="/" onClick={handleScrollToTop} className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/#chi-siamo" onClick={(e) => handleSmoothScroll(e, 'chi-siamo')} className="hover:text-red-600 transition-colors">Chi Siamo</Link></li>
              <li><Link href="/#servizi" onClick={(e) => handleSmoothScroll(e, 'servizi')} className="hover:text-red-600 transition-colors">Servizi</Link></li>
              <li><Link href="/#restauro" onClick={(e) => handleSmoothScroll(e, 'restauro')} className="hover:text-red-600 transition-colors">Lavori</Link></li>
              <li><Link href="/contatti" className="hover:text-red-600 transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-red-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-3 md:mb-6">Contatti</h4>
            <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span>📍</span> 
                <a href="https://maps.app.goo.gl/FV74WtcBkMFteWpR9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Treia, Macerata</a>
              </li>
              
              <li className="flex items-center gap-2">
                <span>📞</span> 
                <a href="tel:+393357728850" className="hover:text-white transition-colors">335 772 8850</a>
              </li>
              
              <li className="flex items-center gap-2">
                <span>✉️</span> 
                <a href="mailto:edilgiuliani.m@libero.it" className="hover:text-white transition-colors text-[10px] md:text-xs">edilgiuliani.m@libero.it</a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-red-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-3 md:mb-6">Legal</h4>
            <ul className="space-y-1 md:space-y-4 text-xs text-slate-300">
              <li>EdilGiuliani S.r.l.</li>
              <li>P.IVA: 00168710432</li>
              <li className="hidden sm:block">Contrada Collevago, 2, Treia (MC)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-5 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2026 EdilGiuliani - Tutti i diritti riservati</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy & Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}