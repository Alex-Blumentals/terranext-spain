export default function Slide5Challenge() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">El Desafío de Pizarroso-I</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left: Location Info */}
        <div className="space-y-6">
          <div className="bg-terra-navy text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Ubicación</h2>
            <div className="space-y-3 text-lg">
              <p><strong>Coordenadas:</strong> 39.803°N, -6.346°W</p>
              <p><strong>Región:</strong> Cáceres, Extremadura</p>
              <p><strong>Altitud:</strong> ~400 metros</p>
              <p><strong>Clima:</strong> Semi-árido mediterráneo</p>
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-terra-caution rounded-xl p-6">
            <h3 className="text-2xl font-bold text-terra-caution mb-4">Condición Clave</h3>
            <p className="text-xl mb-3">
              <strong>Precipitación anual:</strong>
            </p>
            <p className="text-4xl font-bold text-terra-caution text-center py-4">
              450-550mm
            </p>
            <p className="text-lg text-terra-charcoal">
              Zona de estrés hídrico moderado a alto
            </p>
          </div>
        </div>

        {/* Right: Challenge = Opportunity */}
        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-terra-danger rounded-xl p-8">
            <h3 className="text-3xl font-bold text-terra-danger mb-4">Desafío</h3>
            <ul className="space-y-3 text-lg">
              <li>• Agua limitada</li>
              <li>• Suelos degradados</li>
              <li>• Veranos extremos (40°C+)</li>
              <li>• Vegetación escasa</li>
              <li>• Alta erosión potencial</li>
            </ul>
          </div>

          <div className="text-5xl text-center">↓ PERO ↓</div>

          <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8">
            <h3 className="text-3xl font-bold text-terra-bright-green mb-4">Oportunidad</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-2xl font-bold text-terra-bright-green">•</span>
                <span><strong>Máximo impacto regenerativo</strong> - mayor margen de mejora</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl font-bold text-terra-bright-green">•</span>
                <span><strong>ROI más alto</strong> - cada mejora genera más valor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl font-bold text-terra-bright-green">•</span>
                <span><strong>Aprendizaje valioso</strong> - replicable en otros sitios áridos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-xl italic text-terra-navy max-w-4xl mx-auto pt-6 border-t-2">
        "Las zonas más difíciles ofrecen las mayores oportunidades de transformación"
      </div>
    </div>
  );
}
