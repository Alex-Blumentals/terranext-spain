export default function Slide6Step1() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Paso 1.1: Trabajo de Campo Preliminar (Semanas 1-3)</h1>
      <p className="text-center text-xl text-terra-blue font-semibold -mt-6">Evaluación rápida para orientar decisiones estratégicas</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="phase-box border-terra-blue bg-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Mapeo del Sitio</h3>
          <p className="text-sm italic text-terra-blue mb-3 text-center">Reconocimiento preliminar</p>
          <ul className="space-y-3 text-base">
            <li>• Topografía preliminar</li>
            <li>• Zonas de vegetación</li>
            <li>• Patrones de drenaje</li>
            <li>• Microclimas</li>
            <li>• Zonificación inicial</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="phase-box border-terra-blue bg-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Análisis Base</h3>
          <p className="text-sm italic text-terra-blue mb-3 text-center">Muestreo rápido representativo</p>
          <ul className="space-y-3 text-base">
            <li>• Muestras de suelo (10-20)</li>
            <li>• Análisis de agua</li>
            <li>• Inventario flora/fauna</li>
            <li>• Condiciones actuales</li>
            <li>• Benchmarks regionales</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="phase-box border-terra-blue bg-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Línea Base O&M</h3>
          <p className="text-sm italic text-terra-blue mb-3 text-center">Datos operacionales actuales</p>
          <ul className="space-y-3 text-base">
            <li>• Costes actuales</li>
            <li>• Frecuencia mantenimiento</li>
            <li>• Índices de productividad</li>
            <li>• Datos de temperatura</li>
            <li>• Exploración API SCADA</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 max-w-5xl mx-auto border-2 border-terra-blue">
        <h3 className="text-2xl font-bold text-terra-navy mb-4">
          Entregables Semana 3
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>
            <p className="font-semibold mb-2 text-terra-blue">Mapas generados:</p>
            <ul className="space-y-1 text-base">
              <li>• Mapa de zonas</li>
              <li>• Mapa de drenaje</li>
              <li>• Mapa de vegetación</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2 text-terra-blue">Análisis completados:</p>
            <ul className="space-y-1 text-base">
              <li>• Informe de suelos preliminar</li>
              <li>• Línea base O&M</li>
              <li>• Zonas prioritarias con pros/cons</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-terra-danger text-white px-8 py-4 rounded-lg text-2xl font-bold">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <span>Presentación Ejecutiva Semana 3</span>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}
