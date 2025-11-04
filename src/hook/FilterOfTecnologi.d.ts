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
export declare const FilterOfTecnologi: (projects: Project[], type: string) => Project[];
export {};
