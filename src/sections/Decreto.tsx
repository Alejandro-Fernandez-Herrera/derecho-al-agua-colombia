import { useState } from 'react';
import { CheckCircle, BookOpen, FileText, Droplets, Factory, Zap, Waves, Home, ChevronDown, ChevronUp, Building2, AlertCircle } from 'lucide-react';

const tags = ['Decreto Único Reglamentario', 'Sector Ambiente', 'Recursos hídricos', 'CAR'];

const queRegula = [
  'Concesiones de agua superficial y subterránea',
  'Permisos de vertimiento de aguas residuales',
  'Gestión ambiental y protección del recurso hídrico',
  'Recursos hídricos superficiales y subterráneos',
];

type Uso = {
  id: string;
  label: string;
  descripcion: string;
  icon: React.ReactNode;
};

const usos: Uso[] = [
  {
    id: 'domestico',
    label: 'Doméstico',
    descripcion: 'Agua para consumo humano, preparación de alimentos e higiene personal en el hogar.',
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 'agropecuario',
    label: 'Agropecuario',
    descripcion: 'Riego de cultivos, cría de ganado y actividades del sector agrícola y pecuario.',
    icon: <Waves className="w-5 h-5" />,
  },
  {
    id: 'industrial',
    label: 'Industrial',
    descripcion: 'Procesos de manufactura, enfriamiento industrial y actividades productivas.',
    icon: <Factory className="w-5 h-5" />,
  },
  {
    id: 'recreativo',
    label: 'Recreativo',
    descripcion: 'Piscinas, parques acuáticos, actividades deportivas y turismo.',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    id: 'energia',
    label: 'Energía',
    descripcion: 'Generación de energía hidroeléctrica mediante caudales de ríos y embalses.',
    icon: <Zap className="w-5 h-5" />,
  },
];

const requisitos = [
  'Formulario nacional de solicitud diligenciado y firmado',
  'Información técnica del sistema de captación y conducción',
  'Costos estimados del proyecto',
  'Información sobre los usuarios del agua',
  'Localización geográfica del punto de captación',
];

export default function Decreto() {
  const [openUso, setOpenUso] = useState<string | null>(null);

  return (
    <section id="decreto" className="py-24 bg-[#1B4D3E] text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9ACD32] text-[#0D3328] font-bold px-4 py-2 rounded-full text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            Integrante 3 · 6 minutos
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Decreto <span className="text-[#9ACD32]">1076 de 2015</span><br />
            y concesiones de agua
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            El marco normativo que regula el uso, aprovechamiento y protección del recurso hídrico en Colombia.
          </p>
          <a
            href="https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors mb-8"
          >
            <FileText className="w-4 h-4" />
            Ver Decreto completo (PDF) →
          </a>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dos tarjetas — ¿Qué es el Decreto 1076? */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#9ACD32] mb-2">Decreto Único Reglamentario</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Reúne y organiza la regulación ambiental de Colombia en un solo instrumento jurídico.
              Entró en vigor el 26 de mayo de 2015 y consolida normas dispersas del sector ambiente
              y desarrollo sostenible.
            </p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#9ACD32] mb-3">¿Qué regula?</h3>
            <ul className="space-y-2">
              {queRegula.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-[#9ACD32] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bloque destacado — Definición de concesión */}
        <div className="bg-[#9ACD32]/20 border border-[#9ACD32]/40 rounded-2xl p-6 mb-12">
          <span className="inline-block bg-[#9ACD32] text-[#0D3328] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Definición
          </span>
          <p className="text-white/90 leading-relaxed">
            Es el permiso que otorga la autoridad ambiental para usar y aprovechar el recurso hídrico,
            ya sea superficial o subterráneo. <span className="font-bold text-[#9ACD32]">Sin concesión, el uso del agua es ilegal.</span>
          </p>
        </div>

        {/* Usos permitidos — interactivos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Droplets className="w-6 h-6 text-[#9ACD32]" />
            Usos permitidos
          </h3>
          <div className="space-y-3">
            {usos.map((uso) => (
              <div key={uso.id} className="bg-white/10 border border-white/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenUso(openUso === uso.id ? null : uso.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-sm">
                    <span className="text-[#9ACD32]">{uso.icon}</span>
                    {uso.label}
                  </span>
                  {openUso === uso.id
                    ? <ChevronUp className="w-4 h-4 text-[#9ACD32] flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-white/60 flex-shrink-0" />
                  }
                </button>
                {openUso === uso.id && (
                  <div className="px-5 pb-4 text-white/80 text-sm leading-relaxed border-t border-white/10 pt-3">
                    {uso.descripcion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta — ¿Quién otorga la concesión? */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#9ACD32]" />
            ¿Quién otorga la concesión?
          </h3>
          <p className="text-white/80 text-sm mb-2 font-semibold">Corporaciones Autónomas Regionales (CAR)</p>
          <p className="text-white/70 text-sm mb-4">Autoridades ambientales regionales, departamentales y municipales.</p>
          <div className="bg-[#9ACD32]/20 border border-[#9ACD32]/30 rounded-xl p-4 text-sm text-white/90">
            En el Valle del Cauca, la autoridad competente es la <span className="font-bold text-[#9ACD32]">CVC
            (Corporación Autónoma Regional del Valle del Cauca)</span>, quien evalúa, aprueba y controla
            las concesiones en la región.
          </div>
        </div>

        {/* Lista de requisitos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#9ACD32]" />
            Requisitos para solicitar una concesión
          </h3>
          <div className="space-y-3">
            {requisitos.map((req) => (
              <div key={req} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-[#9ACD32] flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque destacado — PUEAA */}
        <div className="bg-[#9ACD32]/20 border border-[#9ACD32]/40 rounded-2xl p-6 mb-12">
          <span className="inline-block bg-[#9ACD32] text-[#0D3328] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Dato clave
          </span>
          <p className="text-white/90 leading-relaxed">
            Toda concesión debe incluir un <span className="font-bold text-[#9ACD32]">Programa de Uso Eficiente
            y Ahorro del Agua (PUEAA)</span>. No es opcional: es un requisito obligatorio por ley.
          </p>
        </div>

        {/* Bloque de transición */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#9ACD32] flex-shrink-0 mt-0.5" />
          <p className="text-white/80 text-sm leading-relaxed">
            Usar el agua implica responsabilidad sobre las aguas residuales generadas. Por eso existen
            los <span className="font-semibold text-white">permisos de vertimiento</span>, que explicará el siguiente integrante.
          </p>
        </div>

      </div>
    </section>
  );
}
