  
  import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
  function Hero(){

    return (
      <section className=" h-full bg-[#86a7874D] flex  flex-col  items-center ">
        <h1 className="text-4xl font-black">Abel</h1>
        <h2 className=" mb-[10vh]  text-xl">Desarollador FullStack jr</h2>

        <p className="text-lg">
          Me formé de manera autodidacta, combinando práctica constante con
          curiosidad técnica. Trabajo con React, Node.js y TypeScript para
          desarrollar interfaces limpias, modulares y visualmente claras
        </p>
        <div className="flex text-4xl ">
          <a className="m-4 p-2 rounded-full hover:bg-[#86a787]" href="">
            <FaGithub />
          </a>
          <a className="m-4 p-2 rounded-full hover:bg-[#86a787]" href="">
            <FaLinkedin />
          </a>
          <a className="m-4 p-2 rounded-full hover:bg-[#86a787]" href="">
            <FaEnvelope />
          </a>
        </div>
      </section>
    );
  }
  export default Hero