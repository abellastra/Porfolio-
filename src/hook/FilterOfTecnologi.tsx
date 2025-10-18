type Project = {
  title: string;
  description: string;
  tech: Tech[];
  img: string;
  linkGitHub: string;
};
type Tech={
  name:string,
  img:string 
}
export const FilterOfTecnologi = (projects: Project[], type: string) => {
  if(!projects||!type){
    console.error('no hay datos')
  }
 const projectsFiltrados = projects.filter((projects) =>
   projects.tech.some((t) => t.name === type)
 );
return projectsFiltrados
};
