import { AlertTriangle, Users, Wrench, Flame } from 'lucide-react';

const denuncias = [
  'Comunidades rurales de Cali denuncian falta de inversiones en proyectos hidricos',
  'En mayo 2026 se alerto que Cali y Valle del Cauca seran "un horno" en meses secos sin aprovechar las lluvias',
  'Retrasos en la ejecucion de obras criticas de infraestructura de agua',
];

const marcos = [
  'El derecho al agua se ha convertido en tema de movilizacion social',
  'Consignas como "El agua es un derecho, no un privilegio"',
  'La implementacion del minimo vital en Cali sigue patrones de focalizacion con requisitos de acuerdo de pago',
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
              Cali enfrenta una crisis de agua con serios cuestionamientos a gobernantes sobre proyectos hidricos. 
              El deficit hidrico amenaza el abastecimiento para la poblacion en los proximos meses secos.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            {/* PTAR */}
            <div className="bg-[#E8F5E9] rounded-xl p-6 border-l-4 border-[#1B4D3E]">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#1B4D3E]" />
                PTAR Canaveralejo
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Existe el proyecto importante de la <strong>Planta de Tratamiento de Aguas Residuales (PTAR) Canaveralejo</strong>, 
                una obra critica para el manejo sostenible del agua en la ciudad, aunque su implementacion 
                enfrenta desafios de financiamiento y ejecucion.
              </p>
            </div>

            {/* Denuncias */}
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
                    <p className="text-gray-700 text-sm">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marcos locales */}
            <div className="bg-[#1B4D3E] rounded-xl p-6 text-white">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#9ACD32]" />
                Marcos Locales y Movilizacion Social
              </h4>
              <div className="space-y-2">
                {marcos.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#9ACD32] rounded-full flex-shrink-0 mt-2" />
                    <p className="text-white/90 text-sm">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}cali-city.jpg`}
              alt="Cali - Rio Cali"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Cali - Rio Cali</p>
              <p className="text-xs opacity-80">La ciudad enfrenta desafios criticos de abastecimiento de agua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
