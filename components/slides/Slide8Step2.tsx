export default function Slide8Step2() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Paso 1.2: Trabajo de Campo Detallado (Semanas 4-10)</h1>
      <p className="text-center text-xl text-terra-bright-green -mt-6">Profundización del análisis para informar escenarios de intervención</p>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Activity 1 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <h3 className="text-xl font-bold text-terra-navy mb-3">1. Muestreo Intensivo</h3>
            <ul className="space-y-2 text-base">
              <li>• Muestras de suelo adicionales (+30)</li>
              <li>• Análisis de laboratorio completo</li>
              <li>• Caracterización por zonas</li>
              <li>• Validación de hipótesis preliminares</li>
            </ul>
          </div>

          {/* Activity 2 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <h3 className="text-xl font-bold text-terra-navy mb-3">2. Modelaje Hidrológico</h3>
            <ul className="space-y-2 text-base">
              <li>• Patrones de escorrentía</li>
              <li>• Capacidad de infiltración</li>
              <li>• Puntos de acumulación</li>
              <li>• Gestión de agua lluvia</li>
            </ul>
          </div>

          {/* Activity 3 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <h3 className="text-xl font-bold text-terra-navy mb-3">3. Modelos de Plantación Posibles</h3>
            <ul className="space-y-2 text-base">
              <li>• Especies nativas apropiadas</li>
              <li>• Densidades teóricas</li>
              <li>• Estrategias de establecimiento</li>
              <li>• Requerimientos de mantenimiento</li>
            </ul>
          </div>

          {/* Activity 4 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <h3 className="text-xl font-bold text-terra-navy mb-3">4. Prácticas Animales</h3>
            <ul className="space-y-2 text-base">
              <li>• Posibilidades de pastoreo</li>
              <li>• Especies animales apropiadas</li>
              <li>• Requisitos de permisos</li>
              <li>• Infraestructura necesaria</li>
            </ul>
          </div>

          {/* Activity 5 */}
          <div className="md:col-span-2 phase-box border-terra-blue bg-blue-50">
            <h3 className="text-xl font-bold text-terra-navy mb-3">5. Profundización Baseline Data</h3>
            <div className="grid md:grid-cols-2 gap-4 text-base">
              <ul className="space-y-2">
                <li>• Datos de temperatura detallados</li>
                <li>• Índices de productividad históricos</li>
                <li>• Patrones operacionales</li>
              </ul>
              <ul className="space-y-2">
                <li>• Análisis económico comparativo</li>
                <li>• Sensibilidad de escenarios</li>
                <li>• Proyección ROI (TIR, VAN)</li>
              </ul>
            </div>
          </div>

          {/* SCADA Integration */}
          <div className="md:col-span-2 phase-box border-terra-caution bg-amber-50">
            <h3 className="text-xl font-bold text-terra-caution mb-3">6. Integración de Monitoreo (Exploratoria)</h3>
            <p className="text-base mb-3">
              <strong>Objetivo:</strong> Evaluar posibilidad de integración API SCADA para monitoreo continuo
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">¿Qué explorar?</p>
                <ul className="space-y-1">
                  <li>• Acceso a API existente</li>
                  <li>• Datos disponibles</li>
                  <li>• Limitaciones técnicas</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">¿Cómo convencer del valor?</p>
                <ul className="space-y-1">
                  <li>• Casos de uso específicos</li>
                  <li>• ROI de integración</li>
                  <li>• Enfoque limitado/piloto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-6 text-center">
          <p className="text-xl font-semibold mb-2">Al finalizar Semana 10:</p>
          <p className="text-3xl font-bold text-terra-bright-green">
            10 Documentos Técnicos + Escenarios de Intervención Modelados
          </p>
          <p className="text-base text-terra-neutral mt-3 italic">
            (Nota: No se diseñan soluciones finales en Fase 1 - esto ocurre en Fase 2)
          </p>
        </div>
      </div>
    </div>
  );
}
