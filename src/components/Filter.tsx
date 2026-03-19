type props = {
  setTypeOfFilter: (value: string) => void;
};

function Filter({ setTypeOfFilter }: props) {
  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeOfFilter(e.target.value === "all" ? "" : e.target.value);
      }}
      className="bg-[#86a787]/20 border border-[#86a787]/40 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#86a787] transition-all duration-200"
    >
      <option value="all">Filtrar por tecnología</option>
      <option value="docker">Docker</option>
      <option value="node_js">Node.js</option>
      <option value="react">React</option>
      <option value="postgresql">PostgreSQL</option>
      <option value="tailwind">Tailwind</option>
      <option value="ts">TypeScript</option>
      <option value="js">JavaScript</option>
      <option value="mysql">MySQL</option>
      <option value="git">Git</option>
    </select>
  );
}

export default Filter;
