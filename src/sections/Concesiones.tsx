import { FileCheck, CheckCircle, Building2, AlertCircle } from 'lucide-react';

const datosConcesion = [
  { label: 'Que es?', value: 'Permiso que otorga la autoridad ambiental competente para el uso y aprovechamiento del recurso hidrico (superficial o subterraneo)' },
  { label: 'Usos permitidos', value: 'Domestico, agropecuario, recreativo, industrial, generacion de energia' },
  { label: 'Quien otorga?', value: 'Corporaciones Autonomas Regionales (CAR) o autoridades ambientales departamentales/municipales' },
  { label: 'Base legal', value: 'Articulo 2.2.3.2.7.1 del Decreto 1076 de 2015' },
];

const requisitosSup = [
  'Formato Unico Nacional de Solicitud diligenciado y firmado',
  'Informacion sobre sistemas de captacion, derivacion, conduccion, restitucion',
  'Costos del proyecto',
  'Censo de usuarios (para acueductos veredales, municipales, distritos de riego)',
];

const requisitosSub = [
  'Presentar planos y memorias tecnicas de las obras antes de hacer uso',
  'Construir y obtener aprobacion de las obras hidraulicas',
  'Instalar aparatos de medicion para conocer cantidad derivada y consumida',
  'Realizar prueba de bombeo supervisada antes de iniciar aprovechamiento',
];

export default function Concesiones() {
  return (
    <section id="concesiones" className="py-24 bg-[#E8F5E9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Instrumentos de Gestion
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Concesiones de <span className="text-[#1B4D3E]">Agua</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/concesion-doc.jpg"
              alt="Documento de concesion de aguas"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Concesion de Aguas Superficiales</p>
              <p className="text-xs opacity-80">Documento oficial otorgado por autoridad ambiental competente</p>
            </div>
          </div>

          {/* Info table */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-[#1B4D3E]" />
              Informacion General
            </h3>
            <div className="space-y-4">
              {datosConcesion.map((d) => (
                <div key={d.label} className="border-l-4 border-[#9ACD32] pl-4 py-2">
                  <span className="font-bold text-[#1B4D3E] text-sm">{d.label}</span>
                  <p className="text-gray-600 text-sm mt-0.5">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              Requisitos - Aguas Superficiales
            </h3>
            <div className="space-y-3">
              {requisitosSup.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9ACD32] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-600" />
              Requisitos - Aguas Subterraneas
            </h3>
            <div className="space-y-3">
              {requisitosSub.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9ACD32] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exception */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-orange-700 text-sm">Excepcion importante:</span>
            <p className="text-orange-600 text-sm mt-1">
              No requieren concesion los aprovechamientos de aguas subterraneas para usos domesticos 
              en propiedad del beneficiario sin derivacion ni sistemas de bombeo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
