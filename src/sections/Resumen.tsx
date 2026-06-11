import { Droplets, Globe, Scale, MapPin, Building2, BookOpen } from 'lucide-react';

const resumenData = [
  {
    icon: Droplets,
    title: 'Teoria',
    desc: 'Derecho reconocido por ONU 2010: agua suficiente, salubre, aceptable, accesible y asequible.',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Globe,
    title: 'Mundial',
    desc: 'Escasez y contaminacion son desafios principales; 5M+ colombianos sin agua potable.',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: Scale,
    title: 'Colombia',
    desc: 'Reconocido constitucionalmente desde 2012; Corte protege minimo vital pero con limitaciones.',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: MapPin,
    title: 'Valle del Cauca',
    desc: 'Denuncias de falta de inversion; deficit hidrico reportado; Sentencia No. 192.',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: Building2,
    title: 'Cali',
    desc: 'Crisis hidrica actual; proyecto PTAR Canaveralejo; deficit hidrico grave.',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Marco Normativo',
    desc: 'Decreto 1076 de 2015 VIGENTE regula concesiones y vertimientos en Colombia.',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
  },
];

export default function Resumen() {
  return (
    <section className="py-24 bg-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Resumen Ejecutivo
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Resumen por <span className="text-[#1B4D3E]">Nivel</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumenData.map((item) => (
            <div
              key={item.title}
              className={`${item.color} border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
