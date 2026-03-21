import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import js from "../assets/js.png";

import mysqlWepp from "../assets/mysql.webp";
import dockerWepp from "../assets/docker.webp";
import nodeJsWepp from "../assets/node_js.webp";
import reactWepp from "../assets/react.webp";
import tailwindWepp from "../assets/tailwind.webp";
import tsWepp from "../assets/ts.webp";
import postgresqlWepp from "../assets/postgresql.webp";
import jsWepp from "../assets/js.webp";
import gitWebp from "../assets/git.webp";

const tecnologies = [
  { iconWebp: dockerWepp,    icon: docker,    name: "Docker" },
  { iconWebp: nodeJsWepp,    icon: node_js,   name: "Node.js" },
  { iconWebp: reactWepp,     icon: react,     name: "React" },
  { iconWebp: postgresqlWepp,icon: postgresql, name: "PostgreSQL" },
  { iconWebp: tailwindWepp,  icon: tailwind,  name: "Tailwind" },
  { iconWebp: tsWepp,        icon: ts,        name: "TypeScript" },
  { iconWebp: jsWepp,        icon: js,        name: "JavaScript" },
  { iconWebp: mysqlWepp,     icon: mysql,     name: "MySQL" },
  { iconWebp: gitWebp,       icon: git,       name: "Git" },
];

// Mapeo nombre display → clave de filtro
const filterKey: Record<string, string> = {
  Docker: "docker",
  "Node.js": "node_js",
  React: "react",
  PostgreSQL: "postgresql",
  Tailwind: "tailwind",
  TypeScript: "ts",
  JavaScript: "js",
  MySQL: "mysql",
  Git: "git",
};

function StackTecnologies({
  setTypeOfFilter,
  typoOfFilter,
}: {
  setTypeOfFilter: (value: string) => void;
  typoOfFilter: string;
}) {
  return (
    <section id="StackTecnologico" className="flex flex-col w-full gap-8 scroll-mt-20">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">Stack Tecnológico</h2>
        <p className="text-zinc-500 text-sm mt-1">
          Hacé click en una tecnología para filtrar proyectos
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {tecnologies.map((tecno, index) => {
          const key = filterKey[tecno.name];
          const isActive = typoOfFilter === key;
          return (
            <button
              key={index}
              onClick={() => setTypeOfFilter(isActive ? "" : key)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${
                isActive
                  ? "bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/10 scale-105"
                  : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105"
              }`}
            >
              <div className="w-10 h-10">
                <picture className="w-full h-full">
                  <source srcSet={tecno.iconWebp} type="image/webp" />
                  <img
                    className="w-full h-full object-contain"
                    src={tecno.icon}
                    alt={tecno.name}
                  />
                </picture>
              </div>
              <span
                className={`text-[11px] font-medium transition-colors duration-200 ${
                  isActive ? "text-emerald-400" : "text-zinc-500"
                }`}
              >
                {tecno.name}
              </span>
            </button>
          );
        })}
      </div>

      {typoOfFilter && (
        <button
          onClick={() => setTypeOfFilter("")}
          className="self-start text-xs text-zinc-500 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-1.5 rounded-lg transition-all duration-200"
        >
          ✕ Quitar filtro
        </button>
      )}
    </section>
  );
}

export default StackTecnologies;
