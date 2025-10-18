type props = {
  setTypeOfFilter: (value: string) => void;
};

function Filter({ setTypeOfFilter }: props) {
  return (
    <div className="flex justify-center font-bold bg-[#86a787]/50 max-w-[40vh] p-4 text-[#344c37ff]  rounded-2xl m-[5vh]">
      <label>
        Filtrar por tecnologia:
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setTypeOfFilter(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="all">Todos</option>
          <option value="docker">docker</option>
          <option value="node_js">node_js</option>
          <option value="react">react</option>
          <option value="postgresql">postgresql</option>
          <option value="tailwind">tailwind</option>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="mysql">MySQL</option>
          <option value="git">git</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
