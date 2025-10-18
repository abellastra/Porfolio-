type Tech = {
  name: string;
  img: string;
};

type Project = {
  title: string;
  description: string;
  descriptionTecnic: string;
  tech: Tech[];
  img: string;
  linkGitHub: string;
};

export const FilterOfTecnologi = (
  projects: Project[],
  type: string
): Project[] => {
  if (!projects || !type) {
    console.error("no hay datos");
  }
  const projectsFiltrados = projects.filter((projects) =>
    projects.tech.some((t) => t.name === type)
  );
  return projectsFiltrados;
};
