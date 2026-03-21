import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import fotoMia from "../assets/fotoMia.jpg";

function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 pt-12 pb-4">

      {/* Foto con glow */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl scale-125 pointer-events-none" />
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-emerald-500/40 shadow-2xl">
          <img
            src={fotoMia}
            alt="Abel Lastra"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Indicador disponible */}
        <span className="absolute bottom-2 right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-zinc-950" />
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
            Abel Adrian{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Lastra
            </span>
          </h1>
          <p className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mt-3">
            Desarrollador FullStack Jr
          </p>
        </div>

        <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed">
          2 años de experiencia en desarrollo web full stack. Especializado en{" "}
          <span className="text-emerald-400 font-medium">React</span>,{" "}
          <span className="text-emerald-400 font-medium">Node.js</span> y{" "}
          <span className="text-emerald-400 font-medium">TypeScript</span>.
          Construyo aplicaciones modulares y escalables con foco en buenas
          prácticas y experiencia de usuario.
        </p>

        {/* Acciones */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/abellastra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200 text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abel-lastra-3b86852b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200 text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abelastra0@gmail.com&su=Contacto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200 text-lg"
          >
            <FaEnvelope />
          </a>
          <a
            href="/AbelAdrianLastraResume.pdf"
            download="AbelAdrianLastraResume.pdf"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all duration-200 text-sm"
          >
            <FaDownload className="text-xs" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
