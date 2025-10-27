type props = {
  setTypeOfFilter: (value: string) => void;
};

function Filter({ setTypeOfFilter }: props) {
  return (
    <div className="flex justify-center font-bold bg-[#86a787]/50 max-w-[25vh] sm:p-4 text-[#344c37ff]  rounded-2xl sm:mb-4">
      <label>
        Filtrar por tecnologia:
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setTypeOfFilter(e.target.value);
          }}
          name=""
          id=""
          className="bg-[#86a787]/50 text-lg font-bold rounded-2xl ml-4 p-1 text-[#344c37ff]  "
        >
            <option className="font-bold p-1" value="all">Todos</option>
            <option className="font-bold p-2" value="docker">Docker</option>
            <option className="font-bold p-2" value="node_js">Node_js</option>
            <option className="font-bold p-2" value="react">React</option>
            <option className="font-bold p-2" value="postgresql">Postgresql</option>
            <option className="font-bold p-2" value="tailwind">Tailwind</option>
            <option className="font-bold p-2" value="typescript">TypeScript</option>
            <option className="font-bold p-2" value="javascript">JavaScript</option>
            <option className="font-bold p-2" value="mysql">MySQL</option>
            <option className="font-bold p-2" value="git">Git</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
