function BinaryBackground() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-1 pointer-events-none select-none bg-black overflow-hidden">
      <div className="flex flex-wrap text-green-500 opacity-20 text-[25px] leading-none p-1">
        {Array.from({ length: 7000 }, (_, i) => (
          <span key={i}>01</span>
        ))}
      </div>
    </div>
  );
}

export default BinaryBackground;
