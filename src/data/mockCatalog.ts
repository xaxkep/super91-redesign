export interface SpecOption {
  id: string;
  label: string;
  sublabel?: string;
  priceModifier: number;
  badge?: string;
}

export interface QuantityTier {
  quantity: number;
  unitPrice: number;
  savingsPercent: number;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  edition: string;
  caliper: string;
  pressTechnology: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  turnaroundTime: string;
  isSameDayEligible: boolean;
  basePrice: number;
  quantityTiers: QuantityTier[];
  paperStocks: SpecOption[];
  finishes: SpecOption[];
  tags: string[];
}

export const CATEGORIES = [
  { id: 'visiting-cards', name: 'Visiting Cards', count: '14 Specs', tag: 'CORE SPECIMEN' },
  { id: 'packaging-boxes', name: 'Rigid & Mailer Packaging', count: '28 Dies', tag: 'CUSTOM DIE-CUT' },
  { id: 'marketing-collateral', name: 'Editorial Brochures & Flyers', count: '19 Formats', tag: 'SPEEDMASTER OFFSET' },
  { id: 'stickers-labels', name: 'Technical Vinyl & Foil Labels', count: '12 Stocks', tag: 'WEATHER-RESISTANT' },
  { id: 'signage-standees', name: 'Architectural Displays & Standees', count: '16 Formats', tag: 'ANODIZED CASSETTE' },
  { id: 'corporate-merch', name: 'Executive Merchandising Suites', count: '35 Kits', tag: 'CUSTOM EMBROIDERY' },
  { id: 'calendars-diaries', name: '2026 Executive Planners', count: '8 Finishes', tag: 'THERMO DEBOSS' },
  { id: 'bespoke-invitations', name: 'Deckle Edge & Monogram Foil', count: '15 Papers', tag: 'ARTISANAL DUPLEX' },
];

