import ProyectsCard from "./proyectCard";
import proyectLlamadaPNG from "../assets/proyecto-llamadas.png";
import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import postgresql from "../assets/postgresql.png";
import pokemonPng from "../assets/pokemon.png";
import organizadorTareasPNG from "../assets/OrganizadorTareas.png";
import tatetiPNG from "../assets/tatetiPNG.png";
import organizadorPrestamosPNG from "../assets/organizadorPrestamosPNG.png";
import calculadoraPNG from "../assets/claculadoraPNG.png";
import tailwind from "../assets/tailwind.png";

function Proyects() {
  const proyects = [
    //1
    {
      title: "Organizador de Llamadas Falsas",
      description:
        "Aplicación web full stack desarrollada para crear, editar y gestionar llamadas ficticias con datos validados y persistencia en base de datos MySQL. Este proyecto me permitió integrar mis conocimientos en React (frontend), Node.js y Express (backend), TypeScript y manejo de bases de datos, logrando un producto funcional y escalable.",
      tech: [react, node_js, ts, mysql, tailwind],
      img: proyectLlamadaPNG,
      linkGitHub:
        "https://github.com/abellastra/Organizador-de-llamadas-con-react",
    },
    //2
    {
      title: "App de Pokemones",
      description:
        "Aplicación colaborativa con login opcional. Usuarios autenticados pueden guardar favoritos en PostgreSQL. Muestra 20 pokemones desde una API externa, con filtros por tipo y generación. Incluye menú hamburguesa, cambio de tema, mensaje de bienvenida y cierre de sesión con confirmación. Enfocada en modularidad, experiencia visual y persistencia de datos. ",
      tech: [react, tailwind, node_js, ts, postgresql, docker],
      img: pokemonPng   ,
       linkGitHub: "https://github.com/abellastra/app-pokemon",
    },
    //3
    {
      title: "Organizador de Tareas",
      description:
        "Aplicación sencilla hecha con React para gestionar tareas. Muestra el total y las completadas, permite agregar nuevas tareas, marcarlas como realizadas o eliminarlas. Tiene una estructura modular con carpetas por componente y estilos separados, siguiendo buenas prácticas de organización y escalabilidad.",
      tech: [react, js], //css
      img: organizadorTareasPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-de-tareas",
    },
    //4
    {
      title: "Gestion de pestamos",
      description:
        "Aplicación web para gestionar préstamos, con sistema de login, acceso a dashboard y opciones para ver, crear y eliminar préstamos. Permite filtrar por estado (activos/inactivos) y cuenta con lógica completa de autenticación y manejo de datos  Arquitectura: frontend y backend separados, base de datos relacional ⚙️ Estado actual: funcional, pendiente de mejoras visuales",
      tech: [react, ts, tailwind, node_js, mysql],
      img: organizadorPrestamosPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-prestamos-",
    },
    //5
    {
      title: "Juego de TA TE TI",
      description:
        "Juego de TA TE TI desarrollado con React. Permite a dos jugadores turnarse para colocar sus símbolos (X y O) en una cuadrícula de 3x3. El juego detecta automáticamente al ganador o si hay un empate, y ofrece la opción de reiniciar la partida para jugar nuevamente.",
      tech: [react, js], //css
      img: tatetiPNG,
      linkGitHub: "https://github.com/abellastra/TA-TE-TI",
    },
    //6
    {
      title: "calculadora de interes compuesto",
      description:
        "Aplicación interactiva que permite calcular el crecimiento de una inversión aplicando interés compuesto. El usuario ingresa el monto inicial, el aporte mensual, la tasa de interés anual y la cantidad de años, y la calculadora devuelve el resultado acumulado.La estructura está organizada por carpetas con componentes reutilizables y estilos separados.",
      tech: [react, js], //, "CSS","vite"
      img: calculadoraPNG,
      linkGitHub:
        "https://github.com/abellastra/calculadora-de-interes-compuesto-",
    },
  ];

  return (
    <section className="min-h-screen w-full ">
      <div className="w-full max-w-4xl flex flex-col py-8">
        <h2 className="text-4xl font-bold mb-6">Mis proyectos</h2>
        <div className="flex flex-col items-center gap-4">
          {proyects && proyects.map((p, i) => <ProyectsCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
export default Proyects;
