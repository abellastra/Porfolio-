import ProyectsCard from './proyectCard'
function Proyects (){

    const proyects = [
      {
        title: "Organizador de Llamadas Falsas",
        description:
          "Aplicación web full stack desarrollada para crear, editar y gestionar llamadas ficticias con datos validados y persistencia en base de datos MySQL. Este proyecto me permitió integrar mis conocimientos en React (frontend), Node.js y Express (backend), TypeScript y manejo de bases de datos, logrando un producto funcional y escalable.",
        tech: ["React", "Node.js", "TypeScript", "MySQL", "REST APis"],
        img: "",
        linkGitHub:
          "https://github.com/abellastra/Organizador-de-llamadas-con-react",
      },
      {
        title: "App de Pokemones",
        description:
          "Aplicación colaborativa con login opcional. Usuarios autenticados pueden guardar favoritos en PostgreSQL. Muestra 20 pokemones desde una API externa, con filtros por tipo y generación. Incluye menú hamburguesa, cambio de tema, mensaje de bienvenida y cierre de sesión con confirmación. Enfocada en modularidad, experiencia visual y persistencia de datos. ",
        tech: ["React" , "tailwind CSS", "Node.js" ,"Express", "PostgreSQL", "Docker"],
        img: "",
        linkGitHub: "https://github.com/abellastra/app-pokemon",
      },
    ];


  return (
    <section className="min-h-screen w-full bg-[#86a7874D] flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Mis proyectos</h2>
        <div className="flex flex-col items-center gap-4">
          {proyects && proyects.map((p, i) => <ProyectsCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
export default Proyects