export const HERO_PRODUCTS: Product[] = [
  {
    id: 'prod-vc-velvet',
    name: 'Tactile Velvet Visiting Cards',
    category: 'Visiting Cards',
    edition: 'Studio Standard',
    caliper: '18 pt / 400 GSM',
    pressTechnology: 'HP Indigo 12000 + Scodix Ultra 3D Polymer',
    rating: 4.96,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?auto=format&fit=crop&w=1200&q=85',
    description: 'Bespoke micro-etched soft-touch velvet thermal film laminated over 400 GSM dense Finnish virgin pulp core, with optional registered 3D raised polymer and 24K hot foil.',
    turnaroundTime: 'Guaranteed Same-Day Dispatch (14:00 Cutoff)',
    isSameDayEligible: true,
    basePrice: 450,
    quantityTiers: [
      { quantity: 100, unitPrice: 4.5, savingsPercent: 0 },
      { quantity: 250, unitPrice: 3.1, savingsPercent: 31, isPopular: true },
      { quantity: 500, unitPrice: 2.05, savingsPercent: 54 },
      { quantity: 1000, unitPrice: 1.38, savingsPercent: 69 },
    ],
    paperStocks: [
      { id: 'paper-400', label: '400 GSM Finnish Virgin Art Board', sublabel: 'Extra-rigid handshake feel', priceModifier: 1.0, badge: 'STUDIO STANDARD' },
      { id: 'paper-350', label: '350 GSM Silk Coated Art Card', sublabel: 'Standard commercial grade', priceModifier: 0.92 },
      { id: 'paper-cotton', label: '450 GSM Uncoated Cotton White', sublabel: 'Organic textured tooth', priceModifier: 1.35, badge: 'HAUTE BESPOKE' },
    ],
    finishes: [
      { id: 'finish-velvet', label: 'Velvet Matte Thermal Coating', sublabel: 'Zero-reflection suede hand-feel', priceModifier: 1.0 },
      { id: 'finish-scodix-gold', label: 'Raised 3D Gold Foil (50μm)', sublabel: 'Sharp tactile edge registration', priceModifier: 1.55, badge: 'PRESTIGE' },
      { id: 'finish-spot-uv', label: 'Scodix High-Gloss 3D Spot UV', sublabel: 'Deep liquid dimensional pop', priceModifier: 1.38 },
    ],
    tags: ['business cards', 'tactile velvet', 'scodix', 'gold foil'],
  },
  {
    id: 'prod-box-rigid',
    name: 'Engineered Corrugated E-Commerce Mailers',
    category: 'Rigid & Mailer Packaging',
    edition: 'E-Commerce Architecture',
    caliper: 'E-Flute 1.8mm / 3-Ply High ECT',
    pressTechnology: 'High-Density Flexo-Litho Lamination',
    rating: 4.88,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=1200&q=85',
    description: 'Structural crash-lock, tamper-evident unboxing mailers manufactured from post-consumer recycled fluting with razor-sharp bleed litho printing.',
    turnaroundTime: '48-Hour Dispatch from Central Packaging Unit',
    isSameDayEligible: false,
    basePrice: 1950,
    quantityTiers: [
      { quantity: 50, unitPrice: 39.0, savingsPercent: 0 },
      { quantity: 100, unitPrice: 28.5, savingsPercent: 27 },
      { quantity: 250, unitPrice: 19.4, savingsPercent: 50, isPopular: true },
      { quantity: 500, unitPrice: 13.8, savingsPercent: 65 },
    ],
    paperStocks: [
      { id: 'stock-white-mailer', label: 'Bleached White Clay-Coated Kraft', sublabel: '350 GSM outer skin for vibrant ink', priceModifier: 1.0 },
      { id: 'stock-kraft-mailer', label: 'Unbleached Natural Brown Kraft', sublabel: '100% circular post-consumer fiber', priceModifier: 0.94, badge: 'CIRCULAR ECO' },
      { id: 'stock-rigid-heavy', label: 'Reinforced 5-Ply B-Flute (3.0mm)', sublabel: 'Drop-tested for fragile glass & bottles', priceModifier: 1.32 },
    ],
    finishes: [
      { id: 'fin-matte-coat', label: 'Anti-Scuff Matte Coating', sublabel: 'Resists transit abrasion & dust', priceModifier: 1.0 },
      { id: 'fin-foil-logo', label: 'Hot Stamped Metallic Logo Shield', sublabel: 'Reflective branding on outer flap', priceModifier: 1.4, badge: 'VIP UNBOXING' },
    ],
    tags: ['packaging', 'mailer boxes', 'shipping', 'unboxing'],
  },
  {
    id: 'prod-standee-rollup',
    name: 'Architectural Retractable Standee (6×3 ft)',
    category: 'Architectural Displays & Standees',
    edition: 'Event & Trade Floor',
    caliper: '320 GSM Greyback PET Film',
    pressTechnology: '1440 DPI Micro-Piezo Fine Art Inkjet',
    rating: 4.94,
    reviewsCount: 654,
    image: 'https://images.unsplash.com/photo-1617355405361-29f0f0a3d737?auto=format&fit=crop&w=1200&q=85',
    description: 'Precision non-curl greyback film mounted in a satin-anodized extruded aluminum base with twin stabilizing swing-out feet and padded ballistic nylon transport case.',
    turnaroundTime: 'Same-Day Dispatch (13:00 Cutoff)',
    isSameDayEligible: true,
    basePrice: 1499,
    quantityTiers: [
      { quantity: 1, unitPrice: 1499.0, savingsPercent: 0 },
      { quantity: 2, unitPrice: 1299.0, savingsPercent: 13 },
      { quantity: 5, unitPrice: 989.0, savingsPercent: 34, isPopular: true },
      { quantity: 10, unitPrice: 839.0, savingsPercent: 44 },
    ],
    paperStocks: [
      { id: 'stock-greyback', label: 'Anti-Curl Greyback Light-Block PET', sublabel: '100% opaque against backlit expo halls', priceModifier: 1.0, badge: 'VERIFIED FLAT' },
      { id: 'stock-fabric', label: 'Tension Polyester Dye-Sublimation', sublabel: 'Glitter-free zero reflection fabric', priceModifier: 1.35 },
    ],
    finishes: [
      { id: 'fin-matte-anti-glare', label: 'Anti-Glare Optical Matte Shield', sublabel: 'Flawless legibility under halogen floodlights', priceModifier: 1.0 },
      { id: 'fin-crystal-gloss', label: 'High-Saturation Luster Gloss', sublabel: 'High contrast for photographic displays', priceModifier: 1.08 },
    ],
    tags: ['standee', 'events', 'expos', 'signage'],
  },
  {
    id: 'prod-brochure-trifold',
    name: 'Precision Scored Marketing Catalogues',
    category: 'Editorial Brochures & Flyers',
    edition: 'Corporate Specification',
    caliper: '170–250 GSM Triple-Coated Art',
    pressTechnology: 'Heidelberg Speedmaster XL 106 8-Color',
    rating: 4.89,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1632062549850-44a0a6eede16?auto=format&fit=crop&w=1200&q=85',
    description: 'Heidelberg automated scoring and gate-folding with deep ink saturation across solid flats. Zero crack lines on fold edges guaranteed.',
    turnaroundTime: '24-Hour Production Cycle',
    isSameDayEligible: true,
    basePrice: 850,
    quantityTiers: [
      { quantity: 250, unitPrice: 3.4, savingsPercent: 0 },
      { quantity: 500, unitPrice: 2.15, savingsPercent: 37 },
      { quantity: 1000, unitPrice: 1.42, savingsPercent: 58, isPopular: true },
      { quantity: 2500, unitPrice: 0.92, savingsPercent: 73 },
    ],
    paperStocks: [
      { id: 'paper-170-gloss', label: '170 GSM Triple-Coated Silk Paper', sublabel: 'Smooth tactile drape for corporate profiles', priceModifier: 1.0 },
      { id: 'paper-250-matte', label: '250 GSM Heavyweight Cover Stock', sublabel: 'Substantial desk presence and stiffness', priceModifier: 1.25, badge: 'RECOMMENDED' },
      { id: 'paper-300-kraft', label: '300 GSM Organic Uncoated White', sublabel: 'Tactile artisanal tooth and high ink absorption', priceModifier: 1.3 },
    ],
    finishes: [
      { id: 'fin-thermal-matte', label: 'Double-Sided Thermal Silk Seal', sublabel: 'Protects folds from humidity & fraying', priceModifier: 1.0 },
      { id: 'fin-spot-uv-cover', label: 'Front Cover Architectural Spot UV', sublabel: 'Gloss highlights over brand typography', priceModifier: 1.32, badge: 'TACTILE HIGHLIGHT' },
    ],
    tags: ['brochures', 'marketing', 'editorial', 'catalogs'],
  },
  {
    id: 'prod-stickers-diecut',
    name: 'Industrial Die-Cut Polymeric Vinyl Labels',
    category: 'Technical Vinyl & Foil Labels',
    edition: 'Technical Rating IP67',
    caliper: '120μm Calendered Polymeric',
    pressTechnology: 'Roland UV TrueVIS Wide-Gamut CMYK+White',
    rating: 4.93,
    reviewsCount: 2310,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    description: 'Automated laser die-cutting with permanent solvent acrylic adhesive. Weatherproof, detergent-proof, and rated for 5-year outdoor exposure.',
    turnaroundTime: 'Same-Day Dispatch (14:00 Cutoff)',
    isSameDayEligible: true,
    basePrice: 600,
    quantityTiers: [
      { quantity: 100, unitPrice: 6.0, savingsPercent: 0 },
      { quantity: 250, unitPrice: 3.7, savingsPercent: 38, isPopular: true },
      { quantity: 500, unitPrice: 2.3, savingsPercent: 62 },
      { quantity: 1000, unitPrice: 1.45, savingsPercent: 76 },
    ],
    paperStocks: [
      { id: 'stock-white-vinyl', label: 'Ultra-White Polymeric Vinyl (Gloss)', sublabel: 'Pliable substrate conforms to curved jars', priceModifier: 1.0 },
      { id: 'stock-holographic', label: 'Prismatic Diffraction Foil Vinyl', sublabel: 'Reflects shifting spectrum under sunlight', priceModifier: 1.42, badge: 'VIRAL UNBOXING' },
      { id: 'stock-clear-transparent', label: 'Optical Clear Polypropylene', sublabel: 'No-label transparent look on glass packaging', priceModifier: 1.2 },
    ],
    finishes: [
      { id: 'fin-weatherproof-matte', label: 'Outdoor UV Barrier Lamination', sublabel: 'Guaranteed scratch & oil resistance', priceModifier: 1.0 },
      { id: 'fin-gloss-wet', label: 'High-Gloss Polymer Coat', sublabel: 'Mirror gloss ink saturation', priceModifier: 1.0 },
    ],
    tags: ['labels', 'die-cut', 'waterproof', 'vinyl'],
  },
  {
    id: 'prod-diary-2026',
    name: 'Executive 2026 Debossed Planner & Pen Suite',
    category: '2026 Executive Planners',
    edition: 'Corporate Heritage Collection',
    caliper: '2.5mm Hardcover Greyboard + 80 GSM Acid-Free Cream Paper',
    pressTechnology: 'Hydraulic Heat-Stamp Debossing & Gilt Foil',
    rating: 4.95,
    reviewsCount: 780,
    image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?auto=format&fit=crop&w=1200&q=85',
    description: 'Thermo-reactive PU binding that darkens under high-temperature brass die debossing, paired with a weighted metal twist ballpoint pen in an unboxing gift slipcase.',
    turnaroundTime: '48-Hour Corporate Run Dispatch',
    isSameDayEligible: false,
    basePrice: 990,
    quantityTiers: [
      { quantity: 25, unitPrice: 39.6, savingsPercent: 0 },
      { quantity: 50, unitPrice: 31.8, savingsPercent: 20 },
      { quantity: 100, unitPrice: 24.0, savingsPercent: 39, isPopular: true },
      { quantity: 250, unitPrice: 19.2, savingsPercent: 51 },
    ],
    paperStocks: [
      { id: 'stock-italian-pu', label: 'Italian Thermo-Reactive PU Leatherette', sublabel: 'Rich tonal change under hot brass matrix', priceModifier: 1.0, badge: 'HERITAGE' },
      { id: 'stock-fabric-hardbound', label: 'Belgian Linen Woven Bookcloth', sublabel: 'Organic texture with foil stamped typography', priceModifier: 1.18 },
    ],
    finishes: [
      { id: 'fin-blind-deboss', label: 'Deep Hydraulic Blind Deboss', sublabel: '1.5mm recessed impression into board', priceModifier: 1.0 },
      { id: 'fin-gold-foil-stamped', label: '24K Warm Gold Gilt Stamping', sublabel: 'Metallic foil inlaid into debossed cavity', priceModifier: 1.25, badge: 'EXECUTIVE VIP' },
    ],
    tags: ['executive diary', '2026 planner', 'corporate gift'],
  },
];

