import { Phone, Mail, Menu, X, Star, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { LogoCompact } from './Logo';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-900">
      {/* Top Contact Bar */}
      <div className="bg-[#111111] text-white py-3 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:951-953-0658" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Phone className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">(951) 953-0658</span>
              </a>
              <a href="mailto:jon@radelectricsolutions.com" className="hidden md:flex items-center gap-2 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Mail className="w-4 h-4" />
                <span className="text-xs sm:text-sm">jon@radelectricsolutions.com</span>
              </a>
            </div>

            {/* Right Side - Rating, Reviews & Social - ALL 47PX */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* 5.0 Rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#D4AF37]">5.0</span>
              </div>

              {/* Google Reviews Link */}
              <a 
                href="https://www.google.com/search?q=Rad+Electric+Co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1 text-xs sm:text-sm text-gray-300 hover:text-[#D4AF37] transition-colors touch-manipulation py-1"
              >
                <span>See Our Reviews →</span>
              </a>

              {/* ALL 3 ICONS - SAME SIZE 47PX */}
              <div className="flex items-center gap-3">
                {/* Google Maps Pin - 47PX */}
                <a 
                  href="https://maps.app.goo.gl/QL3DLrVwavVHWkzj9?g_st=ic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all touch-manipulation"
                  aria-label="Find us on Google Maps"
                >
                  <div className="w-[47px] h-[47px] rounded-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] flex items-center justify-center">
                    <MapPin className="w-[24px] h-[24px] text-black" />
                  </div>
                </a>

                {/* Instagram - 47PX */}
                <a 
                  href="https://www.instagram.com/radelectric.info?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all touch-manipulation"
                  aria-label="Follow us on Instagram"
                >
                  <img 
                    src="/images/instagram-icon.png" 
                    alt="Instagram" 
                    className="w-[47px] h-[47px]" 
                  />
                </a>

                {/* TikTok - 47PX */}
                <a 
                  href="https://vt.tiktok.com/ZSmPbCFFU/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all touch-manipulation"
                  aria-label="Follow us on TikTok"
                >
                  <img 
                    src="/images/tiktok-icon.png" 
                    alt="TikTok" 
                    className="w-[47px] h-[47px]" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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

              {/* Mobile Social Icons - ALL 47PX */}
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-800">
                <a 
                  href="https://maps.app.goo.gl/QL3DLrVwavVHWkzj9?g_st=ic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all touch-manipulation"
                  aria-label="Find us on Google Maps"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-[47px] h-[47px] rounded-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] flex items-center justify-center">
                    <MapPin className="w-[24px] h-[24px] text-black" />
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/radelectric.info?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img 
                    src="/images/instagram-icon.png" 
                    alt="Instagram" 
                    className="w-[47px] h-[47px]" 
                  />
                </a>
                <a 
                  href="https://vt.tiktok.com/ZSmPbCFFU/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img 
                    src="/images/tiktok-icon.png" 
                    alt="TikTok" 
                    className="w-[47px] h-[47px]" 
                  />
                </a>
              </div>

              {/* Mobile Google Reviews Link */}
              <a 
                href="https://www.google.com/search?q=Rad+Electric+Co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center text-gray-400 hover:text-[#D4AF37] transition-colors py-3 text-sm touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                ⭐ See Our 5.0 Rating on Google →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}