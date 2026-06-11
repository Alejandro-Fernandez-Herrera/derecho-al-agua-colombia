import { useState } from 'react';
import { CheckCircle, Droplets, Shield, Wallet, Accessibility, Play, Globe, Scale } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-white">
              <div className="w-10 h-10 bg-[#1B4D3E] rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-[#9ACD32] fill-[#9ACD32]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Video Explicativo</h4>
                <p className="text-gray-500 text-xs">Que es el derecho al agua? - Introduccion a los Derechos Humanos</p>
              </div>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/wPlqVyT0zgk"
                title="Que es el derecho al agua - Introduccion a los Derechos Humanos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
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
            <TimelineTabs />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineTabs() {
  const [activeTab, setActiveTab] = useState<'international' | 'colombia'>('international');

  const internationalTimeline = [
    { year: '1948', text: 'Declaracion Universal de Derechos Humanos: inclusion implicita del agua dentro del derecho a un nivel de vida adecuado' },
    { year: '2002', text: 'Observacion General No. 15 (Comite DESC - ONU): primer documento que delimita el contenido normativo, obligaciones de los Estados y define las 5 caracteristicas esenciales' },
    { year: '2010', text: 'Resolucion 64/292 de la Asamblea General de la ONU: reconocimiento explicito del agua potable y saneamiento como derecho humano esencial' },
    { year: '2015', text: 'Resolucion 70/169 de la Asamblea General: define el derecho al agua y saneamiento como derechos autonomos, interrelacionados pero con tratamiento diferenciado' },
    { year: 'Transversal', text: 'Tratados especificos: Convencion sobre Derechos del Nino (Art. 24), CEDAW (Art. 14) y CRPD para personas con discapacidad (Art. 28)' },
  ];

  const colombiaTimeline = [
    { year: '1991', text: 'Fundamento Constitucional: no explicito en texto original; se deriva de los Arts. 49 (salud y saneamiento), 79 (ambiente sano) y 366 (bienestar general y prioridad del gasto publico social)', isHighlight: true },
    { year: '1992', text: 'Epoca de la Conexidad (T-406/92 y T-578/92): Corte protege el agua solo si su ausencia amenaza derechos fundamentales escritos como vida o salud' },
    { year: '2010', text: 'Autonomia Fundamental (T-418/10): Corte declara formalmente el agua potable para consumo humano como Derecho Fundamental Autonomo' },
    { year: '2011', text: 'Minimo Vital y Proteccion (T-740/11): prohibe corte total a poblaciones vulnerables ante no pago; fija estandar de 50 litros diarios por persona' },
    { year: '2022-2026', text: 'Plan Nacional de Desarrollo (Ley 2294 de 2023): eleva el agua a eje transversal de politica publica bajo pilar de Ordenamiento del territorio alrededor del agua' },
    { year: 'Actualidad', text: 'Tres Dimensiones: jurisprudencia ampara el agua bajo enfoques Individual (dignidad humana), Etnico-territorial (pueblos indigenas y afro) y Ecologico (cuerpos de agua como sujetos de derechos, ej. Rio Atrato)' },
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h4 className="font-bold text-gray-900 mb-4">Linea de Tiempo - Reconocimiento</h4>
      
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('international')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'international'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Globe className="w-4 h-4" />
          Internacional
        </button>
        <button
          onClick={() => setActiveTab('colombia')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'colombia'
              ? 'bg-[#1B4D3E] text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Scale className="w-4 h-4" />
          Colombia
        </button>
      </div>

      <div className="relative min-h-[400px]">
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            activeTab === 'international'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}
        >
          <div className="space-y-4">
            {internationalTimeline.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1.5" />
                  {i < internationalTimeline.length - 1 && <div className="w-0.5 h-full bg-blue-200" />}
                </div>
                <div className="pb-3">
                  <span className="font-bold text-blue-700 text-xs">{item.year}</span>
                  <p className="text-gray-600 text-xs mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-300 ${
            activeTab === 'colombia'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="space-y-4">
            {colombiaTimeline.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-[#1B4D3E] rounded-full mt-1.5" />
                  {i < colombiaTimeline.length - 1 && <div className="w-0.5 h-full bg-[#9ACD32]/30" />}
                </div>
                <div className="pb-3">
                  {item.isHighlight ? (
                    <div className="bg-[#E8F5E9] rounded-lg p-2 border-l-2 border-[#1B4D3E]">
                      <span className="font-bold text-[#1B4D3E] text-xs">{item.year}</span>
                      <p className="text-gray-600 text-xs mt-0.5">{item.text}</p>
                    </div>
                  ) : (
                    <>
                      <span className="font-bold text-[#1B4D3E] text-xs">{item.year}</span>
                      <p className="text-gray-600 text-xs mt-0.5">{item.text}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
