import { MapPin, AlertTriangle, Gavel, TrendingDown } from 'lucide-react';

const problemas = [
  'Comunidades rurales del Valle denuncian falta de inversiones y retrasos en proyectos de agua',
  'Alertas sobre deficit hidrico en la region',
  'Necesidad de infraestructura de tratamiento y distribucion de agua',
  'Presion sobre cuencas hidrograficas por actividad agricola e industrial',
];

export default function ValleCauca() {
  return (
    <section id="valle" className="py-24 bg-[#E8F5E9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Contexto Regional
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Valle del <span className="text-[#1B4D3E]">Cauca</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src="src/components/IMG/rio-cauca.jpg"
              alt="Valle del Cauca"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Valle del Cauca</p>
              <p className="text-xs opacity-80">Rio Cauca serpenteando entre campos verdes</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#1B4D3E]">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1B4D3E]" />
                Autoridad Ambiental
              </h4>
              <p className="text-gray-700 text-sm">
                En el Valle del Cauca opera el <strong>Area Metropolitana del Valle de Aburra (AMVA)</strong> como
                autoridad ambiental para concesiones, ademas de la <strong>CVC</strong> como Corporacion Autonoma Regional.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#9ACD32]">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#9ACD32]" />
                Sentencia No. 192
              </h4>
              <p className="text-gray-700 text-sm">
                El Tribunal Administrativo del Valle del Cauca emitio la <strong>sentencia No. 192</strong> sobre
                el derecho humano al agua, estableciendo importantes precedentes para la region.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-orange-500" />
                Problemas Identificados
              </h4>
              <div className="space-y-2">
                {problemas.map((p, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
