import { MapPin, AlertTriangle, Gavel, TrendingDown } from 'lucide-react';

const problemas = [
  "Persisten necesidades de inversión y modernización en algunos acueductos rurales para garantizar agua potable de calidad.",
  "Las sequías asociadas al fenómeno de El Niño generan riesgo de déficit hídrico en varias cuencas del departamento.",
  "Se requiere fortalecer y modernizar los sistemas de tratamiento y distribución de agua para mejorar la cobertura y calidad del servicio.",
  "Las cuencas hidrográficas enfrentan presión por la demanda de agua de actividades agrícolas, agroindustriales, industriales y urbanas."
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
              src={`${import.meta.env.BASE_URL}rio-cauca.jpg`}
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
                En el departamento, la <strong>CVC</strong> (Corporación Autónoma Regional del Valle del Cauca) es la máxima autoridad encargada de administrar los recursos naturales, regular las concesiones de agua y otorgar los permisos de vertimiento. En el área urbana de Cali, esta función la cumple el <strong>DAGMA</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#9ACD32]">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#9ACD32]" />
                Sentencia No. 192
              </h4>
              <p className="text-gray-700 text-sm">
                El Tribunal Administrativo del Valle del Cauca emitió la <strong>sentencia No. 192</strong> sobre el derecho humano al agua, estableciendo un precedente histórico que obliga a priorizar el consumo humano sobre el uso industrial y agrícola en la región.
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
