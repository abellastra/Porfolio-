import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import fotoMia from "../assets/fotoMia.jpg";

function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-10 sm:pt-16 pb-4">
      {/* Foto */}
      <div className="relative shrink-0">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#86a787] shadow-[0_0_30px_#86a78766]">
          <img src={fotoMia} alt="Abel Lastra" className="w-full h-full object-cover" />
        </div>
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1a2e1a]" />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Abel Adrian Lastra
          </h1>
          <p className="text-[#86a787] text-sm md:text-base font-semibold mt-1 tracking-widest uppercase">
            Desarrollador FullStack Jr
          </p>
        </div>

        <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed">
          Me formé de manera autodidacta, combinando práctica constante con
          curiosidad técnica. Trabajo con{" "}
          <span className="text-[#86a787] font-semibold">React</span>,{" "}
          <span className="text-[#86a787] font-semibold">Node.js</span> y{" "}
          <span className="text-[#86a787] font-semibold">TypeScript</span> para
          desarrollar interfaces limpias, modulares y visualmente claras.
        </p>

        {/* Redes + CV */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
            href="https://github.com/abellastra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
            href="https://www.linkedin.com/in/abel-lastra-3b86852b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abelastra0@gmail.com&su=Contacto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/AbelAdrianLastraResume.pdf"
            download="AbelAdrianLastraResume.pdf"
            className="flex items-center gap-2 bg-[#86a787] hover:bg-[#6d9070] text-white font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-[0_0_20px_#86a787aa] transition-all duration-300 text-sm"
          >
            <FaDownload />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
