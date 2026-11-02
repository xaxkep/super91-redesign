export type ThemeKey = 'diwali' | 'newyear' | 'smartpress' | 'wedding';

export interface FestivalProduct {
  id: string;
  name: string;
  edition: string;
  price: string;
  unitPrice: number;
  savings: string;
  image: string;
  description: string;
  specs: string[];
}

export interface FestivalTheme {
  id: ThemeKey;
  name: string;
  seasonLabel: string;
  editionBadge: string;
  heroHeadlineSerif: string;
  heroHeadlineSans: string;
  heroSubheadline: string;
  heroTagline: string;
  activeCoupon: string;
  couponDiscount: string;
  accentColor: string;
  bgAtmosphere: string;
  heroImage: string;
  heroImageAlt: string;
  collectionTitle: string;
  collectionSubtitle: string;
  curatedProducts: FestivalProduct[];
  curatedCategories: string[];
}

export const FESTIVAL_THEMES: Record<ThemeKey, FestivalTheme> = {
  diwali: {
    id: 'diwali',
    name: 'Diwali Festive Edition',
    seasonLabel: 'Festive Luxury & Confectionery Gifting',
    editionBadge: 'Autumn 2026 Festive Release',
    heroHeadlineSerif: 'Festival of Lights,',
    heroHeadlineSans: 'Crafted in Heavyweight 400 GSM & 24K Hot Foil.',
    heroSubheadline:
      'Rigid handcrafted mithai & confectionery boxes, Scodix 3D micro-embossed greeting collateral, and VIP corporate hampers engineered for India’s premier institutions.',
    heroTagline: 'Complimentary Raised Gold Foil Tooling on Volume Runs > ₹4,999',
    activeCoupon: 'DIWALI24',
    couponDiscount: 'Flat 15% VIP Allowance + Foil Specimen Deck',
    accentColor: '#C5A059',
    bgAtmosphere: 'bg-gradient-to-b from-[#1C121F] via-[#120B16] to-[#0A070D]',
    heroImage: 'https://images.unsplash.com/photo-1577083753695-e010191bacb5?auto=format&fit=crop&w=1200&q=85',
    heroImageAlt: 'Traditional Festive Diya Lighting & Golden Packaging',
    collectionTitle: 'Curated Diwali Packaging & Corporate Gifting Suites',
    collectionSubtitle: 'Engineered for high-volume corporate hampers, artisan chocolatiers, and festive brand collateral with pre-festival dispatch guarantees.',
    curatedCategories: ['Rigid Mithai Boxes', '24K Foil Greeting Cards', 'Dry Fruit Sleeves', 'Translucent Butter Paper'],
    curatedProducts: [
      {
        id: 'diwali-rigid-box',
        name: 'Handcrafted Rigid Confectionery Box',
        edition: 'Diwali Heritage Gold',
        price: '₹145/unit',
        unitPrice: 145,
        savings: 'SAVE 35%',
        image: 'https://images.unsplash.com/photo-1694481901573-a970f982ac5e?auto=format&fit=crop&w=800&q=80',
        description: '2.5mm high-density Kappa greyboard wrapped in royal black & gold art paper with magnetic flap and 24K hot-stamped gold foil pattern.',
        specs: ['Kappa Board 2.5mm', '24K Hot Stamped Foil', 'Food-Grade Gold Cavities', 'Magnetic Snap Closure'],
      },
      {
        id: 'diwali-foil-card',
        name: 'Raised 3D Gold Foil Diwali Greetings',
        edition: '400 GSM Heavyweight Art Card',
        price: '₹14.50/unit',
        unitPrice: 14.5,
        savings: 'SAVE 42%',
        image: 'https://images.unsplash.com/photo-1765483469974-3f544df12caf?auto=format&fit=crop&w=800&q=80',
        description: 'Ultra-luxurious soft-touch velvet lamination with registered Scodix 3D liquid gold relief over traditional festive diyas and monograms.',
        specs: ['400 GSM Silk Board', 'Velvet Matte Coating', 'Scodix 3D Relief 50μm', 'Matching Gold-Lined Envelope'],
      },
      {
        id: 'diwali-hamper-carton',
        name: 'VIP Corporate Diwali Hamper Case',
        edition: 'Rigid Drawer Sleeve Box',
        price: '₹280/unit',
        unitPrice: 280,
        savings: 'SAVE 28%',
        image: 'https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?auto=format&fit=crop&w=800&q=80',
        description: 'Large-format gift hamper box with pull-out velvet ribbon drawer, custom laser-cut EVA foam inserts for dry fruit jars and brass lamps.',
        specs: ['3.0mm Rigid Board', 'Laser-Cut High Density Foam', 'Satin Pull Ribbon', 'Full Exterior CMYK Bleed'],
      },
      {
        id: 'diwali-butter-paper',
        name: 'Gold Inlaid Custom Butter Paper (40 GSM)',
        edition: 'Translucent Food Contact Safe',
        price: '₹1.80/sheet',
        unitPrice: 1.8,
        savings: 'SAVE 50%',
        image: 'https://images.unsplash.com/photo-1624567881801-a5a85867d990?auto=format&fit=crop&w=800&q=80',
        description: 'Grease-resistant translucent confectionery wrapping paper with continuous metallic gold logo repeating pattern.',
        specs: ['40 GSM Pure Bleached', 'Grease-Resistant Barrier', 'Food Contact Certified', 'Metallic Gold Ink Bleed'],
      },
    ],
  },
  newyear: {
    id: 'newyear',
    name: 'Corporate 2026 Edition',
    seasonLabel: 'Annual Stationery & Merchandising',
    editionBadge: 'Corporate Kickstart 2026',
    heroHeadlineSerif: 'Kickstart 2026,',
    heroHeadlineSans: 'Architectural Executive Collateral for Modern Teams.',
    heroSubheadline:
      'Italian thermo-debossed executive planners, desktop wire-O calendars, and onboarding merch suites crafted with precision CMYK color fidelity.',
    heroTagline: 'Early Bird Corporate Tier Pricing with Direct Dispatch from Central Hub',
    activeCoupon: 'NEWYEAR26',
    couponDiscount: 'Tier 3 Volume Discount Applied on Early Allocations',
    accentColor: '#059669',
    bgAtmosphere: 'bg-gradient-to-b from-[#0B1528] via-[#080F1D] to-[#040810]',
    heroImage: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?auto=format&fit=crop&w=1200&q=85',
    heroImageAlt: 'Executive 2026 Leatherette Planner and Desk Architecture',
    collectionTitle: '2026 Corporate Collateral & Executive Gift Packs',
    collectionSubtitle: 'Curated onboarding starter kits, debossed executive diaries, and wire-O desk calendars with early allocation volume curves.',
    curatedCategories: ['2026 Executive Diaries', 'Desk Wire-O Calendars', 'Corporate Onboarding Kits', 'Custom Branded Hoodies'],
    curatedProducts: [
      {
        id: 'ny-planner-deluxe',
        name: 'Thermo-Debossed Executive 2026 Planner',
        edition: 'Italian PU Leatherette',
        price: '₹340/unit',
        unitPrice: 340,
        savings: 'SAVE 30%',
        image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?auto=format&fit=crop&w=800&q=80',
        description: 'Hardbound planner with year debossing, 80 GSM Japanese acid-free cream paper, ribbon marker, and custom metallic pen holder.',
        specs: ['Italian PU Leather', 'Blind Hydraulic Deboss', '80 GSM Acid-Free Cream', 'Gilt Foil Edge Option'],
      },
      {
        id: 'ny-desk-calendar',
        name: 'Architectural Wire-O Desk Calendar',
        edition: '250 GSM Triple-Coated Art Card',
        price: '₹95/unit',
        unitPrice: 95,
        savings: 'SAVE 38%',
        image: 'https://images.unsplash.com/photo-1632062549850-44a0a6eede16?auto=format&fit=crop&w=800&q=80',
        description: '12-leaf desktop calendar with heavy black tent mount board, twin-loop wire binding, and custom company holiday highlighted grids.',
        specs: ['250 GSM Art Card', 'Hardboard Tent Stand', 'Twin-Loop Wire Binding', 'Matte Anti-Glare Coating'],
      },
      {
        id: 'ny-pen-box',
        name: 'Laser-Engraved Matte Pen Slipcase Set',
        edition: 'Weighted Solid Brass Core',
        price: '₹185/unit',
        unitPrice: 185,
        savings: 'SAVE 25%',
        image: 'https://images.unsplash.com/photo-1583341655648-78bdf4ed6d13?auto=format&fit=crop&w=800&q=80',
        description: 'Twist-action heavy metal ballpoint pen with precision laser-engraved monogram in a matching velvet-lined magnetic presentation sleeve.',
        specs: ['Matte Black Anodized', 'Precision Fiber Laser', 'German Black Ink Cartridge', 'Velvet Interior Bed'],
      },
      {
        id: 'ny-onboarding-kit',
        name: 'Turnkey Welcome Merch Carton',
        edition: 'Full Color Exterior Litho',
        price: '₹890/kit',
        unitPrice: 890,
        savings: 'SAVE 40%',
        image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80',
        description: 'All-in-one onboarding box containing customized tee, notebook, stainless bottle, sticker sheet, and founder welcome envelope.',
        specs: ['Crash-Lock E-Flute', 'Custom EVA Insert Bed', 'Matte Scuff-Free Film', '48-Hour Pack & Dispatch'],
      },
    ],
  },
  smartpress: {
    id: 'smartpress',
    name: 'Smartpress Minimalist Edition',
    seasonLabel: 'Print Engineering & Tactile Substrates',
    editionBadge: 'Crafted for Print Connoisseurs',
    heroHeadlineSerif: 'Tactile Architecture,',
    heroHeadlineSans: 'Engineered on 100% Virgin Fiber & HP Indigo 12000.',
    heroSubheadline:
      'Subtle preflight intelligence, micro-registered Scodix 3D spot polymer, and 400 GSM soft-touch suede coatings calibrated for global creative studios.',
    heroTagline: 'Certified Color Reproduction Under ISO 12647-2 Commercial Standards',
    activeCoupon: 'SMARTSTUDIO',
    couponDiscount: 'Complimentary Tactile Swatch Deck with Every Run',
    accentColor: '#00AEEF',
    bgAtmosphere: 'bg-gradient-to-b from-[#0F141C] via-[#0A0D12] to-[#06080B]',
    heroImage: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?auto=format&fit=crop&w=1200&q=85',
    heroImageAlt: 'Tactile Velvet Cards & Swatch Fan Deck Architecture',
    collectionTitle: 'High-Precision Commercial Print Specimens',
    collectionSubtitle: 'Explore our benchmark production formats. Manufactured with micro-registered Scodix 3D relief, velvet BOPP, and liquid toner fidelity.',
    curatedCategories: ['Tactile Visiting Cards', 'Heidelberg Catalogues', 'Die-Cut Vinyl Labels', 'Hardcover Portfolios'],
    curatedProducts: [
      {
        id: 'sp-velvet-cards',
        name: 'Tactile Velvet Cards with 3D Polymer',
        edition: '400 GSM Finnish Virgin Board',
        price: '₹2.80/card',
        unitPrice: 2.8,
        savings: 'SAVE 31%',
        image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?auto=format&fit=crop&w=800&q=80',
        description: 'Micro-etched silk suede surface that eliminates 99% of surface glare, paired with high-build clear liquid polymer accents.',
        specs: ['400 GSM Extra-Rigid', 'Velvet Thermal Film', 'Scodix Ultra 3D 60μm', 'Razor Guillotine Trim'],
      },
      {
        id: 'sp-heidelberg-catalog',
        name: 'Heidelberg Triple-Scored Marketing Brochure',
        edition: '200 GSM Silk Text + 350 GSM Cover',
        price: '₹18.00/unit',
        unitPrice: 18.0,
        savings: 'SAVE 45%',
        image: 'https://images.unsplash.com/photo-1632062549850-44a0a6eede16?auto=format&fit=crop&w=800&q=80',
        description: '8-page landscape brochure with precision automated score folds preventing paper fiber cracking on heavyweight ink saturation.',
        specs: ['Heidelberg XL 106', 'Creased & Folded', 'Anti-Fingerprint Silk', 'Zero Ink Cracking'],
      },
      {
        id: 'sp-swatch-box',
        name: 'Physical Paper & Finish Swatch Vault',
        edition: 'Studio Standard 24 Substrates',
        price: '₹499/vault',
        unitPrice: 499,
        savings: 'REBATE ON FIRST RUN',
        image: 'https://images.unsplash.com/photo-1624567881801-a5a85867d990?auto=format&fit=crop&w=800&q=80',
        description: 'Comprehensive physical swatch box containing every commercial paper weight (80 to 600 GSM), foils, coatings, and flutes.',
        specs: ['24 Substrate Swatches', '5 Specialty Foil Stamps', '4 Spot UV Build Heights', 'Hardcover Storage Box'],
      },
      {
        id: 'sp-unboxing-mailer',
        name: 'Structural Crash-Lock Mailer Carton',
        edition: 'E-Flute 1.8mm High-Density Litho',
        price: '₹28.50/unit',
        unitPrice: 28.5,
        savings: 'SAVE 35%',
        image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80',
        description: 'Tamper-evident structural mailer manufactured from 100% circular recycled fluting with edge-to-edge bleed litho exterior.',
        specs: ['E-Flute 350 GSM Skin', 'Crash-Lock Assembly', 'Water-Based Pigment', 'Crush-Tested 22 ECT'],
      },
    ],
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding & Gala Edition',
    seasonLabel: 'Haute Stationery & Artisanal Craft',
    editionBadge: 'Artisanal Deckle Collection',
    heroHeadlineSerif: 'Eternal Celebrations,',
    heroHeadlineSans: 'Crafted on Deckle Edge Cotton & Letterpress Gold.',
    heroSubheadline:
      'Hand-feathered 350 GSM cotton rag paper, cast-brass intaglio foil stamping, and botanical beeswax monogram seals for luxury galas and matrimonial ceremonies.',
    heroTagline: 'Complimentary Calligraphic Monogram Die Casting on Orders > ₹7,999',
    activeCoupon: 'ATELIER24',
    couponDiscount: 'Complimentary Calligraphic Monogram Die Casting Included',
    accentColor: '#B76E79',
    bgAtmosphere: 'bg-gradient-to-b from-[#1C1417] via-[#140E10] to-[#0A0708]',
    heroImage: 'https://images.unsplash.com/photo-1765483469974-3f544df12caf?auto=format&fit=crop&w=1200&q=85',
    heroImageAlt: 'Bespoke Deckle Edge Wedding Suite with Gilt Monograms',
    collectionTitle: 'Haute Wedding & Gala Stationery Suites',
    collectionSubtitle: 'Curated matrimonial invitation suites, vellum menu overlays, and wax-sealed stationery crafted with heritage letterpress.',
    curatedCategories: ['Deckle Edge Invitations', 'Vellum Wrap Overlays', 'Wax Sealed Envelopes', 'Gilded Table Numbers'],
    curatedProducts: [
      {
        id: 'wed-deckle-card',
        name: 'Hand-Deckled Cotton Rag Gala Invitation',
        edition: '350 GSM Pure Botanical Rag',
        price: '₹38/unit',
        unitPrice: 38,
        savings: 'SAVE 25%',
        image: 'https://images.unsplash.com/photo-1765483469974-3f544df12caf?auto=format&fit=crop&w=800&q=80',
        description: 'Hand-torn feathered perimeter on 100% organic cotton paper with deep intaglio letterpress impression and 24K warm gold leaf.',
        specs: ['350 GSM Cotton Rag', 'Natural Feathered Deckle', 'Deep Letterpress Bite', '24K Foil Stamping'],
      },
      {
        id: 'wed-wax-envelope',
        name: 'Wax-Sealed Deckle Envelope Suite',
        edition: 'Hand-Poured Beeswax Monogram',
        price: '₹22/unit',
        unitPrice: 22,
        savings: 'SAVE 33%',
        image: 'https://images.unsplash.com/photo-1625552186152-668cd2f0b707?auto=format&fit=crop&w=800&q=80',
        description: 'Custom European flap envelope lined with metallic champagne paper and sealed with an authentic wax seal featuring your crest.',
        specs: ['220 GSM Cotton Stock', 'Metallic Foil Inner Liner', 'Real Beeswax Seal', 'Matching Calligraphy Font'],
      },
      {
        id: 'wed-vellum-docket',
        name: 'Translucent Vellum Overlay & Monogram Suite',
        edition: '110 GSM Cloud Vellum',
        price: '₹14/unit',
        unitPrice: 14,
        savings: 'SAVE 40%',
        image: 'https://images.unsplash.com/photo-1632062549850-44a0a6eede16?auto=format&fit=crop&w=800&q=80',
        description: 'Semi-translucent frosted vellum wrap bound with silk chiffon ribbon and micro-calligraphic gold itinerary printing.',
        specs: ['110 GSM Cloud Vellum', 'Silk Chiffon Ribbon', 'Metallic Gold Screen', 'Precision Crease Fold'],
      },
      {
        id: 'wed-rigid-favor',
        name: 'Bespoke Matchbox Rigid Favor Box',
        edition: '2.0mm Board + Velvet Wrap',
        price: '₹68/unit',
        unitPrice: 68,
        savings: 'SAVE 35%',
        image: 'https://images.unsplash.com/photo-1694481901573-a970f982ac5e?auto=format&fit=crop&w=800&q=80',
        description: 'Sliding drawer favor box with satin pull loop for artisan confectioneries, scented wax bars, or bespoke silver coins.',
        specs: ['2.0mm Rigid Greyboard', 'Soft-Touch Rose Velvet', 'Satin Pull Loop', 'Custom Foil Monogram'],
      },
    ],
  },
};
