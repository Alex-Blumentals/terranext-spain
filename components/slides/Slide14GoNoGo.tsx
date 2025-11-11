export default function Slide14GoNoGo() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Al Finalizar Fase 1: ¿Qué Sigue?</h1>

      <div className="max-w-5xl mx-auto">
        {/* Decision tree */}
        <div className="flex flex-col items-center space-y-6">
          {/* Phase 1 Complete */}
          <div className="bg-terra-navy text-white px-8 py-4 rounded-lg text-2xl font-bold">
            FINALIZA FASE 1
          </div>

          <div className="text-5xl">↓</div>

          {/* Decision Point */}
          <div className="bg-terra-danger text-white px-12 py-6 rounded-full text-3xl font-bold">
            DECISIÓN GO/NO-GO
          </div>

          <div className="text-5xl">↓</div>

          {/* Two main branches */}
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* GO Branch */}
            <div className="space-y-4">
              <div className="bg-green-50 border-4 border-terra-bright-green rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-terra-bright-green">PROCEDER</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Option A */}
                <div className="phase-box border-terra-bright-green bg-white">
                  <h4 className="text-3xl font-bold text-terra-navy text-center mb-2">A</h4>
                  <p className="font-bold text-center mb-3">Pilotos</p>
                  <div className="text-sm space-y-1">
                    <p>2×10ha</p>
                    <p className="font-bold text-terra-bright-green">€60-90k</p>
                    <p>3 meses</p>
                  </div>
                </div>

                {/* Option B */}
                <div className="phase-box border-terra-blue bg-white">
                  <h4 className="text-3xl font-bold text-terra-navy text-center mb-2">B</h4>
                  <p className="font-bold text-center mb-3">Escala</p>
                  <div className="text-sm space-y-1">
                    <p>100ha</p>
                    <p className="font-bold text-terra-blue">€90-140k</p>
                    <p>4-5 meses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NO-GO Branch */}
            <div className="space-y-4">
              <div className="bg-gray-100 border-4 border-terra-neutral rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-terra-neutral">NO PROCEDER</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Option C */}
                <div className="phase-box border-terra-neutral bg-white">
                  <h4 className="text-3xl font-bold text-terra-navy text-center mb-2">C</h4>
                  <p className="font-bold text-center mb-3">Pausa</p>
                  <div className="text-sm space-y-1">
                    <p>Invest. más</p>
                    <p className="font-bold text-terra-neutral">€15-40k</p>
                    <p>2-6 meses</p>
                  </div>
                </div>

                {/* Option D */}
                <div className="phase-box border-terra-neutral bg-white">
                  <h4 className="text-3xl font-bold text-terra-navy text-center mb-2">D</h4>
                  <p className="font-bold text-center mb-3">Sitio Alt.</p>
                  <div className="text-sm space-y-1">
                    <p>Otro parque</p>
                    <p className="font-bold text-terra-neutral">€0</p>
                    <p>—</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="bg-blue-50 border-2 border-terra-blue rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">
            Zelestra Tiene Control Total
          </h3>
          <p className="text-lg text-center">
            Cuatro opciones válidas. Sin compromiso obligatorio.<br/>
            <strong>Decisión informada basada en datos reales.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