export const TACTILE_FINISHES = [
  {
    id: 'velvet-matte',
    name: 'Velvet Soft-Touch Lamination',
    specCode: 'COAT-V-30',
    sensoryTag: 'Micro-Etched Silk Suede Surface',
    description: 'A custom biaxially oriented polypropylene (BOPP) thermal film treated with microscopic texture etching. Eliminates 99% of surface specular reflection, absorbs ambient glare, and provides a signature velvety tactile drag against fingertips.',
    microThickness: '32 Microns',
    lightReflectance: '2.4% (Ultra-Matte Specular Absorption)',
    bestFor: 'Executive Visiting Cards, Luxury Fashion Editorial Lookbooks, Rigid Confectionery Packaging',
    badge: 'STUDIO STANDARD',
    colorHex: '#1F242D',
  },
  {
    id: 'scodix-spot-uv',
    name: 'Scodix Ultra 3D Raised Polymer',
    specCode: 'POLY-SC-100',
    sensoryTag: 'High-Build Dimensional Clear Polymer',
    description: 'Digital inkjet deposition of 100% solid UV-curable clear polymer precisely calibrated from 20μm up to 100μm thickness. Creates a tactile relief sensation that allows customers to physically trace logos and typography without physical metal dies.',
    microThickness: 'Up to 100 Microns Relief',
    lightReflectance: '94.8% (Liquid High-Gloss Reflection)',
    bestFor: 'Corporate Identity Marks, Architectural Blueprints, Water Droplet Emulation, Security Seals',
    badge: 'TACTILE DIMENSION',
    colorHex: '#1E3A8A',
  },
  {
    id: 'gold-hot-foil',
    name: 'Raised Hot Stamped Gold Foil',
    specCode: 'FOIL-HG-24K',
    sensoryTag: 'Specular 24K Mirrored Micro-Registration',
    description: 'Multi-layer vacuum-metallized aluminum foil transferred under 140°C thermal compression. Combines extreme micro-line registration (<0.05mm) with authentic metallic specular reflectance that shifts color as the card is tilted in the hand.',
    microThickness: '12μm Vacuum Metallized Foil',
    lightReflectance: '98.2% (True Specular Mirroring)',
    bestFor: 'Diwali Mithai Cartons, Luxury Monogram Stationery, Certificate Accreditation Seals',
    badge: '24K METALLIC',
    colorHex: '#9E7D3B',
  },
  {
    id: 'kraft-eco',
    name: 'Finnish Virgin Kraft Eco-Fiber',
    specCode: 'PULP-KF-350',
    sensoryTag: 'Unbleached Organic Long-Fiber Tooth',
    description: '100% unbleached virgin sulfate pulp manufactured with circular closed-loop water treatment. Displays authentic woodgrain fibers, warm earthy tones, and high burst strength without synthetic coatings.',
    microThickness: '420μm Caliper Thickness',
    lightReflectance: 'Diffuse Natural Fiber Scattering',
    bestFor: 'Artisanal Coffee Bags, Clean Beauty Shipping Mailers, Eco Hangtags',
    badge: 'CIRCULAR CERTIFIED',
    colorHex: '#5C4033',
  },
];

