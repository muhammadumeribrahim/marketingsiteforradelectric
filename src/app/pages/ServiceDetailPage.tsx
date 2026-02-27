import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Phone, Mail, ChevronDown, ChevronUp, CheckCircle, AlertCircle, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { servicesData } from '../data/servicesData';

export function ServiceDetailPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    zipCode: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const service = servicesData.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Service Not Found</h1>
          <Link to="/" className="text-[#D4AF37] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          zipCode: '',
          message: ''
        });
        // Auto-dismiss after 8 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const Icon = service.icon;

  // Get accordion items based on service
  const accordionItems = getAccordionItems(service.slug);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-[#E5C158] to-[#B8941F] text-black py-8 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              {service.title.toUpperCase()}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Service Details */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {getServiceHeading(service.slug)}
              </h2>

              {/* Main Service Image */}
              <div className="mb-8">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full rounded-2xl shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {getServiceDescription(service.slug)}
              </p>

              {/* Bullet List */}
              {service.fullDescription && (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {getBulletListHeading(service.slug)}
                  </h3>
                  <ul className="space-y-3">
                    {service.fullDescription.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#D4AF37] text-xl mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Description */}
              <p className="text-gray-300 leading-relaxed mb-10">
                {getAdditionalDescription(service.slug)}
              </p>

              {/* Accordion Section */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {getAccordionHeading(service.slug)}
                </h2>
                
                <div className="space-y-4">
                  {accordionItems.map((item, index) => (
                    <div key={index} className="border-2 border-[#D4AF37] rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                        className="w-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black px-6 py-4 flex items-center justify-between transition-colors"
                      >
                        <span className="font-bold text-left">{item.title}</span>
                        {expandedAccordion === index ? (
                          <ChevronUp className="w-6 h-6 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 flex-shrink-0" />
                        )}
                      </button>
                      
                      {expandedAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#111111] px-6 py-4"
                        >
                          <p className="text-gray-300 leading-relaxed">{item.content}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111111] rounded-lg shadow-lg border border-gray-800 p-8 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                We look forward to hearing from you and helping with all your electrical needs. 
                Rad Electric Co is your trusted local electrician and one source for Residential 
                and Commercial Electrical Services, Repairs, and Installations.
              </p>

              <p className="text-gray-400 mb-2">Call Us Anytime Day or Night</p>
              <a 
                href="tel:951-953-0658"
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] to-[#B8941F] mb-8 block hover:opacity-80 transition-opacity"
              >
                (951) 953-0658
              </a>

              {/* Contact Form */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-white mb-4">Get a FREE Estimate</h4>
                
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
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

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="City/Town"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none text-white placeholder-gray-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black font-bold py-4 rounded transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Submit Your Request'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#E5C158] to-[#B8941F] text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Electrical Services you can Trust
              </h2>
              <p className="text-lg font-semibold mb-2">No job is too big, or too small</p>
            </div>
            <div className="text-left md:text-right">
              <a 
                href="tel:951-953-0658"
                className="inline-block bg-black hover:bg-[#111111] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-xl"
              >
                CONTACT US TODAY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg mb-2">Our Service Area</p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Proudly Serving Riverside County
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Primary Service Area</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Riverside</li>
                <li>• Menifee</li>
                <li>• Moreno Valley</li>
                <li>• Temecula</li>
                <li>• Corning</li>
                <li>• Murrieta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Extended Service Area</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Perris</li>
                <li>• Lake Elsinore</li>
                <li>• Hemet</li>
                <li>• San Jacinto</li>
                <li>• Corona</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Additional Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Eastvale</li>
                <li>• Jurupa Valley</li>
                <li>• Wildomar</li>
                <li>• Canyon Lake</li>
                <li>• And surrounding areas</li>
              </ul>
            </div>
          </div>

          {/* Extended Service Counties */}
          <div className="text-center pt-8 border-t border-gray-800">
            <div className="inline-flex items-center gap-2 text-gray-400 mb-3">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-semibold">Extended Service Areas</span>
            </div>
            <p className="text-gray-300 text-lg">
              Also serving <span className="text-[#D4AF37] font-semibold">Orange County</span>, <span className="text-[#D4AF37] font-semibold">Los Angeles County</span>, and <span className="text-[#D4AF37] font-semibold">San Bernardino County</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Call us to confirm service availability in your area
            </p>
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
    </div>
  );
}

// Helper functions for service-specific content
function getServiceHeading(slug: string): string {
  const headings: Record<string, string> = {
    'electrical-installation-repair': 'Professional Electrical Installation & Repair Services',
    'remodeling-renovations': 'Expert Electrical Remodeling & Renovation Services',
    'ev-charger-installation': 'EV Charger Installation For Your Home Or Business',
    'residential-services': 'Complete Residential Electrical Services',
    'commercial-services': 'Professional Commercial Electrical Solutions',
    'adu-electrical-services': 'Complete ADU Electrical Installation Services',
    'insurance-electrical-work': 'Insurance Electrical Restoration Services',
    'security-systems': 'Professional Security System Installation',
    'network-data-cabling': 'Network & Data Cabling Solutions',
    'audio-video-installation': 'Professional Audio/Video Installation Services'
  };
  return headings[slug] || '';
}

function getServiceDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'electrical-installation-repair': 'Whether you need a simple outlet repair or a complete electrical panel upgrade, Rad Electric Co delivers safe, reliable electrical services for homes and businesses throughout Riverside County. Our licensed electricians are experienced in all aspects of electrical work, from troubleshooting problems to installing new circuits and upgrading outdated systems.',
    'remodeling-renovations': 'Planning a kitchen remodel, bathroom upgrade, or whole-home renovation? Proper electrical planning is essential for a successful project. Rad Electric Co works with homeowners and contractors to design and install electrical systems that meet modern demands while ensuring safety and code compliance.',
    'ev-charger-installation': 'Electric vehicles are up to 80% more efficient than traditional vehicles. Charging at home is convenient, cost-effective, and adds value to your property. Our certified electricians install all major brands of EV chargers including Tesla Wall Connectors, ChargePoint, JuiceBox, and more.',
    'residential-services': 'Your home electrical system works hard every day to power your modern lifestyle. From lighting and outlets to major appliances and smart home devices, Rad Electric Co provides comprehensive residential electrical services to keep your home safe, efficient, and up to code.',
    'commercial-services': 'Business operations depend on reliable electrical systems. Rad Electric Co provides comprehensive commercial electrical services for offices, retail stores, warehouses, and industrial facilities. We understand that downtime means lost revenue, so we work efficiently to minimize disruption to your business.',
    'adu-electrical-services': 'Accessory Dwelling Units (ADUs) are a great way to add value and living space to your property. Whether you\'re building a new detached ADU or converting a garage, proper electrical installation is critical. Rad Electric Co specializes in complete ADU electrical work from subpanel installation to final inspections.',
    'insurance-electrical-work': 'Fire, water damage, storms, and accidents can cause significant electrical damage to your property. Rad Electric Co works directly with homeowners and insurance companies to provide comprehensive electrical restoration services. We document all damage, provide detailed estimates, and restore your electrical system safely and to code.',
    'security-systems': 'Protect your property with professionally installed security cameras and surveillance systems. Rad Electric Co installs high-definition IP cameras, network video recorders, and complete security solutions for homes and businesses throughout Riverside County.',
    'network-data-cabling': 'Reliable network infrastructure is essential for modern homes and businesses. Rad Electric Co provides professional network cabling services including Cat5e, Cat6, and fiber optic installations. Whether you need a simple home network or complex commercial structured cabling, we deliver clean, professional installations.',
    'audio-video-installation': 'Transform your home or business with professionally installed audio and video systems. From home theaters to multi-room audio and commercial conference rooms, Rad Electric Co delivers premium AV installations with clean wiring and expert configuration.'
  };
  return descriptions[slug] || '';
}

function getBulletListHeading(slug: string): string {
  const headings: Record<string, string> = {
    'electrical-installation-repair': 'Our Electrical Services Include:',
    'remodeling-renovations': 'Remodeling Electrical Services:',
    'ev-charger-installation': 'EV Charger Installation Services:',
    'residential-services': 'Residential Electrical Services:',
    'commercial-services': 'Commercial Electrical Services:',
    'adu-electrical-services': 'ADU Electrical Services Include:',
    'insurance-electrical-work': 'Insurance Electrical Services:',
    'security-systems': 'Security System Services:',
    'network-data-cabling': 'Network Cabling Services:',
    'audio-video-installation': 'Audio/Video Services:'
  };
  return headings[slug] || 'Our Services Include:';
}

function getAdditionalDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'electrical-installation-repair': 'Trust the licensed electricians at Rad Electric Co to get the job done right. From modern interior lighting that enhances your living space to durable exterior solutions that improve safety and curb appeal, we provide expert guidance and quality installation. Contact us online or call (951) 953-0658 today to schedule your free electrical estimate and discover how we can brighten your space with safe, efficient solutions.',
    'remodeling-renovations': 'When it\'s time to upgrade your home or business, trust Rad Electric Co to handle all your electrical needs. From planning and design to installation and final inspection, we ensure your electrical system supports your vision and meets all safety codes.',
    'ev-charger-installation': 'When it\'s time to install a new EV charger or upgrade the fixtures in your home or business, trust the licensed electricians at Rad Electric Co to get the job done right. Contact us online or call (951) 953-0658 today to schedule your free EV charger estimate.',
    'residential-services': 'Don\'t wait for electrical problems to become emergencies. Regular inspections and proactive upgrades can prevent costly repairs and dangerous situations. Contact Rad Electric Co today for all your residential electrical needs.',
    'commercial-services': 'Whether you need new construction electrical, tenant improvements, or ongoing maintenance, Rad Electric Co has the expertise and resources to handle commercial projects of any size. Contact us today to discuss your project.',
    'adu-electrical-services': 'Building an ADU is a significant investment. Trust Rad Electric Co to handle the electrical work professionally and safely. We coordinate with your contractor and inspector to ensure smooth approvals and quality results.',
    'insurance-electrical-work': 'Dealing with property damage is stressful. Let Rad Electric Co handle the electrical restoration professionally and efficiently. We work with your insurance company to ensure proper coverage and quality repairs.',
    'security-systems': 'Feel secure knowing your property is monitored 24/7 with professionally installed security cameras. Contact Rad Electric Co today to discuss your security needs and get a free estimate.',
    'network-data-cabling': 'Whether you need a single Ethernet drop or complete structured cabling for your business, Rad Electric Co delivers reliable network infrastructure. Contact us today to discuss your networking needs.',
    'audio-video-installation': 'Experience entertainment the way it was meant to be experienced. Contact Rad Electric Co today to design and install your custom audio/video system.'
  };
  return descriptions[slug] || '';
}

function getAccordionHeading(slug: string): string {
  const headings: Record<string, string> = {
    'electrical-installation-repair': 'We Offer Outstanding Service in The Installation of The Following Types of Electrical Work',
    'remodeling-renovations': 'Types of Remodeling Electrical Services We Provide',
    'ev-charger-installation': 'EV Charger Types and Options',
    'residential-services': 'Residential Electrical Services We Offer',
    'commercial-services': 'Commercial Electrical Services We Provide',
    'adu-electrical-services': 'ADU Electrical Installation Process',
    'insurance-electrical-work': 'Insurance Electrical Restoration Process',
    'security-systems': 'Security System Types and Features',
    'network-data-cabling': 'Network Cabling Solutions',
    'audio-video-installation': 'Audio/Video Installation Services'
  };
  return headings[slug] || 'Services We Offer';
}

function getAccordionItems(slug: string): Array<{ title: string; content: string }> {
  const items: Record<string, Array<{ title: string; content: string }>> = {
    'electrical-installation-repair': [
      {
        title: 'Electrical Panel Upgrades',
        content: 'Upgrading your electrical panel is essential when adding new circuits, major appliances, or EV chargers. We replace outdated panels with modern, code-compliant systems that can handle today\'s electrical demands. Our electricians assess your current system, recommend the right size panel, and install it safely with proper permits and inspections.'
      },
      {
        title: 'Circuit Installation & Repair',
        content: 'From adding new circuits for appliances to repairing faulty breakers, we handle all circuit work professionally. We install dedicated circuits for high-demand equipment, GFCI protection in wet areas, and AFCI protection in living spaces as required by code.'
      },
      {
        title: 'Lighting Installation',
        content: 'Professional lighting installation enhances safety, functionality, and ambiance. We install recessed lighting, chandeliers, outdoor lighting, landscape lighting, and LED upgrades. Our electricians ensure proper fixture support, correct wiring, and beautiful results.'
      },
      {
        title: 'Outlet & Switch Installation',
        content: 'Whether you need additional outlets, USB charging outlets, or smart switches, we install them safely and conveniently. We also replace outdated two-prong outlets with modern grounded outlets and add GFCI protection where required.'
      }
    ],
    'remodeling-renovations': [
      {
        title: 'Kitchen Electrical Remodeling',
        content: 'Modern kitchens require substantial electrical capacity for appliances, lighting, and outlets. We install dedicated circuits for refrigerators, ranges, microwaves, and dishwashers. Under-cabinet lighting, pendant lights, and island outlets are installed with attention to design and functionality.'
      },
      {
        title: 'Bathroom Electrical Upgrades',
        content: 'Bathroom remodels require GFCI-protected outlets, proper ventilation fan wiring, and code-compliant lighting. We install outlets at the correct height and distance from water sources, wire vanity lighting, and add heated floor controls if desired.'
      },
      {
        title: 'Whole-Home Rewiring',
        content: 'Older homes often have outdated wiring that can\'t handle modern electrical demands. We provide complete rewiring services, replacing old knob-and-tube or aluminum wiring with modern copper wiring, new panels, and updated outlets and switches.'
      },
      {
        title: 'Smart Home Integration',
        content: 'We integrate smart home technology during remodels, including smart switches, automated lighting, voice control systems, and whole-home automation hubs. All wiring is done to support reliable smart home operation.'
      }
    ],
    'ev-charger-installation': [
      {
        title: 'Level 2 EV Chargers (240V)',
        content: 'Level 2 chargers are the most popular choice for home EV charging, providing up to 40 miles of range per hour. We install all major brands including Tesla Wall Connector, ChargePoint Home Flex, JuiceBox, Grizzl-E, and more. Installation includes a dedicated 240V circuit, proper mounting, and activation.'
      },
      {
        title: 'Tesla Wall Connector',
        content: 'The Tesla Wall Connector is designed specifically for Tesla vehicles but can charge any EV with an adapter. We install Tesla chargers with optimal placement for your garage or driveway, ensuring fast, reliable charging every time.'
      },
      {
        title: 'Commercial EV Charging Stations',
        content: 'Businesses can attract EV drivers and support employees with commercial charging stations. We install multi-port chargers, load management systems, and networked charging solutions for property managers and business owners.'
      },
      {
        title: 'Electrical Panel Upgrades for EV Charging',
        content: 'Many homes need panel upgrades to support EV chargers. We assess your current electrical capacity and upgrade panels as needed to safely add a 40-60 amp circuit for your EV charger without overloading your system.'
      }
    ],
    'residential-services': [
      {
        title: 'Whole-House Electrical Inspections',
        content: 'Regular electrical inspections identify potential hazards before they become emergencies. We inspect panels, wiring, outlets, and fixtures to ensure everything is safe and up to code. Inspections are recommended when buying a home, after major storms, or in homes over 25 years old.'
      },
      {
        title: 'Generator Installation',
        content: 'Standby generators provide automatic backup power during outages. We install natural gas and propane generators, including transfer switches, proper wiring, and permits. Portable generator connections are also available for smaller homes.'
      },
      {
        title: 'Surge Protection',
        content: 'Whole-house surge protectors safeguard expensive electronics and appliances from voltage spikes. Installed at your electrical panel, they provide superior protection compared to plug-in surge strips.'
      },
      {
        title: 'Smoke Detector & Carbon Monoxide Installation',
        content: 'Properly installed smoke and CO detectors save lives. We install hardwired detectors with battery backup in all required locations per code, ensuring your family is protected.'
      }
    ],
    'commercial-services': [
      {
        title: 'Office Electrical Installation',
        content: 'Modern offices require extensive electrical infrastructure for computers, servers, lighting, and HVAC. We install power distribution, dedicated circuits for equipment, emergency lighting, and energy-efficient LED lighting systems.'
      },
      {
        title: 'Retail Store Electrical',
        content: 'Retail spaces need attractive lighting, sufficient power for POS systems, and reliable electrical service. We handle new construction, tenant improvements, and lighting retrofits for retail environments.'
      },
      {
        title: 'Warehouse & Industrial Electrical',
        content: 'Industrial facilities require heavy-duty electrical systems including three-phase power, high-voltage equipment, and specialized lighting. We install and maintain electrical systems for warehouses, manufacturing, and industrial operations.'
      },
      {
        title: 'Emergency Lighting & Exit Signs',
        content: 'Commercial buildings must have code-compliant emergency lighting and illuminated exit signs. We install battery-backup emergency lights and LED exit signs that meet all building codes.'
      }
    ],
    'adu-electrical-services': [
      {
        title: 'Subpanel Installation',
        content: 'Every ADU needs its own subpanel with appropriately sized feeder from the main house. We size and install subpanels that meet code requirements and provide sufficient capacity for your ADU\'s electrical needs.'
      },
      {
        title: 'Rough Electrical Wiring',
        content: 'Rough wiring includes all the electrical work done before walls are closed up. We install outlet and switch boxes, run wiring for lighting and appliances, and prepare for final electrical connections. All work is inspected before drywall.'
      },
      {
        title: 'Finish Electrical Work',
        content: 'After drywall is complete, we return to install outlets, switches, light fixtures, and appliances. We ensure everything is properly connected, grounded, and tested before the final inspection.'
      },
      {
        title: 'Final Inspection & Corrections',
        content: 'We coordinate with building inspectors for final electrical approval. If any corrections are needed, we address them promptly to ensure your ADU passes inspection and receives a certificate of occupancy.'
      }
    ],
    'insurance-electrical-work': [
      {
        title: 'Electrical Damage Assessment',
        content: 'After fire, water, or storm damage, we provide comprehensive electrical inspections and detailed damage reports. We document all affected wiring, panels, fixtures, and equipment for your insurance claim.'
      },
      {
        title: 'Emergency Electrical Service',
        content: 'After a disaster, you may need emergency electrical service to make your property safe. We provide temporary power solutions, disconnect damaged circuits, and secure electrical hazards immediately.'
      },
      {
        title: 'Complete Electrical Restoration',
        content: 'We replace damaged wiring, panels, outlets, and fixtures to restore your electrical system to pre-loss condition or better. All work is done to current code standards and fully documented for your insurance company.'
      },
      {
        title: 'Working with Insurance Adjusters',
        content: 'We work directly with your insurance adjuster to ensure all necessary electrical repairs are covered. We provide detailed estimates, documentation, and progress updates throughout the restoration process.'
      }
    ],
    'security-systems': [
      {
        title: 'IP Security Camera Systems',
        content: 'Modern IP cameras provide high-definition video, night vision, and remote viewing via smartphone. We install indoor and outdoor cameras with professional mounting, proper network configuration, and reliable recording solutions.'
      },
      {
        title: 'Network Video Recorders (NVR)',
        content: 'NVRs store and manage footage from IP cameras. We install NVR systems with sufficient storage for your needs, configure recording schedules, and set up remote access so you can view footage from anywhere.'
      },
      {
        title: 'Doorbell Cameras & Intercoms',
        content: 'Video doorbells let you see and speak with visitors from your phone. We install Ring, Nest, and other brands with proper power, network connection, and optimal placement for clear video.'
      },
      {
        title: 'Commercial Security Solutions',
        content: 'Businesses need robust security systems with multiple cameras, access control, and alarm integration. We design and install commercial security systems tailored to your property and security goals.'
      }
    ],
    'network-data-cabling': [
      {
        title: 'Cat6 Ethernet Cabling',
        content: 'Cat6 cabling supports gigabit speeds and is ideal for home and business networks. We install Cat6 drops to workstations, access points, cameras, and network equipment with professional termination and testing.'
      },
      {
        title: 'Fiber Optic Installation',
        content: 'Fiber optic cabling provides the fastest data speeds for demanding applications. We install single-mode and multi-mode fiber for backbone connections, long runs, and high-bandwidth needs.'
      },
      {
        title: 'Network Rack & Patch Panel Setup',
        content: 'Organized network infrastructure starts with proper rack mounting and patch panels. We install wall-mount or floor racks, patch panels, network switches, and cable management for clean, professional installations.'
      },
      {
        title: 'Wi-Fi Access Point Installation',
        content: 'Extend wireless coverage throughout your property with professionally installed access points. We design Wi-Fi networks for optimal coverage, install ceiling or wall-mount access points, and configure seamless roaming.'
      }
    ],
    'audio-video-installation': [
      {
        title: 'Home Theater Installation',
        content: 'Experience cinematic entertainment at home with professional theater installation. We install projectors and screens or large-format TVs, surround sound speakers, receivers, and all necessary wiring with clean cable management.'
      },
      {
        title: 'Multi-Room Audio Systems',
        content: 'Enjoy music throughout your home with multi-room audio systems like Sonos. We install speakers, amplifiers, and controllers in every room you choose, with centralized control via app or wall panels.'
      },
      {
        title: 'TV Mounting & Cable Concealment',
        content: 'Professionally mounted TVs look great and save space. We mount TVs on walls or over fireplaces with proper anchoring, conceal all cables in walls, and connect all your devices neatly.'
      },
      {
        title: 'Outdoor Audio & Video',
        content: 'Extend entertainment to your patio, pool area, or backyard with outdoor speakers and weatherproof TVs. We install outdoor-rated equipment that withstands the elements while delivering great sound and picture.'
      }
    ]
  };
  
  return items[slug] || [];
}