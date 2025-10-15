import Filter from "../components/Filter";
import {FilterOfTecnologi} from "../hook/FilterOfTecnologi";

import ProyectsCard from "./proyectCard";
import proyectLlamadaPNG from "../assets/proyecto-llamadas.png";
import docker from "../assets/docker.png";
import node_js from "../assets/node_js.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import {FaCss3} from "react-icons/fa";
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
      descriptionTecnic:
        "El backend está desarrollado con Node.js, Express y MySQL. Todas las rutas (GET, POST, PUT, DELETE).Se implementan funcionalidades como Generación automática de llamadas ficticias con datos aleatorios (origen, destino, duración) Inserción manual de llamadas nuevas Edición y eliminación de registros existentes Cálculo de duración total y promedio Validación básica de datos (longitud de números, tipo de ID) La conexión con la base de datos se realiza mediante el cliente mysql2, y se combinan promesas con callbacks para manejar operaciones asincrónicas. Aunque el proyecto no está modularizado ni tipado en profundidad, se priorizó la funcionalidad y la claridad del flujo.Tecnologías: Node.js, Express, TypeScript, MySQL, mysql2 Estructura: Centralizada en index.ts, sin separación por capas Estado: Funcional y listo para refactorización futura Aprendizajes: Manejo de promesas y callbacks, validación manual, persistencia relacional, diseño de endpoints RESTful",
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
      descriptionTecnic:
        "Aplicación web colaborativa desarrollada con React, Tailwind CSS, Node.js, TypeScript, PostgreSQL y Docker, enfocada en modularidad, experiencia visual y persistencia de datos. Consume una API externa para mostrar dinámicamente un listado de 20 Pokémon, con filtros por tipo y generación. El frontend incluye componentes reutilizables, menú hamburguesa, cambio de tema (dark/light), mensaje de bienvenida personalizado y cierre de sesión con confirmación. El login es opcional, pero los usuarios autenticados pueden guardar sus Pokémon favoritos en una base de datos PostgreSQL, gestionada desde el backend con Express. La aplicación está dockerizada para facilitar el despliegue y la integración entre servicios. Se aplicaron principios de accesibilidad visual, organización de imports, y separación de responsabilidades entre frontend, backend y persistencia. Este proyecto consolida habilidades en consumo de APIs, manejo de estados, autenticación, diseño responsive, y persistencia relacional en entornos productivos.",

      tech: [react, tailwind, node_js, ts, postgresql, docker],
      img: pokemonPng,
      linkGitHub: "https://github.com/abellastra/app-pokemon",
    },
    //3
    {
      title: "Organizador de Tareas",
      description:
        "Aplicación sencilla hecha con React para gestionar tareas. Muestra el total y las completadas, permite agregar nuevas tareas, marcarlas como realizadas o eliminarlas. Tiene una estructura modular con carpetas por componente y estilos separados, siguiendo buenas prácticas de organización y escalabilidad.",
      descriptionTecnic:
        "Aplicación desarrollada con React y JavaScript, enfocada en la práctica de arquitectura modular y manejo de estado. Cada componente está organizado en su propia carpeta, con separación clara entre lógica, estructura y estilos. Se utilizaron hooks como useState para gestionar el estado local de las tareas, y se aplicó renderizado condicional para actualizar la interfaz en tiempo real. Los estilos están definidos en archivos CSS externos, aplicados con clases semánticas y coherentes. El proyecto sigue buenas prácticas de escalabilidad y legibilidad, sirviendo como base sólida para futuras extensiones como persistencia en localStorage o integración con backend.",
      tech: [react, js], //css
      img: organizadorTareasPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-de-tareas",
    },
    //4
    {
      title: "Gestion de pestamos",
      description:
        "Aplicación web para gestionar préstamos, con sistema de login, acceso a dashboard y opciones para ver, crear y eliminar préstamos. Permite filtrar por estado (activos/inactivos) y cuenta con lógica completa de autenticación y manejo de datos  Arquitectura: frontend y backend separados, base de datos relacional ⚙️ Estado actual: funcional, pendiente de mejoras visuales",
      descriptionTecnic:
        "Aplicación web full stack desarrollada con React, TypeScript, Tailwind CSS, Node.js y MySQL, orientada a la gestión de préstamos con autenticación y persistencia de datos. La arquitectura está dividida en frontend y backend separados, conectados mediante una API REST. El sistema incluye login de usuarios, acceso a un dashboard privado y funcionalidades para visualizar, crear y eliminar préstamos. Se implementó lógica de filtrado por estado (activos/inactivos), validación de datos en ambos extremos y manejo seguro de sesiones. El frontend está construido con componentes reutilizables, diseño responsive y estilos definidos con Tailwind. El backend, desarrollado con Express y TypeScript, gestiona las operaciones CRUD sobre una base de datos relacional en MySQL. Aunque el sistema está funcional, se encuentra en proceso de mejora visual y refactorización para escalar la interfaz y optimizar la experiencia de usuario. Este proyecto consolida habilidades en integración full stack, autenticación, diseño de interfaces limpias y manejo de datos persistentes",
      tech: [react, ts, tailwind, node_js, mysql],
      img: organizadorPrestamosPNG,
      linkGitHub: "https://github.com/abellastra/Organizador-prestamos-",
    },
    //5
    {
      title: "Juego de TA TE TI",
      description:
        "Juego de TA TE TI desarrollado con React. Permite a dos jugadores turnarse para colocar sus símbolos (X y O) en una cuadrícula de 3x3. El juego detecta automáticamente al ganador o si hay un empate, y ofrece la opción de reiniciar la partida para jugar nuevamente.",
      descriptionTecnic:
        "Aplicación desarrollada con React , JavaScript y CSS, con estructura funcional pero aún no modularizada. Todo el código está contenido en un único archivo, incluyendo la lógica del juego, el manejo de estado y el renderizado de la interfaz. Se utilizó el hook useState para controlar el estado del tablero, los turnos y el resultado de la partida. La lógica para detectar ganador o empate está implementada mediante funciones internas, sin separación por carpetas ni componentes reutilizables. Los estilos se aplican desde archivos CSS simples, sin organización por módulos. Aunque cumple correctamente con su propósito, se reconoce como una oportunidad de mejora futura en términos de organización, separación de responsabilidades y escalabilidad. Este proyecto sirvió como práctica para implementar lógica de turnos, renderizado condicional y manejo de eventos en React, consolidando conceptos fundamentales en una aplicación sencilla.",
      tech: [react, js], //css
      img: tatetiPNG,
      linkGitHub: "https://github.com/abellastra/TA-TE-TI",
    },
    //6
    {
      title: "calculadora de interes compuesto",
      description:
        "Aplicación interactiva que permite calcular el crecimiento de una inversión aplicando interés compuesto. El usuario ingresa el monto inicial, el aporte mensual, la tasa de interés anual y la cantidad de años, y la calculadora devuelve el resultado acumulado.La estructura está organizada por carpetas con componentes reutilizables y estilos separados.",
      descriptionTecnic:
        "Aplicación desarrollada con React, JavaScript, Vite y CSS, con estructura modular basada en componentes funcionales. Cada componente está ubicado en su propia carpeta, con separación entre lógica, estilos y estructura visual. Se utilizó useState para gestionar el estado de los inputs y el resultado, y useEffect para recalcular automáticamente el valor acumulado ante cambios en los parámetros. La fórmula de interés compuesto está encapsulada en una función pura, que recibe los valores iniciales y devuelve el resultado final sin efectos secundarios. El proyecto incluye validación básica de entradas, renderizado condicional y manejo de eventos controlados. Los estilos están definidos en archivos CSS externos, aplicados mediante clases semánticas y organizadas por componente. El entorno de desarrollo con Vite permite una experiencia rápida, con recarga instantánea y optimización de build. Este proyecto consolida habilidades en lógica matemática aplicada, arquitectura de componentes, separación de responsabilidades y diseño de interfaces interactivas con React.",

      tech: [react, js], //, "CSS","vite"
      img: calculadoraPNG,
      linkGitHub:
        "https://github.com/abellastra/calculadora-de-interes-compuesto-",
    },
  ];
  FilterOfTecnologi(proyects, "react");
  return (
    <section className="min-h-screen w-full ">
      <div className="w-full max-w-4xl flex flex-col py-8">
        <div>
          <h2 className="text-4xl font-bold mb-6">Mis proyectos</h2>
          <Filter  />
        </div>

        <div className="flex flex-col items-center gap-4">
          {proyects && proyects.map((p, i) => <ProyectsCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
export default Proyects;
