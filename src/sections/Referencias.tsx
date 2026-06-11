import { ExternalLink, BookOpen } from 'lucide-react';

const referencias = [
  { num: 1, url: 'https://www.youtube.com/watch?v=gAwS00E45-Y', title: 'Video explicativo - Derecho al agua' },
  { num: 2, url: 'https://www.acnur.org/fileadmin/Documentos/BDL/2012/8789.pdf', title: 'ACNUR - Derecho al agua y saneamiento' },
  { num: 3, url: 'https://www.facebook.com/CorteConstitucionalDelEcuador/posts/', title: 'Corte Constitucional del Ecuador' },
  { num: 4, url: 'https://revistas.javeriana.edu.co/index.php/vnijuri/article/view/19810', title: 'Revista Javeriana - Derecho al agua' },
  { num: 5, url: 'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0041-90602018000100043', title: 'Scielo Colombia - Agua como derecho' },
  { num: 6, url: 'https://www.facebook.com/diarioelpaiscali/posts/', title: 'Diario El Pais - Comunidad rural de Cali' },
  { num: 7, url: 'https://revistas.udem.edu.co/index.php/opinion/article/view/1720', title: 'Revista Universidad de Medellin' },
  { num: 8, url: 'http://www.scielo.org.co/scielo.php?script=sci_abstract&pid=S1692-25302016000100007', title: 'Scielo - Minimo vital de agua' },
  { num: 9, url: 'https://www.corteconstitucional.gov.co/relatoria/2011/t-740-11.htm', title: 'Corte Constitucional - Sentencia T-740/11' },
  { num: 10, url: 'https://www.defensoria.gov.co/documents/20123/1311006/defensorial57.pdf', title: 'Defensoria del Pueblo' },
  { num: 11, url: 'https://normas.cra.gov.co/gestor/docs/concepto_superservicios_0000077_2023.htm', title: 'CRA - Concepto Superservicios' },
  { num: 12, url: 'https://www.car.gov.co/vercontenido/1162', title: 'CAR Cundinamarca - Concesiones' },
  { num: 13, url: 'https://www.metropol.gov.co/ambiental/recurso-hidrico/Paginas/instrumentos-de-comando-y-control/concesiones-de-agua.aspx', title: 'Area Metropolitana - Concesiones de agua' },
  { num: 14, url: 'https://www.car.gov.co/vercontenido/1168', title: 'CAR Cundinamarca - Permisos' },
  { num: 15, url: 'https://www.ambientebogota.gov.co/permiso-de-vertimientos', title: 'Secretaria de Ambiente Bogota - Vertimientos' },
  { num: 16, url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153', title: 'Funcion Publica - Decreto 1076' },
  { num: 17, url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf', title: 'Minambiente - Decreto 1076 PDF' },
  { num: 18, url: 'https://www.icesi.edu.co/wp-content/uploads/2025/04/acceso_equitativo_agua_potable_alcantarillado.pdf', title: 'Universidad ICESI - Acceso equitativo' },
  { num: 19, url: 'https://www.instagram.com/p/DJmWWU8vMB4/', title: 'Instagram - Movilizacion social' },
  { num: 20, url: 'https://www.tiktok.com/@cwmasnoticias/video/7564241848248634632', title: 'TikTok - Crisis hidrica' },
  { num: 21, url: 'https://www.instagram.com/reel/DWMyvzIkYgd/', title: 'Instagram - Alerta deficit' },
  { num: 22, url: 'http://www.indepaz.org.co/wp-content/uploads/2020/05/derecho_al_agua.pdf', title: 'Indepaz - Derecho al agua' },
  { num: 23, url: 'https://ojs.urepublicana.edu.co/index.php/revistarepublicana/article/view/144/117', title: 'Universidad Republicana' },
  { num: 24, url: 'https://bdigital.uexternado.edu.co/entities/publication/76d2f35a-e2cf-4f8e-8fea-827bfda8c7e0', title: 'U. Externado de Colombia' },
  { num: 25, url: 'https://www.instagram.com/p/DY2_HWUFWgd/', title: 'Instagram - Derecho al agua' },
  { num: 26, url: 'https://revistas.uexternado.edu.co/index.php/derest/article/view/4341/5069', title: 'Revista U. Externado' },
  { num: 27, url: 'https://www.corteconstitucional.gov.co/relatoria/2025/t-161-25.htm', title: 'Corte Constitucional - T-161/25' },
  { num: 28, url: 'https://www.corteconstitucional.gov.co/relatoria/2023/t-115-23.htm', title: 'Corte Constitucional - T-115/23' },
];

export default function Referencias() {
  return (
    <section id="referencias" className="py-24 bg-[#E8F5E9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#1B4D3E] font-semibold text-sm tracking-wider uppercase mb-3">
            Fuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-[#1B4D3E]">Referencias</span>
          </h2>
          <div className="w-24 h-1 bg-[#9ACD32] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fuentes consultadas para la elaboracion de este portal informativo.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-[#1B4D3E]" />
            <span className="font-bold text-gray-900">28 referencias documentadas</span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 max-h-[600px] overflow-y-auto pr-2">
            {referencias.map((ref) => (
              <a
                key={ref.num}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="w-6 h-6 bg-[#E8F5E9] text-[#1B4D3E] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                  {ref.num}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 text-sm truncate group-hover:text-[#1B4D3E] transition-colors">
                    {ref.title}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
