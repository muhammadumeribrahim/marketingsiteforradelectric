import { Mail, Clock, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok || response.status === 200) {
        setSubmitStatus('success');
        // Clear form fields
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        // Auto-dismiss success message after 8 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
        // Auto-dismiss error after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:jon@radelectricsolutions.com" className="text-[#D4AF37] hover:text-[#E5C158] touch-manipulation inline-block py-1 text-sm sm:text-base">jon@radelectricsolutions.com</a>
                  <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-300 font-semibold">Open 24 Hours</p>
                  <p className="text-sm text-gray-400 mt-1">Available anytime for emergency service</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 sm:p-6 bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-lg">
              <h4 className="font-semibold text-white mb-2">Emergency Service</h4>
              <p className="text-gray-400 mb-3 text-sm sm:text-base">Need immediate assistance? We're available 24/7 for emergency electrical issues.</p>
              <a href="tel:951-953-0658" className="text-[#D4AF37] font-semibold hover:text-[#E5C158] touch-manipulation inline-block py-1 text-sm sm:text-base">Call Now: (951) 953-0658</a>
            </div>
          </div>

          <div>
            <form 
              onSubmit={handleSubmit} 
              className="bg-black rounded-2xl p-6 sm:p-8 border border-gray-800"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Request a Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white touch-manipulation text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white touch-manipulation text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white touch-manipulation text-base"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white touch-manipulation text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Repair</option>
                    <option value="remodeling">Remodeling/Renovation</option>
                    <option value="ev-charger">EV Charger Installation</option>
                    <option value="adu">ADU Electrical Services</option>
                    <option value="insurance">Insurance Electrical Work</option>
                    <option value="residential">Residential Service</option>
                    <option value="commercial">Commercial Service</option>
                    <option value="security">Security Systems</option>
                    <option value="network">Network/Data Cabling</option>
                    <option value="audio-video">Audio/Video Installation</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-white touch-manipulation text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black font-semibold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation text-base"
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success/Error Popup Modal */}
      <AnimatePresence>
        {(submitStatus === 'success' || submitStatus === 'error') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSubmitStatus('idle')}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className={`relative max-w-md w-full rounded-2xl p-8 shadow-2xl ${
                submitStatus === 'success' 
                  ? 'bg-gradient-to-br from-[#E5C158] to-[#B8941F]' 
                  : 'bg-gradient-to-br from-red-600 to-red-800'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSubmitStatus('idle')}
                className="absolute top-4 right-4 text-black/70 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                {submitStatus === 'success' ? (
                  <>
                    <div className="mx-auto w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">Thank You!</h3>
                    <p className="text-black/90 text-lg font-semibold mb-2">
                      We received your request
                    </p>
                    <p className="text-black/80 text-base">
                      We will reach out within 24 hours
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <AlertCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Oops!</h3>
                    <p className="text-white/90 text-lg mb-2">
                      Something went wrong
                    </p>
                    <p className="text-white/80 text-sm">
                      Please call us at{' '}
                      <a href="tel:951-953-0658" className="font-bold underline">
                        (951) 953-0658
                      </a>
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}