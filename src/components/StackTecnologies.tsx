import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/ts.png";

import mysqlWepp from "../assets/mysql.webp";
import dockerWepp from "../assets/docker.webp";
import nodeJsWepp from "../assets/node_js.webp";
import reactWepp from "../assets/react.webp";
import tailwindWepp from "../assets/tailwind.webp";
import tsWepp from "../assets/ts.webp";
import postgresqlWepp from "../assets/postgresql.webp";
import jsWepp from "../assets/js.webp";
import gitWebp from "../assets/git.webp";

import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import js from "../assets/js.png";

function StackTecnologies({ setTypeOfFilter ,typoOfFilter }: { setTypeOfFilter: (value: string) => void; typoOfFilter: string }) {
  const tecnologies = [
    { iconWebp: dockerWepp, icon: docker, name: "docker" },
    { iconWebp: nodeJsWepp, icon: node_js, name: "node_js" },
    { iconWebp: reactWepp, icon: react, name: "react" },
    { iconWebp: postgresqlWepp, icon: postgresql, name: "postgresql" },
    { iconWebp: tailwindWepp, icon: tailwind, name: "tailwind" },
    { iconWebp: tsWepp, icon: ts, name: "ts" },
    { iconWebp: jsWepp, icon: js, name: "js" },
    { iconWebp: mysqlWepp, icon: mysql, name: "mysql" },
    { iconWebp:gitWebp,icon: git, name: "git" },
  ];

  return (
    <section
      id="StackTecnologico"
      className="flex flex-col justify-center items-start w-full"
    >
      <h2 className="text-3xl font-black mb-8 text-white">
        Stack Tecnológico
      </h2>
      <div className="flex flex-wrap gap-4">
        {tecnologies.map((tecno, index) => (
          <button
            key={index}
            onClick={() => setTypeOfFilter(tecno.name === typoOfFilter ? "" : tecno.name)}
            className={`flex flex-col items-center gap-1.5 cursor-pointer group transition-all duration-200 ${
              typoOfFilter === tecno.name ? "scale-110" : "hover:scale-110"
            }`}
          >
            <div
              className={`w-14 h-14 p-2 rounded-xl border-2 transition-all duration-200 ${
                typoOfFilter === tecno.name
                  ? "bg-[#86a787] border-[#22c55e] shadow-[0_0_20px_#22c55e]"
                  : "bg-[#86a787]/40 border-[#86a787]/50 hover:bg-[#86a787]/70 hover:border-[#86a787]"
              }`}
            >
              <picture className="w-full h-full">
                <source srcSet={tecno.iconWebp} type="image/webp" />
                <img className="w-full h-full object-contain" src={tecno.icon} alt={tecno.name} />
              </picture>
            </div>
            <span className={`text-xs font-medium capitalize transition-colors duration-200 ${
              typoOfFilter === tecno.name ? "text-[#86a787]" : "text-gray-400 group-hover:text-gray-200"
            }`}>
              {tecno.name.replace("_", ".")}
            </span>
          </button>
        ))}
      </div>
      {typoOfFilter && (
        <button
          onClick={() => setTypeOfFilter("")}
          className="mt-6 text-sm text-gray-400 hover:text-white underline transition-colors duration-200"
        >
          Quitar filtro
        </button>
      )}
    </section>
  );
}
export default StackTecnologies;
