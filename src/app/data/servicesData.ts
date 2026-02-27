import { Zap, Home, Wrench, Building2, Network, Shield, Video, Cable, HardHat, FileCheck, LucideIcon } from 'lucide-react';

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  image: string;
  galleryCategory?: string;
  fullDescription?: {
    intro: string;
    items: string[];
    closing: string;
  };
}

export const servicesData: ServiceDetail[] = [
  {
    icon: Zap,
    title: 'Electrical Installation & Repair',
    slug: 'electrical-installation-repair',
    description: 'Complete electrical services in Riverside County including panel upgrades, circuit installations, lighting, outlets, and emergency repairs.',
    image: '/images/services/electrical-repair.jpg',
    galleryCategory: 'electrical',
    fullDescription: {
      intro: 'From minor repairs to major installations, we handle all your electrical needs with precision and safety throughout Riverside County and Southern California.',
      items: [
        'Electrical panel upgrades and replacements',
        'Circuit breaker installation and repair',
        'Indoor and outdoor lighting installation',
        'Outlet and switch installation',
        'Ceiling fan installation',
        'Emergency electrical repairs',
        'Electrical troubleshooting and diagnostics',
        'Code compliance upgrades'
      ],
      closing: 'Our licensed electricians ensure every job is done right the first time, meeting all local codes and safety standards.'
    }
  },
  {
    icon: Wrench,
    title: 'Remodeling & Renovations',
    slug: 'remodeling-renovations',
    description: 'Expert electrical work for Riverside County home and commercial remodeling projects. Complete rewiring and modern upgrades.',
    image: '/images/services/remodeling.jpg',
    galleryCategory: 'residential',
    fullDescription: {
      intro: 'Transform your Riverside County space with professional electrical installations tailored to your remodeling project.',
      items: [
        'Kitchen and bathroom electrical remodeling',
        'Whole-home rewiring',
        'Recessed lighting and modern fixtures',
        'Under-cabinet lighting',
        'Electrical planning and design consultation',
        'Smart home integration',
        'Upgraded electrical capacity for new appliances',
        'Historic home electrical upgrades'
      ],
      closing: 'We work closely with contractors and homeowners throughout Southern California to ensure your electrical systems meet the demands of your newly renovated space.'
    }
  },
  {
    icon: Cable,
    title: 'EV Charger Installation',
    slug: 'ev-charger-installation',
    description: 'Professional electric vehicle charging station installation for Riverside County homes and businesses. Level 2 chargers, Tesla Wall Connectors and more.',
    image: '/images/services/ev-charger.jpg',
    galleryCategory: 'ev-chargers',
    fullDescription: {
      intro: 'Get ready for the electric vehicle revolution with professional EV charger installation throughout Riverside County and Southern California.',
      items: [
        'Level 2 EV charger installation (Tesla, ChargePoint, JuiceBox, etc.)',
        'Electrical panel assessment and upgrades',
        'Dedicated 240V circuit installation',
        'Indoor and outdoor charging stations',
        'Commercial EV charging solutions',
        'Load management systems',
        'Permits and inspections handled',
        'Wi-Fi enabled smart chargers'
      ],
      closing: 'Whether you drive a Tesla, Rivian, or any electric vehicle, we\'ll ensure you have a safe, efficient charging solution at home or work.'
    }
  },
  {
    icon: Home,
    title: 'Residential Services',
    slug: 'residential-services',
    description: 'All your Riverside County home electrical needs from new installations to troubleshooting and safety inspections.',
    image: '/images/services/residential.jpg',
    galleryCategory: 'residential',
    fullDescription: {
      intro: 'Keep your Riverside County home safe, efficient, and up to code with our comprehensive residential electrical services.',
      items: [
        'Whole-house electrical inspections',
        'Generator installation and service',
        'Smoke detector and carbon monoxide installation',
        'GFCI and AFCI protection upgrades',
        'Surge protection systems',
        'Landscape and outdoor lighting',
        'Pool and spa electrical',
        'Home automation and smart devices'
      ],
      closing: 'Your home is your most important investment. Trust us to keep it powered safely and reliably throughout Southern California.'
    }
  },
  {
    icon: Building2,
    title: 'Commercial Services',
    slug: 'commercial-services',
    description: 'Comprehensive commercial electrical solutions for Riverside County offices, retail spaces, and industrial facilities.',
    image: '/images/services/commercial.jpg',
    galleryCategory: 'commercial',
    fullDescription: {
      intro: 'Power your Riverside County business with reliable, code-compliant commercial electrical installations and maintenance.',
      items: [
        'Office and retail electrical installations',
        'Warehouse and industrial electrical',
        'Three-phase power systems',
        'Commercial lighting design and installation',
        'Emergency lighting and exit signs',
        'Electrical maintenance programs',
        'Tenant improvement electrical work',
        'Data center and server room power'
      ],
      closing: 'We understand that downtime costs money. Our commercial services are designed for efficiency, reliability, and minimal disruption to your Southern California business.'
    }
  },
  {
    icon: HardHat,
    title: 'ADU Electrical Services',
    slug: 'adu-electrical-services',
    description: 'Complete electrical installations for Riverside County Accessory Dwelling Units including subpanels, rough and finish wiring, lighting, and dedicated circuits.',
    image: '/images/services/adu-services.jpg',
    galleryCategory: 'residential',
    fullDescription: {
      intro: 'Building an ADU in Riverside County? We specialize in complete electrical installations for Accessory Dwelling Units, including:',
      items: [
        'New subpanels and feeder installations',
        'Full rough and finish wiring',
        'Recessed lighting and interior lighting',
        'Dedicated appliance circuits',
        'EV charger readiness',
        'Final inspection corrections',
        'Permit coordination',
        'Code compliance verification'
      ],
      closing: 'Whether you\'re building a detached ADU or converting a garage in Riverside County, we handle the electrical from start to finish — safely and up to code.'
    }
  },
  {
    icon: FileCheck,
    title: 'Insurance Electrical Work',
    slug: 'insurance-electrical-work',
    description: 'Electrical damage restoration in Riverside County from fire, water, storms, or accidents. We work with homeowners and insurance companies for complete repairs.',
    image: '/images/services/insurance-work.jpg',
    galleryCategory: 'electrical',
    fullDescription: {
      intro: 'If your Riverside County home has electrical damage due to fire, water, storms, or accidents, we work directly with homeowners and insurance companies to provide:',
      items: [
        'Comprehensive damage assessments',
        'Electrical repairs and rewiring',
        'Panel replacements',
        'Code upgrades required by insurance',
        'Detailed documentation for insurance claims',
        'Temporary power spider box installations',
        'Emergency electrical service',
        'Full restoration to pre-loss condition'
      ],
      closing: 'We help restore your Riverside County property safely and efficiently, working with your insurance adjuster to ensure proper coverage and quality repairs.'
    }
  },
  {
    icon: Shield,
    title: 'Security Systems',
    slug: 'security-systems',
    description: 'Professional installation of security cameras, access control systems, and alarm systems throughout Riverside County.',
    image: '/images/services/security-systems.jpg',
    galleryCategory: 'low-voltage',
    fullDescription: {
      intro: 'Protect your Riverside County property with professional security system installations.',
      items: [
        'IP and analog security camera systems',
        'Network video recorders (NVR) and DVR setup',
        'Motion detection and smart alerts',
        'Remote viewing via smartphone',
        'Doorbell cameras and intercoms',
        'Access control systems',
        'Alarm system integration',
        'Commercial-grade security solutions'
      ],
      closing: 'Feel secure knowing your Southern California property is monitored with the latest technology, professionally installed and configured.'
    }
  },
  {
    icon: Network,
    title: 'Network & Data Cabling',
    slug: 'network-data-cabling',
    description: 'Cat5e, Cat6, and fiber optic installation for reliable, high-speed data transmission in Riverside County homes and businesses.',
    image: '/images/services/network-cabling.jpg',
    galleryCategory: 'low-voltage',
    fullDescription: {
      intro: 'Build a reliable network infrastructure for your Riverside County property with professional data cabling services.',
      items: [
        'Cat5e and Cat6 Ethernet cabling',
        'Fiber optic installation',
        'Network rack and patch panel setup',
        'Wi-Fi access point installations',
        'Home and office network design',
        'Cable testing and certification',
        'Structured cabling systems',
        'Network upgrades and expansions'
      ],
      closing: 'Whether you need a single Ethernet drop or a complete structured cabling system in Riverside County, we deliver fast, reliable network infrastructure.'
    }
  },
  {
    icon: Video,
    title: 'Audio/Video Installation',
    slug: 'audio-video-installation',
    description: 'Home theater systems, multi-room audio, and commercial AV solutions for Riverside County properties.',
    image: '/images/services/audio-video.jpg',
    galleryCategory: 'low-voltage',
    fullDescription: {
      intro: 'Experience premium entertainment in your Riverside County home with professional audio and video installations.',
      items: [
        'Home theater design and installation',
        'Multi-room audio systems (Sonos, etc.)',
        'TV mounting and cable concealment',
        'Surround sound speaker installation',
        'Outdoor audio and video',
        'Commercial AV for conference rooms',
        'Projector and screen installations',
        'Smart home automation integration'
      ],
      closing: 'Transform your Southern California space into an immersive entertainment experience with clean, professional AV installations.'
    }
  }
];
