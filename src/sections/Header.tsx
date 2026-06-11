import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Teoría', href: '#teoria' },
  { label: 'Mundial', href: '#mundial' },
  { label: 'Colombia', href: '#colombia' },
  { label: 'Concesiones', href: '#concesiones' },
  { label: 'Vertimientos', href: '#vertimientos' },
  { label: 'Decreto 1076', href: '#decreto' },
  { label: 'Valle del Cauca', href: '#valle' },
  { label: 'Cali', href: '#cali' },
  { label: 'Referencias', href: '#referencias' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-[#1B4D3E]/95 backdrop-blur-md' : 'bg-[#1B4D3E]'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleClick(e, '#inicio')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 text-[#1B4D3E]" />
            </div>
            <div className="text-white">
              <span className="font-extrabold text-lg tracking-tight block leading-tight">Derecho al Agua</span>
              <span className="text-[10px] opacity-80 tracking-wider uppercase">Portal Informativo</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white/90 hover:text-white text-xs font-semibold px-2.5 py-1.5 rounded-md hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#1B4D3E] border-t border-white/10">
            <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block text-white/90 hover:text-white text-sm font-medium px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
