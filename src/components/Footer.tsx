import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Colonna 1: Logo e Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="mb-0">
                <span className="text-2xl font-black uppercase tracking-tighter leading-none block">
                  <span className="text-white-900">Edil</span>
                  <span className="text-red-600">Giuliani</span>
                </span>
                <p className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mt-2">
                  Costruzioni Civili
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soluzioni costruttive d'eccellenza e rigore tecnico. 
              Trasformiamo visioni architettoniche in realtà solide, 
              garantendo un’esecuzione impeccabile e la massima trasparenza operativa, 
              dalla gestione del cantiere alla consegna chiavi in mano.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div>
            <h4 className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">Navigazione</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="#servizi" className="hover:text-red-600 transition-colors">Servizi</Link></li>
              <li><Link href="#lavori" className="hover:text-red-600 transition-colors">Lavori</Link></li>
              <li><Link href="#contatti" className="hover:text-red-600 transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Colonna 3: Contatti */}
          <div>
            <h4 className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">Contatti</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {/* Usiamo flex e gap-3 per dare respiro */}
              <li className="flex items-center gap-3">
                <span className="text-lg">📍</span> 
                <span>Treia, Macerata, Italia</span>
              </li>
              
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span> 
                <span>+39 335 772 8850</span>
              </li>
              
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span> 
                <span>edilgiuliani.m@libero.it</span>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Dati Legali */}
          <div>
            <h4 className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>EdilGiuliani S.r.l.</li>
              <li>P.IVA: 00168710432</li>
              <li>Contrada Collevago, 2, Treia (MC)</li>
              <li>Italia</li>
            </ul>
          </div>
        </div>

        {/* Barra finale */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2026 EdilGiuliani - Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}