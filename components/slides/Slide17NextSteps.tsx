export default function Slide17NextSteps() {
  return (
    <div className="space-y-10">
      <h1 className="slide-title text-center">Próximos Pasos</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="phase-box border-terra-blue bg-blue-50">
            <div className="flex items-center justify-center w-16 h-16 bg-terra-blue text-white rounded-full text-3xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Revisión Interna</h3>
            <div className="text-base space-y-2">
              <p>• Equipo Zelestra revisa propuesta</p>
              <p>• Preguntas y clarificaciones</p>
              <p>• Aprobación interna</p>
            </div>
            <div className="mt-4 text-center text-sm text-terra-neutral">
              <strong>Timeline:</strong> 1-2 semanas
            </div>
          </div>

          {/* Step 2 */}
          <div className="phase-box border-terra-bright-green bg-green-50">
            <div className="flex items-center justify-center w-16 h-16 bg-terra-bright-green text-white rounded-full text-3xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Firma de Contrato</h3>
            <div className="text-base space-y-2">
              <p>• Revisión legal</p>
              <p>• Ajustes finales (si necesarios)</p>
              <p>• Firmas ejecutivas</p>
            </div>
            <div className="mt-4 text-center text-sm text-terra-neutral">
              <strong>Timeline:</strong> 1 semana
            </div>
          </div>

          {/* Step 3 */}
          <div className="phase-box border-terra-navy bg-gray-50">
            <div className="flex items-center justify-center w-16 h-16 bg-terra-navy text-white rounded-full text-3xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">Inicio Fase 1</h3>
            <div className="text-base space-y-2">
              <p>• Kick-off meeting</p>
              <p>• Equipo movilizado</p>
              <p>• Trabajo de campo inicia</p>
            </div>
            <div className="mt-4 text-center text-sm text-terra-neutral">
              <strong>Timeline:</strong> Inmediato
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-terra-navy text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Preguntas o Listo para Avanzar?</h2>
          <div className="space-y-4 text-xl">
            <div>
              <p className="font-semibold mb-1">Contacto Principal:</p>
              <p>[Nombre Contacto TerraNext]</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Email:</p>
              <p className="text-terra-bright-green">[email@terranext.com]</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Teléfono:</p>
              <p>[+34 XXX XXX XXX]</p>
            </div>
          </div>
        </div>

        {/* Summary box */}
        <div className="bg-green-50 border-2 border-terra-bright-green rounded-xl p-8">
          <h3 className="text-2xl font-bold text-terra-bright-green mb-4 text-center">
            📊 Resumen de la Oportunidad
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-terra-navy mb-2">€137k</p>
              <p className="text-sm">Inversión Fase 1</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-terra-navy mb-2">10 sem</p>
              <p className="text-sm">Diagnóstico completo</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-terra-bright-green mb-2">€2-5M</p>
              <p className="text-sm">Valor potencial 25 años</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center pt-8">
          <p className="text-3xl font-bold text-terra-navy mb-4">
            Gracias por su atención
          </p>
          <p className="text-xl text-terra-neutral">
            Estamos listos para transformar Pizarroso-I juntos
          </p>
        </div>
      </div>
    </div>
  );
}
