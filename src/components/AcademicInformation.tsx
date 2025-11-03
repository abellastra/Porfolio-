function AcademicInformation() {
  return (
    <div id="FormaciónAcademica" className="flex justify-center flex-col ">
      <h2 className="text-4xl font-black mb-6 text-[#2f4f4f]">
        {" "}
        Formación academica
      </h2>

      <section className=" shadow-2xl font-medium rounded-3xl py-10 px-10">
        {" "}
        {/**        // bg-[#93a48c8e]
         */}
        <div className="space-y-4 text-base leading-relaxed">
          <div className="flex justify-center items-center mb-4">
            <p className="sm:text-xl font-bold">
              Aunque no tengo formación universitaria formal, he construido una
              base sólida como desarrollador full stack a través de aprendizaje
              autodidacta, cursos prácticos y proyectos reales.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Secundario completo</strong> – I.P.E.M. Nº 84 Jorge Vocos
              Lescano, Córdoba
            </li>
            <li>
              <strong>Curso de React</strong> – Agencia de Habilidades para el
              Futuro (Gobierno de la Ciudad de Buenos Aires)
            </li>
            <li>
              <strong>Formación autodidacta</strong> en desarrollo web, backend,
              DevOps y arquitectura moderna
            </li>
            <li>
              Aprendizaje continuo en plataformas como Platzi, YouTube y
              documentación oficial
            </li>
            <li>
              Aplicación práctica de conocimientos en proyectos propios con
              enfoque en escalabilidad, accesibilidad y monetización legal
            </li>
          </ul>
          <p className="sm:text-xl">
            Mi enfoque se basa en aprender haciendo. Cada proyecto es una
            oportunidad para aplicar nuevas tecnologías, mejorar la estructura
            del código y documentar procesos de forma clara y profesional.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AcademicInformation;
