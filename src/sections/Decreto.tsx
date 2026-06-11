import { CheckCircle, BookOpen, Calendar, RefreshCw, AlertCircle, FileCheck } from 'lucide-react';

const capitulos = [
  { nombre: 'Concesion de aguas', contenido: 'Regula uso y aprovechamiento de recursos hidricos', articulo: '2.2.3.2.7.1' },
  { nombre: 'Permisos de vertimientos', contenido: 'Autoriza descargas a aguas superficiales, marinas o suelo', articulo: '2.2.3.3.5.1' },
  { nombre: 'Relacion concesion-vertimiento', contenido: 'Si el aprovechamiento genera vertimientos, se requiere ambos', articulo: '2.2.3.2.20.2' },
];

const disposiciones = [
  'Aprovechamiento de aguas subterraneas requiere concesion excepto usos domesticos sin bombeo',
  'Aprovechamiento de aguas lluvias requiere concesion cuando forman cauce natural que atraviesa varios predios',
  'Concesiones solo pueden prorrogarse durante el ultimo ano del periodo otorgado',
  'En caso de tradicion del predio, nuevo propietario debe solicitar traspaso dentro de 60 dias',
  'Toda concesion requiere Programa de Uso Eficiente y Ahorro del Agua (PUEAA)',
];

export default function Decreto() {
  return (
    <section id="decreto" className="py-24 bg-[#1B4D3E] text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9ACD32] text-[#0D3328] font-bold px-4 py-2 rounded-full text-sm mb-6">
            <CheckCircle className="w-4 h-4" />
            VIGENTE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Decreto <span className="text-[#9ACD32]">1076 de 2015</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Decreto Unico Reglamentario del Sector Ambiente y Desarrollo Sostenible
          </p>
        </div>

        {/* Status bar */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/20">
            <Calendar className="w-6 h-6 text-[#9ACD32] mx-auto mb-2" />
            <span className="block text-white/70 text-xs uppercase tracking-wider">Expedicion</span>
            <span className="font-bold text-lg">Mayo 26, 2015</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/20">
            <RefreshCw className="w-6 h-6 text-[#9ACD32] mx-auto mb-2" />
            <span className="block text-white/70 text-xs uppercase tracking-wider">Ultima Actualizacion</span>
            <span className="font-bold text-lg">Noviembre 2, 2025</span>
          </div>
          <div className="bg-[#9ACD32]/20 backdrop-blur-sm rounded-xl p-5 text-center border border-[#9ACD32]/40">
            <CheckCircle className="w-6 h-6 text-[#9ACD32] mx-auto mb-2" />
            <span className="block text-white/70 text-xs uppercase tracking-wider">Estado</span>
            <span className="font-bold text-lg text-[#9ACD32]">VIGENTE</span>
          </div>
        </div>

        {/* Chapters */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#9ACD32]" />
            Capitulos Relevantes
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="text-left p-4 text-[#9ACD32] font-bold text-sm">Capitulo</th>
                    <th className="text-left p-4 text-[#9ACD32] font-bold text-sm">Contenido</th>
                    <th className="text-left p-4 text-[#9ACD32] font-bold text-sm">Articulo</th>
                  </tr>
                </thead>
                <tbody>
                  {capitulos.map((c, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-4 font-semibold text-sm">{c.nombre}</td>
                      <td className="p-4 text-white/80 text-sm">{c.contenido}</td>
                      <td className="p-4">
                        <span className="bg-[#9ACD32] text-[#0D3328] font-bold text-xs px-3 py-1 rounded-full">
                          {c.articulo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key provisions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#9ACD32]" />
              Disposiciones Clave
            </h3>
            <div className="space-y-3">
              {disposiciones.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <FileCheck className="w-5 h-5 text-[#9ACD32] flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/decreto-legal.jpg"
              alt="Decreto 1076 de 2015"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Decreto 1076 de 2015</p>
              <p className="text-xs opacity-80">Unico Reglamentario del Sector Ambiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
