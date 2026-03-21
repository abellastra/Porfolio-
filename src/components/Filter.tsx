type props = {
  setTypeOfFilter: (value: string) => void;
};

function Filter({ setTypeOfFilter }: props) {
  return (
    <select
      onChange={(e) => setTypeOfFilter(e.target.value === "all" ? "" : e.target.value)}
      className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium px-3 py-1.5 rounded-lg focus:outline-none focus:border-emerald-500 focus:text-white hover:border-zinc-600 transition-all duration-200 cursor-pointer"
    >
      <option value="all">Filtrar tecnología</option>
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
