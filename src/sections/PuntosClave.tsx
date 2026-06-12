import { AlertTriangle, FileCheck, Users, Scale } from 'lucide-react';

const puntos = [
  {
    icon: Scale,
    title: 'Reconocimiento vs. Realidad',
    desc: 'El derecho humano al agua existe en Colombia pero su operatividad es limitada. Existe un abismo entre el reconocimiento juridico y la implementacion efectiva en el territorio.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileCheck,
    title: 'Marco Regulatorio Solido',
    desc: 'Las concesiones y permisos de vertimiento estan bien regulados en el Decreto 1076 de 2015, que se mantiene vigente y es una herramienta legal robusta.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: AlertTriangle,
    title: 'Brecha Significativa',
    desc: 'La brecha entre reconocimiento juridico y realidad es amplia, especialmente en Cali y Valle del Cauca, donde las comunidades enfrentan deficits criticos.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Users,
    title: 'Millones Sin Acceso',
    desc: 'Mas de 7 millones de colombianos sin acceso a agua potable demuestra la brecha de implementacion y la urgencia de acciones concretas.',
    color: 'bg-red-50 text-red-600',
  },
];

export default function PuntosClave() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Conclusiones
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Puntos <span className="text-[#1B4D3E]">Clave</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {puntos.map((p, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#1B4D3E]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 ${p.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1B4D3E] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
