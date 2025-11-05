type Tech = {
    name: string;
    img: string;
};
type Props = {
    title: string;
    description: string;
    descriptionTecnic: string;
    tech: Tech[];
    img: string;
    imgWepp: string;
    linkGitHub: string;
};
declare function ProyectCard({ title, description, descriptionTecnic, tech, img, imgWepp, linkGitHub, }: Props): import("react/jsx-runtime").JSX.Element;
export default ProyectCard;
