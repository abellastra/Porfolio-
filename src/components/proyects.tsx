import Filter from "../components/Filter";
import { FilterOfTecnologi } from "../hook/FilterOfTecnologi";

import ProyectsCard from "./proyectCard";
import proyectLlamadaPNG from "../assets/proyecto-llamadas.png";
import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import { FaCss3 } from "react-icons/fa";
import postgresql from "../assets/postgresql.png";
import pokemonPng from "../assets/pokemon.png";
import organizadorTareasPNG from "../assets/OrganizadorTareas.png";
import tatetiPNG from "../assets/tatetiPNG.png";
import organizadorPrestamosPNG from "../assets/organizadorPrestamosPNG.png";
import calculadoraPNG from "../assets/claculadoraPNG.png";
import tailwind from "../assets/tailwind.png";
import { useEffect, useState } from "react";

function Proyects() {
  const proyects = [
    //1
    {
      title: "Organizador de Llamadas Falsas",
      description:
        "Aplicación web full stack desarrollada para crear, editar y gestionar llamadas ficticias con datos validados y persistencia en base de datos MySQL. Este proyecto me permitió integrar mis conocimientos en React (frontend), Node.js y Express (backend), TypeScript y manejo de bases de datos, logrando un producto funcional y escalable.",
      descriptionTecnic: `Frontend: 🧩 Desarrollado con React y CSS plano, incluye componentes funcionales, diseño responsive y lógica de edición y eliminación.\n\n Backend: 🔧 Construido con Express y TypeScript, expone rutas REST (GET, POST, PUT, DELETE) para gestionar llamadas ficticias.\n\n Base de datos: 🐬 Modelo relacional en MySQL, con inserción manual y conexión mediante mysql2 usando promesas y callbacks.\n\n Arquitectura: 🧠 Front y back separados, con validación básica en ambos extremos y cálculo de duración total y promedio. Proyecto funcional, listo para modularizar y escalar.`,
      tech: [
        { name: "react", img: react },
        { name: "node_js", img: node_js },
        { name: "ts", img: ts },
        { name: "mysql", img: mysql },
        { name: "tailwind", img: tailwind },
      ],
      img: proyectLlamadaPNG,
      linkGitHub:
        "https://github.com/abellastra/Organizador-de-llamadas-con-react",
    },
    //2
    {
      title: "App de Pokemones",
      description:
        "Aplicación colaborativa con login opcional. Usuarios autenticados pueden guardar favoritos en PostgreSQL. Muestra 20 pokemones desde una API externa, con filtros por tipo y generación. Incluye menú hamburguesa, cambio de tema, mensaje de bienvenida y cierre de sesión con confirmación. Enfocada en modularidad, experiencia visual y persistencia de datos. ",
      descriptionTecnic: `  Frontend: 🧩 Hecho con React + TypeScript, diseño responsive y filtros dinámicos por nombre, tipo y generación. Estilos con Tailwind CSS.\n\nBackend: ⚙️ API REST con Express + TypeScript, validación de parámetros, manejo de errores y endpoints escalables.\n\nBase de datos: 🐬 Modelo relacional en MySQL, con persistencia de Pokemones, tipos y estadísticas.\n\nArquitectura: 🧠 Front y back separados, validación en ambos extremos y paginación en respuestas. Ideal para practicar integración full stack y consumo de APIs con filtros avanzados.`,
      tech: [
        { name: "react", img: react },
        { name: "tailwind", img: tailwind },
        { name: "node_js", img: node_js },
        { name: "ts", img: ts },
        { name: "postgresql", img: postgresql },
        { name: "docker", img: docker },
      ],
      img: pokemonPng,
      linkGitHub: "https://github.com/abellastra/app-pokemon",
    },
    //3
    {
      title: "Organizador de Tareas",
      description:
        "Aplicación sencilla hecha con React para gestionar tareas. Muestra el total y las completadas, permite agregar nuevas tareas, marcarlas como realizadas o eliminarlas. Tiene una estructura modular con carpetas por componente y estilos separados, siguiendo buenas prácticas de organización y escalabilidad.",
      descriptionTecnic: `Frontend: ⚛️ Desarrollado con React y JavaScript, con arquitectura modular, componentes organizados por lógica, estructura y estilos.?\n\n Estado: 🧠 Manejo con useState y renderizado condicional para actualizar la interfaz.\n\n Estilos: 🎨 Definidos en CSS externo, con clases semánticas y diseño limpio.\n\n Escalabilidad: 🚀 Base sólida para persistencia en localStorage o integración con backend.`,
      tech: [
        { name: "react", img: react },
        { name: "js", img: js },
      ], //css
      img: organizadorTareasPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-de-tareas",
    },
    //4
    {
      title: "Gestion de pestamos",
      description:
        "Aplicación web para gestionar préstamos, con sistema de login, acceso a dashboard y opciones para ver, crear y eliminar préstamos. Permite filtrar por estado (activos/inactivos) y cuenta con lógica completa de autenticación y manejo de datos  Arquitectura: frontend y backend separados, base de datos relacional ⚙️ Estado actual: funcional, pendiente de mejoras visuales",
      descriptionTecnic: `Frontend:⚛️ desarrollado con React y TypeScript. Incluye diseño responsive, componentes reutilizables y filtros dinámicos. Estilos definidos con Tailwind CSS.\n\nBackend:⚙️ construido con Express y TypeScript. Expone una API REST con autenticación, validación de datos y operaciones CRUD sobre MySQL.\n\nBase de datos:🐬 modelo relacional en MySQL, con persistencia de usuarios y préstamos.\n\nArquitectura: frontend y backend separados, con validación en ambos extremos y manejo seguro de sesiones.`,
      tech: [
        { name: "react", img: react },
        { name: "ts", img: ts },
        { name: "tailwind", img: tailwind },
        { name: "node_js", img: node_js },
        { name: "mysql", img: mysql },
      ],
      img: organizadorPrestamosPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-prestamos-",
    },
    //5
    {
      title: "Juego de TA TE TI",
      description:
        "Juego de TA TE TI desarrollado con React. Permite a dos jugadores turnarse para colocar sus símbolos (X y O) en una cuadrícula de 3x3. El juego detecta automáticamente al ganador o si hay un empate, y ofrece la opción de reiniciar la partida para jugar nuevamente.",
      descriptionTecnic: `Estado: 🧠 Lógica de turnos y renderizado condicional con useState\n\nEstructura: 📄 Código en un único archivo, sin modularización\n\nEstilos: 🎨 Definidos en CSS plano, aplicados con clases simples\n\nPropósito: 🧪 Aplicación funcional para practicar fundamentos de React y manejo de estado`,
      tech: [
        { name: "react", img: react },
        { name: "js", img: js },
      ], //css
      img: tatetiPNG,
      linkGitHub: "https://github.com/abellastra/TA-TE-TI",
    },
    //6
    {
      title: "calculadora de interes compuesto",
      description:
        "Aplicación interactiva que permite calcular el crecimiento de una inversión aplicando interés compuesto. El usuario ingresa el monto inicial, el aporte mensual, la tasa de interés anual y la cantidad de años, y la calculadora devuelve el resultado acumulado.La estructura está organizada por carpetas con componentes reutilizables y estilos separados.",
      descriptionTecnic: ` Frontend: ⚛️ Desarrollado con React, TypeScript y Vite, con arquitectura modular, componentes organizados por lógica, estilos y estructura. Estilos definidos en CSS plano.\n\nEstado: 🧠 Manejo con useState y actualización automática con useEffect.\n\nLógica: 📐 Cálculo de interés compuesto mediante función pura, con validación básica y eventos controlados.\n\nArquitectura: ⚡ Proyecto enfocado en lógica matemática, arquitectura de componentes y experiencia de desarrollo optimizada con Vite.`,
      tech: [
        { name: "react", img: react },
        { name: "js", img: js },
      ], //, "CSS","vite"
      img: calculadoraPNG,
      linkGitHub:
        "https://github.com/abellastra/calculadora-de-interes-compuesto-",
    },
  ];
  const [typoOfFilter, setTypeOfFilter] = useState<string>("");
  const [projectsFiltrado, setProjectsFiltrado] = useState<object[]>([]);

  useEffect(() => {
    const projects = FilterOfTecnologi(proyects, typoOfFilter);
    if(proyects){
    setProjectsFiltrado(projects);
    }
  }, [typoOfFilter]);

  console.log(projectsFiltrado);

  return (
    <section className="min-h-screen w-full ">
      <div className="w-full max-w-4xl flex flex-col py-8">
        <div>
          <h2 className="text-4xl font-bold mb-6">Mis proyectos</h2>
          <div className="flex justify-center ">
            {" "}
            <Filter setTypeOfFilter={setTypeOfFilter} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {(typoOfFilter && projectsFiltrado.length > 0
            ? projectsFiltrado
            : proyects
          ).map((p, i) => (
            <ProyectsCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Proyects;
