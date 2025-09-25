  
  import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
  function Hero(){

    return (
      <section className=" flex justify-center">
        <h1 className="">Abel</h1>
        <h2>Desarollador FullStack jr</h2>
        <div>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaEnvelope />
          </a>
        </div>
        <p>
          Me formé de manera autodidacta, combinando práctica constante con
          curiosidad técnica. Trabajo con React, Node.js y TypeScript para
          desarrollar interfaces limpias, modulares y visualmente claras
        </p>
      </section>
    );
  }
  export default Hero