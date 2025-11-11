export default function Slide1Cover() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] text-center relative">
      {/* Logos */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center mb-12 px-8">
        <div className="w-48 h-16 relative">
          <img
            src="/logos/TerraNextHorizontalWhite.svg"
            alt="TerraNext Logo"
            className="w-full h-full object-contain"
            style={{ filter: 'invert(1)' }}
          />
        </div>
        <div className="w-48 h-16 relative">
          <img
            src="/logos/zelestra-logo.png"
            alt="Zelestra Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Title */}
      <div className="mt-24 space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-terra-navy leading-tight">
          PROGRAMA DE GESTIÓN REGENERATIVA
        </h1>
        <h2 className="text-4xl md:text-5xl text-terra-blue">
          Parque Fotovoltaico Pizarroso-I
        </h2>

        <div className="mt-12 text-2xl text-terra-charcoal space-y-2">
          <p className="font-semibold">Propuesta Fase 1: Diagnóstico y Evaluación</p>
          <p className="text-xl text-terra-green">con Puntos de Decisión GO/NO-GO</p>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-lg text-terra-neutral space-y-2">
          <p><span className="font-semibold">Cliente:</span> Zelestra Ingeniería</p>
          <p><span className="font-semibold">Ubicación:</span> Pizarroso-I, Cáceres (100ha, 50MW)</p>
          <p><span className="font-semibold">Fecha:</span> 11 de noviembre de 2025</p>
          <p><span className="font-semibold">Presentado por:</span> TerraNext SIA</p>
        </div>
      </div>
    </div>
  );
}
