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
    <section id="StackTecnologico">
      <h1 className="text-4xl font-black ">Stack Tecnologico</h1>
      <div className="flex flex-wrap justify-center items-center mt-4   ">
        {tecnologies.map((tecno, index) => (
          <div
            className=" w-[12vh] h-[x|15vh] bg-[#86a787]/60 border-2 border-transparent  overflow-hidden hover:bg-[#86a787] hover:shadow-[0_0_20px_#22c55e] m-4 p-5 rounded-4xl"
            key={index}
          >
            <img
              key={index}
              className="w-20 p-1 hover:w-30   transition-transform duration-300 hover:scale-150"
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
