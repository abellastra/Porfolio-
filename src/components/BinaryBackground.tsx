import { useEffect, useState } from "react";

function BinaryBackground() {
 const [n,setN]= useState('01')
  useEffect(()=>{
    const a = setInterval(() => {
      setN(n === '01' ? '10' : '01')
    }, 500);
    return () => clearInterval(a)

  },[])
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-1 pointer-events-none select-none bg-black overflow-hidden">
      <div className="flex flex-wrap text-green-500 opacity-20 text-[25px] leading-none p-1">
        {Array.from({ length: 7000 }, (_, i) => (
          <span key={i}>{n}</span>
        ))}
      </div>
    </div>
  );
}

export default BinaryBackground;
