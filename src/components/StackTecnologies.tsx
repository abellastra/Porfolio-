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
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-black mb-6 text-[#2f4f4f] ">
        Stack Tecnologico
      </h1>
      <div className="flex flex-row  justify-center items-center mt-4 w-[90vw] md:w-[60vw] ">
        {tecnologies.map((tecno, index) => (
          <div
            // className="hover:scale-105 w-[15vw] md:w-[10vw] lg:w-[5vw] h-[x|15vh] bg-[#86a787]/60 border-2 border-transparent  overflow-hidden hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] m-2 p-2 rounded-4xl"
            className={`hover:cursor-pointer  hover:scale-105 w-[15vw] md:w-[10vw] lg:w-[4vw] h-[x|15vh] bg-[#86a787]/60 border-2 border-transparent  overflow-hidden hover:bg-[#86a787] m-1 p-1 rounded-4xl
              ${
                typoOfFilter === tecno.name
                  ? "shadow-[0_0_30px_#22c55e] bg-[#86a787]"
                  : ""
              }`}
            key={index}
            onClick={() => setTypeOfFilter(tecno.name)}
          >
            <picture className="w-full h-full">
              <source srcSet={tecno.iconWebp} type="image/webp" />
              <img
                key={index}
                className="p-1 hover:w-30   transition-transform duration-300 "
                src={tecno.icon}
                alt=""
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
}
export default StackTecnologies;
