'use client'; 

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import Certifications from '@/components/Certifications';
import { Building2, History, HardHat, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
    
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <main>
      <Hero />
      
      <section id="chi-siamo" className="scroll-mt-32 py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6 md:mb-8">
                  Quarant'anni di <br />
                  <span className="text-red-600">Esperienza Tecnica</span>
                </h2>
                
                <div className="space-y-6 md:space-y-8 text-slate-700">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Costituita nel 1975, EdilGiuliani ha consolidato la propria presenza nel territorio di Treia operando con continuità nel settore delle costruzioni. 
                    L’evoluzione dell’impresa è avvenuta in risposta alle trasformazioni urbanistiche del maceratese.
                  </p>
                  
                  <div className="flex items-center gap-6 py-6 border-y border-slate-100">
                    <div className="text-4xl lg:text-5xl font-black text-red-600 italic">+50</div>
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

      <section id="servizi" className="scroll-mt-32 py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 md:mb-6">
                Le Nostre <span className="text-red-600">Specializzazioni</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base lg:text-lg">
                Dal piccolo intervento residenziale al grande recupero di beni vincolati, offriamo competenze trasversali gestite interamente da personale interno altamente qualificato.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            <Reveal delay={0.1} className="h-full">
              <div className="h-full flex flex-col bg-white p-6 lg:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shrink-0">
                  <Building2 size={24} />
                </div>
                <h3 className="text-base lg:text-lg font-black uppercase tracking-tight text-slate-900 mb-2 lg:mb-3">Nuove Costruzioni</h3>
                <p className="text-[13px] lg:text-sm text-slate-500 leading-relaxed flex-1">Progettazione e realizzazione di edifici residenziali, commerciali e industriali con le più moderne tecnologie edili e antisismiche.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="h-full">
              <div className="h-full flex flex-col bg-white p-6 lg:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shrink-0">
                  <HardHat size={24} />
                </div>
                <h3 className="text-base lg:text-lg font-black uppercase tracking-tight text-slate-900 mb-2 lg:mb-3">Ristrutturazioni</h3>
                <p className="text-[13px] lg:text-sm text-slate-500 leading-relaxed flex-1">Riqualificazione totale di appartamenti e condomini. Dal rifacimento tetto e facciate fino agli impianti e alle finiture d'interni.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="h-full">
              <div className="h-full flex flex-col bg-white p-6 lg:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                </div>
                <h3 className="text-base lg:text-lg font-black uppercase tracking-tight text-slate-900 mb-2 lg:mb-3">Energia & Sisma</h3>
                <p className="text-[13px] lg:text-sm text-slate-500 leading-relaxed flex-1">Interventi mirati all'efficientamento: isolamento termico continuo, efficientamento infissi, smaltimento amianto e consolidamento antisismico.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Certifications />

<section id="restauro" className="pt-8 lg:pt-12 pb-16 lg:pb-32 bg-slate-900 text-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <Reveal>
      <div className="max-w-3xl mb-10 lg:mb-20">
        <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-3 lg:mb-4">
          Restauro e Alta Specializzazione
        </h3>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Recupero <br /> 
          <span className="text-slate-500">Monumentale</span>
        </h2>
        <p className="mt-4 lg:mt-8 text-slate-400 text-[13px] sm:text-sm lg:text-lg leading-relaxed">
          Un intervento complesso che ha unito il restauro lapideo alla creazione di nuove opere architettoniche: dalla riqualificazione della piattaforma alla posa artistica del mosaico.
        </p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      
      <div className="lg:col-span-5 space-y-10 lg:space-y-12">
        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] w-3/4 sm:w-full max-w-[280px] lg:max-w-[340px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mx-auto lg:mx-0">
            <Image 
              src="/lavori/fontana-prima.JPG" 
              alt="Stato iniziale" 
              fill 
              className="object-cover"
            />
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-black/80 backdrop-blur-md px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-300">
              Stato Iniziale
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="border-l-2 border-red-600/50 pl-5 lg:pl-8 py-1 lg:py-2">
            <h4 className="text-white font-black uppercase text-lg lg:text-xl tracking-widest mb-4 lg:mb-6">Opere Realizzate</h4>
            <ul className="space-y-5 lg:space-y-6">
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
                  <span className="block text-red-600 font-bold uppercase text-[11px] lg:text-sm tracking-tighter mb-1">{item.t}</span>
                  <span className="text-slate-400 text-xs lg:text-sm leading-snug">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-7 lg:pt-24">
        <Reveal delay={0.5}>
          <div className="relative aspect-[16/10] w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-red-600/20 shadow-[0_20px_60px_rgba(225,29,72,0.15)] bg-slate-800">
            <Image 
              src="/lavori/Fontana.jpg" 
              alt="Esito intervento" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 bg-red-600/90 backdrop-blur-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl border border-white/10">
              Esito Finale Intervento
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.6}>
          <div className="mt-6 lg:mt-12 bg-white/[0.03] p-5 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5 backdrop-blur-sm">
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed italic">
              "L'opera non è stata solo restaurata, ma arricchita da una nuova dimensione estetica grazie alla precisione millimetrica della posa in mosaico, che valorizza l'intera area urbana."
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

      <section id="lavori" className="scroll-mt-32 py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            <div className="mb-10 md:mb-16 border-l-8 border-red-600 pl-4 sm:pl-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                I nostri <span className="text-red-600">Cantieri</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-6 lg:mb-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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