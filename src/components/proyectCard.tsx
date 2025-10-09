import { useState } from "react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  img: string;
  linkGitHub: string;
};

function ProyectCard({ title, description, tech, img, linkGitHub }: Props) {
  const [descripcionStatus, setDescripcionStatus] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="bg-[#86a787]/50 rounded-4xl text-lg md:text-3xl p-[2px] md:p-4 mb-2">{title}</h2>

      <div className="flex w-full sm:w-[40vh] md:w-[60vh] h-[300px] md:h-[400px] relative">
        <button
          onClick={() => setDescripcionStatus((prev) => !prev)}
          className=" hover:bg-[rgb(0,0,0 )] absolute top-2 right-2 text-white z-20 bg-black/50 rounded-full px-3 py-1"
        >
          {descripcionStatus ? "Ocultar description" : "ver description"}
        </button>
        {!descripcionStatus && (
          <div className="bg-[#86a787]/60 w-[40vh]  sm:w-[60vh] h-full overflow-hidden hover:shadow-[0_0_20px_#22c55e]">
            <a href={linkGitHub} target="_blank">
              <img
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                src={img}
                alt="foto"
              />
            </a>
          </div>
        )}
        {descripcionStatus && (
          <div className=" flex flex-col bg-[#86a787]/60  w-auto h-[400px] justify-center items-center">
            <h5 className="w-[70vh] flex justify-center text-xl pb-4">
              {description}
            </h5>
            <div className=" grid grid-cols-5 justify-center mt-2">
              {tech.map((t, i) => (
                <div
                  className="bg-[#86a787] w-[10vh] m-1 p-4 rounded-3xl"
                  key={i}
                >
                  <img className=" h-[7vh]" src={t} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProyectCard;
