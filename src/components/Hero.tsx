import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
function Hero() {
  return (
    <section className=" h-full bg-[#86a7874D] flex  flex-col  items-center ">
      <h1 className="flex items-center flex-col text-4xl font-black m-[10vh]  ">
        Abel Adrian
        <h1> Lastra</h1>
      </h1>
      <div className=" w-[20vh] h-[20vh] rounded-full overflow-hidden border-4 border-[#86a787] mb-4">
        <img src="" alt="" />
      </div>

      <h2 className="  text-xl">Desarollador FullStack jr</h2>
      <div className="flex  text-4xl mb-[5vh]">
        <a
          className="m-4 p-2 rounded-full hover:bg-[#86a787]  hover:shadow-[0_0_20px_#22c55e]"
          href=""
        >
          <FaGithub />
        </a>
        <a
          className="m-4 p-2 rounded-full hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e]"
          href=""
        >
          <FaLinkedin />
        </a>
        <a
          className="m-4 p-2 rounded-full hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e]"
          href=""
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-lg max-w-[400px]">
        Me formé de manera autodidacta, combinando práctica constante con
        curiosidad técnica. Trabajo con React, Node.js y TypeScript para
        desarrollar interfaces limpias, modulares y visualmente claras
      </p>
    </section>
  );
}
export default Hero;
