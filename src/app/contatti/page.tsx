'use client';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contatti() {
  return (
    <main id="contatti" className="min-h-screen bg-white pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
{/* 1. CONTAINER ESTERNO: Ultra-compatto */}
<div className="mb-8 pt-4 md:pt-8 px-4 max-w-7xl mx-auto">
  
  {/* 2. CONTAINER INTERNO */}
  <div className="relative">
    
    {/* SCRITTA SFONDO "CONTACT" - solo desktop */}
    <h1 className="hidden md:block text-9xl font-black text-slate-900/5 uppercase tracking-tighter absolute -top-10 -left-2 select-none pointer-events-none z-0">
      Contact
    </h1>
    
    {/* CONTENUTO IN PRIMO PIANO */}
    <div className="relative z-10 border-l-4 md:border-l-8 border-red-600 pl-4 md:pl-6">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
        Parliamo del tuo <span className="text-red-600">Progetto</span>
      </h2>
      <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mt-3">
        Preventivi e consulenze tecniche
      </p>
    </div>

  </div>
</div>

        {/* Grid Principale: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl overflow-hidden border border-slate-100 mb-12 rounded-3xl">
          
          {/* Colonna Info (Nera) */}
          <div className="lg:col-span-5 bg-slate-900 p-5 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-6 md:space-y-12">
              <div>
                <h3 className="text-red-600 font-black uppercase tracking-widest text-xs mb-5 md:mb-8">Recapiti Diretti</h3>
                <div className="space-y-4 md:space-y-8">
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="bg-red-600 p-2 md:p-3 rounded-xl shadow-lg shadow-red-900/50 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase mb-0.5">Telefono</p>
                      <p className="text-base md:text-xl font-bold">+39 335 772 8850</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="bg-red-600 p-2 md:p-3 rounded-xl shadow-lg shadow-red-900/50 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[10px] font-bold uppercase mb-0.5">Email</p>
                      <p className="text-sm md:text-xl font-bold break-all md:break-normal">edilgiuliani.m@libero.it</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="bg-red-600 p-2 md:p-3 rounded-xl shadow-lg shadow-red-900/50 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase mb-0.5">Sede</p>
                      <p className="text-base md:text-xl font-bold">Treia, Macerata</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 md:pt-12 border-t border-slate-800">
                <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4 md:mb-6 flex items-center gap-2">
                  <Clock size={14} className="text-red-600" /> Reperibilità
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400 text-xs">Lun — Ven</span>
                    <span className="text-white font-bold text-xs">08:00 - 19:00</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">Sabato</span>
                    <span className="text-white font-bold text-xs">9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonna Form (Grigio Tech) */}
          <div className="lg:col-span-7 bg-slate-50 p-5 sm:p-8 md:p-12">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-slate-900"
            >
              {/* Sostituisci YOUR_ACCESS_KEY_HERE con la chiave che ricevi su web3forms.com */}
              <input type="hidden" name="access_key" value="002fe1df-dc45-45b7-aca5-936d38173979" />
              
              <div className="md:col-span-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Nome Completo</label>
                <input name="name" type="text" required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors font-bold" placeholder="Mario Rossi" />
              </div>
              <div className="md:col-span-1">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Email</label>
                <input name="email" type="email" required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors font-bold" placeholder="mario@esempio.it" />
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Tipo di Lavoro</label>
                <select name="subject" className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors font-bold cursor-pointer appearance-none">
                  <option>Nuova Costruzione</option>
                  <option>Ristrutturazione Edilizia</option>
                  <option>Restauro Monumentale</option>
                  <option>Risanamento Straordinario</option>
                  <option>Efficientamento Energetico / Sisma Bonus</option>
                  <option>Cartongesso / Finiture</option>
                  <option>Consulenza Tecnica</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Il tuo Messaggio</label>
                <textarea name="message" rows={4} required className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors font-bold resize-none" placeholder="Parlaci del tuo progetto..."></textarea>
              </div>
              <div className="md:col-span-2 pt-2 pb-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-0.5">
                    <input type="checkbox" required className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-600 focus:ring-2 cursor-pointer accent-red-600" />
                  </div>
                  <span className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Ho letto e accetto la <a href="/privacy" target="_blank" className="text-red-600 font-bold underline hover:text-red-700">Privacy Policy</a> per il trattamento dei miei dati.*
                  </span>
                </label>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full sm:w-auto justify-center bg-red-600 text-white px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-sm flex items-center gap-3 hover:bg-red-500 transition-all rounded-2xl shadow-lg shadow-red-900/20 hover:-translate-y-1 active:scale-95 group">
                  Invia Richiesta
                  <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Riga Finale: Info Sede + Mappa Quadrata */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-xl pb-4 text-center lg:text-left">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-3">
              Consulenza e Progettazione
            </h4>
            <div className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-red-600 pl-4">
                Per garantire la massima assistenza tecnica e il controllo diretto delle opere, 
                siamo operativi quotidianamente presso i nostri cantieri.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Il nostro ufficio tecnico riceve **esclusivamente su appuntamento** per l'analisi di capitolati e progetti nei seguenti orari: <br />
                <span className="text-slate-900 font-bold italic">Lun — Ven: 18:30 / 20:00</span> <br />
                <span className="text-slate-900 font-bold italic">Sabato: 9:00 - 13:00</span>
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-[450px]">
  
            {/* Effetto Sfocatura Rossa (Glow) sotto la mappa */}
            <div className="absolute -inset-1 bg-red-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Contenitore Principale */}
            <div className="relative h-80 lg:h-96 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
              
              {/* Overlay di Protezione trasparente */}
              <div className="absolute inset-0 z-10 bg-transparent" />

              {/* Iframe della Mappa - COLORATA E NITIDA */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11606.388308954089!2d13.32407855!3d43.3436198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d92edea67843b%3A0xcd551d34655271a3!2sEdilgiuliani!5e0!3m2!1sit!2sit!4v1771356075238!5m2!1sit!2sit" 
                className="absolute inset-0 w-full h-full border-0 contrast-110" // Rimossa grayscale
                allowFullScreen
                loading="lazy" 
              />

              {/* Bottone "Vieni a trovarci" con Google Maps */}
              <a 
                href="https://maps.app.goo.gl/FV74WtcBkMFteWpR9" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 z-20 bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-red-600 transition-all duration-300 flex items-center gap-2 group/btn"
              >
                Vieni a trovarci
                <MapPin size={14} className="group-hover/btn:animate-bounce" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}