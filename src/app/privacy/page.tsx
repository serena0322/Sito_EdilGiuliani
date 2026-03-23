import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="text-red-600 hover:text-red-700 font-bold text-sm tracking-widest uppercase mb-8 inline-block">
          &larr; Torna alla Home
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 bg-slate-50 border-l-8 border-red-600 pl-6 py-4">
            Privacy & Cookie Policy
          </h1>
          
          <div className="prose prose-slate prose-red max-w-none text-slate-600 space-y-6">
            <p className="text-sm text-slate-400 italic">
              Ultimo aggiornamento: Ottobre 2023
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 uppercase tracking-widest border-b pb-2">1. INFORMAZIONI GENERALI</h2>
            <p>
              Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa pagina descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di EdilGiuliani. 
              Le presenti informazioni non riguardano altri siti, pagine o servizi online raggiungibili tramite link ipertestuali eventualmente pubblicati nei siti ma riferiti a risorse esterne al dominio dell'azienda.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 uppercase tracking-widest border-b pb-2">2. TITOLARE DEL TRATTAMENTO</h2>
            <p>
              A seguito della consultazione del sito possono essere trattati dati relativi a persone fisiche identificate o identificabili. Il Titolare del trattamento è <strong>EdilGiuliani S.r.l.</strong>, con sede legale a Treia (MC).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 uppercase tracking-widest border-b pb-2">3. DATI TRATTATI E FINALITÀ</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.</li>
              <li><strong>Dati forniti volontariamente dall'utente:</strong> L'invio esplicito e volontario di messaggi tramite i moduli di contatto (nome, cognome, email, numero di telefono) comporta l'acquisizione dei dati di contatto del mittente, necessari a rispondere, nonché di tutti i dati personali inclusi nelle comunicazioni. Tali dati vengono utilizzati esclusivamente per fornire i preventivi o le informazioni richieste.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10 uppercase tracking-widest border-b pb-2">4. POLITICA DEI COOKIE</h2>
            <p>
              Questo sito web utilizza i Cookie per rendere i propri servizi semplici ed efficienti per l'utenza che visione le pagine. Relativamente all'utilizzo dei cookie, specifichiamo quanto segue:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookie Tecnici e Strettamente Necessari:</strong> Essenziali per il corretto funzionamento di alcune sezioni del sito. Non vi è alcun obbligo di richiesta di consenso preventivo al loro utilizzo.</li>
              <li><strong>Cookie di Profilazione e Marketing:</strong> Attualmente il nostro sito NON utilizza cookie di profilazione proprietari. Eventuali servizi di terze parti (come Google Maps) possono far uso di cookie. L'utente ha la facoltà di prestare o negare il consenso tramite l'apposito banner a piè di pagina.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10 uppercase tracking-widest border-b pb-2">5. DIRITTI DEGLI INTERESSATI</h2>
            <p>
              Gli interessati hanno il diritto di ottenere da EdilGiuliani l'accesso ai propri dati personali, la rettifica, la cancellazione degli stessi, o la limitazione del trattamento che li riguarda (artt. 15 e ss. del Regolamento). L'apposita istanza può essere presentata contattandoci tramite e-mail o ai recapiti presenti nella pagina contatti.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
