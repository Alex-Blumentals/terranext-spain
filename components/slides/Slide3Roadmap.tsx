export default function Slide3Roadmap() {
  return (
    <div className="space-y-6">
      <h1 className="slide-title text-center">
        Camino Hacia €2-5M de Valor Generado (25 Años)
      </h1>

      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Phase 1 */}
        <div className="phase-box border-terra-blue bg-gradient-to-r from-blue-50 to-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-3">FASE 1: DIAGNÓSTICO Y EVALUACIÓN</h3>
          <div className="space-y-2 text-lg">
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">Inversión:</span> €137k | <span className="font-semibold text-terra-blue">Duración:</span> 10 semanas</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">Valor:</span> Decisión informada + Riesgo minimizado</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">ROI:</span> <strong>Evita inversión incorrecta de €500k-1M</strong></p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
          <div className="text-2xl font-bold text-terra-danger">GO/NO-GO #1</div>
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
        </div>

        {/* Phase 2 */}
        <div className="phase-box border-terra-blue bg-gradient-to-r from-blue-50 to-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-3">FASE 2: DISEÑO DETALLADO</h3>
          <div className="space-y-2 text-lg">
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">Inversión:</span> Optimizada post-Fase 1 | <span className="font-semibold text-terra-blue">Duración:</span> 3-5 meses</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">Valor:</span> Diseño preciso = Implementación eficiente</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-blue">ROI:</span> <strong>Reduce errores construcción 10-15%</strong></p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
          <div className="text-2xl font-bold text-terra-danger">GO/NO-GO #2</div>
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
        </div>

        {/* Phase 3 */}
        <div className="phase-box border-terra-bright-green bg-gradient-to-r from-green-50 to-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-3">FASE 3: IMPLEMENTACIÓN</h3>
          <div className="space-y-2 text-lg">
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">Inversión:</span> €450k-1.1M | <span className="font-semibold text-terra-bright-green">Duración:</span> 12-24 meses</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">Valor:</span> Ahorro continuo generado</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">ROI:</span> <strong>Recuperación en 2-4 años</strong></p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
          <div className="text-2xl font-bold text-terra-danger">GO/NO-GO #3</div>
          <div className="w-3 h-3 rounded-full bg-terra-danger"></div>
        </div>

        {/* Phase 4 */}
        <div className="phase-box border-terra-bright-green bg-gradient-to-r from-green-50 to-white">
          <h3 className="text-2xl font-bold text-terra-navy mb-3">FASE 4: OPERACIÓN Y OPTIMIZACIÓN</h3>
          <div className="space-y-2 text-lg">
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">Inversión:</span> €120-150k/año</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">Ahorro neto:</span> €50-200k/año</p>
            <p className="flex gap-3"><span className="font-semibold text-terra-bright-green">ROI:</span> <strong className="text-terra-bright-green text-2xl">VAN +€2.0-5.0M (TIR 30-40%)</strong></p>
          </div>
        </div>
      </div>

      <p className="text-center text-xl italic text-terra-navy mt-8 font-semibold">
        Cada fase genera valor y reduce riesgo antes del siguiente compromiso
      </p>
    </div>
  );
}
