
type Props = {
  title: string;
  description:string
  tech:string[]
  img:string
  linkGitHub:string
};

function ProyectCard({ title, description, tech, img, linkGitHub }: Props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src={img} alt="foto" />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <ul>
        {tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <a href={linkGitHub} target="_blank">
        Ver proyect
      </a>
    </div>
  );
}
export default ProyectCard