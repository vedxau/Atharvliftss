// Centralized site data for ATHARVLIFTSs

export const BRAND = {
  name: "ATHARVLIFTSs",
  coach: "Atharv",
  handle: "@Atharvliftss",
  whatsapp: "+919527471066",
  whatsappFormatted: "+91 95274 71066",
  email: "Info@Atharvliftss.in",
  tagline: "Bespoke Physique Atelier & Elite Coaching",
  location: "India",
};

export const IMAGES = {
  hero: "/img/hero.webp",
  heroSm: "/img/hero-sm.webp",
  back: "/img/back.webp",
  backSm: "/img/back-sm.webp",
  backSpread: "/img/back-spread.webp",
  backSpreadSm: "/img/back-spread-sm.webp",
  armDetail: "/img/arm-detail.webp",
  armDetailSm: "/img/arm-detail-sm.webp",
  wideFlex: "/img/wide-flex.webp",
  wideFlexSm: "/img/wide-flex-sm.webp",
  sideProfile: "/img/side-profile.webp",
  sideProfileSm: "/img/side-profile-sm.webp",
  frontMirror: "/img/front-mirror.webp",
  frontMirrorSm: "/img/front-mirror-sm.webp",
  cameraPortrait: "/img/camera-portrait.webp",
  cameraPortraitSm: "/img/camera-portrait-sm.webp",
  compressionTee: "/img/compression-tee.webp",
  compressionTeeSm: "/img/compression-tee-sm.webp",
  lifestyle: "/img/lifestyle.webp",
  lifestyleSm: "/img/lifestyle-sm.webp",
  plate: "/img/plate.webp",
  plateSm: "/img/plate-sm.webp",
  supplements: "/img/supplements.webp",
  supplementsSm: "/img/supplements-sm.webp",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "Coaching & Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

export const STATS = [
  { label: "Athletes Sculpted", value: "120+" },
  { label: "Programmes Delivered", value: "340+" },
  { label: "Client Retention Rate", value: "94%" },
  { label: "Years Experience", value: "6+" },
];

export const PROGRAMS = [
  {
    id: "hypertrophy-mastery",
    title: "Physique Hypertrophy Atelier",
    subtitle: "Custom Muscle Architecture & Structural Symmetries",
    price: "₹9,800",
    period: "/ 3 months",
    popular: true,
    description: "Personalized biomechanical program designed for high-density muscle mass building, proportional frame sculpture, and joint longevity.",
    features: [
      "1-on-1 Biomechanical Form Audit & Execution Guides",
      "Macro & Micro-Nutrient Prescription (Customized)",
      "Weekly Video Form Analysis & Check-ins",
      "Direct 24/7 WhatsApp Access with Coach Atharv",
      "Custom Supplement Protocol & Bloodwork Audit",
    ],
    image: IMAGES.backSpread,
  },
  {
    id: "contest-prep",
    title: "Elite Contest & Peak Prep",
    subtitle: "Stage-Ready Conditioning & Extreme Precision",
    price: "₹24,000",
    period: "/ 6 months",
    popular: false,
    description: "Unforgiving precision prep for competitive bodybuilders and shoot-ready physiques requiring sub-8% body fat and razor peak week management.",
    features: [
      "Daily Peak Week Protocol Adjustments",
      "Posing Practice & Stage Presentation Mentorship",
      "Comprehensive Carb-Depletion & Sodium Loading Curves",
      "Priority Direct Line to Atharv",
      "Post-Show Recovery & Metabolic Reverse Plan",
    ],
    image: IMAGES.wideFlex,
  },
  {
    id: "physique-recomp",
    title: "Metabolic Recomposition",
    subtitle: "Fat Loss Without Muscle Sacrifices",
    price: "₹4,500",
    period: "/ month",
    popular: false,
    description: "Accelerated fat loss and lean tissue preservation for busy executives and high performers.",
    features: [
      "Custom Macro & Meal Patterning (Non-restrictive)",
      "Flexible Training Schedules (Gym or Home)",
      "Bi-Weekly Progress Trackers & Metric Calibrations",
      "WhatsApp Support & Q&A Sessions",
    ],
    image: IMAGES.armDetail,
  },
];

export const NUTRITION_PHILOSOPHY = [
  {
    title: "Precision Macro Bio-matching",
    desc: "Every gram of protein, carb, and essential lipid is calibrated to your individual insulin sensitivity and workout metabolic demand.",
    image: IMAGES.plate,
  },
  {
    title: "Micronutrient Density First",
    desc: "Optimizing gut biome, hormone production, and sleep architecture through real nutrient-dense whole foods before relying on supplements.",
    image: IMAGES.supplements,
  },
  {
    title: "Sustainable Long-term Habits",
    desc: "No starvation diets. Flexible meal strategies that integrate seamlessly with work, travel, and social dining.",
    image: IMAGES.plateSm,
  },
];

export const TESTIMONIALS = [
  {
    quote: "Atharv's approach completely reshaped my physique in 16 weeks. The biomechanical cues and daily macro adjustments took my frame to a whole new level.",
    client: "Vikram R.",
    role: "Competitive Physique Athlete",
    metric: "-7% Body Fat / +4kg Lean Mass",
  },
  {
    quote: "No cookie-cutter templates here. Atharv audited my technique via video review and solved shoulder pain I had suffered with for 3 years.",
    client: "Rohan M.",
    role: "Senior Software Architect",
    metric: "Recomp Success",
  },
  {
    quote: "The peak week protocol was flawless. Stepped on stage dry, full, and conditioned. Best coaching investment I have ever made.",
    client: "Siddharth K.",
    role: "Men's Physique Competitor",
    metric: "1st Place Classic Division",
  },
];

export const INSTAGRAM_POSTS = [
  { id: 1, image: IMAGES.heroSm, likes: "1.4k", link: "https://instagram.com/Atharvliftss" },
  { id: 2, image: IMAGES.backSm, likes: "2.1k", link: "https://instagram.com/Atharvliftss" },
  { id: 3, image: IMAGES.armDetailSm, likes: "1.8k", link: "https://instagram.com/Atharvliftss" },
  { id: 4, image: IMAGES.wideFlexSm, likes: "3.2k", link: "https://instagram.com/Atharvliftss" },
  { id: 5, image: IMAGES.sideProfileSm, likes: "980", link: "https://instagram.com/Atharvliftss" },
  { id: 6, image: IMAGES.frontMirrorSm, likes: "2.5k", link: "https://instagram.com/Atharvliftss" },
];
