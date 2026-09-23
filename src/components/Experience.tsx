import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const tasks = [
    "Desarrollo de funcionalidades full stack para clientes, desde el análisis del requerimiento hasta la entrega.",
    "Trabajo en equipo con Scrum, tickets en Linear, conventional commits y PRs revisados por el líder técnico.",
    "Deploy y mantenimiento de servidores en AWS EC2 con nginx, HTTPS, pm2 y Docker.",
    "Testing unitario, de integración y end-to-end como parte del flujo de trabajo.",
  ];

  return (
    <section
      id="Experiencia"
      className="flex flex-col w-full gap-8 scroll-mt-20"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Experiencia
        </h2>
        <p className="text-zinc-500 text-sm mt-1">Dónde trabajo actualmente</p>
      </div>

      <div className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-200">
        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0 text-base">
          <FaBriefcase className="text-emerald-400" />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-white font-semibold text-base">
              Desarrollador Full Stack Junior —{" "}
              <span className="text-emerald-400">Daztan LLC</span>
            </h3>
            <p className="text-zinc-500 text-xs mt-1">2026 – Presente</p>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Empresa de desarrollo de software. Trabajo en proyectos para
            clientes que la empresa consigue y delega al equipo, y en
            aplicaciones internas planteadas como desafíos técnicos.
          </p>
          <ul className="flex flex-col gap-2">
            {tasks.map((task) => (
              <li
                key={task}
                className="flex gap-2 text-zinc-400 text-sm leading-relaxed"
              >
                <span className="text-emerald-400 shrink-0">•</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
