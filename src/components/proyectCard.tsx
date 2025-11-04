import {  useState } from "react";

type Tech = {
  name: string;
  img: string;
};
type Props = {
  title: string;
  description: string;
  descriptionTecnic: string;
  tech:Tech[]
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
      <h2 className="bg-[#86a787]/50 font-bold text-[#344c37ff] rounded-2xl text-lg md:text-2xl p-[2px] md:p-4 mb-2">
        {title}
      </h2>
      <div className="flex ">
        <button
          onClick={() => {
            setDescripcionStatus((prev) => !prev);
            setDescripionTecnicStatus(false);
          }}
          className=" hover:text-black font-bold  top-2 text-black right-2  z-20 bg-[#eaebeaff] rounded-full px1 md:px-3 hover:scale-110  py-1 transition-transform m-2 duration-300"
        >
          {descripcionStatus ? "Ocultar description" : "ver description"}
        </button>
        <button
          onClick={() => {
            setDescripionTecnicStatus((prev) => !prev);
            setDescripcionStatus(false);
            console.log(descripcionStatus);
          }}
          className=" hover:text-black  font-bold  top-0 left-0 text-black z-20  bg-[#eaebeaff] rounded-full px-3 hover:scale-110  py-1 transition-transform  m-2 duration-300"
        >
          {descripionTecnicStatus
            ? "Ocultar description"
            : " description tecnica"}
        </button>
      </div>

      <div className=" flex w-full max-w-[800px] h-[300px] md:h-[500px] relative">
        {!descripcionStatus && !descripionTecnicStatus && (
          <a
            className="flex justify-center items-center"
            href={linkGitHub}
            target="_blank"
          >
            <img
              className="h-full w-full object-cover transition-transform rounded-4xl duration-300 lg:hover:scale-103 "
              src={img}
              alt="foto"
            />
          </a>
        )}
        {descripcionStatus && (
          <div className=" flex flex-col bg-[#86a787]/60 mt-4 items-center w-full  p-4 h-full  items-center justify-center  mb-4  rounded-4xl  overflow-y-auto">
            <h5
              className="w-full text-[#344c37ff] font-bold
 text-2xl pb-4"
            >
              {description}
            </h5>
          </div>
        )}

        {descripionTecnicStatus && (
          <div className=" flex font-bold text-[#344c37ff] flex-col bg-[#86a787]/80 w-full h-full  items-center   rounded-4xl  overflow-y-auto  hover:scale-105  transition duration-600 ease-in-out ">
            <h5 className="w-full pr-10 pl-10 pt-12 flex justify-center text-xl  hover:z-29 whitespace-pre-line ">
              {descriptionTecnic}
            </h5>
            <h4 className="whitespace-pre-line text-sm p-4"></h4>
            <h1 className="text-2xl">Tecnologias implementadas</h1>

            <div className=" grid  grid-cols-6  mt-1 ">
              {tech.map((t, i) => (
                <div
                  className="bg-[#86a787] w-[5vh] m-2 p-1 hover:shadow-[0_0_20px_#22c55e]  max-w[10vh]   rounded-3xl"
                  key={i}
                >
                  <img
                    className=" h-[5vh]
                   min-w[5vh]"
                    src={t.img}
                    alt=""
                  />
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
