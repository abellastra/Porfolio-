import proyectoLlamadasWepp from "../assets/proyecto-llamadas.webp";
import dockerWepp from "../assets/docker.webp";
import nodeJsWepp from "../assets/node_js.webp";
import reactWepp from "../assets/react.webp";
import tsWepp from "../assets/ts.webp";
import mysqlWepp from "../assets/mysql.webp";
import jsWepp from "../assets/js.webp";
import postgresqlWepp from "../assets/postgresql.webp";
import pokemonWepp from "../assets/pokemon.webp";
import organizadorTareasWepp from "../assets/OrganizadorTareas.webp";
import tatetiWepp from "../assets/tatetiPNG.webp";
import organizadorPrestamosWepp from "../assets/organizadorPrestamosPNG.webp";
import calculadoraWepp from "../assets/calculadoraPNG.webp";
import tailwindWepp from "../assets/tailwind.webp";

import proyectoLlamadasPNG from "../assets/proyecto-llamadas.png";
import docker from "../assets/docker.png";
import nodeJs from "../assets/node_js.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import postgresql from "../assets/postgresql.png";
import pokemonPng from "../assets/pokemon.png";
import organizadorTareasPNG from "../assets/OrganizadorTareas.png";
import tatetiPNG from "../assets/tatetiPNG.png";
import organizadorPrestamosPNG from "../assets/organizadorPrestamosPNG.png";
import calculadoraPNG from "../assets/calculadoraPNG.png";
import tailwind from "../assets/tailwind.png";

