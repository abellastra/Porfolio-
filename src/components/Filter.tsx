import { useState } from "react";
function Filter() {
  const [selectedTech, setSelectedTech] = useState("all");

  return (
    <div>
      <label>
        Filtrar por tecnologia:
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedTech(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="react">All</option>

          <option value="react">docker</option>
          <option value="react">node_js</option>
          <option value="react">react</option>
          <option value="react">postgresql</option>
          <option value="react">tailwind</option>
          <option value="react">TypeScript</option>
          <option value="react">JavaScript</option>
          <option value="react">MySQL</option>
          <option value="react">git</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;