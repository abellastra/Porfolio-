import { FilterOfTecnologi } from "../hook/FilterOfTecnologi";
import ProyectsCard from "./proyectCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
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

function Proyects({ typoOfFilter }: { typoOfFilter: string }) {
  const [projectsFiltrado, setProjectsFiltrado] = useState<Project[]>([]);

  useEffect(() => {
    const projectsfiltrados = FilterOfTecnologi(infoProjects, typoOfFilter);
    if (infoProjects) {
      setProjectsFiltrado(projectsfiltrados);
    }
  }, [typoOfFilter]);

  const projects =
    typoOfFilter && projectsFiltrado.length > 0
      ? projectsFiltrado
      : infoProjects;

  return (
    <div id="MisProyectos" className="flex flex-col w-full gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">Mis Proyectos</h2>
        {typoOfFilter && (
          <span className="text-xs text-[#86a787] bg-[#86a787]/10 border border-[#86a787]/30 px-3 py-1 rounded-full">
            Filtrando por: {typoOfFilter}
          </span>
        )}
      </div>

      <div className="relative">
        {/* Flechas: laterales en md+, debajo en mobile */}
        <button className="swiper-prev-proj hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#1f3320] border border-[#86a787]/40 text-[#86a787] hover:bg-[#86a787] hover:text-white items-center justify-center transition-all duration-200 shadow-lg">
          <FaChevronLeft className="text-sm" />
        </button>
        <button className="swiper-next-proj hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#1f3320] border border-[#86a787]/40 text-[#86a787] hover:bg-[#86a787] hover:text-white items-center justify-center transition-all duration-200 shadow-lg">
          <FaChevronRight className="text-sm" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev-proj",
            nextEl: ".swiper-next-proj",
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <ProyectsCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas mobile: debajo del swiper */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button className="swiper-prev-proj w-9 h-9 rounded-full bg-[#1f3320] border border-[#86a787]/40 text-[#86a787] hover:bg-[#86a787] hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg">
            <FaChevronLeft className="text-sm" />
          </button>
          <button className="swiper-next-proj w-9 h-9 rounded-full bg-[#1f3320] border border-[#86a787]/40 text-[#86a787] hover:bg-[#86a787] hover:text-white flex items-center justify-center transition-all duration-200 shadow-lg">
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
