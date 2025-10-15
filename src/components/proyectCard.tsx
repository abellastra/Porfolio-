import { useState } from "react";
type Props = {
  title: string;
  description: string;
  descriptionTecnic: string;
  tech: string[];
  img: string;
  linkGitHub: string;
};

function ProyectCard({
  title,
  description,
  descriptionTecnic,
  tech,
  img,
  linkGitHub,
}: Props) {
  const [descripcionStatus, setDescripcionStatus] = useState(false);
  const [descripionTecnicStatus, setDescripionTecnicStatus] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center text-white ">
      <h2 className="bg-[#86a787]/50 rounded-4xl text-lg md:text-3xl p-[2px] md:p-4 mb-2">
        {title}
      </h2>

      <div className=" flex w-full max-w-[600px] h-[300px] md:h-[400px] relative">
        {/* <div className="flex w-[20vh] sm:w-[30vh] md:w-[60vh] h-[300px] md:h-[400px] relative"> */}
        <button
          onClick={() => {
            setDescripcionStatus((prev) => !prev);
            setDescripionTecnicStatus(false);
          }}
          className=" hover:bg-[rgb(0,0,0 )] absolute top-2 right-2 text-white z-20 bg-black/50 rounded-full px-3 hover:scale-110  py-1 hover:shadow-[0_0_20px_#22c55e] transition-transform duration-300"
        >
          {descripcionStatus ? "Ocultar description" : "ver description"}
        </button>
        <button
          onClick={() => {
            setDescripionTecnicStatus((prev) => !prev);
            setDescripcionStatus(false);
          }}
          className=" hover:bg-[rgb(0,0,0 )] absolute top-2 left-2 text-white z-20 bg-black/50 rounded-full px-3 hover:scale-110  py-1 hover:shadow-[0_0_20px_#22c55e] transition-transform duration-300"
        >
          {descripcionStatus
            ? "Ocultar description"
            : "ver description tecnica "}
        </button>
        {!descripcionStatus && !descripionTecnicStatus && (
          // <div className="bg-[#86a787]/60 w-[40vh]  sm:w-[60vh] h-full overflow-hidden hover:shadow-[0_0_20px_#22c55e]">
          <a href={linkGitHub} target="_blank">
            <img
              className="h-full w-full object-cover transition-transform rounded-4xl duration-300 hover:scale-110"
              src={img}
              alt="foto"
            />
          </a>
          // </div>
        )}
        {descripcionStatus && (
          <div className=" flex flex-col bg-[#86a787]/60  w-full  p-4 h-full justify-center items-center mb-4  rounded-4xl  overflow-y-auto">
            <h5 className="w-full  flex justify-center text-xl pb-4">
              {description}
            </h5>
            <div className=" grid  grid-cols-6 justify-center mt-1 ">
              {tech.map((t, i) => (
                <div
                  className="bg-[#86a787] w-[5vh] m-2 p-1 hover:scale-150 hover:shadow-[0_0_20px_#22c55e]  max-w[10vh]   rounded-3xl"
                  key={i}
                >
                  <img
                    className=" h-[5vh]
                   min-w[5vh]"
                    src={t}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {descripionTecnicStatus && <h1>{descriptionTecnic }</h1>}
      </div>
    </div>
  );
}
export default ProyectCard;
