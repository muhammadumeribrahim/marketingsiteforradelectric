import { Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-black to-[#111111] text-white">
      {/* Background image - kept brighter */}
      <div className="absolute inset-0 opacity-100">
        <img 
          src="/images/heroes/main-hero.jpg"
          alt="Work Van"
          className="w-full h-full object-cover"
        />
        {/* Lighter overall gradient to keep image vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-36">
        <div className="max-w-3xl">
          {/* Dark backdrop box behind text content only */}
          <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-black/40 backdrop-blur-sm rounded-r-3xl -ml-4 sm:-ml-6 lg:-ml-8"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.8)]" />
              <span className="text-[#D4AF37] text-sm sm:text-base lg:text-lg font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Professional Electrical & Data Solutions
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,1)] leading-tight"
            >
              Expert Electrical Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
            >
              Residential • Commercial • Repair • Remodeling • EV Charger Installation • Low Voltage Data
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-all shadow-2xl hover:shadow-[#D4AF37]/50 text-center touch-manipulation"
              >
                Request a Quote
              </motion.a>
              <motion.a
                href="tel:951-953-0658"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-colors border-2 border-white/50 shadow-2xl text-center touch-manipulation"
              >
                Call Now: (951) 953-0658
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}