import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import tailwind from "../assets/tailwind.png";
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
    <section
      id="StackTecnologico  "
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-black mb-6 text-[#2f4f4f] ">
        Stack Tecnologico
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-4  w-[40vw] ">
        {tecnologies.map((tecno, index) => (
          <div
            className="w-[15vw] md:w-[10vw] lg:w-[6vw] h-[x|15vh] bg-[#86a787]/60 border-2 border-transparent  overflow-hidden hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] m-2 p-2 rounded-4xl"
            key={index}
          >
            <img
              key={index}
              className="w-20 p-1 hover:w-30   transition-transform duration-300 hover:scale-110"
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
