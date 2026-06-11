import { Factory, AlertCircle, FileText } from 'lucide-react';

const datosVert = [
  { label: 'Que es?', value: 'Autorizacion que otorga la autoridad ambiental a persona natural o juridica cuya actividad genera vertimientos a aguas superficiales, marinas o al suelo' },
  { label: 'Cuando se requiere?', value: 'Cuando como consecuencia del aprovechamiento se incorporan sustancias o desechos a las aguas' },
  { label: 'Quien otorga?', value: 'Autoridad ambiental competente (CAR, Secretaria Distrital de Ambiente, etc.)' },
  { label: 'Base legal', value: 'Articulo 2.2.3.3.5.1 del Decreto 1076 de 2015' },
];

const requisitosVert = [
  'Formato Unico Nacional de Solicitud de Permisos de Vertimientos',
  'Nombre, direccion e identificacion del solicitante',
  'Certificado de existencia y representacion legal (persona juridica)',
  'Autorizacion del propietario/poseedor del inmueble',
  'Certificado de propiedad o prueba de posesion/tenencia',
  'Nombre y localizacion georreferenciada del predio',
  'Plano donde se identifiquen origen, cantidad y localizacion de descargas',
  'Caracterizacion del vertimiento (parametros de Res. MADS 0631 de 2015 o 0699 de 2021)',
  'Costos del proyecto (inversion y operacion)',
  'Evaluacion Ambiental del Vertimiento',
  'Plan de Gestion del Riesgo',
];

export default function Vertimientos() {
  return (
    <section id="vertimientos" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Regulacion Ambiental
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Permisos de <span className="text-[#1B4D3E]">Vertimiento</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Autorizacion obligatoria para descargar sustancias o desechos a cuerpos de agua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Factory className="w-6 h-6 text-[#1B4D3E]" />
              Informacion General
            </h3>
            <div className="space-y-4">
              {datosVert.map((d) => (
                <div key={d.label} className="border-l-4 border-[#1B4D3E] pl-4 py-2">
                  <span className="font-bold text-[#1B4D3E] text-sm">{d.label}</span>
                  <p className="text-gray-600 text-sm mt-0.5">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/vertimiento-ind.jpg"
              alt="Planta de tratamiento de aguas residuales"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Control de Vertimientos</p>
              <p className="text-xs opacity-80">Monitoreo y regulacion de descargas a cuerpos de agua</p>
            </div>
          </div>
        </div>

        {/* Requirements list */}
        <div className="bg-[#E8F5E9] rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#1B4D3E]" />
            Requisitos para Permiso de Vertimientos
          </h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {requisitosVert.map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-blue-700 text-sm">Nota importante:</span>
            <p className="text-blue-600 text-sm mt-1">
              El permiso de vertimiento se tramita junto con la solicitud de concesion o 
              posteriormente si las actividades sobrevienen al otorgamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
