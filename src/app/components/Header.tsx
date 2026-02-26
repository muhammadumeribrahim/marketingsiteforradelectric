import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { LogoCompact } from './Logo';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Helper function to handle navigation with scroll
  const handleNavigation = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    
    if (path === '/' && hash) {
      // If we're navigating to homepage with a hash
      if (location.pathname === '/') {
        // Already on homepage, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage, then scroll
        window.location.href = `/${hash}`;
      }
    }
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-900">
      <div className="bg-[#111111] text-white py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:951-953-0658" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Phone className="w-4 h-4" />
                <span className="text-xs sm:text-sm">(951) 953-0658</span>
              </a>
              <a href="mailto:jon@radelectricsolutions.com" className="hidden sm:flex items-center gap-2 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Mail className="w-4 h-4" />
                <span className="text-xs sm:text-sm">jon@radelectricsolutions.com</span>
              </a>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#D4AF37]">★★★★★</span> <span className="text-xs sm:text-sm">5.0 Rating</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="touch-manipulation">
            <LogoCompact />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {!isHomePage ? (
              <>
                <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Home</Link>
                <Link to="/#services" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Services</Link>
                <Link to="/gallery" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Our Work</Link>
                <Link to="/#contact" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Contact</Link>
              </>
            ) : (
              <>
                <a href="#services" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Services</a>
                <Link to="/gallery" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Our Work</Link>
                <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">About</a>
                <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors text-sm lg:text-base">Contact</a>
              </>
            )}
            <a href={!isHomePage ? "/#contact" : "#contact"} className="bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black px-4 lg:px-6 py-2 rounded-md font-semibold transition-all text-sm lg:text-base whitespace-nowrap">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#D4AF37] transition-colors touch-manipulation p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-1">
              {!isHomePage ? (
                <>
                  <Link 
                    to="/" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/#services" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Work
                  </Link>
                  <Link 
                    to="/#contact" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <a 
                    href="#services" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <Link 
                    to="/gallery" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Work
                  </Link>
                  <a 
                    href="#about" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-colors py-3 px-4 rounded-lg touch-manipulation text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </>
              )}
              <a 
                href={!isHomePage ? "/#contact" : "#contact"} 
                className="bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black px-6 py-4 rounded-lg font-semibold transition-all text-center mt-2 touch-manipulation text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}