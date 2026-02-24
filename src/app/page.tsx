'use client'; 

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { Building2, History, HardHat } from 'lucide-react';
import Image from 'next/image';

export default function Home() {

  // LOGICA DI RESET SCROLL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);

      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
  }, []);
  return (
    <main>
      <Hero />
      
      {/* SEZIONE STORICA: L'Evoluzione dell'Impresa */}
      <section id="chi-siamo" className="scroll-mt-32 py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* COLONNA SINISTRA: TESTO E BOLLO */}
            <Reveal>
              <div>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">
                  Quarant'anni di <br />
                  <span className="text-red-600">Esperienza Tecnica</span>
                </h2>
                
                <div className="space-y-8 text-slate-700">
                  <p className="text-lg leading-relaxed">
                    Costituita nel 1975, EdilGiuliani ha consolidato la propria presenza nel territorio di Treia operando con continuità nel settore delle costruzioni. 
                    L’evoluzione dell’impresa è avvenuta in risposta alle trasformazioni urbanistiche del maceratese.
                  </p>
                  
                  {/* ELEMENTO DI STILE: IL BOLLO +50 ANNI */}
                  <div className="flex items-center gap-6 py-6 border-y border-slate-100">
                    <div className="text-5xl font-black text-red-600 italic">+50</div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-tight">
                      Anni di <br /> Esperienza <br /> Certificata
                    </div>
                    <div className="h-10 w-px bg-slate-200 ml-auto hidden md:block" />
                    <div className="text-right hidden md:block">
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-900">Treia (MC)</p>
                      <p className="text-[10px] text-slate-400">Sede Storica</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="flex gap-4">
                      <div className="text-red-600 shrink-0"><Building2 size={24} /></div>
                      <div>
                        <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-1 text-slate-900">Settore Residenziale</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed">Edifici multipiano e nuclei abitativi integrati.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-red-600 shrink-0"><HardHat size={24} /></div>
                      <div>
                        <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-1 text-slate-900">Opere Civili</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed">Manutenzione straordinaria e nuove costruzioni.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* COLONNA DESTRA: FOTO STORICA CON DIDASCALIA ESTERNA */}
            <Reveal delay={0.3}>
              <div className="relative flex flex-col h-full">
                <div className="absolute -inset-4 bg-slate-50 rounded-3xl -rotate-1 hidden md:block" />
                
                <div className="relative rounded-2xl shadow-2xl border-4 border-white bg-white z-10">
                  <Image 
                    src="/lavori/10-01-2008.jpg" 
                    alt="Archivio Storico EdilGiuliani"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>

                {/* DIDASCALIA ESTERNA */}
                <div className="relative z-20 mt-6 bg-slate-900 rounded-xl p-5 shadow-lg border-l-4 border-red-600">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">Documento Tecnico</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    
                    <h4 className="text-white font-black text-xs uppercase tracking-widest mt-2">
                      Rilievo Fotografico — Archivio 2008
                    </h4>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
{/* SEZIONE SPECIALE: Restauro Fontana di Appignano */}
<section id="restauro" className="py-32 bg-slate-900 text-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <Reveal>
      <div className="max-w-3xl mb-20">
        <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4">
          Restauro e Alta Specializzazione
        </h3>
        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Recupero <br /> 
          <span className="text-slate-500">Monumentale</span>
        </h2>
        <p className="mt-8 text-slate-400 text-lg leading-relaxed">
          Un intervento complesso che ha unito il restauro lapideo alla creazione di nuove opere architettoniche: dalla riqualificazione della piattaforma alla posa artistica del mosaico.
        </p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      {/* COLONNA SINISTRA: Foto "Prima" e Specifiche */}
      <div className="lg:col-span-5 space-y-12">
        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <Image 
              src="/lavori/fontana-prima.JPG" 
              alt="Stato iniziale" 
              fill 
              className="object-cover"
            />
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-300">
              Stato Iniziale
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="border-l-2 border-red-600/50 pl-8 py-2">
            <h4 className="text-white font-black uppercase text-xl tracking-widest mb-6">Opere Realizzate</h4>
            <ul className="space-y-6">
              {[
                { 
                  t: "Rivestimento in Mosaico", 
                  d: "Posa in opera specializzata di tessere a mosaico per il rivestimento decorativo, garantendo continuità cromatica e resistenza strutturale." 
                },
                { 
                  t: "Panchina Perimetrale", 
                  d: "Costruzione della seduta che circonda l'opera, integrata nella piattaforma e rifinita con dettagli musivi di pregio." 
                },
                { 
                  t: "Piattaforma Basamentale", 
                  d: "Rifacimento integrale del supporto strutturale per il consolidamento e la corretta pendenza idrica dell'area monumentale." 
                }
              ].map((item, i) => (
                <li key={i}>
                  <span className="block text-red-600 font-bold uppercase text-m tracking-tighter mb-1">{item.t}</span>
                  <span className="text-slate-400 text-m leading-snug">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* COLONNA DESTRA: Foto "Dopo" */}
      <div className="lg:col-span-7 lg:pt-24">
        <Reveal delay={0.5}>
          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-red-600/20 shadow-[0_30px_100px_rgba(225,29,72,0.15)]">
            <Image 
              src="/lavori/Fontana.jpg" 
              alt="Esito intervento" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-red-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl">
              Esito Finale Intervento
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.6}>
          <div className="mt-12 bg-white/[0.03] p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <p className="text-slate-300 text-base leading-relaxed italic">
              "L'opera non è stata solo restaurata, ma arricchita da una nuova dimensione estetica grazie alla precisione millimetrica della posa in mosaico, che valorizza l'intera area urbana."
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

      {/* SEZIONE CANTIERI */}
      <section id="lavori" className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            <div className="mb-16 border-l-8 border-red-600 pl-6">
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
                I nostri <span className="text-red-600">Cantieri</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
              <ProjectCard 
                titolo="Ristrutturazione Milano"
                descrizione="Intervento completo."
                immagine="/lavori/IMG_5966.jpg"
              />
              <ProjectCard 
                titolo="Villa Unifamiliare"
                descrizione="Classe A++."
                immagine="/lavori/IMG_6215.jpg"
              />
              <ProjectCard 
                titolo="Residenza Moderna"
                descrizione="Design d'interni."
                immagine="/lavori/IMG_6214.jpg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ProjectCard 
                titolo="Nuova Costruzione"
                descrizione="Sviluppo strutturale."
                immagine="/lavori/IMG_6819.jpg"
              />
              <ProjectCard 
                titolo="Finiture di Pregio"
                descrizione="Dettagli in cartongesso."
                immagine="/lavori/IMG_6100.jpg"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}