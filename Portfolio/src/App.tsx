import { useState } from 'react'
import Proyects from'./componets/proyects'
import './App.css'
import Hero from'./componets/Hero'
import BinaryBackground from'./componets/BinaryBackground'
function App() {

  return (
    <main className="relative w-full h-full bg-black  z-[-1]">
      <BinaryBackground />
<div className='text-white'>
  
      <Hero />
      <Proyects />
      </div>
    </main>
  );
}

export default App
