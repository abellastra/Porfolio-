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
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <SideBar setTypeOfFilter={setTypeOfFilter} />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 flex flex-col gap-20 pb-24">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <Proyects typoOfFilter={typoOfFilter} />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <StackTecnologies setTypeOfFilter={setTypeOfFilter} typoOfFilter={typoOfFilter} />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <AcademicInformation />
      </div>
    </main>
  );
}

export default App;
