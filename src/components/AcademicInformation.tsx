function AcademicInformation() {
  return (
    <div
      id="FormaciónAcademica"
      className="flex flex-col w-full"
    >
      <h2 className="text-3xl font-black mb-8 text-white">
        Formación Académica
      </h2>
      <section className="bg-[#86a787]/15 border border-[#86a787]/30 rounded-2xl py-8 px-8 shadow-xl">
        <div className="space-y-5 text-base leading-relaxed">
          <p className="text-gray-200 text-base sm:text-lg font-medium border-l-4 border-[#86a787] pl-4">
            Aunque no tengo formación universitaria formal, he construido una
            base sólida como desarrollador full stack a través de aprendizaje
            autodidacta, cursos prácticos y proyectos reales.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[#86a787] mt-1 shrink-0">▸</span>
              <span><strong className="text-white">Secundario completo</strong> – I.P.E.M. Nº 84 Jorge Vocos Lescano, Córdoba</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#86a787] mt-1 shrink-0">▸</span>
              <span><strong className="text-white">Curso de React</strong> – Agencia de Habilidades para el Futuro (Gobierno de la Ciudad de Buenos Aires)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#86a787] mt-1 shrink-0">▸</span>
              <span><strong className="text-white">Formación autodidacta</strong> en desarrollo web, backend, DevOps y arquitectura moderna</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#86a787] mt-1 shrink-0">▸</span>
              <span>Aprendizaje continuo en Platzi, YouTube y documentación oficial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#86a787] mt-1 shrink-0">▸</span>
              <span>Aplicación práctica en proyectos propios con enfoque en escalabilidad y accesibilidad</span>
            </li>
          </ul>

          <p className="text-gray-300 text-base sm:text-lg italic border-t border-[#86a787]/30 pt-4">
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
