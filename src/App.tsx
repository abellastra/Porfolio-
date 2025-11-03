import StackTecnologies from "./components/StackTecnologies";
import Proyects from "./components/proyects";
import "./App.css";
import Hero from "./components/Hero";
import AcademicInformation from "./components/AcademicInformation";
function App() {
  return (
    <main
      className="flex flex-col md:flex-row 
     "
    >
      {/* <BinaryBackground /> */}
      <aside className="w-full md:w-[50%] text-white h-full h-screen bg-[#0f0f0f4D]   left-0 top-0 ">
        <Hero />
      </aside>

      <aside className=" p-6 md:h-screen  bg-[#86a7874D]   overflow-y-auto ">
        <Proyects />
        <StackTecnologies />
        <AcademicInformation />
      </aside>
    </main>
  );
}

export default App;
