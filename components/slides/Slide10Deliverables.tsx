export default function Slide10Deliverables() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">10 Documentos Entregables</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {[
          { num: 1, title: "Informe de Condiciones del Sitio", desc: "Mapas de zonas, drenaje, vegetación, topografía preliminar" },
          { num: 2, title: "Análisis de Suelos Completo", desc: "30+ muestras, características físico-químicas por zona" },
          { num: 3, title: "Inventario de Biodiversidad", desc: "Flora, fauna, hábitats actuales" },
          { num: 4, title: "Línea Base O&M", desc: "Costes actuales, índices productividad, benchmarks" },
          { num: 5, title: "Modelo Hidrológico", desc: "Escorrentía, infiltración, gestión agua lluvia" },
          { num: 6, title: "Escenarios de Plantación", desc: "Especies nativas apropiadas, densidades teóricas" },
          { num: 7, title: "Análisis de Prácticas Animales", desc: "Posibilidades pastoreo, especies apropiadas, permisos" },
          { num: 8, title: "Análisis Económico Comparativo", desc: "Costes estimados, ahorros, ROI, sensibilidad" },
          { num: 9, title: "Evaluación de Impacto Operacional", desc: "Efecto en temperatura paneles, eficiencia" },
          { num: 10, title: "Recomendación y Hoja de Ruta", desc: "Zonas prioritarias + camino hacia Fase 2" },
        ].map((doc) => (
          <div key={doc.num} className="phase-box border-terra-navy bg-white hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-terra-navy text-white rounded-full flex items-center justify-center text-xl font-bold">
                {doc.num}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-terra-navy mb-2">{doc.title}</h3>
                <p className="text-sm text-terra-neutral">{doc.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-terra-bright-green mb-4 text-center">
          Formato de Entrega
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <div>
            <p className="font-semibold mb-2">Documentos digitales:</p>
            <ul className="space-y-1 text-base">
              <li>• PDF ejecutivos</li>
              <li>• Excel con datos</li>
              <li>• Mapas GIS (si aplica)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Presentación final:</p>
            <ul className="space-y-1 text-base">
              <li>• Sesión ejecutiva (2h)</li>
              <li>• Q&A abierto</li>
              <li>• Próximos pasos claros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
