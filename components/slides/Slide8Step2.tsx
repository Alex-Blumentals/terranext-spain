export default function Slide8Step2() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Paso 1.2: Análisis Detallado (Semanas 4-10)</h1>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Activity 1 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl font-bold text-terra-navy mb-3">1. Diseño de Intervenciones</h3>
            <ul className="space-y-2 text-base">
              <li>• Especies nativas seleccionadas</li>
              <li>• Densidades de plantación</li>
              <li>• Sistemas de riego (si aplica)</li>
              <li>• Calendario de implementación</li>
            </ul>
          </div>

          {/* Activity 2 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-terra-navy mb-3">2. Modelación Económica</h3>
            <ul className="space-y-2 text-base">
              <li>• Costes de implementación</li>
              <li>• Ahorro anual proyectado</li>
              <li>• Análisis ROI (TIR, VAN)</li>
              <li>• Sensibilidad de escenarios</li>
            </ul>
          </div>

          {/* Activity 3 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-xl font-bold text-terra-navy mb-3">3. Plan de Mantenimiento</h3>
            <ul className="space-y-2 text-base">
              <li>• Actividades por temporada</li>
              <li>• Recursos necesarios</li>
              <li>• Frecuencia de intervenciones</li>
              <li>• KPIs de seguimiento</li>
            </ul>
          </div>

          {/* Activity 4 */}
          <div className="phase-box border-terra-bright-green bg-white">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-terra-navy mb-3">4. Impacto Operacional</h3>
            <ul className="space-y-2 text-base">
              <li>• Mejora en eficiencia paneles</li>
              <li>• Reducción polvo/suciedad</li>
              <li>• Control de temperatura</li>
              <li>• Gestión de agua lluvia</li>
            </ul>
          </div>

          {/* Activity 5 */}
          <div className="md:col-span-2 phase-box border-terra-navy bg-gray-50">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-terra-navy mb-3">5. Recomendación Final</h3>
            <div className="text-base">
              <p className="mb-2"><strong>Dos opciones modeladas:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3 border-2 border-terra-blue">
                  <p className="font-semibold text-terra-blue mb-1">Opción A: Pilotos (2×10ha)</p>
                  <p className="text-sm">Validación inicial controlada</p>
                </div>
                <div className="bg-white rounded p-3 border-2 border-terra-bright-green">
                  <p className="font-semibold text-terra-bright-green mb-1">Opción B: Escala completa (100ha)</p>
                  <p className="text-sm">Implementación total inmediata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-6 text-center">
          <p className="text-xl font-semibold mb-2">Al finalizar Semana 10:</p>
          <p className="text-3xl font-bold text-terra-bright-green">
            10 Documentos + Hoja de Ruta Clara
          </p>
        </div>
      </div>
    </div>
  );
}
