import { useState } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";

type Tech = {
  name: string;
  img: string;
};
type Props = {
  title: string;
  description: string;
  descriptionTecnic: string;
  tech: Tech[];
  img: string;
  imgWepp: string;
  linkGitHub: string;
};

function ProyectCard({ title, description, descriptionTecnic, tech, img, imgWepp, linkGitHub }: Props) {
  const [activeTab, setActiveTab] = useState<null | "desc" | "tecnic">(null);

  return (
    <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:border-zinc-700 hover:shadow-emerald-500/5 transition-all duration-300">

      {/* Imagen / Placeholder */}
      <a
        href={linkGitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden group"
      >
        {img ? (
          <>
            <picture>
              <source srcSet={imgWepp} type="image/webp" />
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
          </>
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center gap-3">
            <FaGithub className="text-4xl text-zinc-600" />
            <span className="text-zinc-500 text-xs font-medium">Ver proyecto en GitHub</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-xl transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-white/10">
            <FaGithub /> Ver en GitHub
          </span>
        </div>
      </a>

      {/* Contenido */}
      <div className="flex flex-col gap-4 p-4">

        {/* Título */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-bold text-white text-base leading-snug">{title}</h2>
          <a
            href={linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-emerald-400 transition-colors duration-200 shrink-0 mt-0.5"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t, i) => (
            <div
              key={i}
              title={t.name}
              className="w-6 h-6 p-1 bg-zinc-800 border border-zinc-700 rounded-md hover:border-emerald-500/40 transition-colors duration-200"
            >
              <img src={t.img} alt={t.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Botones tab */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab(activeTab === "desc" ? null : "desc")}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 ${
              activeTab === "desc"
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                : "bg-transparent border-zinc-700 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600"
            }`}
          >
            Descripción
            <FaChevronDown
              className={`text-[10px] transition-transform duration-200 ${activeTab === "desc" ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "tecnic" ? null : "tecnic")}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 ${
              activeTab === "tecnic"
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                : "bg-transparent border-zinc-700 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600"
            }`}
          >
            Técnico
            <FaChevronDown
              className={`text-[10px] transition-transform duration-200 ${activeTab === "tecnic" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Panel expandido */}
        {activeTab && (
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 text-zinc-400 text-sm leading-relaxed max-h-44 overflow-y-auto">
            {activeTab === "desc" ? (
              <p>{description}</p>
            ) : (
              <p className="whitespace-pre-line">{descriptionTecnic}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProyectCard;
