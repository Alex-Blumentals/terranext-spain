export default function Slide6Step1() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Paso 1.1: Trabajo de Campo (Semanas 1-3)</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="phase-box border-terra-blue bg-white">
          <div className="text-5xl mb-4 text-center">🗺️</div>
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Mapeo del Sitio</h3>
          <ul className="space-y-3 text-base">
            <li>• Topografía detallada</li>
            <li>• Zonas de vegetación</li>
            <li>• Patrones de drenaje</li>
            <li>• Microclimas</li>
            <li>• Zonificación preliminar</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="phase-box border-terra-blue bg-white">
          <div className="text-5xl mb-4 text-center">🔬</div>
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Análisis Base</h3>
          <ul className="space-y-3 text-base">
            <li>• Muestras de suelo (20+)</li>
            <li>• Análisis de agua</li>
            <li>• Inventario flora/fauna</li>
            <li>• Condiciones actuales</li>
            <li>• Benchmarks regionales</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="phase-box border-terra-blue bg-white">
          <div className="text-5xl mb-4 text-center">💰</div>
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Línea Base O&M</h3>
          <ul className="space-y-3 text-base">
            <li>• Costes actuales</li>
            <li>• Frecuencia mantenimiento</li>
            <li>• Recursos necesarios</li>
            <li>• Problemas recurrentes</li>
            <li>• Oportunidades de ahorro</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 max-w-5xl mx-auto border-2 border-terra-blue">
        <h3 className="text-2xl font-bold text-terra-navy mb-4 flex items-center gap-3">
          <span className="text-3xl">📋</span>
          Entregables Semana 3
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div>
            <p className="font-semibold mb-2">Mapas generados:</p>
            <ul className="space-y-1 text-base">
              <li>• Mapa topográfico</li>
              <li>• Mapa de zonas</li>
              <li>• Mapa de drenaje</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Análisis completados:</p>
            <ul className="space-y-1 text-base">
              <li>• Informe de suelos</li>
              <li>• Línea base O&M</li>
              <li>• Evaluación preliminar</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block bg-terra-danger text-white px-8 py-4 rounded-lg text-2xl font-bold">
          → Presentación Ejecutiva Semana 3 🔴
        </div>
      </div>
    </div>
  );
}
