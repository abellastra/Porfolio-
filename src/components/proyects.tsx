import { FilterOfTecnologi } from "../hook/FilterOfTecnologi";

import ProyectsCard from "./proyectCard";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SlideWrapper from "./SlideWrapper";
import  {infoProjects} from "./infoProjects";

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

  console.log(projectsFiltrado);

  return (
    <div
      id="MisProyectos  "
      className=" flex justify-center flex-col mb-[1vw] w-[80vw] md:w-[60vw] "
    >
      <div className="flex items-center justify-center">
        {" "}
        <h2 className="text-3xl font-black mb-6 text-[#2f4f4f]">
          Mis proyectos
        </h2>
      </div>

      <section className=" w-full flex justify-center min-w-0 ">
        <div className=" w-full max-w-6xl flex flex-col p-4 sm:py-8">
          <section className="w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-6xl px-4 relative">
              <button className="hover:cursor-pointer swiper-button-prev-custom absolute left-0 top-10 md:top-0 h-full w-[15vw] z-50 flex justify-center items-center  md:bg-white/20 hover:bg-green-100/10 transition ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="hover:cursor-pointer  swiper-button-next-custom absolute right-0 top-10 md:top-0 h-full w-[15vw] z-50 flex justify-center items-center md:bg-white/20 hover:bg-green-100/10 transition ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                spaceBetween={40}
                slidesPerView={1}
                centeredSlides={true}
                breakpoints={{
                  1200: { slidesPerView: 1 },
                  1424: { slidesPerView: 2 },
                }}
              >
                {(typoOfFilter && projectsFiltrado.length > 0
                  ? projectsFiltrado
                  : infoProjects
                ).map((project, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full flex items-center justify-center ">
                      <SlideWrapper>
                        <ProyectsCard {...project} />
                      </SlideWrapper>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
export default Proyects;
