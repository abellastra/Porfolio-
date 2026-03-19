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

function ProyectCard({
  title,
  description,
  descriptionTecnic,
  tech,
  img,
  imgWepp,
  linkGitHub,
}: Props) {
  const [activeTab, setActiveTab] = useState<null | "desc" | "tecnic">(null);

  return (
    <div className="flex flex-col bg-[#1f3320] border border-[#86a787]/25 rounded-2xl overflow-hidden shadow-lg w-full">

      {/* Imagen */}
      <a
        href={linkGitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden group"
      >
        <picture>
          <source srcSet={imgWepp} type="image/webp" />
          <img
            src={img}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-white font-semibold text-sm bg-black/60 px-4 py-2 rounded-lg transition-opacity duration-300">
            <FaGithub /> Ver en GitHub
          </span>
        </div>
      </a>

      {/* Info */}
      <div className="flex flex-col gap-3 p-4">

        {/* Título + GitHub */}
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-bold text-white text-base md:text-lg leading-tight">
            {title}
          </h2>
          <a
            href={linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#86a787] transition-colors duration-200 shrink-0 text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <div
              key={i}
              className="w-7 h-7 p-1 bg-[#86a787]/20 border border-[#86a787]/30 rounded-lg"
              title={t.name}
            >
              <img src={t.img} alt={t.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-t border-[#86a787]/20 pt-3">
          <button
            onClick={() => setActiveTab(activeTab === "desc" ? null : "desc")}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
              activeTab === "desc"
                ? "bg-[#86a787] text-white"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Descripción
            <FaChevronDown
              className={`transition-transform duration-200 ${activeTab === "desc" ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "tecnic" ? null : "tecnic")}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
              activeTab === "tecnic"
                ? "bg-[#86a787] text-white"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Técnico
            <FaChevronDown
              className={`transition-transform duration-200 ${activeTab === "tecnic" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Panel expandible */}
        {activeTab && (
          <div className="bg-[#86a787]/10 border border-[#86a787]/20 rounded-xl p-4 text-gray-300 text-sm leading-relaxed max-h-48 overflow-y-auto">
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
