import type { City } from '@/types';

export const sanDiegoCities: City[] = [
  // ============================================================
  // SAN DIEGO (Hub)
  // ============================================================
  {
    name: 'San Diego',
    slug: 'san-diego',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92101', '92103', '92104'],
    coordinates: { lat: 32.7157, lng: -117.1611 },
    urlPath: '/california/san-diego-pool-service/',
    neighborhoods: [
      {
        name: 'Mission Hills',
        description:
          'Historic hillside neighborhood with mature landscaping and older pool installations that benefit from regular professional care.',
      },
      {
        name: 'North Park',
        description:
          'Vibrant urban community where compact backyards with pools require efficient maintenance in a warm inland microclimate.',
      },
      {
        name: 'Point Loma',
        description:
          'Coastal peninsula neighborhood where ocean salt air and marine layer moisture create unique pool chemistry challenges.',
      },
    ],
    landmarks: ['Balboa Park', 'San Diego Zoo', 'Petco Park'],
    climateNotes:
      'San Diego enjoys a mild Mediterranean climate with average summer highs around 76F near the coast and warmer temperatures inland. Rainfall is minimal, averaging about 10 inches per year, mostly between November and March.',
    waterNotes:
      'San Diego water is moderately hard, sourced primarily from imported Colorado River and Northern California supplies, requiring regular calcium and pH monitoring.',
    metaTitle: 'San Diego Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool cleaning and maintenance in San Diego, CA. Trusted by homeowners across the metro. Call Cabana Pools for a free quote today!',
    heroDescription:
      'Cabana Pools provides expert pool service across San Diego, keeping your pool sparkling year-round in Southern California\'s ideal swimming climate.',
    introContent:
      'Cabana Pools is proud to serve the San Diego metro area with reliable, professional pool maintenance. Our CPO-certified technicians understand the unique water chemistry, climate patterns, and equipment needs of San Diego pools. Whether you are in a coastal neighborhood or further inland, we deliver consistent, high-quality care.',
    faqs: [
      {
        question: 'How much does pool service cost in San Diego?',
        answer:
          'Most San Diego homeowners pay between $130 and $180 per month for weekly pool service, with all chemicals included. Pricing varies based on pool size and equipment complexity.',
      },
      {
        question: 'Do you service all neighborhoods in San Diego?',
        answer:
          'Yes, we serve the entire San Diego metro area including Mission Hills, North Park, Point Loma, and surrounding communities. Our technicians run established weekly routes throughout the city.',
      },
      {
        question: 'What makes Cabana Pools different from other San Diego pool companies?',
        answer:
          'Our CPO-certified technicians, transparent pricing with all chemicals included, and a 5-star Google rating set us apart. We focus on proactive maintenance rather than reactive repairs.',
      },
    ],
    nearbyCities: ['la-jolla', 'coronado', 'del-mar'],
    isPrimary: true,
  },

  // ============================================================
  // LA JOLLA
  // ============================================================
  {
    name: 'La Jolla',
    slug: 'la-jolla',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92037', '92038'],
    coordinates: { lat: 32.8328, lng: -117.2713 },
    urlPath: '/california/san-diego-pool-service/la-jolla-pool-service/',
    neighborhoods: [
      {
        name: 'La Jolla Shores',
        description:
          'Beachfront community where ocean proximity accelerates salt corrosion and equipment wear on pool systems.',
      },
      {
        name: 'Bird Rock',
        description:
          'Coastal village neighborhood with a mix of modern and mid-century homes featuring pools exposed to consistent marine air.',
      },
      {
        name: 'La Jolla Village',
        description:
          'Upscale residential area with larger estate pools that require meticulous maintenance and premium finishes.',
      },
    ],
    landmarks: ['La Jolla Cove', 'Torrey Pines State Reserve', 'UCSD Campus'],
    climateNotes:
      'La Jolla has a coastal microclimate with mild temperatures year-round, summer highs averaging 72F, and regular morning marine layer that keeps humidity elevated.',
    waterNotes:
      'Coastal salt air combined with moderately hard municipal water requires diligent chemical balancing and corrosion prevention on pool equipment.',
    metaTitle: 'La Jolla Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool cleaning and maintenance in La Jolla, CA. Serving La Jolla Shores, Bird Rock & the Village. Call Cabana Pools for a free quote!',
    heroDescription:
      'Keep your La Jolla pool pristine with Cabana Pools, delivering expert care tailored to the coastal conditions of this iconic San Diego community.',
    introContent:
      'Cabana Pools brings professional pool care to La Jolla homeowners, addressing the unique challenges of coastal pool ownership. Salt air, marine layer moisture, and high property standards demand meticulous attention. Our technicians are trained to protect your investment with proactive maintenance.',
    faqs: [
      {
        question: 'Does ocean salt air affect my La Jolla pool?',
        answer:
          'Yes, salt air accelerates corrosion on metal components, fittings, and heaters. Our technicians apply protective protocols and inspect equipment for early signs of salt damage at every visit.',
      },
      {
        question: 'How often should my La Jolla pool be serviced?',
        answer:
          'We recommend weekly service for La Jolla pools. The coastal environment introduces salt residue, pollen, and marine debris that accumulate quickly without regular attention.',
      },
      {
        question: 'Do you service La Jolla Shores and Bird Rock?',
        answer:
          'Absolutely. We serve all La Jolla neighborhoods including La Jolla Shores, Bird Rock, the Village, La Jolla Mesa, and surrounding areas on established weekly routes.',
      },
    ],
    nearbyCities: ['del-mar', 'scripps-ranch', 'san-diego'],
    isPrimary: false,
  },

  // ============================================================
  // CARMEL VALLEY
  // ============================================================
  {
    name: 'Carmel Valley',
    slug: 'carmel-valley',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92130'],
    coordinates: { lat: 32.9596, lng: -117.2264 },
    urlPath: '/california/san-diego-pool-service/carmel-valley-pool-service/',
    neighborhoods: [
      {
        name: 'Pacific Highlands Ranch',
        description:
          'Newer master-planned community with modern pools and energy-efficient equipment in a warm coastal-adjacent setting.',
      },
      {
        name: 'Torrey Hills',
        description:
          'Residential area bordering Torrey Pines with hillside homes featuring pools that face afternoon sun exposure.',
      },
      {
        name: 'Del Mar Mesa',
        description:
          'Semi-rural enclave with larger lots and pools surrounded by native vegetation and canyon landscapes.',
      },
    ],
    landmarks: ['One Paseo', 'Torrey Pines State Reserve', 'Carmel Valley Recreation Center'],
    climateNotes:
      'Carmel Valley sits a few miles inland from the coast, with summer highs around 78F. The area gets occasional Santa Ana winds that deposit dust and ash into pools.',
    waterNotes:
      'Water is supplied by the City of San Diego with moderate hardness levels that require consistent calcium and alkalinity management.',
    metaTitle: 'Carmel Valley Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Carmel Valley, CA. Serving Pacific Highlands Ranch, Torrey Hills & more. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools keeps Carmel Valley pools sparkling with weekly service tailored to this family-friendly community\'s warm inland climate.',
    introContent:
      'Cabana Pools provides reliable pool care throughout Carmel Valley, one of San Diego\'s most popular family communities. Our technicians understand the local water conditions and climate patterns that affect pool health in this coastal-adjacent neighborhood. From Pacific Highlands Ranch to Torrey Hills, we deliver consistent professional service.',
    faqs: [
      {
        question: 'What areas in Carmel Valley do you service?',
        answer:
          'We cover all of Carmel Valley including Pacific Highlands Ranch, Torrey Hills, Del Mar Mesa, and surrounding 92130 neighborhoods on established weekly routes.',
      },
      {
        question: 'How do Santa Ana winds affect my Carmel Valley pool?',
        answer:
          'Santa Ana events blow dust, ash, and debris into pools, spiking turbidity and straining filters. We adjust cleaning protocols during wind events to keep your pool clear.',
      },
      {
        question: 'Do you maintain saltwater pools in Carmel Valley?',
        answer:
          'Yes, many Carmel Valley homes have saltwater systems. Our technicians are trained in salt cell maintenance, calibration, and the unique chemistry balancing these systems require.',
      },
    ],
    nearbyCities: ['del-mar', 'la-jolla', 'encinitas'],
    isPrimary: false,
  },

  // ============================================================
  // CARLSBAD
  // ============================================================
  {
    name: 'Carlsbad',
    slug: 'carlsbad',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92008', '92009', '92011'],
    coordinates: { lat: 33.1581, lng: -117.3506 },
    urlPath: '/california/san-diego-pool-service/carlsbad-pool-service/',
    neighborhoods: [
      {
        name: 'La Costa',
        description:
          'Upscale planned community with resort-style pools and water features that require attentive maintenance.',
      },
      {
        name: 'Aviara',
        description:
          'Luxury hillside neighborhood overlooking the Batiquitos Lagoon, with large pools and premium finishes.',
      },
      {
        name: 'Bressi Ranch',
        description:
          'Family-oriented newer development with modern pool designs and energy-efficient equipment.',
      },
    ],
    landmarks: ['LEGOLAND California', 'Carlsbad Flower Fields', 'Batiquitos Lagoon'],
    climateNotes:
      'Carlsbad enjoys a coastal climate with summer highs in the mid-70s near the beach and low 80s inland. Morning marine layer is common from May through July.',
    waterNotes:
      'Carlsbad Municipal Water District delivers moderately hard water that benefits from regular calcium monitoring and scale prevention.',
    metaTitle: 'Carlsbad Pool Service | Cabana Pools',
    metaDescription:
      'Trusted pool cleaning and maintenance in Carlsbad, CA. Serving La Costa, Aviara & Bressi Ranch. Call Cabana Pools for expert service!',
    heroDescription:
      'Cabana Pools delivers reliable pool service to Carlsbad homeowners, from coastal properties to inland communities like La Costa and Aviara.',
    introContent:
      'Cabana Pools is the trusted pool service provider for Carlsbad residents. From the flower fields to the lagoon, our team keeps pools across this North County coastal city in top condition. We understand the local water supply and coastal conditions that shape Carlsbad pool care needs.',
    faqs: [
      {
        question: 'Do you service pools near the Carlsbad coast?',
        answer:
          'Yes, we service all Carlsbad neighborhoods from the beachfront areas through La Costa and Aviara. Coastal pools receive extra attention to prevent salt air corrosion.',
      },
      {
        question: 'How much does pool service cost in Carlsbad?',
        answer:
          'Carlsbad pool service typically runs $140 to $190 per month for weekly visits, with all chemicals included. Larger estate pools in Aviara or La Costa may be priced slightly higher.',
      },
      {
        question: 'Can you maintain my pool while I travel?',
        answer:
          'Absolutely. Many Carlsbad clients travel seasonally. We maintain your pool on its regular schedule and send service reports so you always know the status, even when away.',
      },
    ],
    nearbyCities: ['encinitas', 'san-marcos', 'vista'],
    isPrimary: false,
  },

  // ============================================================
  // EL CAJON
  // ============================================================
  {
    name: 'El Cajon',
    slug: 'el-cajon',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92019', '92020', '92021'],
    coordinates: { lat: 32.7948, lng: -116.9625 },
    urlPath: '/california/san-diego-pool-service/el-cajon-pool-service/',
    neighborhoods: [
      {
        name: 'Granite Hills',
        description:
          'Established residential area with mature trees and pools that collect significant leaf and pollen debris.',
      },
      {
        name: 'Fletcher Hills',
        description:
          'Hillside neighborhood with panoramic views and pools that face direct afternoon sun exposure and high evaporation.',
      },
      {
        name: 'Rancho San Diego',
        description:
          'Suburban community southeast of El Cajon with a mix of newer and older pools in a warm valley setting.',
      },
    ],
    landmarks: ['Sycuan Casino Resort', 'Water Conservation Garden', 'Parkway Plaza Mall'],
    climateNotes:
      'El Cajon sits in a valley east of San Diego where summer highs regularly reach the mid-90s. The "box" valley geography traps heat, making pools essential for relief.',
    waterNotes:
      'Helix Water District supplies El Cajon with water that tends toward higher hardness, requiring regular calcium and scale management.',
    metaTitle: 'El Cajon Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in El Cajon, CA. Serving Granite Hills, Fletcher Hills & Rancho San Diego. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools helps El Cajon homeowners beat the valley heat with expert pool service tailored to the area\'s warm climate and hard water.',
    introContent:
      'Cabana Pools provides dependable pool care to El Cajon residents living in one of San Diego County\'s warmest valleys. The combination of intense summer heat, hard water, and tree debris makes professional maintenance essential. Our technicians run regular routes through Granite Hills, Fletcher Hills, and Rancho San Diego.',
    faqs: [
      {
        question: 'Why does my El Cajon pool lose water so fast in summer?',
        answer:
          'El Cajon\'s valley heat, with summer highs in the mid-90s, drives significant evaporation. Pools can lose a quarter inch or more per day. We monitor water levels and advise on auto-fill systems.',
      },
      {
        question: 'Is El Cajon water hard?',
        answer:
          'Yes, Helix Water District water tends to be moderately hard. We proactively manage calcium hardness and alkalinity to prevent scale buildup on your pool surfaces and equipment.',
      },
      {
        question: 'Do you service Rancho San Diego pools?',
        answer:
          'Yes, Rancho San Diego is part of our El Cajon service area. We run weekly routes through the entire 92019, 92020, and 92021 ZIP codes.',
      },
    ],
    nearbyCities: ['lakeside', 'alpine', 'san-diego'],
    isPrimary: false,
  },

  // ============================================================
  // VISTA
  // ============================================================
  {
    name: 'Vista',
    slug: 'vista',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92081', '92083', '92084'],
    coordinates: { lat: 33.2000, lng: -117.2426 },
    urlPath: '/california/san-diego-pool-service/vista-pool-service/',
    neighborhoods: [
      {
        name: 'Shadowridge',
        description:
          'Master-planned community with well-maintained pools and common area water features in a warm inland setting.',
      },
      {
        name: 'Vista Village',
        description:
          'Downtown area with older homes and established pools that benefit from modernization and consistent maintenance.',
      },
      {
        name: 'Rancho Buena Vista',
        description:
          'Residential neighborhood with a mix of single-family homes featuring pools in a sunny inland microclimate.',
      },
    ],
    landmarks: ['Moonlight Amphitheatre', 'Alta Vista Botanical Gardens', 'Brengle Terrace Park'],
    climateNotes:
      'Vista sits about 8 miles inland in North County, with summer highs in the low-to-mid 80s. The area is warmer and drier than the immediate coast.',
    waterNotes:
      'Vista Irrigation District supplies water with moderate hardness that requires regular monitoring to prevent calcium scaling in pools.',
    metaTitle: 'Vista Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool cleaning and maintenance in Vista, CA. Serving Shadowridge, Vista Village & more. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools provides expert pool service in Vista, keeping your pool clean and balanced in North County\'s warm inland climate.',
    introContent:
      'Cabana Pools delivers consistent pool care to Vista homeowners throughout this growing North County community. Our technicians are familiar with the local water supply and inland climate conditions that affect pool health. From Shadowridge to Vista Village, we keep Vista pools in excellent shape.',
    faqs: [
      {
        question: 'How much is pool service in Vista?',
        answer:
          'Most Vista homeowners pay between $130 and $175 per month for weekly pool service with all chemicals included. Pricing depends on pool size and equipment.',
      },
      {
        question: 'Do you service Shadowridge in Vista?',
        answer:
          'Yes, Shadowridge is a core part of our Vista service area. We run weekly routes through Shadowridge, Vista Village, Rancho Buena Vista, and surrounding neighborhoods.',
      },
      {
        question: 'How quickly can I start pool service in Vista?',
        answer:
          'Most Vista residents are scheduled within 3 to 5 business days. We have established routes running through the Vista area weekly.',
      },
    ],
    nearbyCities: ['san-marcos', 'carlsbad', 'escondido'],
    isPrimary: false,
  },

  // ============================================================
  // TEMECULA
  // ============================================================
  {
    name: 'Temecula',
    slug: 'temecula',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92590', '92591', '92592'],
    coordinates: { lat: 33.4936, lng: -117.1484 },
    urlPath: '/california/san-diego-pool-service/temecula-pool-service/',
    neighborhoods: [
      {
        name: 'Redhawk',
        description:
          'Popular master-planned community with family pools and community amenities in a hot inland valley.',
      },
      {
        name: 'Wolf Creek',
        description:
          'Newer residential development with modern pool designs and efficient equipment suited to the warm climate.',
      },
      {
        name: 'Temecula Wine Country',
        description:
          'Estate properties near the wineries with larger pools and outdoor entertaining areas.',
      },
    ],
    landmarks: ['Old Town Temecula', 'Pechanga Resort Casino', 'Temecula Valley Wine Country'],
    climateNotes:
      'Temecula sits in an inland valley where summer highs frequently reach the upper 90s to low 100s. Winters are mild with occasional frost. The area receives about 12 inches of rain annually.',
    waterNotes:
      'Rancho California Water District supplies Temecula with water that is moderately hard, and many properties use reclaimed water for landscaping adjacent to pools.',
    metaTitle: 'Temecula Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool cleaning and maintenance in Temecula, CA. Serving Redhawk, Wolf Creek & wine country. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools keeps Temecula pools crystal clear through the valley\'s intense summer heat with reliable weekly service and expert care.',
    introContent:
      'Cabana Pools serves Temecula homeowners with professional pool maintenance designed for the inland valley\'s demanding climate. With summer temperatures regularly exceeding 95F, a well-maintained pool is essential. Our team understands the local water conditions and provides proactive care to Redhawk, Wolf Creek, and wine country properties.',
    faqs: [
      {
        question: 'How does Temecula heat affect my pool?',
        answer:
          'Summer temperatures in the upper 90s to low 100s accelerate chlorine consumption, increase evaporation, and promote algae growth. Our enhanced summer protocols address all three factors.',
      },
      {
        question: 'Do you service the Temecula wine country area?',
        answer:
          'Yes, we service pools throughout the Temecula area including wine country estates, Redhawk, Wolf Creek, and all neighborhoods within the 92590, 92591, and 92592 ZIP codes.',
      },
      {
        question: 'Can Cabana handle large pools in Temecula?',
        answer:
          'Absolutely. Many Temecula estate properties have large pools and water features. We adjust chemical quantities and service time to match the size and complexity of your pool.',
      },
    ],
    nearbyCities: ['fallbrook', 'escondido', 'vista'],
    isPrimary: false,
  },

  // ============================================================
  // RANCHO SANTE FE (typo preserved from live site)
  // ============================================================
  {
    name: 'Rancho Santa Fe',
    slug: 'rancho-sante-fe',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92067'],
    coordinates: { lat: 33.0164, lng: -117.2028 },
    urlPath: '/california/san-diego-pool-service/rancho-sante-fe-pool-service/',
    neighborhoods: [
      {
        name: 'The Covenant',
        description:
          'Exclusive gated community with estate pools, water features, and premium finishes requiring meticulous care.',
      },
      {
        name: 'Fairbanks Ranch',
        description:
          'Luxury residential enclave with large resort-style pools and extensive outdoor living areas.',
      },
      {
        name: 'Cielo',
        description:
          'Gated hilltop community with modern estate homes and infinity-edge pools overlooking coastal valleys.',
      },
    ],
    landmarks: ['Rancho Santa Fe Golf Club', 'The Inn at Rancho Santa Fe', 'Village of Rancho Santa Fe'],
    climateNotes:
      'Rancho Santa Fe enjoys a mild inland climate with summer highs in the low 80s, slightly warmer than the coast but cooler than the eastern valleys.',
    waterNotes:
      'Santa Fe Irrigation District provides water with moderate hardness, and many estate properties use supplemental well water requiring additional mineral management.',
    metaTitle: 'Rancho Santa Fe Pool Service | Cabana Pools',
    metaDescription:
      'Premium pool service in Rancho Santa Fe, CA. Expert care for estate pools and luxury properties. Call Cabana Pools for a consultation!',
    heroDescription:
      'Cabana Pools provides premium pool service to Rancho Santa Fe estates, delivering the meticulous care that luxury properties demand.',
    introContent:
      'Cabana Pools serves the distinguished community of Rancho Santa Fe with pool care befitting its world-class properties. Our technicians are experienced with large estate pools, vanishing edges, water features, and premium finishes. We deliver the consistent, detail-oriented service that Rancho Santa Fe homeowners expect.',
    faqs: [
      {
        question: 'Do you service large estate pools in Rancho Santa Fe?',
        answer:
          'Yes, we specialize in maintaining larger residential pools and water features common in Rancho Santa Fe. Our technicians are experienced with complex systems, premium finishes, and multi-feature installations.',
      },
      {
        question: 'How discreet is your Rancho Santa Fe pool service?',
        answer:
          'We understand the privacy expectations of Rancho Santa Fe residents. Our technicians arrive on schedule, work efficiently, and respect the security protocols of gated communities.',
      },
      {
        question: 'Can you maintain infinity pools and water features?',
        answer:
          'Absolutely. Many Rancho Santa Fe properties feature infinity edges, grottos, and water features. Our team is trained in the specialized maintenance these installations require.',
      },
    ],
    nearbyCities: ['del-mar', 'encinitas', 'fairbanks-ranch'],
    isPrimary: false,
  },

  // ============================================================
  // DEL MAR
  // ============================================================
  {
    name: 'Del Mar',
    slug: 'del-mar',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92014'],
    coordinates: { lat: 32.9595, lng: -117.2653 },
    urlPath: '/california/san-diego-pool-service/del-mar-pool-service/',
    neighborhoods: [
      {
        name: 'Del Mar Heights',
        description:
          'Elevated neighborhood with ocean views and pools exposed to consistent coastal breezes and salt air.',
      },
      {
        name: 'Olde Del Mar',
        description:
          'Charming village area near the coast with a mix of classic and renovated properties featuring pools steps from the beach.',
      },
      {
        name: 'Del Mar Mesa',
        description:
          'Inland community bordering Los Penasquitos Canyon with larger lots and pools in a slightly warmer microclimate.',
      },
    ],
    landmarks: ['Del Mar Racetrack', 'Seagrove Park', 'Torrey Pines State Beach'],
    climateNotes:
      'Del Mar has a classic coastal climate with summer highs around 74F and morning marine layer through late spring. The ocean moderates temperature swings year-round.',
    waterNotes:
      'Del Mar receives water from the San Diego County Water Authority with moderate hardness, and oceanfront properties face additional salt spray challenges.',
    metaTitle: 'Del Mar Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool service in Del Mar, CA. Coastal pool specialists serving Del Mar Heights, Olde Del Mar & more. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools keeps Del Mar pools pristine with coastal-aware service that addresses salt air, marine layer, and ocean-proximity challenges.',
    introContent:
      'Cabana Pools provides specialized pool care to Del Mar homeowners along this iconic stretch of the San Diego coast. Ocean proximity brings unique challenges including salt spray, elevated humidity, and accelerated equipment wear. Our technicians deliver proactive maintenance that protects your pool and equipment.',
    faqs: [
      {
        question: 'How does living near the ocean affect my Del Mar pool?',
        answer:
          'Ocean proximity exposes pool equipment to salt spray, which accelerates corrosion. Our Del Mar protocols include regular equipment inspection and protective measures to extend the life of your pool systems.',
      },
      {
        question: 'Do you service pools in Del Mar Heights?',
        answer:
          'Yes, we serve all Del Mar neighborhoods including Del Mar Heights, Olde Del Mar, and Del Mar Mesa on established weekly routes.',
      },
      {
        question: 'How do I keep my Del Mar pool warm during marine layer season?',
        answer:
          'Morning marine layer cools pool water, especially May through July. We can advise on solar covers, heat pumps, and heater settings to maintain comfortable temperatures.',
      },
    ],
    nearbyCities: ['la-jolla', 'carmel-valley', 'rancho-sante-fe'],
    isPrimary: false,
  },

  // ============================================================
  // ESCONDIDO
  // ============================================================
  {
    name: 'Escondido',
    slug: 'escondido',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92025', '92026', '92027'],
    coordinates: { lat: 33.1192, lng: -117.0864 },
    urlPath: '/california/san-diego-pool-service/escondido-pool-service/',
    neighborhoods: [
      {
        name: 'Hidden Trails',
        description:
          'Residential community in northern Escondido with newer homes and pools in a warm inland valley setting.',
      },
      {
        name: 'Kit Carson Park Area',
        description:
          'Established neighborhood near the park with mature landscaping and pools shaded by large trees.',
      },
      {
        name: 'San Pasqual Valley',
        description:
          'Rural and semi-rural area east of Escondido with larger properties and pools in an agricultural setting.',
      },
    ],
    landmarks: ['San Diego Zoo Safari Park', 'Daley Ranch', 'California Center for the Arts'],
    climateNotes:
      'Escondido sits in a warm inland valley with summer highs in the upper 80s to low 90s. The surrounding hills can trap heat, and Santa Ana winds bring dry, hot conditions in fall.',
    waterNotes:
      'Escondido receives water from the Escondido-Vista Water Authority with moderate to high hardness levels that require consistent calcium management.',
    metaTitle: 'Escondido Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool maintenance in Escondido, CA. Serving Hidden Trails, San Pasqual Valley & more. Call Cabana Pools for expert care!',
    heroDescription:
      'Cabana Pools delivers dependable pool service to Escondido, tackling the inland valley heat and hard water that challenge local pools.',
    introContent:
      'Cabana Pools serves Escondido homeowners with pool maintenance designed for this warm inland valley. Summer heat, hard water, and seasonal wind events all affect pool health, and our technicians address each factor with tailored protocols. From Hidden Trails to San Pasqual Valley, we keep Escondido pools balanced and clean.',
    faqs: [
      {
        question: 'How does Escondido heat affect pool chemistry?',
        answer:
          'Summer highs in the upper 80s to low 90s accelerate chlorine consumption and algae growth. We adjust chemical dosing during hot months to keep your pool balanced despite the heat.',
      },
      {
        question: 'Do you offer pool service near the Safari Park?',
        answer:
          'Yes, we serve all Escondido areas including the San Pasqual Valley neighborhood near the San Diego Zoo Safari Park, as well as the central and northern communities.',
      },
      {
        question: 'Is Escondido water hard?',
        answer:
          'Escondido-Vista Water Authority water tends to be moderately hard. We monitor calcium hardness and alkalinity closely to prevent scale buildup on pool surfaces and equipment.',
      },
    ],
    nearbyCities: ['san-marcos', 'ramona', 'poway'],
    isPrimary: false,
  },

  // ============================================================
  // RAMONA
  // ============================================================
  {
    name: 'Ramona',
    slug: 'ramona',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92065'],
    coordinates: { lat: 33.0422, lng: -116.8681 },
    urlPath: '/california/san-diego-pool-service/ramona-pool-service/',
    neighborhoods: [
      {
        name: 'Ramona Town Center',
        description:
          'Central residential area with established homes and pools in the heart of this rural community.',
      },
      {
        name: 'San Diego Country Estates',
        description:
          'Semi-rural planned community with larger lots, equestrian properties, and pools in a hot foothill setting.',
      },
      {
        name: 'Mt. Woodson Area',
        description:
          'Homes near the iconic hiking destination with pools surrounded by boulder formations and chaparral.',
      },
    ],
    landmarks: ['Mt. Woodson Trail', 'Guy B. Woodward Museum', 'Ramona Grasslands Preserve'],
    climateNotes:
      'Ramona sits at about 1,400 feet elevation in the backcountry, with summer highs frequently reaching the mid-to-upper 90s. Winters can bring frost, and the area is drier than coastal communities.',
    waterNotes:
      'Ramona Municipal Water District supplies water with variable hardness, and many rural properties rely on well water with elevated mineral content.',
    metaTitle: 'Ramona Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool cleaning in Ramona, CA. Serving the backcountry community with reliable weekly service. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools serves Ramona\'s backcountry community with pool care built for the area\'s extreme summer heat and well water challenges.',
    introContent:
      'Cabana Pools brings professional pool service to Ramona, a unique backcountry community where hot summers and variable water sources create distinct maintenance challenges. Whether your property is in town or out in the San Diego Country Estates, our technicians deliver reliable weekly care tailored to local conditions.',
    faqs: [
      {
        question: 'Do you service pools on well water in Ramona?',
        answer:
          'Yes, many Ramona properties use well water with elevated iron and mineral levels. We adjust chemical protocols and stain prevention treatments to handle well water conditions effectively.',
      },
      {
        question: 'How far out do you service from Ramona?',
        answer:
          'We cover the entire 92065 ZIP code including Ramona town center, San Diego Country Estates, and surrounding rural properties on our established weekly routes.',
      },
      {
        question: 'Is pool service more expensive in Ramona?',
        answer:
          'Ramona pricing is comparable to other inland communities, typically $140 to $190 per month. Properties with well water may need additional mineral treatments that adjust pricing slightly.',
      },
    ],
    nearbyCities: ['escondido', 'poway', 'lakeside'],
    isPrimary: false,
  },

  // ============================================================
  // LAKESIDE
  // ============================================================
  {
    name: 'Lakeside',
    slug: 'lakeside',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92040'],
    coordinates: { lat: 32.8572, lng: -116.9222 },
    urlPath: '/california/san-diego-pool-service/lakeside-pool-service/',
    neighborhoods: [
      {
        name: 'Lakeview',
        description:
          'Residential area near Lindo Lake with older established homes and pools in a warm inland setting.',
      },
      {
        name: 'Blossom Valley',
        description:
          'Semi-rural neighborhood east of Lakeside with larger properties and pools surrounded by hillside vegetation.',
      },
      {
        name: 'Riverview',
        description:
          'Community along the San Diego River corridor with homes and pools in a warm, sheltered valley.',
      },
    ],
    landmarks: ['Lindo Lake Park', 'Barona Resort & Casino', 'El Monte County Park'],
    climateNotes:
      'Lakeside sits in the El Cajon Valley extension where summer highs regularly reach the low-to-mid 90s. The area is warmer and drier than coastal San Diego.',
    waterNotes:
      'Lakeside Water District provides water with moderate hardness, and some properties use private wells with higher mineral content.',
    metaTitle: 'Lakeside Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Lakeside, CA. Serving Lakeview, Blossom Valley & surrounding areas. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools provides reliable pool service in Lakeside, keeping your pool balanced and clean through the warm East County summers.',
    introContent:
      'Cabana Pools delivers dependable pool care to Lakeside homeowners in this East County community. Hot summers, moderate water hardness, and vegetation debris from surrounding hills all factor into our tailored service approach. Our technicians run regular routes through Lakeside and surrounding neighborhoods.',
    faqs: [
      {
        question: 'Do you service all of Lakeside?',
        answer:
          'Yes, we cover the entire 92040 ZIP code including Lakeview, Blossom Valley, Riverview, and all surrounding Lakeside neighborhoods on weekly routes.',
      },
      {
        question: 'How does the Lakeside heat affect my pool?',
        answer:
          'Summer highs in the 90s increase evaporation and chlorine demand. We adjust chemical dosing during hot months and recommend auto-fill systems to maintain proper water levels.',
      },
      {
        question: 'Can you service my pool equipment in Lakeside?',
        answer:
          'Absolutely. We repair and maintain pumps, filters, heaters, salt systems, and automation controllers for Lakeside pool owners as part of our comprehensive service.',
      },
    ],
    nearbyCities: ['el-cajon', 'alpine', 'ramona'],
    isPrimary: false,
  },

  // ============================================================
  // ENCINITAS
  // ============================================================
  {
    name: 'Encinitas',
    slug: 'encinitas',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92024'],
    coordinates: { lat: 33.0369, lng: -117.2919 },
    urlPath: '/california/san-diego-pool-service/encinitas-pool-service/',
    neighborhoods: [
      {
        name: 'Leucadia',
        description:
          'Eclectic coastal community with a laid-back vibe and pools exposed to ocean breezes and salt air.',
      },
      {
        name: 'Olivenhain',
        description:
          'Semi-rural inland neighborhood with larger equestrian properties and pools in a warmer microclimate.',
      },
      {
        name: 'New Encinitas',
        description:
          'Planned residential area east of I-5 with family homes and modern pool installations.',
      },
    ],
    landmarks: ['San Diego Botanic Garden', 'Self-Realization Fellowship', 'Moonlight State Beach'],
    climateNotes:
      'Encinitas has a mild coastal climate with summer highs around 76F near the beach and slightly warmer inland in Olivenhain. Marine layer is common through late spring.',
    waterNotes:
      'Olivenhain Municipal Water District delivers water with moderate hardness that requires regular monitoring for calcium and scale prevention.',
    metaTitle: 'Encinitas Pool Service | Cabana Pools',
    metaDescription:
      'Trusted pool service in Encinitas, CA. Serving Leucadia, Olivenhain & New Encinitas. Call Cabana Pools for expert pool care!',
    heroDescription:
      'Cabana Pools provides expert pool service to Encinitas residents, from the coastal bluffs of Leucadia to the rural properties of Olivenhain.',
    introContent:
      'Cabana Pools serves the diverse Encinitas community with pool care adapted to each neighborhood\'s unique conditions. Coastal properties face salt air exposure, while inland Olivenhain pools deal with warmer temperatures and tree debris. Our technicians tailor their approach to deliver optimal results wherever your pool is located.',
    faqs: [
      {
        question: 'Do you service pools in Olivenhain?',
        answer:
          'Yes, Olivenhain is a key part of our Encinitas service area. The slightly warmer, more rural conditions in Olivenhain receive adjusted protocols compared to coastal Leucadia pools.',
      },
      {
        question: 'How does the marine layer affect Encinitas pools?',
        answer:
          'Morning marine layer increases humidity and can cool pool water. It also deposits a fine mist that accumulates on surfaces. Our weekly service addresses these coastal conditions.',
      },
      {
        question: 'How much is pool service in Encinitas?',
        answer:
          'Encinitas pool service typically ranges from $140 to $185 per month for weekly visits with all chemicals included. Larger properties in Olivenhain may be priced slightly higher.',
      },
    ],
    nearbyCities: ['carlsbad', 'solana-beach', 'carmel-valley'],
    isPrimary: false,
  },

  // ============================================================
  // POWAY
  // ============================================================
  {
    name: 'Poway',
    slug: 'poway',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92064'],
    coordinates: { lat: 32.9628, lng: -117.0359 },
    urlPath: '/california/san-diego-pool-service/poway-pool-service/',
    neighborhoods: [
      {
        name: 'South Poway',
        description:
          'Established residential area with family homes and pools near excellent schools and community parks.',
      },
      {
        name: 'Old Poway',
        description:
          'Historic town center area with character homes and mature landscaping around well-used pools.',
      },
      {
        name: 'Green Valley',
        description:
          'Northern Poway neighborhood with larger lots, some equestrian properties, and pools in a warm rural setting.',
      },
    ],
    landmarks: ['Lake Poway', 'Old Poway Park', 'Blue Sky Ecological Reserve'],
    climateNotes:
      'Poway sits in a valley about 15 miles inland with summer highs in the mid-to-upper 80s. It is warmer than the coast but slightly cooler than more eastern communities.',
    waterNotes:
      'City of Poway water is moderately hard, sourced through the San Diego County Water Authority, and benefits from regular calcium and alkalinity monitoring.',
    metaTitle: 'Poway Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool maintenance in Poway, CA. Serving South Poway, Old Poway & Green Valley. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools keeps Poway pools clean and balanced with weekly service designed for this family-friendly community\'s warm inland climate.',
    introContent:
      'Cabana Pools provides professional pool care to Poway, the "City in the Country." Our technicians understand the local water quality and inland climate that shape pool maintenance needs in this family-oriented community. From South Poway to Green Valley, we deliver reliable weekly service.',
    faqs: [
      {
        question: 'Do you service all of Poway?',
        answer:
          'Yes, we cover the entire 92064 ZIP code including South Poway, Old Poway, Green Valley, and all surrounding areas on our established weekly routes.',
      },
      {
        question: 'How does Poway weather affect pool care?',
        answer:
          'Poway\'s inland location means warmer summers than the coast, increasing chlorine demand and evaporation. We adjust chemical programs seasonally to keep your pool perfectly balanced.',
      },
      {
        question: 'Can you handle pool equipment repairs in Poway?',
        answer:
          'Yes, we service and repair pumps, filters, heaters, salt cells, and automation systems for Poway pool owners. Most common repairs can be completed during a regular service visit.',
      },
    ],
    nearbyCities: ['scripps-ranch', 'escondido', 'ramona'],
    isPrimary: false,
  },

  // ============================================================
  // SCRIPPS RANCH
  // ============================================================
  {
    name: 'Scripps Ranch',
    slug: 'scripps-ranch',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92131'],
    coordinates: { lat: 32.9001, lng: -117.1017 },
    urlPath: '/california/san-diego-pool-service/scripps-ranch-pool-service/',
    neighborhoods: [
      {
        name: 'Scripps Ranch North',
        description:
          'Established community with eucalyptus-lined streets and pools that collect significant tree debris year-round.',
      },
      {
        name: 'Scripps Ranch South',
        description:
          'Family neighborhood near Lake Miramar with well-maintained homes and pools in a warm suburban setting.',
      },
      {
        name: 'Scripps Highland',
        description:
          'Hillside area with panoramic views and pools that face afternoon sun exposure and wind-blown debris.',
      },
    ],
    landmarks: ['Lake Miramar', 'Scripps Ranch Community Park', 'Hoyt Park'],
    climateNotes:
      'Scripps Ranch has a moderate inland climate with summer highs in the low-to-mid 80s. The area\'s signature eucalyptus trees drop leaves, bark, and seedpods into pools year-round.',
    waterNotes:
      'City of San Diego water serves Scripps Ranch with moderate hardness, requiring standard calcium and pH management for pool health.',
    metaTitle: 'Scripps Ranch Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool care in Scripps Ranch, CA. Handling eucalyptus debris and inland conditions. Call Cabana Pools for reliable weekly service!',
    heroDescription:
      'Cabana Pools provides expert pool service in Scripps Ranch, tackling the eucalyptus debris and inland warmth that define this community\'s pool care needs.',
    introContent:
      'Cabana Pools delivers professional pool maintenance to Scripps Ranch homeowners. This beloved San Diego community is known for its eucalyptus canopy, which means pools face constant leaf, bark, and seedpod debris. Our technicians are experienced with the extra cleaning attention Scripps Ranch pools demand.',
    faqs: [
      {
        question: 'How do you handle eucalyptus debris in Scripps Ranch pools?',
        answer:
          'Eucalyptus trees drop leaves, bark strips, and oily seedpods year-round. Our Scripps Ranch service includes enhanced skimming and filter cleaning to manage this persistent debris.',
      },
      {
        question: 'Do you service pools near Lake Miramar?',
        answer:
          'Yes, we serve all of Scripps Ranch including neighborhoods near Lake Miramar, Scripps Highland, and throughout the 92131 ZIP code.',
      },
      {
        question: 'How much is pool service in Scripps Ranch?',
        answer:
          'Scripps Ranch pool service typically costs $135 to $180 per month for weekly visits with all chemicals included. The eucalyptus debris factor is built into our standard service.',
      },
    ],
    nearbyCities: ['poway', 'la-jolla', 'san-diego'],
    isPrimary: false,
  },

  // ============================================================
  // FALLBROOK
  // ============================================================
  {
    name: 'Fallbrook',
    slug: 'fallbrook',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92028'],
    coordinates: { lat: 33.3764, lng: -117.2511 },
    urlPath: '/california/san-diego-pool-service/fallbrook-pool-service/',
    neighborhoods: [
      {
        name: 'De Luz',
        description:
          'Rural agricultural area north of Fallbrook with estate properties and pools in a hot, dry setting.',
      },
      {
        name: 'Fallbrook Village',
        description:
          'Central town area with established homes and pools surrounded by avocado groves and citrus orchards.',
      },
      {
        name: 'Live Oak Park Area',
        description:
          'Residential neighborhood near the community park with family pools in a warm inland climate.',
      },
    ],
    landmarks: ['Fallbrook Art Center', 'Live Oak Park', 'Los Jilgueros Preserve'],
    climateNotes:
      'Fallbrook is an inland North County community known as the "Avocado Capital of the World." Summer highs reach the mid-to-upper 80s with occasional heat waves pushing into the 90s.',
    waterNotes:
      'Fallbrook Public Utility District provides water with moderate hardness, and many rural properties use well water that may have elevated mineral content.',
    metaTitle: 'Fallbrook Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool care in Fallbrook, CA. Serving the Avocado Capital with reliable weekly service. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools brings reliable pool service to Fallbrook, keeping pools in this North County agricultural community clean and balanced year-round.',
    introContent:
      'Cabana Pools provides dependable pool maintenance to Fallbrook homeowners in this charming North County community. Known for its avocado groves and rural character, Fallbrook pools face unique conditions including warm inland temperatures, well water on some properties, and tree debris from surrounding orchards.',
    faqs: [
      {
        question: 'Do you service rural properties in Fallbrook?',
        answer:
          'Yes, we serve the entire 92028 ZIP code including De Luz, central Fallbrook, and surrounding rural areas. Our routes cover both in-town and agricultural properties.',
      },
      {
        question: 'Can you handle well water pools in Fallbrook?',
        answer:
          'Absolutely. Many Fallbrook properties use well water with elevated minerals. We adjust treatment protocols and add stain prevention measures for well water pools.',
      },
      {
        question: 'How much does pool service cost in Fallbrook?',
        answer:
          'Fallbrook pool service typically runs $140 to $185 per month for weekly visits with all chemicals included. Properties with well water may require additional treatments.',
      },
    ],
    nearbyCities: ['temecula', 'vista', 'carlsbad'],
    isPrimary: false,
  },

  // ============================================================
  // ALPINE
  // ============================================================
  {
    name: 'Alpine',
    slug: 'alpine',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['91901'],
    coordinates: { lat: 32.8356, lng: -116.7664 },
    urlPath: '/california/san-diego-pool-service/alpine-pool-service/',
    neighborhoods: [
      {
        name: 'Alpine Village',
        description:
          'Central Alpine community with established homes and pools in a warm foothill setting.',
      },
      {
        name: 'Harbison Canyon',
        description:
          'Wooded canyon community west of Alpine where pools contend with oak debris and warm temperatures.',
      },
      {
        name: 'Victoria Park',
        description:
          'Newer residential development featuring modern pool designs and energy-efficient equipment.',
      },
    ],
    landmarks: ['Viejas Casino & Resort', 'Cleveland National Forest', 'Wright\'s Field Park'],
    climateNotes:
      'Alpine sits at about 1,800 feet elevation east of San Diego. Summer highs reach the mid-to-upper 90s, and winter nights can drop below freezing.',
    waterNotes:
      'Padre Dam Municipal Water District serves Alpine with moderately hard water, and many properties use well water with elevated iron and mineral levels.',
    metaTitle: 'Alpine Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool maintenance in Alpine, CA. Handling foothill heat and hard water with professional care. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools delivers professional pool service to Alpine, managing the foothill heat and hard water challenges that define this mountain community.',
    introContent:
      'Cabana Pools serves Alpine homeowners with pool care tailored to the unique demands of this foothill community. Extreme summer heat, hard water, and oak debris from surrounding woodlands all require specialized attention. Our technicians bring the expertise needed to keep Alpine pools in peak condition year-round.',
    faqs: [
      {
        question: 'Does Alpine\'s elevation affect pool care?',
        answer:
          'Yes, Alpine\'s 1,800-foot elevation creates extreme temperature swings, from 95F+ summers to below-freezing winter nights. We adjust protocols seasonally to protect your pool and equipment.',
      },
      {
        question: 'Do you handle well water pools in Alpine?',
        answer:
          'Absolutely. Many Alpine properties use well water with elevated iron that can stain surfaces. We apply specialized stain prevention protocols for well water pools.',
      },
      {
        question: 'How quickly can I start service in Alpine?',
        answer:
          'Most Alpine residents are on a route within 3 to 5 business days. We have established weekly routes running through the Alpine and East County areas.',
      },
    ],
    nearbyCities: ['el-cajon', 'lakeside', 'ramona'],
    isPrimary: false,
  },

  // ============================================================
  // SAN MARCOS
  // ============================================================
  {
    name: 'San Marcos',
    slug: 'san-marcos',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92069', '92078'],
    coordinates: { lat: 33.1434, lng: -117.1661 },
    urlPath: '/california/san-diego-pool-service/san-marcos-pool-service/',
    neighborhoods: [
      {
        name: 'Lake San Marcos',
        description:
          'Community centered around the private lake with established homes and pools in a warm sheltered valley.',
      },
      {
        name: 'San Elijo Hills',
        description:
          'Newer master-planned community on the hilltops with modern homes and pools offering valley views.',
      },
      {
        name: 'Twin Oaks Valley',
        description:
          'Semi-rural area east of San Marcos with larger lots and pools in a warm agricultural setting.',
      },
    ],
    landmarks: ['Discovery Lake', 'Double Peak Park', 'Cal State San Marcos'],
    climateNotes:
      'San Marcos has a warm inland climate with summer highs in the mid-80s. The surrounding hills create microclimates, with valley floors being warmer than hilltop neighborhoods.',
    waterNotes:
      'Vallecitos Water District and Vista Irrigation District serve San Marcos with water of moderate hardness that benefits from regular calcium monitoring.',
    metaTitle: 'San Marcos Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool service in San Marcos, CA. Serving Lake San Marcos, San Elijo Hills & more. Call Cabana Pools for professional pool care!',
    heroDescription:
      'Cabana Pools provides dependable pool service to San Marcos homeowners, from the lakeside community to the hilltop neighborhoods of San Elijo Hills.',
    introContent:
      'Cabana Pools keeps San Marcos pools in excellent condition with weekly service adapted to this growing North County community. Whether your pool overlooks Lake San Marcos or sits atop San Elijo Hills, our technicians deliver consistent care tailored to local water quality and climate conditions.',
    faqs: [
      {
        question: 'Do you service Lake San Marcos?',
        answer:
          'Yes, Lake San Marcos is a core part of our San Marcos service area. We serve the entire community along with San Elijo Hills, Twin Oaks Valley, and surrounding neighborhoods.',
      },
      {
        question: 'How much is pool service in San Marcos?',
        answer:
          'San Marcos pool service typically ranges from $135 to $180 per month for weekly service with all chemicals included, depending on pool size and equipment.',
      },
      {
        question: 'Do you work with new construction pools in San Marcos?',
        answer:
          'Yes, San Marcos has many newer developments with modern pool systems. We are experienced with variable-speed pumps, salt systems, and automation controllers common in new builds.',
      },
    ],
    nearbyCities: ['escondido', 'vista', 'carlsbad'],
    isPrimary: false,
  },

  // ============================================================
  // CORONADO
  // ============================================================
  {
    name: 'Coronado',
    slug: 'coronado',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92118'],
    coordinates: { lat: 32.6859, lng: -117.1831 },
    urlPath: '/california/san-diego-pool-service/coronado-pool-service/',
    neighborhoods: [
      {
        name: 'Coronado Village',
        description:
          'Central Coronado with charming residential streets and pools in a classic beach-town setting.',
      },
      {
        name: 'Coronado Cays',
        description:
          'Waterfront community with bayfront homes and pools that face salt air and bay humidity.',
      },
      {
        name: 'Coronado Shores',
        description:
          'High-rise and townhome community along the Silver Strand with communal and private pool facilities.',
      },
    ],
    landmarks: ['Hotel del Coronado', 'Coronado Bridge', 'Coronado Beach'],
    climateNotes:
      'Coronado is surrounded by water on three sides, creating a consistently mild coastal climate. Summer highs average about 74F with persistent ocean breezes.',
    waterNotes:
      'Coronado receives water from the City of San Diego system with moderate hardness, compounded by heavy salt air exposure from the surrounding bay and ocean.',
    metaTitle: 'Coronado Pool Service | Cabana Pools',
    metaDescription:
      'Premium pool service on Coronado Island, CA. Coastal specialists protecting your pool from salt air. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools delivers premium pool service to Coronado, protecting your pool from the island\'s omnipresent ocean salt air and bay humidity.',
    introContent:
      'Cabana Pools serves Coronado with pool care specialized for island living. Surrounded by the Pacific Ocean and San Diego Bay, Coronado pools face constant salt air exposure that accelerates equipment wear and alters water chemistry. Our technicians bring coastal expertise to every Coronado property.',
    faqs: [
      {
        question: 'How does Coronado\'s island location affect pool care?',
        answer:
          'Being surrounded by saltwater means Coronado pools face more intense salt air corrosion than mainland coastal properties. We inspect and protect equipment for salt damage at every visit.',
      },
      {
        question: 'Do you service Coronado Cays?',
        answer:
          'Yes, we serve all Coronado neighborhoods including the Cays, the Village, Coronado Shores, and the Strand. Our technicians are familiar with the island\'s unique property layouts.',
      },
      {
        question: 'Can you access pools on Coronado easily?',
        answer:
          'Yes, we have established routes serving Coronado weekly. Our technicians cross the bridge on a regular schedule and are familiar with island parking and access requirements.',
      },
    ],
    nearbyCities: ['san-diego', 'la-jolla', 'del-mar'],
    isPrimary: false,
  },

  // ============================================================
  // FAIRBANKS RANCH
  // ============================================================
  {
    name: 'Fairbanks Ranch',
    slug: 'fairbanks-ranch',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92067'],
    coordinates: { lat: 32.9908, lng: -117.1883 },
    urlPath: '/california/san-diego-pool-service/fairbanks-ranch-pool-service/',
    neighborhoods: [
      {
        name: 'Fairbanks Ranch Country Club',
        description:
          'Gated luxury community with estate homes featuring resort-quality pools and extensive water features.',
      },
      {
        name: 'The Bridges',
        description:
          'Exclusive enclave adjacent to Fairbanks Ranch with large custom homes and premium pool installations.',
      },
    ],
    landmarks: ['Fairbanks Ranch Country Club', 'San Dieguito River Park', 'The Crosby Club'],
    climateNotes:
      'Fairbanks Ranch sits in a sheltered valley with a mild climate, slightly warmer than the coast. Summer highs reach the low 80s with low humidity.',
    waterNotes:
      'Santa Fe Irrigation District provides water with moderate hardness, and some estates supplement with well water that requires additional mineral management.',
    metaTitle: 'Fairbanks Ranch Pool Service | Cabana Pools',
    metaDescription:
      'Luxury pool care in Fairbanks Ranch, CA. Expert service for estate pools and water features. Call Cabana Pools for a consultation!',
    heroDescription:
      'Cabana Pools provides luxury pool service to Fairbanks Ranch estates, delivering meticulous care for the community\'s premium pools and water features.',
    introContent:
      'Cabana Pools serves the exclusive Fairbanks Ranch community with pool care matching the caliber of its estate properties. Our technicians are experienced with large pools, infinity edges, grottos, and sophisticated automation systems. We deliver the precision and consistency that Fairbanks Ranch homeowners expect.',
    faqs: [
      {
        question: 'Do you work within gated communities in Fairbanks Ranch?',
        answer:
          'Yes, our technicians are experienced working within gated communities. We coordinate with property management and security to ensure smooth, scheduled access.',
      },
      {
        question: 'Can you handle complex water features?',
        answer:
          'Absolutely. Many Fairbanks Ranch estates have intricate water features, fountains, and infinity edges. We maintain all components to ensure reliable operation and clean water.',
      },
      {
        question: 'How much does estate pool service cost in Fairbanks Ranch?',
        answer:
          'Estate pool pricing varies based on pool size, features, and complexity. Most Fairbanks Ranch properties range from $200 to $350 per month for comprehensive weekly service.',
      },
    ],
    nearbyCities: ['rancho-sante-fe', 'del-mar', 'carmel-valley'],
    isPrimary: false,
  },

  // ============================================================
  // SOLANA BEACH
  // ============================================================
  {
    name: 'Solana Beach',
    slug: 'solana-beach',
    metro: 'san-diego',
    state: 'CA',
    zipCodes: ['92075'],
    coordinates: { lat: 32.9912, lng: -117.2712 },
    urlPath: '/california/san-diego-pool-service/solana-beach-pool-service/',
    neighborhoods: [
      {
        name: 'Eden Gardens',
        description:
          'Beachside community with cottage-style homes and pools in a relaxed coastal setting.',
      },
      {
        name: 'Santa Fe Hills',
        description:
          'Hilltop neighborhood east of I-5 with family homes and pools enjoying a slightly warmer microclimate.',
      },
      {
        name: 'Via de la Valle',
        description:
          'Southern Solana Beach area near the Del Mar Fairgrounds with larger properties and established pools.',
      },
    ],
    landmarks: ['Fletcher Cove Park', 'Cedros Avenue Design District', 'San Elijo Lagoon'],
    climateNotes:
      'Solana Beach has a mild coastal climate with summer highs averaging about 75F. Morning marine layer is common and ocean breezes keep temperatures moderate.',
    waterNotes:
      'Santa Fe Irrigation District provides Solana Beach with water of moderate hardness that requires standard calcium and pH management.',
    metaTitle: 'Solana Beach Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool care in Solana Beach, CA. Coastal pool specialists serving Eden Gardens & Santa Fe Hills. Call Cabana Pools!',
    heroDescription:
      'Cabana Pools delivers expert coastal pool service to Solana Beach, protecting your pool from ocean salt air and maintaining crystal-clear water.',
    introContent:
      'Cabana Pools provides professional pool care to the Solana Beach community, a coastal gem between Del Mar and Encinitas. Salt air, marine layer moisture, and coastal breezes all influence pool health in this small but vibrant city. Our technicians deliver weekly service tailored to these coastal conditions.',
    faqs: [
      {
        question: 'Do you service all of Solana Beach?',
        answer:
          'Yes, we cover all Solana Beach neighborhoods including Eden Gardens, Santa Fe Hills, and the Via de la Valle area on our established weekly coastal routes.',
      },
      {
        question: 'How does coastal living affect Solana Beach pools?',
        answer:
          'Salt air accelerates corrosion on pool equipment and alters water chemistry. Our coastal protocols include regular equipment inspection and proactive corrosion prevention.',
      },
      {
        question: 'How much does pool service cost in Solana Beach?',
        answer:
          'Solana Beach pool service typically runs $140 to $185 per month for weekly service with all chemicals included. Pricing depends on pool size and equipment complexity.',
      },
    ],
    nearbyCities: ['del-mar', 'encinitas', 'rancho-sante-fe'],
    isPrimary: false,
  },
];
