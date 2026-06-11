import { CheckCircle, Droplets, Shield, Wallet, Accessibility } from 'lucide-react';

const caracteristicas = [
  { icon: Droplets, label: 'Suficiente', desc: 'Cantidad adecuada para consumo personal y domestico', detail: '50-100 litros por persona/dia', color: 'bg-blue-50 text-blue-600' },
  { icon: Shield, label: 'Salubre', desc: 'Libre de sustancias que amenacen la salud', detail: 'Color, sabor y olor aceptables', color: 'bg-green-50 text-green-600' },
  { icon: CheckCircle, label: 'Aceptable', desc: 'Adecuada culturalmente', detail: 'Condiciones aceptables para la poblacion', color: 'bg-purple-50 text-purple-600' },
  { icon: Accessibility, label: 'Accesible', desc: 'Fisica y economicamente accesible', detail: 'Para todos los sectores de la poblacion', color: 'bg-orange-50 text-orange-600' },
  { icon: Wallet, label: 'Asequible', desc: 'Precio justo que no compromete otros derechos', detail: 'No debe afectar derechos basicos', color: 'bg-teal-50 text-teal-600' },
];

export default function Teoria() {
  return (
    <section id="teoria" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Fundamentos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Que es el <span className="text-[#1B4D3E]">Derecho Humano al Agua</span>?
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Definition */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              El derecho humano al agua es el derecho de todos a disponer de agua{' '}
              <strong className="text-[#1B4D3E]">suficiente, salubre, aceptable, accesible y asequible</strong>{' '}
              para el uso personal y domestico.
            </p>

            {/* Recognition boxes */}
            <div className="bg-[#E8F5E9] rounded-xl p-6 border-l-4 border-[#1B4D3E]">
              <h4 className="font-bold text-[#1B4D3E] mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Reconocimiento Internacional
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reconocido por la Asamblea General de la ONU el{' '}
                <strong>28 de julio de 2010</strong> mediante la Resolucion A/64/L.63/Rev.1.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Importancia Vital
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                El agua es un recurso basico, finito y de vital importancia para el pleno
                disfrute de la vida y todos los derechos humanos.
              </p>
            </div>

            {/* Key dimensions */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">5 Caracteristicas Esenciales:</h4>
              <div className="space-y-3">
                {caracteristicas.map((c) => (
                  <div key={c.label} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-sm">{c.label}</span>
                      <p className="text-gray-600 text-xs">{c.desc}</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image + Stats */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}colombia-justice.jpg`}
                alt="Corte Constitucional de Colombia"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-semibold">Corte Constitucional de Colombia</p>
                <p className="text-xs opacity-80">Protector del derecho al agua como derecho fundamental</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Linea de Tiempo - Reconocimiento</h4>
              <div className="space-y-4">
                {[
                  { year: '1948', text: 'Declaracion Universal de Derechos Humanos: derecho a un nivel de vida adecuado, incluye el agua de forma implicita' },
                  { year: '1992', text: 'Corte Constitucional (T-570/92) protege el agua via doctrina de conexidad con la vida y la salud' },
                  { year: '2002', text: 'Comite de Derechos Economicos (ONU) emite Observacion General No. 15: define las 5 caracteristicas esenciales del derecho' },
                  { year: '2010', text: 'ONU reconoce formalmente el derecho humano al agua (Res. A/64/L.63/Rev.1)' },
                  { year: '2010', text: 'Corte Constitucional (T-418/10) declara el agua potable como Derecho Fundamental Autonomo' },
                  { year: '2011', text: 'Corte Constitucional (T-740/11) prohibe corte total a sujetos vulnerables y ordena garantizar Minimo Vital de agua' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-[#9ACD32] rounded-full" />
                      {i < 5 && <div className="w-0.5 h-full bg-gray-200" />}
                    </div>
                    <div className="pb-4">
                      <span className="font-bold text-[#1B4D3E] text-sm">{item.year}</span>
                      <p className="text-gray-600 text-xs mt-0.5">{item.text}</p>
                    </div>
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
