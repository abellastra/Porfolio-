import Filter from "./Filter";
function SideBar({ setTypeOfFilter }: { setTypeOfFilter: (type: string) => void }   ) {

  return (
    <div className="bg-[#86a787]/40 rounded-bl-xl	rounded-br-xl sticky top-0 z-50 shadow-md	mb-[1vw] z-90 ">
      <ul className=" hidden sm:flex h-[7vh]  justify-center items-center space-x-6 text-sm md-[text-lg] font-bold  ml-2 ">
        <a
          href="#MisProyectos"
          className="hover:cursor-pointer  shadow-lg p-1 md:p-2 rounded-sm bg-[#86a787]/70 hover:scale-105  transition-shadow duration-300"
        >
          mis Proyectos
        </a>
        <a
          className="hover:cursor-pointer  shadow-lg  md:p-2 p-1 rounded-sm bg-[#86a787]/70 hover:scale-105 transition-shadow duration-300"
          href="#StackTecnologico"
        >
          Stack Tecnologico
        </a>
        <a
          className="hover:cursor-pointer  shadow-lg  md:p-2 p-1 rounded-sm bg-[#86a787]/70 hover:scale-105 transition-shadow duration-300"
          href="#FormaciónAcademica"
        >
          Formación academica
        </a>
        <li className=" flex justify-center items-center">
          <Filter setTypeOfFilter={setTypeOfFilter} />
        </li>
      </ul>
    </div>
  );
}
export default SideBar;