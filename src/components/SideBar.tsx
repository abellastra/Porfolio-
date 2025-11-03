import Filter from "./Filter";


function SideBar({ setTypeOfFilter }: { setTypeOfFilter: (type: string) => void }   ) {
  return (
    <div className="bg-[#86a787]/40 rounded-bl-xl	rounded-br-xl sticky top-0 z-50 shadow-md	 ">
      <ul className="flex h-[10vh] justify-center items-center space-x-6 text-sm md-[text-lg] font-bold  ml-2 ">
        <a
          href="#MisProyectos"
          className="shadow-lg p-1 md:p-2 rounded-2xl hover:bg-[#86a787]/30 hover:shadow-[0_0_20px_#22c55e]/60 transition-shadow duration-300"
        >
          mis Proyectos{" "}
        </a>
        <a
          className="shadow-lg  md:p-2 p-1 rounded-2xl hover:bg-[#86a787]/30 hover:shadow-[0_0_20px_#22c55e]/60 transition-shadow duration-300"
          href="#StackTecnologico"
        >
          Stack Tecnologico
        </a>
        <a
          className="shadow-lg  md:p-2 p-1 rounded-2xl hover:bg-[#86a787]/30 hover:shadow-[0_0_20px_#22c55e]/60 transition-shadow duration-300"
          href="#FormaciónAcademica"
        >
          Formación academica
        </a>
        <li>
          <Filter setTypeOfFilter={setTypeOfFilter} />
        </li>
      </ul>
    </div>
  );
}
export default SideBar;