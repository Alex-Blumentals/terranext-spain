export default function Slide11Investment() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Inversión Fase 1: €137.000</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Main breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div className="phase-box border-terra-navy bg-white">
            <h3 className="text-2xl font-bold text-terra-navy mb-6">
              Servicios Profesionales
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Trabajo de campo (3 semanas)</span>
                <span className="text-xl font-bold">€35.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Análisis y modelación (7 semanas)</span>
                <span className="text-xl font-bold">€55.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Gestión de proyecto</span>
                <span className="text-xl font-bold">€18.000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold">Subtotal</span>
                <span className="text-2xl font-bold text-terra-navy">€108.000</span>
              </div>
            </div>
          </div>

          {/* Expenses */}
          <div className="phase-box border-terra-blue bg-white">
            <h3 className="text-2xl font-bold text-terra-navy mb-6">
              Gastos Directos
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Viajes y alojamiento</span>
                <span className="text-xl font-bold">€8.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Análisis de laboratorio</span>
                <span className="text-xl font-bold">€12.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-lg">Equipamiento y herramientas</span>
                <span className="text-xl font-bold">€9.000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold">Subtotal</span>
                <span className="text-2xl font-bold text-terra-blue">€29.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="bg-terra-navy text-white rounded-xl p-8 text-center">
          <p className="text-2xl mb-3">Inversión Total Fase 1</p>
          <p className="text-7xl font-bold mb-3">€137.000</p>
          <p className="text-xl opacity-90">IVA no incluido</p>
        </div>

        {/* Value callout */}
        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-6">
          <h3 className="text-2xl font-bold text-terra-bright-green mb-3">
            Valor Generado
          </h3>
          <p className="text-lg">
            Esta inversión de €137k <strong>evita potencialmente una inversión incorrecta de €500k-1M</strong> en Fase 2/3 si Pizarroso-I no es viable o necesita ajustes significativos.
          </p>
          <p className="text-base text-terra-neutral mt-3">
            ROI del diagnóstico: 4-8x solo en reducción de riesgo
          </p>
        </div>
      </div>
    </div>
  );
}
