'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react'; 

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/lavori/Fontana.jpg" 
          alt="Sfondo Cantiere EdilGiuliani" 
          fill 
          className="object-cover scale-105 animate-slow-zoom" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
      </div>
      
      <div className="absolute -right-24 -bottom-24 opacity-5 pointer-events-none z-0 rotate-12 mix-blend-overlay">
         <Image src="/logo_sfondo.jpeg" alt="" width={800} height={800} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center pt-32 md:pt-40">
  <div className="max-w-4xl">
    
    <Reveal>
      <h1 className="font-black uppercase tracking-tighter leading-[0.9] mb-6">
        <span className="text-white text-5xl lg:text-7xl block mb-2">
          Costruire il <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700">Futuro</span>
        </span>
        <span className="text-slate-400 text-4xl lg:text-6xl block">
          Restaurare la Storia.
        </span>
      </h1>
    </Reveal>
          
          <Reveal delay={0.2}>
            <div className="border-l-4 border-red-600 pl-6 mb-10 bg-gradient-to-r from-slate-900/50 to-transparent py-2">
              <p className="text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                Punto di riferimento a Treia e Macerata per l'edilizia civile e il recupero monumentale. 
                Trasformiamo progetti complessi in opere durature, unendo innovazione tecnica e rispetto per il territorio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Link 
                href="/contatti" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-red-600 rounded-xl hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1"
              >
                <span className="tracking-widest uppercase text-xs flex items-center gap-2">
                  Richiedi Preventivo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link 
                href="/#lavori" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30"
              >
                <span className="tracking-widest uppercase text-xs text-slate-200 group-hover:text-white">
                  Esplora i Lavori
                </span>
              </Link>
              
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-16 flex flex-wrap gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-red-600" />
                <span className="text-xs uppercase tracking-widest text-slate-400">Certificazioni SOA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-red-600" />
                <span className="text-xs uppercase tracking-widest text-slate-400">Restauro Beni Vincolati</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-red-600" />
                <span className="text-xs uppercase tracking-widest text-slate-400">Gestione Diretta</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

    </section>
  );
}