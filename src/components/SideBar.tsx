import Filter from "./Filter";

function SideBar({ setTypeOfFilter }: { setTypeOfFilter: (type: string) => void }) {
  return (
    <div className="bg-[#1a2e1a]/95 backdrop-blur-sm border-b border-[#86a787]/30 sticky top-0 z-50 shadow-lg w-full">
      {/* Links de navegación */}
      <div className="flex items-center justify-center gap-1 px-3 pt-2 pb-1 overflow-x-auto scrollbar-none">
        <a
          href="#MisProyectos"
          className="whitespace-nowrap text-gray-300 hover:text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#86a787]/40 transition-all duration-200"
        >
          Mis Proyectos
        </a>
        <a
          href="#StackTecnologico"
          className="whitespace-nowrap text-gray-300 hover:text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#86a787]/40 transition-all duration-200"
        >
          Stack Tecnológico
        </a>
        <a
          href="#FormaciónAcademica"
          className="whitespace-nowrap text-gray-300 hover:text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#86a787]/40 transition-all duration-200"
        >
          Formación Académica
        </a>
      </div>
      {/* Filtro */}
      <div className="flex justify-center pb-2">
        <Filter setTypeOfFilter={setTypeOfFilter} />
      </div>
    </div>
  );
}

export default SideBar;
