import { useEffect, useRef } from 'react';
import { ChevronDown, BookOpen, Globe, FileCheck, Factory } from 'lucide-react';

const quickCards = [
  { icon: BookOpen, label: 'Teoría del Derecho al Agua', desc: 'Fundamentos y reconocimiento', href: '#teoria' },
  { icon: Globe, label: 'Situación en Colombia', desc: 'Marco constitucional y legal', href: '#colombia' },
  { icon: FileCheck, label: 'Concesiones de Agua', desc: 'Permisos y requisitos', href: '#concesiones' },
  { icon: Factory, label: 'Permisos de Vertimiento', desc: 'Regulación y trámites', href: '#vertimientos' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.setProperty('--scroll', `${scrollY * 0.4}px`);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{ transform: 'translateY(var(--scroll, 0))' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}hero-water.jpg`}
          alt="Rio del Valle del Cauca"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#9ACD32] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Ejercicio pedagógico para la cátedra Seminario de constitución, legislación y ética</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-shadow-lg mb-6 leading-tight">
          Derecho Humano
          <span className="block text-[#9ACD32]">al Agua</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Informacion, normativa y contexto sobre el agua como derecho fundamental.
          Desde la teoria internacional hasta la realidad del Valle del Cauca y Cali.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#teoria"
            onClick={(e) => handleClick(e, '#teoria')}
            className="bg-[#9ACD32] hover:bg-[#8BC52A] text-[#0D3328] font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Conocer Mas
          </a>
          <a
            href="#decreto"
            onClick={(e) => handleClick(e, '#decreto')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-lg border border-white/30 transition-all hover:scale-105"
          >
            Marco Normativo
          </a>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="relative z-20 w-full pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                onClick={(e) => handleClick(e, card.href)}
                className="group bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1B4D3E] transition-colors">
                  <card.icon className="w-7 h-7 text-[#1B4D3E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#1B4D3E] transition-colors">
                  {card.label}
                </h3>
                <p className="text-gray-500 text-xs">{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
