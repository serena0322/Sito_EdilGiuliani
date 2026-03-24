import Reveal from '@/components/Reveal';

export default function Certifications() {
  return (
    <section className="bg-slate-900 py-12 md:py-16 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
            <div className="text-center md:text-left max-w-sm">
              <h3 className="text-white font-black uppercase text-sm md:text-base tracking-widest mb-3">Riconoscimenti e Certificazioni</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Impresa accreditata per lavori pubblici e dotata di sistemi di gestione qualità certificati.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-xl">
                  <span className="text-white font-black text-xl md:text-2xl">SOA</span>
                </div>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3 text-center">Cat. OG 1 / OG 2</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-xl">
                  <span className="text-white font-black text-xl md:text-2xl">ISO</span>
                </div>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3 text-center">9001:2015</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center border-4 border-red-600/30 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <span className="text-white font-black text-2xl md:text-3xl text-center leading-none tracking-tighter w-min">50</span>
                </div>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3 text-center">Anni di Attività</span>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