export interface IndustryKit {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  savings: string;
  image: string;
  items: string[];
}

export const INDUSTRY_KITS: IndustryKit[] = [
  {
    id: 'kit-startup',
    title: 'Executive Brand Launch Suite',
    subtitle: 'High-density business collateral calibrated for enterprise client pitches and venture presentations.',
    price: '₹3,499',
    savings: 'SAVE 32%',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    items: [
      '500 Velvet Soft-Touch Visiting Cards (400 GSM Board)',
      '100 Executive Heavyweight Letterheads (120 GSM Bond)',
      '250 Die-Cut Polymeric Laptop Decals (Matte UV)',
      '2 Custom Folders with Business Card Slot',
    ],
  },
  {
    id: 'kit-restaurant',
    title: 'Gourmet Hospitality & Cafe Suite',
    subtitle: 'Oil-resistant, spill-proof polymer menus engineered for heavy daily guest contact.',
    price: '₹4,899',
    savings: 'SAVE 38%',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    items: [
      '30 Thermal Encapsulated Wipe-Clean Menu Cards',
      '50 Acrylic Table QR Dockets with Gold Accent',
      '500 Absorbent Coasters with Bleed Litho Printing',
      '15 Magnetic Laser-Engraved Staff Badges',
    ],
  },
  {
    id: 'kit-expo',
    title: 'Architectural Trade Show Pack',
    subtitle: 'Command floor attention at conventions with anodized aluminum standees and color-accurate flyers.',
    price: '₹6,999',
    savings: 'SAVE 41%',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    items: [
      '2 Anodized Roll-Up Aluminum Standees (6×3 ft Greyback)',
      '1,000 High-Saturation Silk Flyers (170 GSM Speedmaster)',
      '100 Woven Satin Lanyards with Hard Acrylic Badges',
      '100 Unbleached Natural Cotton Tote Bags',
    ],
  },
  {
    id: 'kit-ecommerce',
    title: 'E-Commerce Unboxing Experience Suite',
    subtitle: 'Convert doorstep deliveries into memorable unboxing experiences with custom fluting and hot foil.',
    price: '₹5,499',
    savings: 'SAVE 35%',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    items: [
      '100 Custom Corrugated Shipping Mailers (E-Flute Litho)',
      '500 Sheets Custom Translucent Butter Paper (40 GSM)',
      '250 Heavyweight Product Hangtags with Natural Jute Cord',
      '500 Tamper-Evident Foil Holographic Security Seals',
    ],
  },
];

