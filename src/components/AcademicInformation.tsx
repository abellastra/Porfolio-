import { FaGraduationCap, FaCode, FaBook, FaLightbulb } from "react-icons/fa";

function AcademicInformation() {
  const items = [
    {
      icon: <FaGraduationCap className="text-emerald-400" />,
      title: "Secundario técnico en electrónica",
      detail: "I.P.E.M. Nº 84 Jorge Vocos Lescano — Córdoba, 2022",
    },
    {
      icon: <FaCode className="text-emerald-400" />,
      title: "Curso de React",
      detail: "Agencia de Habilidades para el Futuro — Gobierno de la Ciudad de Buenos Aires · Finalizado",
    },
    {
      icon: <FaBook className="text-emerald-400" />,
      title: "Formación autodidacta",
      detail: "YouTube, Platzi y documentación oficial · Desarrollo web, backend, DevOps y arquitectura moderna",
    },
    {
      icon: <FaLightbulb className="text-emerald-400" />,
      title: "2 años de práctica real",
      detail: "Proyectos propios full stack con React, Node.js, TypeScript, PostgreSQL, Docker e integración de APIs de IA",
    },
  ];

  return (
    <section id="FormaciónAcademica" className="flex flex-col w-full gap-8 scroll-mt-20 pb-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">Formación</h2>
        <p className="text-zinc-500 text-sm mt-1">Mi recorrido como desarrollador</p>
      </div>

      {/* Intro */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <p className="text-zinc-300 text-base leading-relaxed border-l-2 border-emerald-500 pl-4">
          Construí una base sólida como desarrollador full stack a través del aprendizaje
          autodidacta, combinando cursos prácticos con proyectos reales. Cada proyecto es
          una oportunidad para aplicar nuevas tecnologías y mejorar mi estructura de código.
        </p>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors duration-200"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0 text-base">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AcademicInformation;
