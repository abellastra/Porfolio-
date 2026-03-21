import Filter from "./Filter";

function SideBar({ setTypeOfFilter }: { setTypeOfFilter: (type: string) => void }) {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 shadow-xl shadow-black/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-4">

        {/* Links */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          <a
            href="#MisProyectos"
            className="whitespace-nowrap text-zinc-400 hover:text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-all duration-200"
          >
            Proyectos
          </a>
          <a
            href="#StackTecnologico"
            className="whitespace-nowrap text-zinc-400 hover:text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-all duration-200"
          >
            Stack
          </a>
          <a
            href="#FormaciónAcademica"
            className="whitespace-nowrap text-zinc-400 hover:text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-all duration-200"
          >
            Formación
          </a>
        </div>

        {/* Filtro */}
        <Filter setTypeOfFilter={setTypeOfFilter} />
      </div>
    </nav>
  );
}

export default SideBar;
