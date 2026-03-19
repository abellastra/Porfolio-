import StackTecnologies from "./components/StackTecnologies";
import Proyects from "./components/proyects";
import "./App.css";
import Hero from "./components/Hero";
import AcademicInformation from "./components/AcademicInformation";
import SideBar from "./components/SideBar";
import { useState } from "react";
function App() {
    const [typoOfFilter, setTypeOfFilter] = useState<string>("");
  
  return (
    <main className="min-h-screen bg-[#1a2e1a] text-white">
      <SideBar setTypeOfFilter={setTypeOfFilter} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-16 sm:gap-20 pb-20">
        <Hero />
        <hr className="border-[#86a787]/20" />
        <Proyects typoOfFilter={typoOfFilter} />
        <hr className="border-[#86a787]/20" />
        <StackTecnologies
          setTypeOfFilter={setTypeOfFilter}
          typoOfFilter={typoOfFilter}
        />
        <hr className="border-[#86a787]/20" />
        <AcademicInformation />
      </div>
    </main>
  );
}

export default App;
