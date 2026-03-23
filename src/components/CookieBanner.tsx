'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controllo se l'utente ha già fatto una scelta sui cookie
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-white p-5 lg:p-6 z-50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_-15px_40px_rgba(0,0,0,0.5)]">
      <div className="text-sm text-slate-300 flex-1 max-w-4xl leading-relaxed">
        <strong className="text-white">Informativa Cookie</strong><br />
        Questo sito utilizza cookie essenziali per garantirne il corretto funzionamento e cookie di tracciamento per capire come interagisci con esso. Questi ultimi saranno impostati solo previo consenso. 
        <Link href="/privacy" className="text-red-500 hover:text-red-400 font-bold ml-2 underline underline-offset-2">
          Leggi la Privacy Policy
        </Link>.
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
        <button 
          onClick={declineCookies}
          className="px-5 py-3 md:py-2 text-xs font-bold uppercase tracking-widest bg-transparent border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl md:rounded-lg transition-all"
        >
          Rifiuta
        </button>
        <button 
          onClick={acceptCookies}
          className="px-8 py-3 md:py-2 text-xs font-bold uppercase tracking-widest bg-red-600 text-white rounded-xl md:rounded-lg hover:bg-red-500 transition-all shadow-lg hover:-translate-y-1"
        >
          Accetta Tutti
        </button>
      </div>
    </div>
  );
}
