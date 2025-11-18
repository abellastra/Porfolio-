import { FaGithub, FaLinkedin, FaEnvelope, FaDownload} from "react-icons/fa";
import fotoMia from "../assets/fotoMia.jpg";
function Hero() {
  return (
    <section className=" h-full bg-[#86a7874D] flex  flex-col   items-center ">
      <h1 className="flex items-center flex-col text-4xl font-black m-[10vh]  ">
        Abel Adrian
        <h1> Lastra</h1>
      </h1>
      <div className="flex items-center justify-center w-[20vh] h-[20vh] rounded-full overflow-hidden border-4 border-[#86a787] mb-4">
        <img src={fotoMia} alt="" />
      </div>

      <h2 className="  text-xl">Desarollador FullStack jr</h2>
      <div className="flex   mb-[vh]">
        <a
          className="text-4xl m-4 p-2 rounded-full hover:bg-[#86a787]  hover:shadow-[0_0_20px_#22c55e]"
          href="https://github.com/abellastra"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="text-4xl m-4 p-2 rounded-full hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e]"
          href="https://www.linkedin.com/in/abel-lastra-3b86852b6/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-4xl m-4 p-2 rounded-full hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e]"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abelastra0@gmail.com&su=Contacto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaEnvelope />
        </a>cd
      </div>
      <a href="/CV-Abel-Adrian-Lastra.pdf" download="CV-Abel-Adrian-Lastra.pdf">
        <span className=" text-2xl font-bold"> Descargar CV </span>
      </a>
      <p className="text-lg md:text-2xl max-w-[400px] p-4">
        Me formé de manera autodidacta, combinando práctica constante con
        curiosidad técnica. Trabajo con React, Node.js y TypeScript para
        desarrollar interfaces limpias, modulares y visualmente claras
      </p>
    </section>
  );
}
export default Hero;
