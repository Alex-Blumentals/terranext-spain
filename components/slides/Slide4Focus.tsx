export default function Slide4Focus() {
  return (
    <div className="space-y-12">
      <h1 className="slide-title text-center">Esta Propuesta: Solo Fase 1</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-blue-50 border-4 border-terra-blue rounded-xl p-10 text-center">
          <h2 className="text-4xl font-bold text-terra-navy mb-6">
            Diagnóstico y Evaluación
          </h2>
          <p className="text-2xl text-terra-charcoal">
            Estructura de 2 pasos con validación intermedia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Step 1.1 */}
          <div className="phase-box border-terra-blue bg-white">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-terra-navy mb-3">Paso 1.1</h3>
            <p className="text-xl mb-2"><strong>Trabajo de Campo</strong></p>
            <p className="text-lg text-terra-neutral mb-3">Semanas 1-3</p>
            <ul className="space-y-2 text-base">
              <li>• Análisis de sitio</li>
              <li>• Mapeo de zonas</li>
              <li>• Línea base O&M</li>
              <li>• Evaluación preliminar</li>
            </ul>
          </div>

          {/* Milestone */}
          <div className="phase-box border-terra-danger bg-red-50">
            <div className="text-4xl mb-4">🔴</div>
            <h3 className="text-2xl font-bold text-terra-danger mb-3">Hito Clave</h3>
            <p className="text-xl mb-2"><strong>Revisión Semana 3</strong></p>
            <p className="text-lg text-terra-neutral mb-3">Punto de decisión</p>
            <p className="text-base">
              ¿Es Pizarroso-I viable?<br/>
              <strong className="text-terra-danger">GO / NO-GO</strong>
            </p>
          </div>

          {/* Step 1.2 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-terra-navy mb-3">Paso 1.2</h3>
            <p className="text-xl mb-2"><strong>Análisis Completo</strong></p>
            <p className="text-lg text-terra-neutral mb-3">Semanas 4-10</p>
            <ul className="space-y-2 text-base">
              <li>• Modelos detallados</li>
              <li>• Análisis económico</li>
              <li>• Diseño conceptual</li>
              <li>• Recomendaciones</li>
            </ul>
          </div>

          {/* Deliverable */}
          <div className="phase-box border-terra-bright-green bg-green-50">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-terra-navy mb-3">Entrega Final</h3>
            <p className="text-xl mb-2"><strong>Diagnóstico Completo</strong></p>
            <p className="text-lg text-terra-neutral mb-3">Semana 10</p>
            <p className="text-base">
              10 documentos técnicos<br/>
              <strong className="text-terra-bright-green">+ Hoja de ruta clara</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
