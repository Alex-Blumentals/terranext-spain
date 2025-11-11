export default function Slide16Incentive() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Incentivo de Continuidad</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-amber-50 border-4 border-terra-caution rounded-xl p-10 text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="text-4xl font-bold text-terra-navy mb-6">
            Oferta de Continuidad
          </h2>
          <p className="text-2xl mb-4">
            Si Zelestra firma Fase 2 dentro de <strong className="text-terra-caution">30 días</strong> después de completar Fase 1:
          </p>
          <div className="bg-white rounded-xl p-8 my-6 border-2 border-terra-bright-green">
            <p className="text-6xl font-bold text-terra-bright-green mb-2">20%</p>
            <p className="text-2xl">de crédito en Fase 2</p>
          </div>
          <p className="text-xl text-terra-neutral">
            Valor: <strong>€18-28k de descuento</strong> en diseño detallado
          </p>
        </div>

        {/* Flow diagram */}
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="phase-box border-terra-blue bg-blue-50 text-center">
            <p className="text-4xl mb-3">📋</p>
            <p className="font-bold text-lg mb-2">Fase 1 Completa</p>
            <p className="text-sm">Semana 10</p>
          </div>

          <div className="text-center">
            <p className="text-5xl">→</p>
            <p className="text-sm text-terra-caution font-bold mt-2">Dentro de 30 días</p>
          </div>

          <div className="phase-box border-terra-bright-green bg-green-50 text-center">
            <p className="text-4xl mb-3">✅</p>
            <p className="font-bold text-lg mb-2">Firma Fase 2</p>
            <p className="text-sm text-terra-bright-green font-bold">20% crédito</p>
          </div>
        </div>

        {/* Why? */}
        <div className="bg-blue-50 border-2 border-terra-blue rounded-xl p-8">
          <h3 className="text-2xl font-bold text-terra-navy mb-4">
            ¿Por qué ofrecemos este incentivo?
          </h3>
          <div className="space-y-3 text-lg">
            <p className="flex items-start gap-3">
              <span className="text-2xl">🔵</span>
              <span><strong>Momentum:</strong> Equipo ya familiarizado, transición más eficiente</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🔵</span>
              <span><strong>Planificación:</strong> Podemos reservar recursos para Zelestra</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🔵</span>
              <span><strong>Valor compartido:</strong> Decisión rápida beneficia a ambas partes</span>
            </p>
          </div>
        </div>

        {/* No pressure */}
        <div className="bg-gray-50 border-2 border-terra-neutral rounded-xl p-6 text-center">
          <p className="text-xl text-terra-neutral">
            <strong>Importante:</strong> Esta oferta es opcional. Si Zelestra necesita más tiempo para decidir, no hay penalización. El crédito simplemente no aplica después de 30 días.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block bg-terra-bright-green text-white px-8 py-4 rounded-lg">
            <p className="text-2xl font-bold">Ahorro potencial: €18-28k</p>
            <p className="text-lg opacity-90">Si se toma decisión en 30 días</p>
          </div>
        </div>
      </div>
    </div>
  );
}
