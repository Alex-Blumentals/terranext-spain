export default function Slide2Journey() {
  return (
    <div className="space-y-12">
      <h1 className="slide-title text-center">El Camino Hasta Pizarroso-I</h1>

      <div className="flex items-center justify-center gap-8 text-center max-w-5xl mx-auto">
        <div className="flex-1 phase-box border-terra-neutral bg-gray-50">
          <div className="text-6xl font-bold text-terra-navy mb-4">29</div>
          <h3 className="text-xl font-semibold mb-2">Propiedades Evaluadas</h3>
          <p className="text-terra-neutral">Análisis preliminar completo</p>
        </div>

        <div className="text-5xl text-terra-blue">→</div>

        <div className="flex-1 phase-box border-terra-blue bg-blue-50">
          <div className="text-6xl font-bold text-terra-navy mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">Finalistas</h3>
          <p className="text-terra-neutral">Due diligence profundo</p>
        </div>

        <div className="text-5xl text-terra-bright-green">→</div>

        <div className="flex-1 phase-box border-terra-bright-green bg-green-50">
          <div className="text-6xl font-bold text-terra-bright-green mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Pizarroso-I</h3>
          <p className="text-terra-neutral">Elegido por su potencial</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto border-2 border-terra-blue">
        <h3 className="text-2xl font-bold text-terra-navy mb-4">¿Por qué Pizarroso-I?</h3>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <span><strong>Tamaño óptimo:</strong> 100 hectáreas, 50MW - escala comercial perfecta</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <span><strong>Alto impacto:</strong> Clima semi-árido = mayor beneficio de regeneración</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <span><strong>Datos sólidos:</strong> Información base clara para análisis robusto</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <span><strong>Colaboración:</strong> Zelestra demuestra apertura a innovación</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
