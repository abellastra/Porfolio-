import StackTecnologies from "./components/StackTecnologies";
import Proyects from "./components/proyects";
import "./App.css";
import Hero from "./components/Hero";
function App() {
  return (
    <main
      className="flex flex-col md:flex-row 
     "
    >
      {/* <BinaryBackground /> */}
      <aside className="w-full md:w-[50%]  h-full h-screen bg-[#0f0f0f4D] text-white  left-0 top-0 z-11">
        <Hero />
      </aside>

      <aside className=" p-6  md:h-screen md:ml-[5%] bg-[#86a7874D] text-white  overflow-y-auto z-10">
        <Proyects />
        <StackTecnologies />
      </aside>
    </main>
  );
}

export default App;
