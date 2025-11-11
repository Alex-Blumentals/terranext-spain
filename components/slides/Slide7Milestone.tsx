export default function Slide7Milestone() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">¿Cuáles son las Mejores Oportunidades en Pizarroso-I?</h1>
      <p className="text-center text-xl text-terra-blue -mt-6">Evaluación estratégica zona por zona (enfoque "tablero de ajedrez")</p>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Chessboard Analysis */}
        <div className="bg-white rounded-xl border-2 border-terra-blue overflow-hidden">
          <div className="bg-terra-blue text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Presentación Ejecutiva de Hallazgos</h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Placeholder for Google Earth image */}
            <div className="bg-gray-100 border-2 border-dashed border-terra-neutral rounded-lg p-8 text-center">
              <p className="text-terra-neutral italic">
                [Imagen: Vista aérea de Pizarroso-I con zonificación superpuesta]
              </p>
              <p className="text-sm text-terra-neutral mt-2">
                Propiedad elongada dividida en zonas estratégicas
              </p>
            </div>

            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold bg-gray-50">1. Cartografía de Zonas</td>
                  <td className="px-6 py-4">Mapas de vegetación, drenaje, topografía</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">2. Línea Base O&M</td>
                  <td className="px-6 py-4">Costes vs. benchmarks + productividad</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">3. Calificación de Zonas</td>
                  <td className="px-6 py-4">
                    <div className="text-base">
                      <p><span className="font-semibold text-terra-bright-green">Alta prioridad:</span> Máximo impacto, implementación viable</p>
                      <p><span className="font-semibold text-terra-caution">Media prioridad:</span> Buen potencial, condiciones a validar</p>
                      <p><span className="font-semibold text-terra-neutral">Baja prioridad:</span> Menor impacto o mayor complejidad</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">4. Recomendaciones Iniciales</td>
                  <td className="px-6 py-4">Puntos de inicio ideales + áreas a evitar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 px-6 py-6">
            <p className="text-2xl font-bold text-terra-navy mb-3 text-center">
              Resultado: Hoja de ruta informada para el enfoque a seguir
            </p>
          </div>
        </div>

        {/* Payment Milestone */}
        <div className="bg-amber-50 border-2 border-terra-caution rounded-xl p-6 text-center">
          <p className="text-2xl font-bold text-terra-caution mb-2">HITO DE PAGO</p>
          <p className="text-5xl font-bold text-terra-navy">30% (€41.100)</p>
        </div>

        {/* Value Generated */}
        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8">
          <h3 className="text-2xl font-bold text-terra-bright-green mb-4">
            VALOR GENERADO:
          </h3>
          <div className="space-y-3 text-lg">
            <p className="flex items-start gap-3">
              <span className="font-semibold text-terra-bright-green">•</span>
              <span><strong>Identificación temprana de oportunidades</strong> - enfoque estratégico desde semana 3</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="font-semibold text-terra-bright-green">•</span>
              <span><strong>Priorización de zonas</strong> - maximizar ROI del análisis detallado</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="font-semibold text-terra-bright-green">•</span>
              <span><strong>Decisiones informadas</strong> - evitar diseños sobre toda la extensión sin validación</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