export const infoProjects = [
  {
    title: "Spotia",
    description:
      "Aplicación web full stack integrada con la API de Spotify mediante OAuth 2.0. Analiza el historial musical del usuario — canciones, artistas y playlists — y utiliza modelos de lenguaje para generar descripciones personalizadas y un Wrapped visual regenerable. Diseñada con una arquitectura modular que permite cambiar el proveedor de IA sin modificar el código.",
    descriptionTecnic: `Frontend: ⚛️ React + TypeScript con Tailwind CSS. Wrapped visual regenerable y UI responsive.\n\nBackend: ⚙️ Node.js + Express con autenticación OAuth 2.0, manejo de tokens de Spotify y rutas REST.\n\nIA: 🤖 Patrón de proveedor intercambiable — Claude, Gemini o GPT configurables desde el .env sin cambiar código.\n\nBase de datos: 🐘 PostgreSQL para persistencia de datos del usuario. Contenedorizado con Docker.\n\nArquitectura: 🧠 Modular, separación de responsabilidades, escalable y lista para producción.`,
    tech: [
      { name: "react",      img: react,      imgWepp: reactWepp },
      { name: "ts",         img: ts,         imgWepp: tsWepp },
      { name: "tailwind",   img: tailwind,   imgWepp: tailwindWepp },
      { name: "node_js",    img: nodeJs,     imgWepp: nodeJsWepp },
      { name: "postgresql", img: postgresql, imgWepp: postgresqlWepp },
      { name: "docker",     img: docker,     imgWepp: dockerWepp },
    ],
    img: "",
    imgWepp: "",
    linkGitHub: "https://github.com/Col-Trinity/Spotia3",
  },
  {
    title: "App de Pokemones",
    description:
      "Aplicación full stack con sistema de autenticación opcional. Consume la PokeAPI para mostrar pokemones con filtros por tipo y generación. Los usuarios autenticados pueden guardar sus favoritos con persistencia en base de datos. Incluye UI responsive con cambio de tema, menú hamburguesa y confirmación al cerrar sesión.",
    descriptionTecnic: `Frontend: ⚛️ React + TypeScript con Tailwind CSS. Filtros dinámicos por nombre, tipo y generación. UI responsive con cambio de tema.\n\nBackend: ⚙️ API REST con Node.js + Express + TypeScript. Autenticación, validación de parámetros y endpoints escalables.\n\nBase de datos: 🐘 PostgreSQL para persistencia de usuarios y favoritos.\n\nArquitectura: 🧠 Frontend y backend separados, validación en ambos extremos. Contenedorizado con Docker.`,
    tech: [
      { name: "react",      img: react,      imgWepp: reactWepp },
      { name: "tailwind",   img: tailwind,   imgWepp: tailwindWepp },
      { name: "node_js",    img: nodeJs,     imgWepp: nodeJsWepp },
      { name: "ts",         img: ts,         imgWepp: tsWepp },
      { name: "postgresql", img: postgresql, imgWepp: postgresqlWepp },
      { name: "docker",     img: docker,     imgWepp: dockerWepp },
    ],
    img: pokemonPng,
    imgWepp: pokemonWepp,
    linkGitHub: "https://github.com/abellastra/app-pokemon",
  },
  {
    title: "Organizador de Llamadas",
    description:
      "Aplicación web full stack para crear, editar y gestionar llamadas ficticias con validación de datos y persistencia en base de datos. Primer proyecto donde integré frontend, backend y base de datos en un producto funcional completo.",
    descriptionTecnic: `Frontend: ⚛️ React + TypeScript. Componentes funcionales, diseño responsive y lógica de edición y eliminación.\n\nBackend: ⚙️ Node.js + Express + TypeScript. API REST con rutas GET, POST, PUT, DELETE para gestionar llamadas.\n\nBase de datos: 🐬 MySQL con conexión mediante mysql2. Modelo relacional con inserción y consulta de registros.\n\nArquitectura: 🧠 Frontend y backend separados, validación en ambos extremos, cálculo de duración total y promedio.`,
    tech: [
      { name: "react",   img: react,   imgWepp: reactWepp },
      { name: "node_js", img: nodeJs,  imgWepp: nodeJsWepp },
      { name: "ts",      img: ts,      imgWepp: tsWepp },
      { name: "mysql",   img: mysql,   imgWepp: mysqlWepp },
      { name: "tailwind",img: tailwind,imgWepp: tailwindWepp },
    ],
    img: proyectoLlamadasPNG,
    imgWepp: proyectoLlamadasWepp,
    linkGitHub: "https://github.com/abellastra/Organizador-de-llamadas",
  },
  {
    title: "Gestión de Préstamos",
    description:
      "Aplicación web para gestionar préstamos con sistema de login, dashboard y opciones para ver, crear y eliminar préstamos. Permite filtrar por estado (activos/inactivos) y cuenta con lógica completa de autenticación y manejo de datos.",
    descriptionTecnic: `Frontend: ⚛️ React + TypeScript con Tailwind CSS. Diseño responsive, componentes reutilizables y filtros dinámicos.\n\nBackend: ⚙️ Express + TypeScript. API REST con autenticación, validación de datos y CRUD sobre MySQL.\n\nBase de datos: 🐬 MySQL con modelo relacional. Persistencia de usuarios y préstamos.\n\nArquitectura: 🧠 Frontend y backend separados, validación en ambos extremos y manejo seguro de sesiones.`,
    tech: [
      { name: "react",   img: react,   imgWepp: reactWepp },
      { name: "ts",      img: ts,      imgWepp: tsWepp },
      { name: "tailwind",img: tailwind,imgWepp: tailwindWepp },
      { name: "node_js", img: nodeJs,  imgWepp: nodeJsWepp },
      { name: "mysql",   img: mysql,   imgWepp: mysqlWepp },
    ],
    img: organizadorPrestamosPNG,
    imgWepp: organizadorPrestamosWepp,
    linkGitHub: "https://github.com/abellastra/Organizador-prestamos-",
  },
  {
    title: "Organizador de Tareas",
    description:
      "Aplicación en React para gestionar tareas. Muestra el total y las completadas, permite agregar nuevas tareas, marcarlas como realizadas o eliminarlas. Estructura modular con componentes y estilos separados.",
    descriptionTecnic: `Frontend: ⚛️ React + JavaScript con arquitectura modular. Componentes organizados por lógica y estilos en CSS externo.\n\nEstado: 🧠 Manejo con useState y renderizado condicional.\n\nEscalabilidad: 🚀 Base sólida para agregar persistencia en localStorage o integración con backend.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js",    img: js,    imgWepp: jsWepp },
    ],
    img: organizadorTareasPNG,
    imgWepp: organizadorTareasWepp,
    linkGitHub: "https://github.com/abellastra/Organizador-de-tareas",
  },
  {
    title: "TA TE TI",
    description:
      "Juego de TA TE TI con React. Dos jugadores se turnan para colocar X y O en una cuadrícula 3x3. Detecta automáticamente al ganador o empate y ofrece opción de reiniciar la partida.",
    descriptionTecnic: `Estado: 🧠 Lógica de turnos y renderizado condicional con useState.\n\nEstructura: 📄 Código en un único archivo, sin modularización.\n\nPropósito: 🧪 Aplicación funcional para practicar fundamentos de React y manejo de estado.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js",    img: js,    imgWepp: jsWepp },
    ],
    img: tatetiPNG,
    imgWepp: tatetiWepp,
    linkGitHub: "https://github.com/abellastra/TA-TE-TI",
  },
  {
    title: "Calculadora de Interés Compuesto",
    description:
      "Calculadora interactiva de interés compuesto. El usuario ingresa monto inicial, aporte mensual, tasa anual y años, y obtiene el resultado acumulado. Estructura modular con componentes reutilizables y estilos separados.",
    descriptionTecnic: `Frontend: ⚛️ React + TypeScript + Vite con arquitectura modular.\n\nEstado: 🧠 useState y useEffect para actualización automática.\n\nLógica: 📐 Cálculo mediante función pura con validación básica y eventos controlados.\n\nArquitectura: ⚡ Enfocada en lógica matemática y buenas prácticas de componentes.`,
    tech: [
      { name: "react", img: react, imgWepp: reactWepp },
      { name: "js",    img: js,    imgWepp: jsWepp },
    ],
    img: calculadoraPNG,
    imgWepp: calculadoraWepp,
    linkGitHub: "https://github.com/abellastra/calculadora-de-interes-compuesto-",
  },
];
