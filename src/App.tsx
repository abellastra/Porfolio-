import { useState } from "react";
import StackTecnologies from "./componets/StackTecnologies";
import Proyects from "./componets/proyects";
import "./App.css";
import Hero from "./componets/Hero";
import BinaryBackground from "./componets/BinaryBackground";
function App() {
  return (
    <main
      className="relative text-white min-h-screen h-full bg-black flex 
     "
    >
      <BinaryBackground />

      <aside className="w-[40%]  h-screen bg-[#0f0f0f4D] text-white fixed left-0 top-0 z-11">
        <Hero />
      </aside>

      <aside className="fixed p-6 top-0 right-0 w-[calc(100%-50%)] h-screen bg-[#86a7874D] text-white  overflow-y-auto z-10">
        <StackTecnologies />
        <Proyects />
      </aside>
    </main>
  );
}

export default App;