export const ADDITIONAL_DISCOVERY_PRODUCTS: Product[] = [
  {
    id: 'prod-box-luxury-rigid',
    name: 'Custom Magnetic Rigid Presentation Boxes',
    category: 'Rigid & Mailer Packaging',
    edition: 'Luxury Unboxing Architecture',
    caliper: '2.5mm Kappa Core + 157 GSM Laminated Wrap',
    pressTechnology: 'High-Fidelity Offset Litho + Matte BOPP',
    rating: 4.95,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?auto=format&fit=crop&w=1200&q=85',
    description: 'Precision v-cut corners with concealed neodymium magnetic closures. Wrapped in soft-touch velvet art paper with hot-stamped foil branding.',
    turnaroundTime: '72-Hour Production Turnaround',
    isSameDayEligible: false,
    basePrice: 2800,
    quantityTiers: [
      { quantity: 50, unitPrice: 56.0, savingsPercent: 0 },
      { quantity: 100, unitPrice: 42.0, savingsPercent: 25 },
      { quantity: 250, unitPrice: 31.0, savingsPercent: 44, isPopular: true },
      { quantity: 500, unitPrice: 23.5, savingsPercent: 58 },
    ],
    paperStocks: [
      { id: 'stock-kappa-25', label: '2.5mm High-Density Kappa Board', sublabel: 'Zero warping rigid walls', priceModifier: 1.0 },
      { id: 'stock-kappa-30', label: '3.0mm Heavyweight Structural Core', sublabel: 'Ultimate crush-proof resistance', priceModifier: 1.25 },
    ],
    finishes: [
      { id: 'fin-velvet-wrap', label: 'Velvet Soft-Touch Paper Wrap', sublabel: 'Zero specular reflection', priceModifier: 1.0 },
      { id: 'fin-foil-stamp', label: '24K Vacuum Hot Stamped Foil', sublabel: 'Micro-registered metallic logo', priceModifier: 1.35, badge: 'VIP GRADE' },
    ],
    tags: ['rigid box', 'magnetic box', 'packaging', 'luxury'],
  },
  {
    id: 'prod-kraft-tote-bags',
    name: 'Reinforced Twisted-Handle Kraft Paper Bags',
    category: 'Rigid & Mailer Packaging',
    edition: 'Retail Packaging Eco-Series',
    caliper: '150 GSM Virgin Ribbed Kraft',
    pressTechnology: 'Flexographic Soy-Based Pigment Inks',
    rating: 4.86,
    reviewsCount: 610,
    image: 'https://images.unsplash.com/photo-1595246135406-803418233494?auto=format&fit=crop&w=1200&q=85',
    description: 'Heavyweight ribbed virgin brown or bleached white kraft bags with reinforced turn-top rims and high-tensile twisted paper handles holding up to 8 kg.',
    turnaroundTime: '48-Hour Dispatch from Packaging Hub',
    isSameDayEligible: false,
    basePrice: 1200,
    quantityTiers: [
      { quantity: 100, unitPrice: 12.0, savingsPercent: 0 },
      { quantity: 250, unitPrice: 8.5, savingsPercent: 29 },
      { quantity: 500, unitPrice: 5.8, savingsPercent: 51, isPopular: true },
      { quantity: 1000, unitPrice: 3.9, savingsPercent: 67 },
    ],
    paperStocks: [
      { id: 'stock-kraft-brown', label: '150 GSM Natural Ribbed Kraft', sublabel: '100% biodegradable unbleached fiber', priceModifier: 1.0 },
      { id: 'stock-kraft-white', label: '160 GSM Bleached Pure White Kraft', sublabel: 'Clean canvas for vibrant spot colors', priceModifier: 1.15 },
    ],
    finishes: [
      { id: 'fin-flexo-matte', label: 'Water-Based Matte Pigment', sublabel: 'Eco-certified zero odor inks', priceModifier: 1.0 },
      { id: 'fin-foil-bag', label: 'Hot Stamped Foil Branding', sublabel: 'Lustrous reflective accents', priceModifier: 1.4 },
    ],
    tags: ['bags', 'kraft paper', 'retail packaging', 'eco'],
  },
  {
    id: 'prod-acrylic-sign-led',
    name: 'Optic Acrylic LED Backlit Wall Signboard',
    category: 'Architectural Displays & Standees',
    edition: 'Office & Retail Architecture',
    caliper: '8mm Optic Cast Acrylic + 3mm Composite Backer',
    pressTechnology: 'Multi-Layer High-Opacity White + CMYK UV',
    rating: 4.97,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=85',
    description: 'Laser-polished 8mm cast acrylic face with stainless steel standoff mounts and warm/cool white diffused perimeter LED halo illumination.',
    turnaroundTime: '48-Hour Precision Milling Turnaround',
    isSameDayEligible: false,
    basePrice: 3499,
    quantityTiers: [
      { quantity: 1, unitPrice: 3499.0, savingsPercent: 0 },
      { quantity: 2, unitPrice: 2999.0, savingsPercent: 14 },
      { quantity: 5, unitPrice: 2399.0, savingsPercent: 31, isPopular: true },
      { quantity: 10, unitPrice: 1899.0, savingsPercent: 45 },
    ],
    paperStocks: [
      { id: 'stock-acrylic-clear', label: '8mm Diamond-Polished Cast Acrylic', sublabel: 'Crystal-clear 92% light transmission', priceModifier: 1.0 },
      { id: 'stock-acrylic-frosted', label: '8mm Matte Frosted Diffused Acrylic', sublabel: 'Soft velvety halo glow dispersal', priceModifier: 1.12 },
    ],
    finishes: [
      { id: 'fin-standoff-steel', label: 'Brushed Stainless Standoff Hardware', sublabel: '304-grade architectural fittings included', priceModifier: 1.0 },
      { id: 'fin-standoff-brass', label: 'Satin Gold PVD Coated Standoffs', sublabel: 'Prestige luxury metallic finish', priceModifier: 1.15, badge: 'EXECUTIVE' },
    ],
    tags: ['signage', 'acrylic sign', 'led backlight', 'office branding'],
  },
  {
    id: 'prod-merch-tee-heavy',
    name: '240 GSM Combed Heavyweight Cotton Tee',
    category: 'Executive Merchandising Suites',
    edition: 'Apparel Studio Standard',
    caliper: '240 GSM 100% Combed Terry Cotton',
    pressTechnology: 'High-Density Screen Printing & Micro-Embroidery',
    rating: 4.91,
    reviewsCount: 1180,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85',
    description: 'Pre-shrunk, bio-washed heavyweight French terry cotton with double-needle ribbed collar and vibrant plastisol / discharge screen printing.',
    turnaroundTime: '48-Hour Corporate Batch Dispatch',
    isSameDayEligible: false,
    basePrice: 499,
    quantityTiers: [
      { quantity: 25, unitPrice: 499.0, savingsPercent: 0 },
      { quantity: 50, unitPrice: 399.0, savingsPercent: 20 },
      { quantity: 100, unitPrice: 319.0, savingsPercent: 36, isPopular: true },
      { quantity: 250, unitPrice: 259.0, savingsPercent: 48 },
    ],
    paperStocks: [
      { id: 'stock-tee-black', label: '240 GSM Bio-Washed Obsidian Black', sublabel: 'Lustrous zero-fade pigment dye', priceModifier: 1.0 },
      { id: 'stock-tee-white', label: '240 GSM Optical Heavyweight White', sublabel: 'Dense non-sheer luxury drape', priceModifier: 1.0 },
      { id: 'stock-tee-navy', label: '240 GSM Deep Midnight Navy', sublabel: 'Rich corporate executive hue', priceModifier: 1.05 },
    ],
    finishes: [
      { id: 'fin-print-screen', label: 'High-Density Plastisol Print', sublabel: 'Vibrant stretch-resistant chest mark', priceModifier: 1.0 },
      { id: 'fin-print-embroidery', label: 'Tajima Micro-Stitch Embroidery', sublabel: 'High-density 8,000 stitch chest emblem', priceModifier: 1.25, badge: 'STUDIO CRAFT' },
    ],
    tags: ['t-shirts', 'merchandise', 'corporate apparel', 'embroidery'],
  },
  {
    id: 'prod-hangtag-duplex',
    name: '600 GSM Duplex Cotton Hangtags with Eyelets',
    category: 'Executive Merchandising Suites',
    edition: 'Fashion Atelier Spec',
    caliper: '600 GSM Bonded Duplex Cotton Card',
    pressTechnology: 'Deep Letterpress Impression & Foil Stamping',
    rating: 4.96,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    description: 'Ultra-dense dual-ply bonded cotton stock with matte brass reinforced eyelets and genuine unbleached organic twisted cord.',
    turnaroundTime: '24-Hour Dispatch from Central Press',
    isSameDayEligible: true,
    basePrice: 850,
    quantityTiers: [
      { quantity: 100, unitPrice: 8.5, savingsPercent: 0 },
      { quantity: 250, unitPrice: 5.6, savingsPercent: 34 },
      { quantity: 500, unitPrice: 3.8, savingsPercent: 55, isPopular: true },
      { quantity: 1000, unitPrice: 2.7, savingsPercent: 68 },
    ],
    paperStocks: [
      { id: 'stock-cotton-duplex', label: '600 GSM Cotton White/Black Duplex', sublabel: 'Contrast edge sandwich structure', priceModifier: 1.0 },
      { id: 'stock-cotton-natural', label: '600 GSM Unbleached Textured Rag', sublabel: 'Raw organic tactile tooth', priceModifier: 1.1 },
    ],
    finishes: [
      { id: 'fin-brass-eyelet', label: 'Matte Brass Architectural Eyelet', sublabel: 'Reinforced 4mm cord portal', priceModifier: 1.0 },
      { id: 'fin-copper-foil', label: 'Warm Copper Hot Stamped Accent', sublabel: 'Deep metallic blind bite into board', priceModifier: 1.25, badge: 'HERITAGE' },
    ],
    tags: ['hangtags', 'fashion', 'apparel', 'luxury tags'],
  },
  {
    id: 'prod-invitation-deckle',
    name: 'Deckle-Edged Cotton Rag Wedding & Gala Suites',
    category: 'Editorial Brochures & Flyers',
    edition: 'Artisanal Deckle Collection',
    caliper: '350 GSM Hand-Feathered Cotton Rag',
    pressTechnology: 'Cast-Brass Hot Foil & Letterpress',
    rating: 4.98,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    description: 'Individually hand-torn deckled edges on artisanal cotton rag paper with micro-calligraphic metallic gold foil and botanical wax seal envelopes.',
    turnaroundTime: '48-Hour Studio Hand-Finishing',
    isSameDayEligible: false,
    basePrice: 1650,
    quantityTiers: [
      { quantity: 50, unitPrice: 33.0, savingsPercent: 0 },
      { quantity: 100, unitPrice: 24.5, savingsPercent: 26 },
      { quantity: 250, unitPrice: 16.8, savingsPercent: 49, isPopular: true },
      { quantity: 500, unitPrice: 12.2, savingsPercent: 63 },
    ],
    paperStocks: [
      { id: 'stock-deckle-warm-white', label: '350 GSM Feathered Deckle Cotton Rag', sublabel: 'Naturally deckled raw botanical perimeter', priceModifier: 1.0 },
      { id: 'stock-deckle-sage', label: '350 GSM Botanical Sage Mineral Wash', sublabel: 'Pigment dyed deckle edges', priceModifier: 1.15 },
    ],
    finishes: [
      { id: 'fin-gilt-foil-wax', label: '24K Foil Stamping + Wax Seal Envelope', sublabel: 'Hand-poured beeswax monogram seals', priceModifier: 1.3, badge: 'ATELIER' },
      { id: 'fin-pure-letterpress', label: 'Traditional Deep Intaglio Letterpress', sublabel: 'Tactile indent into cotton fiber', priceModifier: 1.1 },
    ],
    tags: ['invitations', 'wedding', 'deckle edge', 'luxury stationery'],
  },
  {
    id: 'prod-menu-leatherette',
    name: 'Spill-Proof Thermal Encapsulated Menus',
    category: 'Editorial Brochures & Flyers',
    edition: 'Hospitality Heavy Duty',
    caliper: '300 GSM Board + 125μm Sealed Edge Mylar',
    pressTechnology: 'High-Density CMYK + Heat-Bonded Flush Laminate',
    rating: 4.92,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    description: '100% waterproof and alcohol-resistant sealed-edge thermal encapsulation engineered for restaurant tables with anti-fingerprint matte surface.',
    turnaroundTime: '24-Hour Dispatch from Central Press',
    isSameDayEligible: true,
    basePrice: 1200,
    quantityTiers: [
      { quantity: 25, unitPrice: 48.0, savingsPercent: 0 },
      { quantity: 50, unitPrice: 36.0, savingsPercent: 25 },
      { quantity: 100, unitPrice: 26.5, savingsPercent: 45, isPopular: true },
      { quantity: 250, unitPrice: 19.8, savingsPercent: 59 },
    ],
    paperStocks: [
      { id: 'stock-menu-encap', label: '300 GSM Art Board + 125μ Sealed Mylar', sublabel: 'Spill-proof welded watertight edges', priceModifier: 1.0 },
      { id: 'stock-menu-synthetic', label: '250μ Tear-Proof Polymer YUPO Substrate', sublabel: '100% synthetic tree-free paper', priceModifier: 1.25 },
    ],
    finishes: [
      { id: 'fin-matte-anti-smudge', label: 'Anti-Bacterial Matte Shield', sublabel: 'Resists oil, wine, and food stains', priceModifier: 1.0 },
      { id: 'fin-corner-brass', label: 'Gilded Brass Corner Reinforcements', sublabel: 'Four anti-bend metal corner clips', priceModifier: 1.2, badge: 'PRESTIGE' },
    ],
    tags: ['menus', 'hospitality', 'restaurant', 'waterproof'],
  },
  {
    id: 'prod-holographic-security',
    name: 'Tamper-Evident Micro-Guilloche Security Labels',
    category: 'Technical Vinyl & Foil Labels',
    edition: 'Forensic Grade Tamper Void',
    caliper: '50μm Multi-Layer Destructible Film',
    pressTechnology: 'Electron-Beam Hologram Master + UV Inkjet',
    rating: 4.99,
    reviewsCount: 1450,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    description: 'Irreversible void honeycomb pattern upon removal with forensic micro-text security printing and sequential QR/barcode serialization.',
    turnaroundTime: 'Same-Day Dispatch (13:00 Cutoff)',
    isSameDayEligible: true,
    basePrice: 950,
    quantityTiers: [
      { quantity: 500, unitPrice: 1.9, savingsPercent: 0 },
      { quantity: 1000, unitPrice: 1.2, savingsPercent: 37 },
      { quantity: 2500, unitPrice: 0.78, savingsPercent: 59, isPopular: true },
      { quantity: 5000, unitPrice: 0.52, savingsPercent: 73 },
    ],
    paperStocks: [
      { id: 'stock-void-silver', label: 'Silver Holographic Honeycomb Void', sublabel: 'Displays VOID text permanently if peeled', priceModifier: 1.0 },
      { id: 'stock-destructible-paper', label: 'Eggshell Ultra-Destructible Vinyl', sublabel: 'Shatters into microscopic fragments on tampering', priceModifier: 1.18 },
    ],
    finishes: [
      { id: 'fin-uv-invisible', label: 'Covert UV Fluorescent Security Ink', sublabel: 'Glows vibrant cyan under blacklight', priceModifier: 1.15, badge: 'ISO 27001' },
      { id: 'fin-serialized-laser', label: 'Sequential Laser Numbering & QR', sublabel: 'Individual cloud verification code', priceModifier: 1.1 },
    ],
    tags: ['security labels', 'hologram', 'tamper evident', 'anti counterfeit'],
  },
];

