import { FilterOfTecnologi } from "../hook/FilterOfTecnologi";
import ProyectsCard from "./proyectCard";
import { useEffect, useState } from "react";
import { infoProjects } from "./infoProjects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Tech = {
  name: string;
  img: string;
  imgWepp: string;
};

type Project = {
  title: string;
  description: string;
  descriptionTecnic: string;
  tech: Tech[];
  img: string;
  imgWepp: string;
  linkGitHub: string;
};

const PER_PAGE = 2;

function Proyects({ typoOfFilter }: { typoOfFilter: string }) {
  const [projectsFiltrado, setProjectsFiltrado] = useState<Project[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setProjectsFiltrado(FilterOfTecnologi(infoProjects, typoOfFilter));
    setPage(0);
  }, [typoOfFilter]);

  const projects =
    typoOfFilter && projectsFiltrado.length > 0 ? projectsFiltrado : infoProjects;

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const visible = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div id="MisProyectos" className="flex flex-col w-full gap-8 scroll-mt-20">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Mis Proyectos</h2>
          {typoOfFilter && (
            <p className="text-xs text-emerald-400 mt-1">
              Filtrando por <span className="font-semibold capitalize">{typoOfFilter}</span>
            </p>
          )}
        </div>

        {/* Paginación */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-600 font-medium tabular-nums">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visible.map((project, i) => (
          <ProyectsCard key={page * PER_PAGE + i} {...project} />
        ))}
      </div>

      {/* Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-8 bg-emerald-400"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Proyects;
