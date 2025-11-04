type props = {
  setTypeOfFilter: (value: string) => void;
};

function Filter({ setTypeOfFilter }: props) {
  return (
    <div className="flex justify-center items-center">
      <label className=" font-bold max-w-[25vh] sm:p-4 text-black">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setTypeOfFilter(e.target.value);
          }}
          name=""
          id=""
          className="shadow-lg  md:p-2 p-1 rounded-sm bg-[#86a787]/70 hover:scale-105 transition-shadow duration-300 "
        >
          <option className="font-bold " value="all">
            fltro de tecnologia
          </option>
          <option className="font-bold p-2" value="docker">
            Docker
          </option>
          <option className="font-bold p-2" value="node_js">
            Node_js
          </option>
          <option className="font-bold p-2" value="react">
            React
          </option>
          <option className="font-bold p-2" value="postgresql">
            Postgresql
          </option>
          <option className="font-bold p-2" value="tailwind">
            Tailwind
          </option>
          <option className="font-bold p-2" value="typescript">
            TypeScript
          </option>
          <option className="font-bold p-2" value="javascript">
            JavaScript
          </option>
          <option className="font-bold p-2" value="mysql">
            MySQL
          </option>
          <option className="font-bold p-2" value="git">
            Git
          </option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
