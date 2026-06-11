import { Droplets, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const linksInteres = [
  { label: 'MinAmbiente Colombia', href: 'https://www.minambiente.gov.co' },
  { label: 'CVC', href: 'https://www.cvc.gov.co' },
  { label: 'Corte Constitucional', href: 'https://www.corteconstitucional.gov.co' },
  { label: 'Funcion Publica', href: 'https://www.funcionpublica.gov.co' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D3328] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-[#1B4D3E]" />
              </div>
              <div>
                <span className="font-extrabold text-lg block leading-tight">Derecho al Agua</span>
                <span className="text-[10px] text-white/60 tracking-wider uppercase">Portal Informativo</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Portal informativo sobre el derecho humano al agua, su marco normativo y situacion 
              en Colombia, el Valle del Cauca y Cali.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#9ACD32]">Links de Interes</h4>
            <div className="space-y-2">
              {linksInteres.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#9ACD32]">Informacion Institucional</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Colombia - Valle del Cauca</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@derechoalagua.gov.co</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Linea nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/50 text-xs">
            &copy; 2026 Portal Derecho Humano al Agua. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-xs">
            Portal informativo con fines educativos. Inspirado en el estilo institucional CVC.
          </p>
        </div>
      </div>
    </footer>
  );
}
