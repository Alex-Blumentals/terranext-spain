export default function Slide12Payment() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Pagos Vinculados a Entregables Concretos</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Milestone 1 */}
        <div className="phase-box border-terra-blue bg-blue-50">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-terra-blue text-white rounded-full flex items-center justify-center text-3xl font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-terra-navy mb-2">🔹 HITO 1: FIRMA DE CONTRATO</h3>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">📅 Timing:</span> Día 0</p>
                <p><span className="font-semibold">💰 Pago:</span> <span className="text-3xl font-bold text-terra-blue">30% = €41.100</span></p>
                <p><span className="font-semibold">📦 Entregable:</span> Recursos comprometidos, inicio de trabajo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-3xl text-terra-neutral italic">(3 semanas) ↓</div>
        </div>

        {/* Milestone 2 */}
        <div className="phase-box border-terra-caution bg-amber-50">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-terra-caution text-white rounded-full flex items-center justify-center text-3xl font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-terra-navy mb-2">🔹 HITO 2: PRESENTACIÓN INICIAL</h3>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">📅 Timing:</span> Semana 3</p>
                <p><span className="font-semibold">💰 Pago:</span> <span className="text-3xl font-bold text-terra-caution">30% = €41.100</span></p>
                <p><span className="font-semibold">📦 Entregable:</span> Hallazgos preliminares + decisión GO/NO-GO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-3xl text-terra-neutral italic">(7 semanas) ↓</div>
        </div>

        {/* Milestone 3 */}
        <div className="phase-box border-terra-bright-green bg-green-50">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-terra-bright-green text-white rounded-full flex items-center justify-center text-3xl font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-terra-navy mb-2">🔹 HITO 3: DIAGNÓSTICO COMPLETO</h3>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">📅 Timing:</span> Semana 10</p>
                <p><span className="font-semibold">💰 Pago:</span> <span className="text-3xl font-bold text-terra-bright-green">40% = €54.800</span></p>
                <p><span className="font-semibold">📦 Entregable:</span> 10 documentos + Recomendación + Presentación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-terra-navy text-white rounded-xl p-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl font-bold mb-2">Estructura de Pago: 30% / 30% / 40%</p>
        <p className="text-lg opacity-90">Cada pago vinculado a entregables específicos y tangibles</p>
      </div>
    </div>
  );
}
