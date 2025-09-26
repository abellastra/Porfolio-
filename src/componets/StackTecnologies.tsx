import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import tailwind from "../assets/tailwind.png";
import React from "react";
import ts from "../assets/ts.png";

import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import js from "../assets/js.png";

function StackTecnologies() {
  const tecnologies = [
    { icon: docker },
    { icon: node_js },
    { icon: react },
    { icon: postgresql },
    { icon: tailwind },
    { icon: ts },
    { icon: js },
    { icon: mysql },
    { icon: git },
  ];

  return (
    <section>
      <h1 className="text-4xl font-black ">Stack Tecnologico</h1>
      <div className="flex flex-wrap justify-center items-center mt-4   ">
        {tecnologies.map((tecno, index) => (
          <div
            className="bg-[#86a787]/60 border-2 border-transparent  overflow-hidden hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] m-4 p-5 rounded-4xl"
            key={index}
          >
            <img
              key={index}
              className="w-20 h-20 inline-block p-1 hover:w-25 hover:h-25  transition-transform duration-300 hover:scale-110"
              src={tecno.icon}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default StackTecnologies;
