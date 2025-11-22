import proyectoLlamadasWepp from "../assets/proyecto-llamadas.webp"; // Fixed typo in variable name
import dockerWepp from "../assets/docker.webp";
import nodeJsWepp from "../assets/node_js.webp"; // Fixed variable name to camelCase
import reactWepp from "../assets/react.webp";
import tsWepp from "../assets/ts.webp";
import mysqlWepp from "../assets/mysql.webp";
import jsWepp from "../assets/js.webp";
import postgresqlWepp from "../assets/postgresql.webp";
import pokemonWepp from "../assets/pokemon.webp";
import organizadorTareasWepp from "../assets/OrganizadorTareas.webp";
import tatetiWepp from "../assets/tatetiPNG.webp";
import organizadorPrestamosWepp from "../assets/organizadorPrestamosPNG.webp";
import calculadoraWepp from "../assets/calculadoraPNG.webp"; // Fixed typo in file name
import tailwindWepp from "../assets/tailwind.webp";
import proyectoLlamadasPNG from "../assets/proyecto-llamadas.png"; // Fixed typo in variable name
import docker from "../assets/docker.png";
import nodeJs from "../assets/node_js.png"; // Fixed variable name to camelCase
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import postgresql from "../assets/postgresql.png";
import pokemonPng from "../assets/pokemon.png";
import organizadorTareasPNG from "../assets/OrganizadorTareas.png";
import tatetiPNG from "../assets/tatetiPNG.png";
import organizadorPrestamosPNG from "../assets/organizadorPrestamosPNG.png";
import calculadoraPNG from "../assets/calculadoraPNG.png"; // Fixed typo in file name
import tailwind from "../assets/tailwind.png";

