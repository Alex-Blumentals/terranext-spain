export default function Slide9Models() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Dos Modelos de Intervención</h1>

      <div className="max-w-6xl mx-auto">
        <table className="w-full border-2 border-terra-navy rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-terra-navy text-white">
              <th className="px-6 py-4 text-left">Característica</th>
              <th className="px-6 py-4 text-center bg-terra-bright-green">Modelo Intensivo</th>
              <th className="px-6 py-4 text-center bg-terra-blue">Modelo Estándar</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            <tr className="border-b bg-gray-50">
              <td className="px-6 py-4 font-semibold">Densidad de Plantación</td>
              <td className="px-6 py-4 text-center">Alta (3.000-5.000/ha)</td>
              <td className="px-6 py-4 text-center">Moderada (1.500-2.500/ha)</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Especies</td>
              <td className="px-6 py-4 text-center">8-12 nativas</td>
              <td className="px-6 py-4 text-center">4-6 nativas</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-6 py-4 font-semibold">Riego Inicial</td>
              <td className="px-6 py-4 text-center">6-12 meses</td>
              <td className="px-6 py-4 text-center">3-6 meses</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Coste Implementación</td>
              <td className="px-6 py-4 text-center font-bold text-terra-bright-green">€800k-1.1M</td>
              <td className="px-6 py-4 text-center font-bold text-terra-blue">€450k-700k</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-6 py-4 font-semibold">Tiempo Establecimiento</td>
              <td className="px-6 py-4 text-center">18-24 meses</td>
              <td className="px-6 py-4 text-center">24-36 meses</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Ahorro Anual Proyectado</td>
              <td className="px-6 py-4 text-center font-bold text-terra-bright-green">€120-200k/año</td>
              <td className="px-6 py-4 text-center font-bold text-terra-blue">€50-100k/año</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-semibold">ROI (TIR)</td>
              <td className="px-6 py-4 text-center font-bold text-terra-bright-green text-2xl">30-40%</td>
              <td className="px-6 py-4 text-center font-bold text-terra-blue text-2xl">20-30%</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-terra-blue">
          <h3 className="text-2xl font-bold text-terra-navy mb-4">💡 Recomendación TerraNext</h3>
          <p className="text-lg mb-3">
            <strong>Fase 1 evaluará ambos modelos</strong> para determinar cuál se adapta mejor a las condiciones específicas de Pizarroso-I.
          </p>
          <p className="text-base text-terra-neutral">
            Factores clave: disponibilidad de agua, objetivos de Zelestra, presupuesto, y timeline deseado.
          </p>
        </div>
      </div>
    </div>
  );
}
