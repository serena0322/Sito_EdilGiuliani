interface ProjectProps {
  titolo: string;
  descrizione: string;
  immagine: string;
}

export default function ProjectCard({ titolo, descrizione, immagine }: ProjectProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3]">
      <img 
        src={immagine} 
        alt={titolo}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 lg:p-6">
        <h3 className="text-lg lg:text-xl font-bold text-white">{titolo}</h3>
        <p className="text-slate-200 text-xs lg:text-sm mt-1 lg:mt-2">{descrizione}</p>
      </div>
    </div>
  );
}