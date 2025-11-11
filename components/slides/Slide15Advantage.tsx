export default function Slide15Advantage() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Ventaja Competitiva de Fase 1</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-blue-50 border-2 border-terra-blue rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-terra-navy mb-4">
            ¿Por qué hacer diagnóstico antes de diseño?
          </h2>
          <p className="text-2xl text-terra-blue">
            Fase 1 optimiza dramáticamente Fase 2
          </p>
        </div>

        {/* Comparison table */}
        <table className="w-full border-2 border-terra-navy rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-terra-navy text-white">
              <th className="px-6 py-4 text-left">Aspecto</th>
              <th className="px-6 py-4 text-center bg-red-900">Sin Fase 1</th>
              <th className="px-6 py-4 text-center bg-green-900">Con Fase 1</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            <tr className="border-b bg-gray-50">
              <td className="px-6 py-4 font-semibold">Precisión del Diseño</td>
              <td className="px-6 py-4 text-center">±30-40% error</td>
              <td className="px-6 py-4 text-center text-terra-bright-green font-bold">±10-15% error</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Coste Fase 2</td>
              <td className="px-6 py-4 text-center">€120-180k</td>
              <td className="px-6 py-4 text-center text-terra-bright-green font-bold">€90-140k</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-6 py-4 font-semibold">Duración Fase 2</td>
              <td className="px-6 py-4 text-center">5-7 meses</td>
              <td className="px-6 py-4 text-center text-terra-bright-green font-bold">3-5 meses</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Riesgo Implementación</td>
              <td className="px-6 py-4 text-center">Alto (sorpresas frecuentes)</td>
              <td className="px-6 py-4 text-center text-terra-bright-green font-bold">Bajo (bien caracterizado)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-semibold">Probabilidad de Éxito</td>
              <td className="px-6 py-4 text-center">60-70%</td>
              <td className="px-6 py-4 text-center text-terra-bright-green font-bold text-2xl">85-95%</td>
            </tr>
          </tbody>
        </table>

        {/* Examples */}
        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8">
          <h3 className="text-2xl font-bold text-terra-bright-green mb-4">
            💡 Ejemplos Reales
          </h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p><strong>Selección de especies:</strong> Fase 1 identifica exactamente qué especies prosperarán en cada zona → Fase 2 no desperdicia tiempo diseñando opciones inviables</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p><strong>Densidad óptima:</strong> Datos de suelo revelan capacidad real → Diseño Fase 2 ajustado desde inicio, no después de errores costosos</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p><strong>Gestión de agua:</strong> Fase 1 mapea microclimas → Fase 2 diseña riego diferenciado por zona, maximizando eficiencia</p>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl font-bold text-terra-navy italic">
          "Invertir en conocimiento ANTES de diseño = 2-3x mejor ROI final"
        </div>
      </div>
    </div>
  );
}
