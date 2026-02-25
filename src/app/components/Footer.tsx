import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { images } from '../../assets';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Your trusted partner for professional electrical services. Specializing in residential and commercial electrical work, EV charger installations, remodeling, and low voltage solutions.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <a href="tel:951-953-0658" className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm sm:text-base">(951) 953-0658</span>
              </a>
              <a href="mailto:jon@radelectric.info" className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors touch-manipulation py-1">
                <Mail className="w-4 h-4" />
                <span className="text-sm sm:text-base">jon@radelectric.info</span>
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/radelectric.info?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity touch-manipulation"
                aria-label="Follow us on Instagram"
              >
                <img src={images.instagram} alt="Instagram" className="w-9 h-9 sm:w-8 sm:h-8" />
              </a>
              <a 
                href="https://vt.tiktok.com/ZSmPbCFFU/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity touch-manipulation"
                aria-label="Follow us on TikTok"
              >
                <img src={images.tiktok} alt="TikTok" className="w-9 h-9 sm:w-8 sm:h-8" />
              </a>
              <a 
                href="https://maps.app.goo.gl/QL3DLrVwavVHWkzj9?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors touch-manipulation"
                aria-label="Find us on Google Maps"
              >
                <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E5C158] text-sm sm:text-base">Electrical Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/services/electrical-installation-repair" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Electrical Repair</Link></li>
              <li><Link to="/services/remodeling-renovations" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Remodeling</Link></li>
              <li><Link to="/services/ev-charger-installation" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">EV Chargers</Link></li>
              <li><Link to="/services/residential-services" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Residential</Link></li>
              <li><Link to="/services/commercial-services" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Commercial</Link></li>
              <li><Link to="/services/adu-electrical-services" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">ADU Services</Link></li>
              <li><Link to="/services/insurance-electrical-work" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Insurance Work</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E5C158] text-sm sm:text-base">Low Voltage Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/services/security-systems" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Security Systems</Link></li>
              <li><Link to="/services/network-data-cabling" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Network Cabling</Link></li>
              <li><Link to="/services/audio-video-installation" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Audio/Video</Link></li>
            </ul>
            <h3 className="font-semibold mb-4 mt-6 text-[#E5C158] text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Contact</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors touch-manipulation inline-block py-1">Get a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Rad Electric Co. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <span>Licensed & Insured</span>
              <span>Open 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}