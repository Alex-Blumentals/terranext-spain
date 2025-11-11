export default function Slide7Milestone() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Primera Validación: ¿Es Pizarroso-I Viable?</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Main Review Table */}
        <div className="bg-white rounded-xl border-2 border-terra-blue overflow-hidden">
          <div className="bg-terra-blue text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Presentación Ejecutiva de Hallazgos</h2>
          </div>

          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold bg-gray-50">1. Condiciones del Sitio</td>
                <td className="px-6 py-4">Mapas + Zonas identificadas</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">2. Línea Base O&M</td>
                <td className="px-6 py-4">Costes vs. benchmarks</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold">3. Viabilidad Técnica</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 text-lg font-bold">
                    <span className="text-terra-bright-green">✅ VIABLE</span>
                    <span className="text-terra-caution">⚠️ CON CONDICIONES</span>
                    <span className="text-terra-danger">❌ NO VIABLE</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">4. Próximos Pasos</td>
                <td className="px-6 py-4">Análisis Semanas 4-10</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-blue-50 px-6 py-6 text-center">
            <p className="text-2xl font-bold text-terra-navy mb-3">
              Decisión: ¿Continuar a análisis completos?
            </p>
            <div className="text-4xl">🔴</div>
          </div>
        </div>

        {/* Payment Milestone */}
        <div className="bg-amber-50 border-2 border-terra-caution rounded-xl p-6 text-center">
          <p className="text-2xl font-bold text-terra-caution mb-2">💰 HITO DE PAGO</p>
          <p className="text-5xl font-bold text-terra-navy">30% (€41.100)</p>
        </div>

        {/* Value Generated */}
        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8">
          <h3 className="text-2xl font-bold text-terra-bright-green mb-4">
            VALOR GENERADO:
          </h3>
          <div className="space-y-3 text-lg">
            <p className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Confirmación temprana de viabilidad</strong> - sin comprometer todo el presupuesto</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Ajustar enfoque</strong> antes de análisis extensos</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Transparencia total</strong> - Zelestra ve progreso real</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