export const infoProjects = [
  //1
  {
    title: "App de Pokemones",
    description:
      "Aplicación colaborativa con login opcional. Usuarios autenticados pueden guardar favoritos en PostgreSQL. Muestra 20 pokemones desde una API externa, con filtros por tipo y generación. Incluye menú hamburguesa, cambio de tema, mensaje de bienvenida y cierre de sesión con confirmación. Enfocada en modularidad, experiencia visual y persistencia de datos. ",
    descriptionTecnic: `  Frontend: 🧩 Hecho con React + TypeScript, diseño responsive y filtros dinámicos por nombre, tipo y generación. Estilos con Tailwind CSS.\n\nBackend: ⚙️ API REST con Express + TypeScript, validación de parámetros, manejo de errores y endpoints escalables.\n\nBase de datos: 🐬 Modelo relacional en MySQL, con persistencia de Pokemones, tipos y estadísticas.\n\nArquitectura: 🧠 Front y back separados, validación en ambos extremos y paginación en respuestas. Ideal para practicar integración full stack y consumo de APIs con filtros avanzados.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "tailwind", img: tailwind, imgWepp: tailwindWepp },
      { name: "node_js", img: nodeJs, imgWepp: nodeJsWepp },
      { name: "ts", img: ts, imgWepp: tsWepp },
      { name: "postgresql", img: postgresql, imgWepp: postgresqlWepp },
      { name: "docker", img: docker, imgWepp: dockerWepp },
    ],
    img: pokemonPng,
    imgWepp: pokemonWepp,
    linkGitHub: "https://github.com/abellastra/app-pokemon",
  },
  {
    title: "Organizador de Llamadas ",
    description:
      "Aplicación web full stack desarrollada para crear, editar y gestionar llamadas ficticias con datos validados y persistencia en base de datos MySQL. Este proyecto me permitió integrar mis conocimientos en React (frontend), Node.js y Express (backend), TypeScript y manejo de bases de datos, logrando un producto funcional y escalable.",
    descriptionTecnic: `Frontend: 🧩 Desarrollado con React y CSS plano, incluye componentes funcionales, diseño responsive y lógica de edición y eliminación.\n\n Backend: 🔧 Construido con Express y TypeScript, expone rutas REST (GET, POST, PUT, DELETE) para gestionar llamadas ficticias.\n\n Base de datos: 🐬 Modelo relacional en MySQL, con inserción manual y conexión mediante mysql2 usando promesas y callbacks.\n\n Arquitectura: 🧠 Front y back separados, con validación básica en ambos extremos y cálculo de duración total y promedio. Proyecto funcional, listo para modularizar y escalar.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "node_js", img: nodeJs, imgWepp: nodeJsWepp },
      { name: "ts", img: ts, imgWepp: tsWepp },
      { name: "mysql", img: mysql, imgWepp: mysqlWepp },
      { name: "tailwind", img: tailwind, imgWepp: tailwindWepp },
    ],
    img: proyectoLlamadasPNG,
    imgWepp: proyectoLlamadasWepp,
    linkGitHub:
      "https://github.com/abellastra/Organizador-de-llamadas-con-react",
  },
  //2

  //3
  {
    title: "Organizador de Tareas",
    description:
      "Aplicación sencilla hecha con React para gestionar tareas. Muestra el total y las completadas, permite agregar nuevas tareas, marcarlas como realizadas o eliminarlas. Tiene una estructura modular con carpetas por componente y estilos separados, siguiendo buenas prácticas de organización y escalabilidad.",
    descriptionTecnic: `Frontend: ⚛️ Desarrollado con React y JavaScript, con arquitectura modular, componentes organizados por lógica, estructura y estilos.?\n\n Estado: 🧠 Manejo con useState y renderizado condicional para actualizar la interfaz.\n\n Estilos: 🎨 Definidos en CSS externo, con clases semánticas y diseño limpio.\n\n Escalabilidad: 🚀 Base sólida para persistencia en localStorage o integración con backend.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js", img: js, imgWepp: jsWepp },
    ],
    img: organizadorTareasPNG,
    imgWepp: organizadorTareasWepp,
    linkGitHub: "https://github.com/abellastra/Organizador-de-tareas",
  },
  //4
  {
    title: "Gestion de prestamos",
    description:
      "Aplicación web para gestionar préstamos, con sistema de login, acceso a dashboard y opciones para ver, crear y eliminar préstamos. Permite filtrar por estado (activos/inactivos) y cuenta con lógica completa de autenticación y manejo de datos  Arquitectura: frontend y backend separados, base de datos relacional ⚙️ Estado actual: funcional, pendiente de mejoras visuales",
    descriptionTecnic: `Frontend:⚛️ desarrollado con React y TypeScript. Incluye diseño responsive, componentes reutilizables y filtros dinámicos. Estilos definidos con Tailwind CSS.\n\nBackend:⚙️ construido con Express y TypeScript. Expone una API REST con autenticación, validación de datos y operaciones CRUD sobre MySQL.\n\nBase de datos:🐬 modelo relacional en MySQL, con persistencia de usuarios y préstamos.\n\nArquitectura: frontend y backend separados, con validación en ambos extremos y manejo seguro de sesiones.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "ts", img: ts, imgWepp: tsWepp },
      { name: "tailwind", img: tailwind, imgWepp: tailwindWepp },
      { name: "node_js", img: nodeJs, imgWepp: nodeJsWepp },
      { name: "mysql", img: mysql, imgWepp: mysqlWepp },
    ],
    img: organizadorPrestamosPNG,
    imgWepp: organizadorPrestamosWepp,
    linkGitHub: "https://github.com/abellastra/Organizador-prestamos-",
  },
  //5
  {
    title: "Juego de TA TE TI",
    description:
      "Juego de TA TE TI desarrollado con React. Permite a dos jugadores turnarse para colocar sus símbolos (X y O) en una cuadrícula de 3x3. El juego detecta automáticamente al ganador o si hay un empate, y ofrece la opción de reiniciar la partida para jugar nuevamente.",
    descriptionTecnic: `Estado: 🧠 Lógica de turnos y renderizado condicional con useState\n\nEstructura: 📄 Código en un único archivo, sin modularización\n\nEstilos: 🎨 Definidos en CSS plano, aplicados con clases simples\n\nPropósito: 🧪 Aplicación funcional para practicar fundamentos de React y manejo de estado`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js", img: js, imgWepp: jsWepp },
    ],
    img: tatetiPNG,
    imgWepp: tatetiWepp,
    linkGitHub: "https://github.com/abellastra/TA-TE-TI",
  },
  //6
  {
    title: "calculadora de interes compuesto",
    description:
      "Aplicación interactiva que permite calcular el crecimiento de una inversión aplicando interés compuesto. El usuario ingresa el monto inicial, el aporte mensual, la tasa de interés anual y la cantidad de años, y la calculadora devuelve el resultado acumulado.La estructura está organizada por carpetas con componentes reutilizables y estilos separados.",
    descriptionTecnic: ` Frontend: ⚛️ Desarrollado con React, TypeScript y Vite, con arquitectura modular, componentes organizados por lógica, estilos y estructura. Estilos definidos en CSS plano.\n\nEstado: 🧠 Manejo con useState y actualización automática con useEffect.\n\nLógica: 📐 Cálculo de interés compuesto mediante función pura, con validación básica y eventos controlados.\n\nArquitectura: ⚡ Proyecto enfocado en lógica matemática, arquitectura de componentes y experiencia de desarrollo optimizada con Vite.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js", img: js, imgWepp: jsWepp },
    ],
    img: calculadoraPNG,
    imgWepp: calculadoraWepp,
    linkGitHub:
      "https://github.com/abellastra/calculadora-de-interes-compuesto-",
  },
];
