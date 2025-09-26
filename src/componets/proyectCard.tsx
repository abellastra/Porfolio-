
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
      <h2 className="bg-[#86a787]/50 rounded-4xl text-3xl p-4 mb-2">{title}</h2>

      <div className="bg-[#86a787]/60 w-[400px] h-[200px] overflow-hidden hover:shadow-[0_0_20px_#22c55e]">
        <a href={linkGitHub} target="_blank">
          <img
            className="  transition-transform duration-300 hover:scale-110 "
            src={img}
            alt="foto"
          />
        </a>
      </div>
      <h4>{description}</h4>
      <ul>
        {tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProyectCard