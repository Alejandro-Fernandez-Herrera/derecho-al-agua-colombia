import { AlertTriangle, Users, Wrench, Flame } from 'lucide-react';

const denuncias = [
  'Algunas comunidades rurales han manifestado la necesidad de fortalecer las inversiones en acueductos y sistemas de abastecimiento de agua.',
  'Las temporadas secas asociadas al fenomeno de El Niño aumentan el riesgo de estres hidrico en la region.',
  'Algunos proyectos de infraestructura hidrica enfrentan retos relacionados con financiacion y ejecucion.',
];

const marcos = [
  'El derecho al agua se ha convertido en un tema importante de movilizacion social.',
  'Diversos sectores promueven la consigna: "El agua es un derecho, no un privilegio".',
  'Existen programas y politicas orientadas a garantizar el acceso al agua para poblaciones vulnerables.',
];

export default function Cali() {
  return (
    <section id="cali" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Crisis Hidrica
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Situacion en <span className="text-[#1B4D3E]">Cali</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
        </div>

        {/* Crisis alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Flame className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h4 className="font-bold text-red-700 text-lg mb-1">Alerta: Crisis Hidrica Actual</h4>
            <p className="text-red-600 text-sm leading-relaxed">
              Cali enfrenta desafios en la gestion sostenible del recurso hidrico,
              especialmente durante periodos de sequia asociados al fenomeno de El Niño.
              Esto resalta la importancia de proteger las fuentes de agua y fortalecer
              la planificacion para garantizar el abastecimiento futuro.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className="bg-[#E8F5E9] rounded-xl p-6 border-l-4 border-[#1B4D3E]">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#1B4D3E]" />
                PTAR Canaveralejo
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                La Planta de Tratamiento de Aguas Residuales (PTAR) Canaveralejo es una infraestructura
                fundamental para el tratamiento de aguas residuales de Cali. Su operacion contribuye a la
                proteccion del rio Cauca y al mejoramiento de la calidad ambiental de la region.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Denuncias Recientes
              </h4>
              <div className="space-y-3">
                {denuncias.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-base">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1B4D3E] rounded-xl p-6 text-white">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#9ACD32]" />
                Marcos Locales y Movilizacion Social
              </h4>
              <div className="space-y-2">
                {marcos.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#9ACD32] rounded-full flex-shrink-0 mt-2" />
                    <p className="text-white/90 text-base">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}PTAR_Cañaveralejo.jpg`}
                alt="Cali - PTAR Canaveralejo"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">PTAR Canaveralejo</p>
                <p className="text-xs opacity-80">Planta de tratamiento que contribuye a la proteccion del Rio Cauca y la calidad ambiental.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}Rio_Cali.JPG`}
                alt="Cali - Rio Cali"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Rio Cali</p>
                <p className="text-xs opacity-80">El estado del rio refleja los desafíos de gestion hidrica y las denuncias sobre el suministro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
