import { AlertTriangle, Users, TrendingUp, Globe2 } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,000M', label: 'Personas sin acceso a agua potable segura', suffix: '+' },
  { icon: AlertTriangle, value: '5M', label: 'Colombianos sin acceso a agua potable', suffix: '+' },
  { icon: TrendingUp, value: '40%', label: 'De la poblacion mundial afectada por escasez en 2030', suffix: '' },
  { icon: Globe2, value: '700M', label: 'Personas que podrian desplazarse por falta de agua', suffix: '+' },
];

const desafios = [
  'Escasez de agua y aumento de la contaminacion son desafios de origen social y politico',
  'Mas de 5 millones de colombianos aun no tienen acceso a agua potable',
  'El suministro debe ser continuo y suficiente para cubrir necesidades basicas',
  'Cambio climatico acelera la reduccion de fuentes hidricas disponibles',
  'La contaminacion industrial afecta la calidad del agua en rios y acuiferos',
];

export default function Mundial() {
  return (
    <section id="mundial" className="py-24 bg-[#E8F5E9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Contexto Global
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Situacion a <span className="text-[#1B4D3E]">Nivel Mundial</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            El acceso al agua es uno de los desafios mas criticos que enfrenta la humanidad en el siglo XXI.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#1B4D3E]" />
              </div>
              <div className="text-3xl font-extrabold text-[#1B4D3E] mb-1">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Challenges */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-orange-500" />
              Desafios Globales
            </h3>
            <div className="space-y-4">
              {desafios.map((d, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-[#E8F5E9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#1B4D3E] font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info box */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/vertimiento-ind.jpg"
                alt="Tratamiento de aguas"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Planta de Tratamiento de Aguas Residuales</p>
                <p className="text-xs opacity-80">Infraestructura critica para garantizar agua limpia</p>
              </div>
            </div>

            <div className="bg-[#1B4D3E] rounded-xl p-6 text-white">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                Dato Clave
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                La escasez de agua afecta desproporcionadamente a comunidades vulnerables
                y en desarrollo. Se estima que para 2025, la mitad de la poblacion mundial
                vivira en zonas con escasez de agua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
