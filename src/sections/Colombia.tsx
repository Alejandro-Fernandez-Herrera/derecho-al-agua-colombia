import { useState } from 'react';
import { ChevronDown, Scale, Gavel, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

const acordeonData = [
  {
    id: 'constitucional',
    icon: Scale,
    title: 'Reconocimiento Constitucional',
    content: `En Colombia no existe un derecho constitucional explícito al agua en la Constitución de 1991 (es decir, no hay un artículo que diga "se reconoce el derecho al agua" como derecho autónomo), pero la Corte Constitucional ha reconocido constitucionalmente el acceso al agua potable como un derecho fundamental autónomo, derivado de los derechos a la vida, la salud y la dignidad humana.`,
    highlight: 'Reconocimiento jurisprudencial',
  },
  {
    id: 'minimo-vital',
    icon: Gavel,
    title: 'Minimo Vital de Agua',
    content: `La Corte Constitucional protege el minimo vital de agua potable para personas en estado de debilidad manifiesta. Ha definido las condiciones para que las empresas se abstengan de suspender el servicio y la cantidad minima necesaria para la subsistencia. El cumplimiento de estas sentencias ha sido limitado, generalmente condicionado a acuerdos de pago, excepto en Bogota que propone respetar el minimo vital para todos los estratos.`,
    highlight: 'Proteccion especial',
  },
  {
    id: 'ley99',
    icon: BookOpen,
    title: 'Ley 99 de 1993 - SINA',
    content: `Creo el Sistema Nacional Ambiental (SINA), el marco regulatorio para la gestion ambiental en Colombia, incluyendo la proteccion de recursos hidricos y la distribucion de competencias entre autoridades ambientales.`,
    highlight: 'Sistema Nacional Ambiental',
  },
  {
    id: 'ley1955',
    icon: BookOpen,
    title: 'Ley 1955 de 2019',
    content: `Reitero que solo se requiere permiso de vertimientos cuando la descarga es a aguas superficiales, marinas o al suelo. Clarifica los casos en que se necesita autorizacion para vertimientos.`,
    highlight: 'Regulacion de vertimientos',
  },
  {
    id: 'ley373',
    icon: BookOpen,
    title: 'Ley 373 de 1997',
    content: `Regula el uso eficiente y ahorro del agua en Colombia. Establece medidas para promover el uso racional del recurso hidrico en todos los sectores.`,
    highlight: 'Uso eficiente y ahorro',
  },
];

export default function Colombia() {
  const [openId, setOpenId] = useState<string>('constitucional');

  return (
    <section id="colombia" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Marco Legal Colombiano
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Operatividad del Derecho en <span className="text-[#1B4D3E]">Colombia</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            El derecho humano al agua opera en Colombia con reconocimiento constitucional, pero con limitaciones importantes en su implementacion.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Answer box */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1B4D3E] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-[#9ACD32]" />
                <h3 className="text-2xl font-bold">Si, pero con matices</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                El derecho humano al agua esta reconocido constitucionalmente desde 2012,
                pero su implementacion efectiva enfrenta multiples desafios en el territorio nacional.
              </p>
              <div className="flex items-center gap-2 text-[#9ACD32]">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs font-semibold">Limitaciones en la implementacion</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}decreto-legal.jpg`}
                alt="Marco legal colombiano"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-sm">Marco Normativo Colombiano</p>
                <p className="text-xs opacity-80">Constitucion y leyes ambientales</p>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {acordeonData.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#1B4D3E]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? '' : item.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    openId === item.id ? 'bg-[#1B4D3E] text-white' : 'bg-[#E8F5E9] text-[#1B4D3E]'
                  } transition-colors`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <span className="text-[11px] text-[#9ACD32] font-semibold">{item.highlight}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openId === item.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed pl-14">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