export const SEASONAL_INDUSTRY_KITS: Record<string, IndustryKit> = {
  diwali: {
    id: 'kit-diwali-festive',
    title: 'Festive Confectionery & Gifting Suite',
    subtitle: 'High-density rigid Kappa sweet boxes, 3D gold foil greetings, and custom confectionery butter paper.',
    price: '₹5,999',
    savings: 'SAVE 38%',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    items: [
      '100 Luxury Rigid Confectionery Boxes (2.5mm Kappa Core)',
      '250 Scodix 3D Liquid Gold Greeting Cards (400 GSM)',
      '500 Sheets Food-Safe Gold Logo Butter Paper (40 GSM)',
      '100 Custom Gold Stamped Outer Gift Bags with Satin Handles',
    ],
  },
  newyear: {
    id: 'kit-newyear-exec',
    title: '2026 Executive Onboarding & Desk Suite',
    subtitle: 'Thermo-debossed Italian PU planners, matte metal twist pens, and wire-O architectural desk calendars.',
    price: '₹4,499',
    savings: 'SAVE 35%',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    items: [
      '50 Executive 2026 Debossed Leatherette Planners',
      '50 Laser-Engraved Weighted Matte Black Twist Pens',
      '50 Architectural Wire-O Desk Calendars (250 GSM Silk)',
      '50 Custom Magnetic Presentation Gift Sleeves',
    ],
  },
  smartpress: {
    id: 'kit-smartpress-studio',
    title: 'Smartpress Executive Marketing Master Kit',
    subtitle: 'Calibrated color management collateral, tactile velvet cards, and triple-scored corporate catalogs.',
    price: '₹4,999',
    savings: 'SAVE 40%',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    items: [
      '500 Velvet Soft-Touch Visiting Cards with Raised 3D Polymer',
      '250 Precision Scored Corporate Catalogues (Heidelberg Offset)',
      '100 Translucent Frosted Presentation Folders',
      '1 Swatch Deck of All 12 Commercial Paper Substrates',
    ],
  },
  wedding: {
    id: 'kit-wedding-atelier',
    title: 'Bespoke Gala & Wedding Stationery Suite',
    subtitle: 'Artisanal deckled-edge cotton rag invitation suites with 24K gold letterpress and hand-poured wax seals.',
    price: '₹7,499',
    savings: 'SAVE 42%',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    items: [
      '150 Hand-Deckled 350 GSM Cotton Rag Invitation Cards',
      '150 Wax-Sealed Lined Outer Envelopes with Foil Monogram',
      '150 Gold Foil Itinerary & RSVP Cards with Vellum Wrap',
      '30 Gilded Table Number Dockets with Acrylic Bases',
    ],
  },
};
