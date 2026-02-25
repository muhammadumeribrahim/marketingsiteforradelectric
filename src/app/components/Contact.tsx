import { Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

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
      
      // ✅ FIXED: Properly encode form data for Netlify
      const formDataToSend = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
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
                  <a href="mailto:jon@radelectric.info" className="text-[#D4AF37] hover:text-[#E5C158] touch-manipulation inline-block py-1 text-sm sm:text-base">jon@radelectric.info</a>
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
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 font-semibold text-sm sm:text-base">Thank you for your request!</p>
                    <p className="text-green-300 text-xs sm:text-sm mt-1">We'll contact you within 24 hours at {formData.email || 'the email provided'}.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-semibold text-sm sm:text-base">Oops! Something went wrong.</p>
                    <p className="text-red-300 text-xs sm:text-sm mt-1">Please try again or call us directly at (951) 953-0658.</p>
                  </div>
                </div>
              )}
              
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
    </section>
  );
}