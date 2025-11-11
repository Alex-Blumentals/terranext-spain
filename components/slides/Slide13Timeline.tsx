export default function Slide13Timeline() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Timeline: 10 Semanas</h1>

      <div className="max-w-6xl mx-auto">
        {/* Gantt-style timeline */}
        <div className="space-y-4">
          {/* Week headers */}
          <div className="grid grid-cols-11 gap-2 text-center text-sm font-semibold mb-2">
            <div className="col-span-1"></div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(week => (
              <div key={week} className="text-terra-navy">S{week}</div>
            ))}
          </div>

          {/* Activity 1: Field Work */}
          <div className="grid grid-cols-11 gap-2 items-center">
            <div className="col-span-1 text-right pr-4 font-semibold text-sm">
              Trabajo de Campo
            </div>
            <div className="col-span-3 bg-terra-blue text-white rounded px-3 py-2 text-center font-semibold">
              Campo + Análisis
            </div>
            <div className="col-span-7"></div>
          </div>

          {/* Milestone 1 */}
          <div className="grid grid-cols-11 gap-2 items-center">
            <div className="col-span-1"></div>
            <div className="col-span-3"></div>
            <div className="col-span-1 bg-terra-danger text-white rounded px-2 py-2 text-center text-xs font-bold">
              🔴 HITO
            </div>
            <div className="col-span-6"></div>
          </div>

          {/* Activity 2: Detailed Analysis */}
          <div className="grid grid-cols-11 gap-2 items-center">
            <div className="col-span-1 text-right pr-4 font-semibold text-sm">
              Análisis Detallado
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-7 bg-terra-bright-green text-white rounded px-3 py-2 text-center font-semibold">
              Modelación + Diseño + Documentos
            </div>
          </div>

          {/* Activity 3: Documentation */}
          <div className="grid grid-cols-11 gap-2 items-center">
            <div className="col-span-1 text-right pr-4 font-semibold text-sm">
              Documentación
            </div>
            <div className="col-span-7"></div>
            <div className="col-span-3 bg-terra-navy text-white rounded px-3 py-2 text-center font-semibold">
              Informes Finales
            </div>
          </div>

          {/* Final Milestone */}
          <div className="grid grid-cols-11 gap-2 items-center">
            <div className="col-span-1"></div>
            <div className="col-span-9"></div>
            <div className="col-span-1 bg-terra-bright-green text-white rounded px-2 py-2 text-center text-xs font-bold">
              ✅ FINAL
            </div>
          </div>
        </div>

        {/* Key milestones summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="phase-box border-terra-blue bg-blue-50 text-center">
            <p className="text-4xl mb-2">📅</p>
            <p className="font-bold text-lg mb-1">Inicio</p>
            <p className="text-sm text-terra-neutral">Día 0 - Firma contrato</p>
          </div>
          <div className="phase-box border-terra-danger bg-red-50 text-center">
            <p className="text-4xl mb-2">🔴</p>
            <p className="font-bold text-lg mb-1">Revisión</p>
            <p className="text-sm text-terra-neutral">Semana 3 - GO/NO-GO</p>
          </div>
          <div className="phase-box border-terra-bright-green bg-green-50 text-center">
            <p className="text-4xl mb-2">✅</p>
            <p className="font-bold text-lg mb-1">Entrega</p>
            <p className="text-sm text-terra-neutral">Semana 10 - Completo</p>
          </div>
        </div>

        <div className="bg-terra-navy text-white rounded-xl p-6 text-center mt-8">
          <p className="text-2xl font-bold">Duración Total: 10 semanas (~2.5 meses)</p>
        </div>
      </div>
    </div>
  );
}
