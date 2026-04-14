import type { City } from '@/types';

export const losAngelesCities: City[] = [
  // ============================================================
  // LOS ANGELES (Hub)
  // ============================================================
  {
    name: 'Los Angeles',
    slug: 'los-angeles',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90001', '90012', '90034'],
    coordinates: { lat: 34.0522, lng: -118.2437 },
    urlPath: '/california/los-angeles-pool-service/',
    isPrimary: true,
    neighborhoods: [
      { name: 'Westside', description: 'Affluent coastal communities with year-round pool weather and salt air considerations.' },
      { name: 'San Fernando Valley', description: 'Inland valley neighborhoods where summer heat drives heavy pool usage and faster chemical consumption.' },
      { name: 'South Bay', description: 'Beach-adjacent areas with moderate temps and marine layer that affects pool chemistry.' },
    ],
    landmarks: ['Griffith Observatory', 'Hollywood Sign', 'Santa Monica Pier'],
    climateNotes: 'Los Angeles enjoys a Mediterranean climate with warm, dry summers averaging 85-90°F and mild winters. Pools are usable nearly year-round, though inland areas see significantly higher temps.',
    waterNotes: 'LADWP water is moderately hard with calcium levels that require regular monitoring to prevent scale buildup.',
    metaTitle: 'Los Angeles Pool Service | Cabana Pools',
    metaDescription: 'Professional pool cleaning and maintenance across Los Angeles, CA. Trusted by homeowners from the Westside to the Valley. Get a free quote today.',
    heroDescription: 'Expert pool service for the greater Los Angeles area, from beachside retreats to Valley backyards.',
    introContent: 'Cabana Pools provides reliable pool maintenance across the sprawling Los Angeles metro. With year-round sunshine and diverse microclimates, LA pools need consistent professional care. Our technicians understand each neighborhood\'s unique conditions and deliver tailored service.',
    faqs: [
      { question: 'How much does pool service cost in Los Angeles?', answer: 'Most LA homeowners pay $140-$200/month for weekly pool service with chemicals included, depending on pool size and location.' },
      { question: 'Do you service all of Los Angeles?', answer: 'Yes, we cover the greater LA area including the Westside, Valley, South Bay, and surrounding communities through our network of local technicians.' },
      { question: 'How quickly can you start service?', answer: 'Most new LA customers are added to a route within 3-5 business days of signing up.' },
    ],
    nearbyCities: ['beverly-hills', 'santa-monica', 'glendale'],
  },

  // ============================================================
  // CULVER CITY
  // ============================================================
  {
    name: 'Culver City',
    slug: 'culver-city',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90230', '90232'],
    coordinates: { lat: 33.9917, lng: -118.3965 },
    urlPath: '/california/los-angeles-pool-service/culver-city-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Carlson Park', description: 'Established neighborhood with mature trees and mid-century homes featuring classic pool designs.' },
      { name: 'Fox Hills', description: 'Residential area near the Westfield mall with a mix of condos and single-family homes with pools.' },
    ],
    landmarks: ['Sony Pictures Studios', 'Culver City Arts District', 'Baldwin Hills Scenic Overlook'],
    climateNotes: 'Culver City benefits from coastal proximity with mild summers around 80°F and cool marine layers. Pools stay comfortable without excessive heat stress on equipment.',
    waterNotes: 'Water is supplied by LADWP and West Basin MWD with moderate hardness levels.',
    metaTitle: 'Culver City Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool cleaning and maintenance in Culver City, CA. Serving Carlson Park, Fox Hills and nearby neighborhoods. Free quote available.',
    heroDescription: 'Professional pool care in Culver City, keeping your backyard oasis sparkling in the heart of the Westside.',
    introContent: 'Cabana Pools serves Culver City homeowners with dependable weekly pool maintenance. Situated between downtown LA and the coast, Culver City pools enjoy mild weather but still need consistent chemical balancing and cleaning. Our technicians know the area and keep your pool swim-ready year-round.',
    faqs: [
      { question: 'How much does pool service cost in Culver City?', answer: 'Weekly pool service in Culver City typically runs $140-$190/month with all chemicals included.' },
      { question: 'What neighborhoods do you serve in Culver City?', answer: 'We serve all Culver City neighborhoods including Carlson Park, Fox Hills, Blair Hills, and the Arts District area.' },
      { question: 'Do you offer pool repairs in Culver City?', answer: 'Yes, we handle pump, filter, heater, and salt system repairs for Culver City pool owners.' },
    ],
    nearbyCities: ['mar-vista', 'playa-vista', 'venice'],
  },

  // ============================================================
  // HIDDEN HILLS
  // ============================================================
  {
    name: 'Hidden Hills',
    slug: 'hidden-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91302'],
    coordinates: { lat: 34.1614, lng: -118.6521 },
    urlPath: '/california/los-angeles-pool-service/hidden-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Hidden Hills Estates', description: 'Gated equestrian community with large estates featuring resort-style pools and spas.' },
      { name: 'Long Valley', description: 'Secluded enclave with expansive properties and custom pools surrounded by natural hillside landscapes.' },
    ],
    landmarks: ['Hidden Hills Community Center', 'Upper Las Virgenes Canyon Open Space'],
    climateNotes: 'Hidden Hills sits in the western San Fernando Valley with hot, dry summers regularly exceeding 95°F. The semi-rural setting means more dust and organic debris reaching pools.',
    waterNotes: 'Las Virgenes MWD supplies moderately hard water that can contribute to calcium scaling on pool surfaces.',
    metaTitle: 'Hidden Hills Pool Service | Cabana Pools',
    metaDescription: 'Premium pool maintenance in Hidden Hills, CA. Expert care for estate pools in this exclusive gated community. Get a free quote.',
    heroDescription: 'Elite pool service for Hidden Hills estates, handling the heat, dust, and high standards of this exclusive community.',
    introContent: 'Cabana Pools provides premium pool care to the exclusive gated community of Hidden Hills. With large estate pools and hot Valley summers, Hidden Hills properties demand expert maintenance. Our technicians handle the unique needs of resort-style pools in this equestrian community.',
    faqs: [
      { question: 'Do you service gated communities like Hidden Hills?', answer: 'Yes, we have established access to Hidden Hills and service numerous estate pools within the community.' },
      { question: 'Can you maintain large estate pools?', answer: 'Absolutely. Our team handles pools of all sizes, including the larger resort-style pools common in Hidden Hills estates.' },
      { question: 'How much is pool service in Hidden Hills?', answer: 'Hidden Hills pool service typically ranges from $175-$250/month depending on pool size and features.' },
    ],
    nearbyCities: ['calabasas', 'woodland-hills', 'west-hills'],
  },

  // ============================================================
  // WOODLAND HILLS
  // ============================================================
  {
    name: 'Woodland Hills',
    slug: 'woodland-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91364', '91367'],
    coordinates: { lat: 34.1683, lng: -118.6059 },
    urlPath: '/california/los-angeles-pool-service/woodland-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Warner Center', description: 'Commercial and residential area with newer builds and well-maintained backyard pools.' },
      { name: 'Girard', description: 'Hillside neighborhood with larger lots and pools overlooking the San Fernando Valley floor.' },
    ],
    landmarks: ['Warner Center Park', 'Topanga State Park', 'The Village at Westfield'],
    climateNotes: 'Woodland Hills regularly records some of the highest temperatures in LA, with summer peaks above 110°F. Pools are essential and heavily used.',
    waterNotes: 'LADWP water is moderately hard; the extreme heat accelerates evaporation and chemical loss.',
    metaTitle: 'Woodland Hills Pool Service | Cabana Pools',
    metaDescription: 'Expert pool cleaning in Woodland Hills, CA. We handle the extreme Valley heat so your pool stays clear and balanced. Free quote.',
    heroDescription: 'Pool service built for Woodland Hills heat, keeping your water balanced even when temps soar past 110°F.',
    introContent: 'Cabana Pools keeps Woodland Hills pools in top condition through the Valley\'s extreme summer heat. With temperatures regularly topping 100°F, pools here need frequent chemical adjustments and diligent maintenance. Our team delivers reliable weekly service tailored to these demanding conditions.',
    faqs: [
      { question: 'Why does my Woodland Hills pool need extra attention in summer?', answer: 'Woodland Hills sees some of LA\'s highest temps, which accelerates chlorine loss, increases evaporation, and promotes algae growth, making consistent service critical.' },
      { question: 'How much does pool service cost in Woodland Hills?', answer: 'Most homeowners pay $145-$200/month for weekly service with chemicals included.' },
      { question: 'Do you offer equipment repairs?', answer: 'Yes, we repair and replace pumps, filters, heaters, and automation systems for Woodland Hills customers.' },
    ],
    nearbyCities: ['calabasas', 'west-hills', 'encino'],
  },

  // ============================================================
  // GLENDALE
  // ============================================================
  {
    name: 'Glendale',
    slug: 'glendale',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91201', '91205', '91208'],
    coordinates: { lat: 34.1425, lng: -118.2551 },
    urlPath: '/california/los-angeles-pool-service/glendale-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Verdugo Woodlands', description: 'Hillside community with upscale homes and pools surrounded by mature landscaping.' },
      { name: 'Adams Hill', description: 'Historic neighborhood with character homes and pools overlooking downtown Glendale.' },
    ],
    landmarks: ['Americana at Brand', 'Forest Lawn Memorial Park', 'Verdugo Mountains'],
    climateNotes: 'Glendale sits at the edge of the San Fernando Valley with warm summers reaching 95°F. The Verdugo Mountains create microclimates across the city.',
    waterNotes: 'Glendale Water & Power supplies water with moderate mineral content requiring regular calcium and pH management.',
    metaTitle: 'Glendale Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Glendale, CA. Serving Verdugo Woodlands, Adams Hill and all Glendale neighborhoods. Call for a free quote.',
    heroDescription: 'Reliable pool maintenance in Glendale, from the Verdugo foothills to the flatlands near the Americana.',
    introContent: 'Cabana Pools provides expert pool care throughout Glendale. Whether your pool sits in the Verdugo foothills or the city center, our technicians deliver consistent service adapted to local conditions. Glendale\'s warm climate and varied terrain make professional pool maintenance essential.',
    faqs: [
      { question: 'What areas of Glendale do you serve?', answer: 'We cover all Glendale neighborhoods including Verdugo Woodlands, Adams Hill, Rossmoyne, Sparr Heights, and Montrose.' },
      { question: 'How much is pool service in Glendale?', answer: 'Glendale pool service runs $140-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Can you handle hillside pool access?', answer: 'Yes, our technicians are experienced with hillside properties common in the Verdugo foothills area.' },
    ],
    nearbyCities: ['burbank', 'pasadena', 'silver-lake'],
  },

  // ============================================================
  // WEST HILLS
  // ============================================================
  {
    name: 'West Hills',
    slug: 'west-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91304', '91307'],
    coordinates: { lat: 34.2043, lng: -118.6412 },
    urlPath: '/california/los-angeles-pool-service/west-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Shadow Ranch', description: 'Family-oriented area near the historic park with pools in well-maintained suburban homes.' },
      { name: 'Knollwood', description: 'Quiet residential enclave with established properties and mature pool installations.' },
    ],
    landmarks: ['Shadow Ranch Park', 'Orcutt Ranch Horticultural Center', 'West Hills Hospital'],
    climateNotes: 'West Hills experiences hot, dry summers typical of the western San Fernando Valley, with temperatures often reaching the upper 90s to low 100s.',
    waterNotes: 'LADWP water supply has moderate hardness that requires routine calcium and alkalinity monitoring.',
    metaTitle: 'West Hills Pool Service | Cabana Pools',
    metaDescription: 'Trusted pool cleaning and maintenance in West Hills, CA. Expert care for Valley pools in hot summer conditions. Free quote available.',
    heroDescription: 'Dependable pool service for West Hills homeowners, keeping your water pristine through hot Valley summers.',
    introContent: 'Cabana Pools delivers reliable pool maintenance to West Hills residents in the western San Fernando Valley. The area\'s hot summers and suburban setting mean pools see heavy use and need consistent professional care. Our technicians keep West Hills pools balanced and clean every week.',
    faqs: [
      { question: 'How much does pool service cost in West Hills?', answer: 'Weekly pool service in West Hills typically costs $140-$190/month with all chemicals included.' },
      { question: 'Do you service pools near Shadow Ranch Park?', answer: 'Yes, we serve all West Hills neighborhoods including the Shadow Ranch and Knollwood areas.' },
      { question: 'What does weekly service include?', answer: 'Every visit includes skimming, brushing, vacuuming, filter check, and full chemical testing and balancing.' },
    ],
    nearbyCities: ['woodland-hills', 'chatsworth', 'hidden-hills'],
  },

  // ============================================================
  // LONG BEACH
  // ============================================================
  {
    name: 'Long Beach',
    slug: 'long-beach',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90802', '90808', '90815'],
    coordinates: { lat: 33.7701, lng: -118.1937 },
    urlPath: '/california/los-angeles-pool-service/long-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Belmont Shore', description: 'Coastal neighborhood with beach bungalows and pools that experience salt air and marine moisture.' },
      { name: 'Bixby Knolls', description: 'Tree-lined residential area with mid-century and modern homes featuring well-maintained pools.' },
      { name: 'Naples Island', description: 'Canal-front community with upscale homes and pools in a unique waterside setting.' },
    ],
    landmarks: ['Queen Mary', 'Aquarium of the Pacific', 'Long Beach Convention Center'],
    climateNotes: 'Long Beach enjoys a coastal climate with mild summers around 80-85°F and minimal temperature extremes. Marine moisture can affect water chemistry balance.',
    waterNotes: 'Long Beach Water Department supplies water with moderate mineral content; coastal proximity introduces salt air that affects pool surfaces.',
    metaTitle: 'Long Beach Pool Service | Cabana Pools',
    metaDescription: 'Professional pool service in Long Beach, CA. Serving Belmont Shore, Bixby Knolls, Naples Island and more. Get your free quote today.',
    heroDescription: 'Expert pool care in Long Beach, from coastal Belmont Shore to the tree-lined streets of Bixby Knolls.',
    introContent: 'Cabana Pools serves Long Beach homeowners with reliable weekly pool maintenance. As a coastal city with mild year-round weather, Long Beach pools are in constant use but also face salt air and marine moisture challenges. Our team delivers consistent care adapted to Long Beach\'s unique coastal environment.',
    faqs: [
      { question: 'How does coastal air affect my Long Beach pool?', answer: 'Salt air can corrode metal fixtures and affect water chemistry. Our service includes monitoring for salt-related issues and protecting your equipment.' },
      { question: 'What does pool service cost in Long Beach?', answer: 'Most Long Beach homeowners pay $140-$195/month for weekly pool service with chemicals included.' },
      { question: 'Do you serve all Long Beach neighborhoods?', answer: 'Yes, we cover Belmont Shore, Bixby Knolls, Naples Island, Cal Heights, Los Cerritos, and all surrounding areas.' },
    ],
    nearbyCities: ['seal-beach', 'torrance', 'redondo-beach'],
  },

  // ============================================================
  // MAR VISTA
  // ============================================================
  {
    name: 'Mar Vista',
    slug: 'mar-vista',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90066'],
    coordinates: { lat: 34.0009, lng: -118.4298 },
    urlPath: '/california/los-angeles-pool-service/mar-vista-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Mar Vista Hill', description: 'Elevated area with panoramic views and homes featuring pools that catch afternoon breezes.' },
      { name: 'Mar Vista Gardens', description: 'Established residential section with a mix of renovated and classic homes with backyard pools.' },
    ],
    landmarks: ['Mar Vista Recreation Center', 'Mar Vista Farmers Market', 'Grand View Park'],
    climateNotes: 'Mar Vista enjoys a mild Westside climate with summer highs around 80°F and frequent morning marine layers that keep temperatures comfortable.',
    waterNotes: 'LADWP water supply with moderate hardness; the coastal proximity means pools benefit from mild temperatures but face occasional marine moisture.',
    metaTitle: 'Mar Vista Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool cleaning in Mar Vista, CA. Westside pool experts serving Mar Vista Hill and surrounding areas. Free quote available.',
    heroDescription: 'Westside pool care for Mar Vista homeowners, keeping your pool sparkling in the mild coastal climate.',
    introContent: 'Cabana Pools provides dependable pool service to Mar Vista, a popular Westside neighborhood between Culver City and Venice. The mild coastal climate makes pools a year-round amenity, and our team ensures they stay clean and chemically balanced through every season.',
    faqs: [
      { question: 'How much is pool service in Mar Vista?', answer: 'Mar Vista pool service typically costs $140-$185/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service the Mar Vista area?', answer: 'Yes, we cover all of Mar Vista and surrounding Westside neighborhoods on established weekly routes.' },
      { question: 'How does the marine layer affect my pool?', answer: 'Morning marine moisture can slightly alter pH levels and promote surface condensation. Our chemical balancing accounts for these coastal effects.' },
    ],
    nearbyCities: ['culver-city', 'venice', 'playa-vista'],
  },

  // ============================================================
  // MARINA DEL REY
  // ============================================================
  {
    name: 'Marina del Rey',
    slug: 'marina-del-rey',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90292'],
    coordinates: { lat: 33.9803, lng: -118.4517 },
    urlPath: '/california/los-angeles-pool-service/marina-del-rey-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Marina Peninsula', description: 'Waterfront area with condos and homes featuring pools close to the harbor and beach.' },
      { name: 'Marina Pointe', description: 'Residential complex area with community pools and townhomes near the marina.' },
    ],
    landmarks: ['Marina del Rey Harbor', 'Fisherman\'s Village', 'Burton Chace Park'],
    climateNotes: 'Marina del Rey has a true coastal climate with mild summers averaging 75-80°F and persistent marine breezes. The harbor proximity creates a consistently temperate environment.',
    waterNotes: 'LADWP water combined with salt air from the harbor means pools need regular attention to prevent corrosion on metal fixtures.',
    metaTitle: 'Marina del Rey Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Marina del Rey, CA. Coastal pool experts handling salt air and marine conditions. Get a free quote.',
    heroDescription: 'Coastal pool service in Marina del Rey, protecting your pool from salt air and keeping it crystal clear.',
    introContent: 'Cabana Pools serves Marina del Rey with specialized coastal pool maintenance. The harbor-adjacent location means salt air and marine moisture are constant factors in pool care. Our technicians understand these conditions and protect your pool and equipment from coastal wear.',
    faqs: [
      { question: 'Does the marina salt air damage my pool?', answer: 'Salt air can corrode metal components and affect water chemistry. Our service includes corrosion monitoring and protective measures for coastal pools.' },
      { question: 'How much does pool service cost in Marina del Rey?', answer: 'Most Marina del Rey pool owners pay $145-$195/month for weekly service with chemicals included.' },
      { question: 'Do you service condo and HOA pools?', answer: 'Yes, we handle both residential and community pools throughout Marina del Rey.' },
    ],
    nearbyCities: ['venice', 'playa-del-rey', 'playa-vista'],
  },

  // ============================================================
  // MALIBU
  // ============================================================
  {
    name: 'Malibu',
    slug: 'malibu',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90265'],
    coordinates: { lat: 34.0259, lng: -118.7798 },
    urlPath: '/california/los-angeles-pool-service/malibu-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Carbon Beach', description: 'Exclusive beachfront stretch known as "Billionaire\'s Beach" with oceanfront pools and infinity edges.' },
      { name: 'Point Dume', description: 'Blufftop community with stunning ocean views and pools exposed to coastal winds and salt spray.' },
      { name: 'Malibu Colony', description: 'Gated beachfront community with high-end homes and pools requiring premium coastal maintenance.' },
    ],
    landmarks: ['Point Dume', 'Malibu Pier', 'Pepperdine University'],
    climateNotes: 'Malibu\'s coastal climate keeps summers mild at 75-82°F, but ocean winds and salt spray are constant. Fire season brings ash and debris concerns for canyon properties.',
    waterNotes: 'Las Virgenes MWD supplies water to most of Malibu; many properties also use private wells, which can vary significantly in mineral content.',
    metaTitle: 'Malibu Pool Service | Cabana Pools',
    metaDescription: 'Premium pool service in Malibu, CA. Protecting oceanfront and canyon pools from salt air, wind, and coastal conditions. Free quote.',
    heroDescription: 'Premium pool care for Malibu homes, from beachfront infinity pools to secluded canyon retreats.',
    introContent: 'Cabana Pools provides premium pool maintenance to Malibu\'s oceanfront and canyon properties. The constant salt spray, coastal winds, and remote canyon locations create unique challenges. Our team is equipped to handle Malibu\'s demanding conditions while maintaining the highest standards.',
    faqs: [
      { question: 'How do you handle Malibu\'s remote canyon locations?', answer: 'Our technicians service all Malibu areas from PCH beachfront homes to canyon properties. We plan routes to ensure consistent weekly visits regardless of location.' },
      { question: 'What does Malibu pool service cost?', answer: 'Malibu pool service typically ranges from $175-$275/month depending on pool size, location, and features.' },
      { question: 'Do you service oceanfront pools?', answer: 'Yes, we specialize in coastal pool care and take extra steps to protect equipment and surfaces from salt spray and ocean wind.' },
    ],
    nearbyCities: ['pacific-palisades', 'calabasas', 'agoura-hills'],
  },

  // ============================================================
  // SHERMAN OAKS
  // ============================================================
  {
    name: 'Sherman Oaks',
    slug: 'sherman-oaks',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91403', '91423'],
    coordinates: { lat: 34.1508, lng: -118.4490 },
    urlPath: '/california/los-angeles-pool-service/sherman-oaks-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Sherman Oaks Galleria Area', description: 'Central neighborhood near the Galleria with a mix of apartments and single-family homes with pools.' },
      { name: 'South of the Boulevard', description: 'Upscale area south of Ventura Blvd with hillside homes featuring pools and valley views.' },
    ],
    landmarks: ['Sherman Oaks Galleria', 'Van Nuys Sherman Oaks Park', 'Ventura Boulevard'],
    climateNotes: 'Sherman Oaks sits in the San Fernando Valley with hot summers frequently reaching 95-100°F. South-of-the-boulevard hillside locations can be slightly cooler.',
    waterNotes: 'LADWP water with moderate hardness; the Valley heat means high evaporation rates and increased chemical demand.',
    metaTitle: 'Sherman Oaks Pool Service | Cabana Pools',
    metaDescription: 'Expert pool maintenance in Sherman Oaks, CA. Valley pool specialists keeping your water balanced through hot summers. Free quote.',
    heroDescription: 'Valley pool experts in Sherman Oaks, keeping your water crystal clear through hot summer months.',
    introContent: 'Cabana Pools serves Sherman Oaks with reliable weekly pool service tailored to the San Fernando Valley\'s hot climate. Whether your pool is on the valley floor or a hillside south of the boulevard, our technicians deliver consistent care that keeps your water balanced and inviting.',
    faqs: [
      { question: 'Why do Sherman Oaks pools need extra summer care?', answer: 'Valley heat accelerates chlorine loss and evaporation. Our service adjusts chemical levels more aggressively during peak summer months.' },
      { question: 'How much is pool service in Sherman Oaks?', answer: 'Most Sherman Oaks homeowners pay $145-$195/month for weekly pool service with chemicals included.' },
      { question: 'Do you serve both sides of the boulevard?', answer: 'Yes, we service all Sherman Oaks areas north and south of Ventura Blvd.' },
    ],
    nearbyCities: ['encino', 'studio-city', 'bel-air'],
  },

  // ============================================================
  // BRENTWOOD
  // ============================================================
  {
    name: 'Brentwood',
    slug: 'brentwood',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90049'],
    coordinates: { lat: 34.0522, lng: -118.4724 },
    urlPath: '/california/los-angeles-pool-service/brentwood-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Brentwood Glen', description: 'Family-friendly enclave near the Getty Center with well-maintained homes and pools.' },
      { name: 'Brentwood Park', description: 'Prestigious area with large estates and resort-style pools set among mature landscaping.' },
    ],
    landmarks: ['Getty Center', 'San Vicente Blvd Coral Trees', 'Brentwood Country Club'],
    climateNotes: 'Brentwood enjoys a temperate Westside climate with summers around 80-85°F. Canyon properties see slightly warmer conditions than areas closer to the coast.',
    waterNotes: 'LADWP water with moderate mineral content; tree debris from the area\'s mature landscaping is a common pool maintenance factor.',
    metaTitle: 'Brentwood Pool Service | Cabana Pools',
    metaDescription: 'Premium pool care in Brentwood, CA. Serving Brentwood Park, Brentwood Glen and surrounding estates. Get a free quote today.',
    heroDescription: 'Premium pool service for Brentwood estates and homes, from the Getty hillside to Brentwood Park.',
    introContent: 'Cabana Pools delivers premium pool maintenance to Brentwood\'s upscale residential community. With mature tree-lined streets and large estate properties, Brentwood pools face unique debris challenges alongside the pleasant Westside climate. Our service keeps these pools pristine.',
    faqs: [
      { question: 'How much does pool service cost in Brentwood?', answer: 'Brentwood pool service typically runs $160-$225/month depending on pool size and property features.' },
      { question: 'Do you handle estate-sized pools?', answer: 'Yes, we service pools of all sizes including the larger estate pools common in Brentwood Park and Mandeville Canyon.' },
      { question: 'How do you handle tree debris in Brentwood?', answer: 'Our service includes thorough skimming and filter cleaning to manage the heavy leaf and debris fall from Brentwood\'s mature trees.' },
    ],
    nearbyCities: ['pacific-palisades', 'bel-air', 'santa-monica'],
  },

  // ============================================================
  // WESTLAKE VILLAGE
  // ============================================================
  {
    name: 'Westlake Village',
    slug: 'westlake-village',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91361', '91362'],
    coordinates: { lat: 34.1417, lng: -118.8058 },
    urlPath: '/california/los-angeles-pool-service/westlake-village-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'North Ranch', description: 'Exclusive gated community with large estates and custom pools in a hillside setting.' },
      { name: 'Westlake Island', description: 'Waterfront properties on the lake with pools offering dual water recreation.' },
    ],
    landmarks: ['Westlake Lake', 'The Promenade at Westlake', 'Santa Monica Mountains NRA'],
    climateNotes: 'Westlake Village has warm, dry summers with temperatures reaching the low to mid 90s. The lake and hills create pleasant microclimates across the community.',
    waterNotes: 'Las Virgenes MWD provides water with moderate hardness; some hilltop properties experience slightly different pressure and mineral levels.',
    metaTitle: 'Westlake Village Pool Service | Cabana Pools',
    metaDescription: 'Expert pool maintenance in Westlake Village, CA. Serving North Ranch, Westlake Island and surrounding communities. Free quote.',
    heroDescription: 'Trusted pool service for Westlake Village, from lakeside homes to hilltop North Ranch estates.',
    introContent: 'Cabana Pools provides reliable pool maintenance to Westlake Village homeowners. This scenic community at the edge of the Santa Monica Mountains features beautiful pools that need expert care through warm summers. Our technicians are familiar with every neighborhood from North Ranch to the lakeside homes.',
    faqs: [
      { question: 'Do you service North Ranch in Westlake Village?', answer: 'Yes, we have established access and service numerous pools in the North Ranch gated community.' },
      { question: 'How much is pool service in Westlake Village?', answer: 'Most Westlake Village homeowners pay $150-$210/month for weekly pool service with chemicals included.' },
      { question: 'Can you service pools near the lake?', answer: 'Absolutely. We serve all Westlake Village areas including waterfront properties on Westlake Island.' },
    ],
    nearbyCities: ['agoura-hills', 'calabasas', 'hidden-hills'],
  },

  // ============================================================
  // ROLLING HILLS ESTATES
  // ============================================================
  {
    name: 'Rolling Hills Estates',
    slug: 'rolling-hills-estates',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90274'],
    coordinates: { lat: 33.7878, lng: -118.3534 },
    urlPath: '/california/los-angeles-pool-service/rolling-hills-estates-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Ridgecrest', description: 'Hilltop neighborhood with panoramic views and pools that catch coastal breezes.' },
      { name: 'Chandler Estates', description: 'Residential area with spacious lots and established pools surrounded by mature landscaping.' },
    ],
    landmarks: ['Ernie Howlett Park', 'South Coast Botanic Garden', 'Peninsula Center'],
    climateNotes: 'Rolling Hills Estates enjoys a mild coastal-influenced climate with summer highs around 78-84°F. The elevated terrain catches ocean breezes that keep temperatures pleasant.',
    waterNotes: 'California Water Service supplies the area with moderately hard water requiring regular calcium monitoring.',
    metaTitle: 'Rolling Hills Estates Pool Service | Cabana Pools',
    metaDescription: 'Professional pool service in Rolling Hills Estates, CA. Serving Palos Verdes Peninsula homes with expert care. Free quote available.',
    heroDescription: 'Expert pool maintenance for Rolling Hills Estates, where coastal breezes meet hilltop living.',
    introContent: 'Cabana Pools serves Rolling Hills Estates on the beautiful Palos Verdes Peninsula. The mild coastal climate and elevated terrain create ideal pool conditions, though ocean breezes can introduce salt and debris. Our technicians deliver tailored service to keep your pool sparkling year-round.',
    faqs: [
      { question: 'How much is pool service in Rolling Hills Estates?', answer: 'Pool service in Rolling Hills Estates typically runs $155-$210/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service the entire Palos Verdes area?', answer: 'Yes, we cover Rolling Hills Estates, Palos Verdes Estates, Rancho Palos Verdes, and surrounding PV communities.' },
      { question: 'How does the coastal location affect pool care?', answer: 'Ocean breezes carry salt and moisture that can affect water chemistry and corrode metal fixtures. Our service accounts for these coastal factors.' },
    ],
    nearbyCities: ['palos-verdes-estates', 'rancho-palos-verdes', 'torrance'],
  },

  // ============================================================
  // BEL AIR
  // ============================================================
  {
    name: 'Bel Air',
    slug: 'bel-air',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90077'],
    coordinates: { lat: 34.0836, lng: -118.4410 },
    urlPath: '/california/los-angeles-pool-service/bel-air-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Upper Bel Air', description: 'Exclusive hilltop estates with large infinity pools and panoramic city views.' },
      { name: 'Bel Air Estates', description: 'Prestigious gated enclave with resort-style pools surrounded by lush landscaping.' },
    ],
    landmarks: ['Bel Air Hotel', 'Stone Canyon Reservoir', 'UCLA (adjacent)'],
    climateNotes: 'Bel Air\'s hillside location provides mild temperatures moderated by elevation and canyon breezes, with summers averaging 80-88°F.',
    waterNotes: 'LADWP supplies water with moderate mineral content; many Bel Air properties have complex pool systems requiring specialized maintenance.',
    metaTitle: 'Bel Air Pool Service | Cabana Pools',
    metaDescription: 'Premium pool service in Bel Air, CA. Expert care for estate pools, infinity edges, and luxury installations. Get a free quote.',
    heroDescription: 'Elite pool care for Bel Air estates, maintaining world-class pools in one of LA\'s most prestigious communities.',
    introContent: 'Cabana Pools provides elite pool service to Bel Air\'s exclusive hillside estates. With some of the most impressive pools in Los Angeles, Bel Air properties demand expert care for infinity edges, vanishing edges, and resort-style installations. Our experienced technicians are up to the task.',
    faqs: [
      { question: 'Can you maintain infinity and vanishing edge pools?', answer: 'Yes, our technicians are experienced with the complex pool systems common in Bel Air, including infinity edges, perimeter overflow, and multi-level designs.' },
      { question: 'How much does Bel Air pool service cost?', answer: 'Bel Air pool service ranges from $175-$300/month depending on pool complexity, size, and features.' },
      { question: 'Do you have access to gated Bel Air communities?', answer: 'Yes, we have established access to Bel Air\'s gated neighborhoods and service numerous estate pools.' },
    ],
    nearbyCities: ['brentwood', 'beverly-hills', 'hollywood-hills'],
  },

  // ============================================================
  // WEST HOLLYWOOD
  // ============================================================
  {
    name: 'West Hollywood',
    slug: 'west-hollywood',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90046', '90069'],
    coordinates: { lat: 34.0900, lng: -118.3617 },
    urlPath: '/california/los-angeles-pool-service/west-hollywood-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Sunset Strip', description: 'Iconic area with hillside homes and pools overlooking the LA basin.' },
      { name: 'West Hollywood West', description: 'Residential area with charming bungalows and mid-century homes featuring compact pools.' },
    ],
    landmarks: ['Sunset Strip', 'Pacific Design Center', 'West Hollywood Park'],
    climateNotes: 'West Hollywood has a pleasant year-round climate with summer highs around 84-88°F. Hills-adjacent properties may be slightly warmer than the flatland areas.',
    waterNotes: 'LADWP water with moderate hardness; compact urban lots mean pools often sit close to structures and landscaping.',
    metaTitle: 'West Hollywood Pool Service | Cabana Pools',
    metaDescription: 'Expert pool cleaning in West Hollywood, CA. Serving Sunset Strip, WeHo West and all surrounding areas. Get your free quote today.',
    heroDescription: 'Pool service in West Hollywood, keeping your urban oasis pristine in the heart of LA\'s most vibrant city.',
    introContent: 'Cabana Pools serves West Hollywood homeowners with reliable weekly pool care. This compact, vibrant city has pools ranging from hillside infinity edges to cozy courtyard plunge pools. Our team handles them all with consistent, professional service.',
    faqs: [
      { question: 'Do you service small courtyard pools?', answer: 'Yes, we service pools of all sizes including the smaller courtyard and plunge pools common in West Hollywood\'s urban setting.' },
      { question: 'How much is pool service in West Hollywood?', answer: 'West Hollywood pool service typically costs $140-$195/month for weekly service with chemicals included.' },
      { question: 'Can you access hillside pools on the Sunset Strip?', answer: 'Yes, our technicians are experienced with hillside access and service numerous pools in the hills above Sunset Strip.' },
    ],
    nearbyCities: ['beverly-hills', 'hollywood-hills', 'silver-lake'],
  },

  // ============================================================
  // REDONDO BEACH
  // ============================================================
  {
    name: 'Redondo Beach',
    slug: 'redondo-beach',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90277', '90278'],
    coordinates: { lat: 33.8492, lng: -118.3884 },
    urlPath: '/california/los-angeles-pool-service/redondo-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'South Redondo', description: 'Upscale residential area near the Esplanade with homes featuring pools and ocean proximity.' },
      { name: 'North Redondo', description: 'Family-oriented neighborhood further inland with suburban homes and backyard pools.' },
    ],
    landmarks: ['Redondo Beach Pier', 'Riviera Village', 'Hopkins Wilderness Park'],
    climateNotes: 'Redondo Beach has a classic South Bay coastal climate with mild summers around 75-82°F and consistent ocean breezes.',
    waterNotes: 'Golden State Water Company supplies moderately hard water; coastal salt air is a factor for pool equipment longevity.',
    metaTitle: 'Redondo Beach Pool Service | Cabana Pools',
    metaDescription: 'Professional pool service in Redondo Beach, CA. Coastal pool experts in the South Bay. Serving all neighborhoods. Free quote.',
    heroDescription: 'South Bay pool experts in Redondo Beach, managing coastal conditions for crystal-clear water year-round.',
    introContent: 'Cabana Pools provides expert pool service to Redondo Beach in the heart of the South Bay. The mild coastal climate makes pools a year-round amenity, but salt air and marine moisture require attentive maintenance. Our team keeps Redondo Beach pools clean, balanced, and protected.',
    faqs: [
      { question: 'How does the South Bay climate affect my pool?', answer: 'Mild temperatures are great for year-round swimming, but salt air can corrode equipment and marine moisture affects water chemistry. Our service addresses both.' },
      { question: 'How much is pool service in Redondo Beach?', answer: 'Most Redondo Beach homeowners pay $140-$190/month for weekly pool service with chemicals included.' },
      { question: 'Do you serve North and South Redondo?', answer: 'Yes, we cover all Redondo Beach neighborhoods from the Esplanade to the inland areas.' },
    ],
    nearbyCities: ['manhattan-beach', 'torrance', 'el-segundo'],
  },

  // ============================================================
  // EL SEGUNDO
  // ============================================================
  {
    name: 'El Segundo',
    slug: 'el-segundo',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90245'],
    coordinates: { lat: 33.9192, lng: -118.4165 },
    urlPath: '/california/los-angeles-pool-service/el-segundo-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'East El Segundo', description: 'Newer development area with modern homes and pools near the business district.' },
      { name: 'Old Town', description: 'Charming downtown-adjacent neighborhood with established homes and mature landscaping around pools.' },
    ],
    landmarks: ['Chevron Refinery', 'El Segundo Beach', 'The Lakes at El Segundo'],
    climateNotes: 'El Segundo has a mild coastal climate with summer highs around 75-80°F. The morning marine layer is persistent, burning off by midday.',
    waterNotes: 'El Segundo water supply has moderate mineral content with coastal salt air adding to equipment maintenance needs.',
    metaTitle: 'El Segundo Pool Service | Cabana Pools',
    metaDescription: 'Trusted pool maintenance in El Segundo, CA. Coastal pool care for this beach community near LAX. Get a free quote today.',
    heroDescription: 'Reliable pool service in El Segundo, keeping your coastal pool clean and balanced year-round.',
    introContent: 'Cabana Pools serves El Segundo with consistent weekly pool maintenance. This small beach city near LAX offers mild coastal living, and our team ensures your pool stays in top condition despite salt air and marine moisture. Professional care keeps your El Segundo pool swim-ready every day.',
    faqs: [
      { question: 'How much does pool service cost in El Segundo?', answer: 'El Segundo pool service runs $140-$185/month for weekly maintenance with chemicals included.' },
      { question: 'Do you cover all of El Segundo?', answer: 'Yes, we serve the entire city including East El Segundo, Old Town, and the residential areas near the beach.' },
      { question: 'How do you handle coastal salt air?', answer: 'Our service includes equipment inspections for salt corrosion and chemical adjustments to counteract marine moisture effects.' },
    ],
    nearbyCities: ['manhattan-beach', 'redondo-beach', 'playa-del-rey'],
  },

  // ============================================================
  // SILVER LAKE
  // ============================================================
  {
    name: 'Silver Lake',
    slug: 'silver-lake',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90026', '90039'],
    coordinates: { lat: 34.0869, lng: -118.2702 },
    urlPath: '/california/los-angeles-pool-service/silver-lake-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Silver Lake Hills', description: 'Steep hillside neighborhood with architecturally significant homes and pools with city views.' },
      { name: 'Ivanhoe', description: 'Quiet residential area near the reservoir with classic homes and well-maintained backyard pools.' },
    ],
    landmarks: ['Silver Lake Reservoir', 'Sunset Junction', 'Griffith Park (nearby)'],
    climateNotes: 'Silver Lake is warmer than coastal LA, with summer highs around 88-94°F. The hillside terrain creates warm pockets that drive pool usage.',
    waterNotes: 'LADWP water with moderate hardness; steep hillside lots can present unique access and drainage considerations for pool maintenance.',
    metaTitle: 'Silver Lake Pool Service | Cabana Pools',
    metaDescription: 'Professional pool care in Silver Lake, CA. Hillside pool specialists serving the reservoir area and beyond. Free quote available.',
    heroDescription: 'Hillside pool experts in Silver Lake, navigating steep terrain to keep your pool sparkling.',
    introContent: 'Cabana Pools provides pool service to Silver Lake\'s unique hillside community. With architecturally distinctive homes perched on steep lots, Silver Lake pools often require specialized access and maintenance approaches. Our experienced team handles these challenges with ease.',
    faqs: [
      { question: 'Can you service hillside pools in Silver Lake?', answer: 'Yes, our technicians are experienced with Silver Lake\'s steep terrain and can access pools on challenging hillside properties.' },
      { question: 'How much is pool service in Silver Lake?', answer: 'Silver Lake pool service typically costs $145-$200/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve the reservoir area?', answer: 'Yes, we cover all Silver Lake neighborhoods including the hills around the reservoir and the Ivanhoe area.' },
    ],
    nearbyCities: ['glendale', 'west-hollywood', 'pasadena'],
  },

  // ============================================================
  // VENICE
  // ============================================================
  {
    name: 'Venice',
    slug: 'venice',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90291'],
    coordinates: { lat: 33.9850, lng: -118.4695 },
    urlPath: '/california/los-angeles-pool-service/venice-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Venice Canals', description: 'Historic canal district with unique waterfront homes and pools in a charming setting.' },
      { name: 'Abbot Kinney', description: 'Trendy area near the famous boulevard with stylish homes featuring modern pool designs.' },
    ],
    landmarks: ['Venice Beach Boardwalk', 'Venice Canals', 'Abbot Kinney Blvd'],
    climateNotes: 'Venice has a mild coastal climate with summer highs around 75-80°F. The beachfront location means persistent morning marine layers and salt air.',
    waterNotes: 'LADWP water combined with coastal salt spray means pools need regular corrosion checks on metal components.',
    metaTitle: 'Venice Pool Service | Cabana Pools',
    metaDescription: 'Expert pool service in Venice, CA. Coastal pool care for Venice Canals, Abbot Kinney and beach-adjacent homes. Free quote.',
    heroDescription: 'Coastal pool care in Venice, from canal-side homes to beach bungalows near Abbot Kinney.',
    introContent: 'Cabana Pools serves Venice homeowners with reliable pool maintenance adapted to this iconic coastal community. Salt air, marine moisture, and the unique canal-side properties create distinctive maintenance needs. Our team delivers consistent care that keeps your Venice pool pristine.',
    faqs: [
      { question: 'Do you service Venice Canal homes?', answer: 'Yes, we service pools throughout the Venice Canals district and understand the unique access and moisture considerations of canal-adjacent properties.' },
      { question: 'How much does pool service cost in Venice?', answer: 'Venice pool service typically runs $145-$200/month for weekly service with chemicals included.' },
      { question: 'How does beach proximity affect my pool?', answer: 'Salt spray, sand, and marine moisture can corrode equipment and affect water chemistry. Our service includes monitoring and protection for these coastal factors.' },
    ],
    nearbyCities: ['marina-del-rey', 'mar-vista', 'santa-monica'],
  },

  // ============================================================
  // STUDIO CITY
  // ============================================================
  {
    name: 'Studio City',
    slug: 'studio-city',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91604'],
    coordinates: { lat: 34.1486, lng: -118.3968 },
    urlPath: '/california/los-angeles-pool-service/studio-city-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Fryman Canyon', description: 'Hillside area with luxury homes and pools overlooking the San Fernando Valley.' },
      { name: 'Colfax Meadows', description: 'Family-friendly neighborhood with tree-lined streets and classic backyard pools.' },
    ],
    landmarks: ['Fryman Canyon Trail', 'CBS Studio Center', 'Tujunga Village'],
    climateNotes: 'Studio City straddles the Cahuenga Pass with warmer Valley-side temps reaching 95°F in summer, while hillside properties stay slightly cooler.',
    waterNotes: 'LADWP water with moderate mineral content; heavy tree canopy in many areas means increased leaf debris in pools.',
    metaTitle: 'Studio City Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Studio City, CA. Serving Fryman Canyon, Colfax Meadows and all areas. Get a free quote.',
    heroDescription: 'Pool care for Studio City homes, from Valley-floor backyards to hillside retreats near Fryman Canyon.',
    introContent: 'Cabana Pools provides dependable pool service throughout Studio City. Whether your pool sits in the tree-lined Colfax Meadows or on a hillside near Fryman Canyon, our team delivers consistent weekly maintenance adapted to local conditions. The mix of Valley heat and lush landscaping creates unique pool care needs.',
    faqs: [
      { question: 'How much is pool service in Studio City?', answer: 'Studio City pool service typically costs $145-$200/month for weekly service with chemicals included.' },
      { question: 'Do you handle leaf debris from Studio City trees?', answer: 'Yes, thorough skimming and filter cleaning are part of every visit. Studio City\'s mature trees produce significant debris we manage weekly.' },
      { question: 'What areas of Studio City do you cover?', answer: 'We serve all Studio City neighborhoods including Fryman Canyon, Colfax Meadows, Tujunga Village area, and the Valley-side flatlands.' },
    ],
    nearbyCities: ['sherman-oaks', 'hollywood-hills', 'encino'],
  },

  // ============================================================
  // PLAYA VISTA
  // ============================================================
  {
    name: 'Playa Vista',
    slug: 'playa-vista',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90094'],
    coordinates: { lat: 33.9740, lng: -118.4176 },
    urlPath: '/california/los-angeles-pool-service/playa-vista-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Playa Vista Central', description: 'Master-planned community with modern homes and pools in a tech-hub setting.' },
      { name: 'The Resort', description: 'Residential section featuring contemporary homes with sleek pool designs and community amenities.' },
    ],
    landmarks: ['Playa Vista Park', 'LMU (adjacent)', 'Silicon Beach tech campus'],
    climateNotes: 'Playa Vista enjoys a mild Westside coastal climate with summer highs around 78-82°F and regular morning marine layers.',
    waterNotes: 'LADWP water supply with moderate hardness; the newer construction means many pools have modern, efficient equipment.',
    metaTitle: 'Playa Vista Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Playa Vista, CA. Modern pool care for Silicon Beach\'s master-planned community. Free quote.',
    heroDescription: 'Modern pool service for Playa Vista, keeping your Silicon Beach pool in pristine condition.',
    introContent: 'Cabana Pools serves the modern Playa Vista community with professional pool maintenance. As one of LA\'s newest neighborhoods, Playa Vista features contemporary pool designs with efficient equipment. Our technicians maintain these systems to manufacturer specifications for optimal performance.',
    faqs: [
      { question: 'Do you service HOA and community pools in Playa Vista?', answer: 'Yes, we handle both private residential pools and community/HOA pools throughout the Playa Vista development.' },
      { question: 'How much is pool service in Playa Vista?', answer: 'Playa Vista pool service typically runs $140-$185/month for weekly service with chemicals included.' },
      { question: 'Can you work with smart pool systems?', answer: 'Yes, our technicians are trained on modern automation, variable-speed pumps, and smart pool controllers common in Playa Vista homes.' },
    ],
    nearbyCities: ['marina-del-rey', 'mar-vista', 'culver-city'],
  },

  // ============================================================
  // AGOURA HILLS
  // ============================================================
  {
    name: 'Agoura Hills',
    slug: 'agoura-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91301'],
    coordinates: { lat: 34.1531, lng: -118.7615 },
    urlPath: '/california/los-angeles-pool-service/agoura-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Old Agoura', description: 'Semi-rural area with ranch-style properties and pools surrounded by natural hillsides.' },
      { name: 'Morrison Ranch', description: 'Planned community with family homes and pools in a quiet suburban setting.' },
    ],
    landmarks: ['Paramount Ranch', 'Chesebro Canyon Trail', 'The Whizin Market Square'],
    climateNotes: 'Agoura Hills has warm, dry summers reaching 95°F with Santa Ana winds in fall and fire season concerns for hillside properties.',
    waterNotes: 'Las Virgenes MWD provides water with moderate hardness; Santa Ana winds can deposit ash and debris in pools during fire season.',
    metaTitle: 'Agoura Hills Pool Service | Cabana Pools',
    metaDescription: 'Expert pool care in Agoura Hills, CA. Serving Old Agoura, Morrison Ranch and surrounding communities. Free quote available.',
    heroDescription: 'Reliable pool service in Agoura Hills, managing hot summers and hillside conditions for worry-free swimming.',
    introContent: 'Cabana Pools provides reliable pool service to Agoura Hills at the gateway to the Santa Monica Mountains. Hot summers and dry conditions mean pools are essential, while proximity to natural areas brings debris and fire season ash challenges. Our team is prepared for all of it.',
    faqs: [
      { question: 'How do you handle fire season debris in Agoura Hills?', answer: 'During fire season, we perform extra skimming and filter cleaning to manage ash and debris. We also monitor water chemistry changes caused by particulate contamination.' },
      { question: 'How much is pool service in Agoura Hills?', answer: 'Most Agoura Hills homeowners pay $150-$200/month for weekly pool service with chemicals included.' },
      { question: 'Do you serve Old Agoura?', answer: 'Yes, we service all Agoura Hills areas including Old Agoura, Morrison Ranch, and the communities near Chesebro Canyon.' },
    ],
    nearbyCities: ['westlake-village', 'calabasas', 'malibu'],
  },

  // ============================================================
  // PALOS VERDES ESTATES
  // ============================================================
  {
    name: 'Palos Verdes Estates',
    slug: 'palos-verdes-estates',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90274'],
    coordinates: { lat: 33.7866, lng: -118.3910 },
    urlPath: '/california/los-angeles-pool-service/palos-verdes-estates-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Lunada Bay', description: 'Prestigious blufftop neighborhood with ocean views and pools exposed to coastal winds.' },
      { name: 'Malaga Cove', description: 'Mediterranean-inspired community with classic homes and pools near the coast.' },
    ],
    landmarks: ['Malaga Cove Plaza', 'Lunada Bay', 'Palos Verdes Golf Club'],
    climateNotes: 'Palos Verdes Estates has a mild coastal climate with summers around 75-80°F. Ocean breezes are persistent and keep temperatures comfortable.',
    waterNotes: 'California Water Service provides moderately hard water; strong coastal winds carry salt and moisture that affect pool equipment.',
    metaTitle: 'Palos Verdes Estates Pool Service | Cabana Pools',
    metaDescription: 'Premium pool maintenance in Palos Verdes Estates, CA. Coastal pool specialists on the PV Peninsula. Get a free quote today.',
    heroDescription: 'Coastal pool care for Palos Verdes Estates, protecting your pool from ocean winds and salt air on the bluffs.',
    introContent: 'Cabana Pools delivers premium pool service to Palos Verdes Estates on the stunning PV Peninsula. The blufftop setting means constant ocean exposure, and our team specializes in protecting pools and equipment from salt spray and coastal conditions while keeping water perfectly balanced.',
    faqs: [
      { question: 'How does ocean exposure affect PVE pools?', answer: 'Blufftop pools face constant salt spray and wind-driven debris. Our service includes corrosion prevention and enhanced cleaning for these coastal conditions.' },
      { question: 'How much is pool service in Palos Verdes Estates?', answer: 'PVE pool service typically costs $155-$220/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve the entire PV Peninsula?', answer: 'Yes, we cover Palos Verdes Estates, Rolling Hills Estates, Rancho Palos Verdes, and the surrounding PV communities.' },
    ],
    nearbyCities: ['rolling-hills-estates', 'rancho-palos-verdes', 'redondo-beach'],
  },

  // ============================================================
  // MANHATTAN BEACH
  // ============================================================
  {
    name: 'Manhattan Beach',
    slug: 'manhattan-beach',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90266'],
    coordinates: { lat: 33.8847, lng: -118.4109 },
    urlPath: '/california/los-angeles-pool-service/manhattan-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'The Hill Section', description: 'Premium neighborhood with ocean-view homes and pools in one of the South Bay\'s most desirable areas.' },
      { name: 'The Sand Section', description: 'Beach-adjacent area with homes featuring pools just blocks from the shore.' },
    ],
    landmarks: ['Manhattan Beach Pier', 'Metlox Plaza', 'Manhattan Beach Botanical Garden'],
    climateNotes: 'Manhattan Beach has a mild South Bay climate with summer highs around 75-80°F. Morning marine layers are common, clearing by midday.',
    waterNotes: 'Cal Water supplies moderately hard water; the close beach proximity means salt air is a constant factor for pool equipment.',
    metaTitle: 'Manhattan Beach Pool Service | Cabana Pools',
    metaDescription: 'Expert pool service in Manhattan Beach, CA. South Bay coastal pool specialists. Serving the Hill Section and Sand Section. Free quote.',
    heroDescription: 'South Bay pool service in Manhattan Beach, keeping your beachside pool crystal clear and well-protected.',
    introContent: 'Cabana Pools provides premium pool service to Manhattan Beach, one of the South Bay\'s most desirable communities. The close beach proximity and mild climate make pools a central part of life here. Our team ensures your pool stays pristine despite the salt air and coastal conditions.',
    faqs: [
      { question: 'How much is pool service in Manhattan Beach?', answer: 'Manhattan Beach pool service typically runs $150-$210/month for weekly service with chemicals included.' },
      { question: 'Do you service Hill Section and Sand Section?', answer: 'Yes, we serve all Manhattan Beach neighborhoods including the Hill Section, Sand Section, East Manhattan, and Tree Section.' },
      { question: 'How do you protect equipment from salt air?', answer: 'We regularly inspect and lubricate equipment, check for corrosion, and recommend protective measures for metal components exposed to salt air.' },
    ],
    nearbyCities: ['redondo-beach', 'el-segundo', 'torrance'],
  },

  // ============================================================
  // ARCADIA
  // ============================================================
  {
    name: 'Arcadia',
    slug: 'arcadia',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91006', '91007'],
    coordinates: { lat: 34.1397, lng: -118.0353 },
    urlPath: '/california/los-angeles-pool-service/arcadia-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Upper Arcadia', description: 'Foothill neighborhood with larger estates and pools nestled against the San Gabriel Mountains.' },
      { name: 'Arcadia Highlands', description: 'Upscale area with spacious homes and well-maintained pools in a quiet residential setting.' },
    ],
    landmarks: ['Santa Anita Park', 'Los Angeles County Arboretum', 'Westfield Santa Anita'],
    climateNotes: 'Arcadia sits at the base of the San Gabriel Mountains with hot summers reaching 95-100°F. The foothill location traps heat in the valley below.',
    waterNotes: 'Arcadia water comes from local wells and imported sources with moderate to high mineral content.',
    metaTitle: 'Arcadia Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Arcadia, CA. Serving Upper Arcadia, the Highlands and all neighborhoods. Get a free quote.',
    heroDescription: 'Expert pool care in Arcadia, managing foothill heat and mineral-rich water for crystal-clear results.',
    introContent: 'Cabana Pools provides reliable pool service to Arcadia at the base of the San Gabriel Mountains. Hot summers and mineral-rich local water create demanding conditions for pools. Our technicians understand these challenges and deliver consistent weekly care that keeps Arcadia pools in excellent condition.',
    faqs: [
      { question: 'How much does pool service cost in Arcadia?', answer: 'Most Arcadia homeowners pay $145-$200/month for weekly pool service with chemicals included.' },
      { question: 'How does the local water affect my pool?', answer: 'Arcadia\'s well water tends to be mineral-rich, which can cause calcium scaling. Our service includes regular hardness testing and scale prevention.' },
      { question: 'Do you service near Santa Anita Park?', answer: 'Yes, we cover all Arcadia neighborhoods including areas near Santa Anita Park, the Arboretum, and Upper Arcadia.' },
    ],
    nearbyCities: ['pasadena', 'la-canada-flintridge', 'burbank'],
  },

  // ============================================================
  // SANTA MONICA
  // ============================================================
  {
    name: 'Santa Monica',
    slug: 'santa-monica',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90401', '90402', '90405'],
    coordinates: { lat: 34.0195, lng: -118.4912 },
    urlPath: '/california/los-angeles-pool-service/santa-monica-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'North of Montana', description: 'Prestigious residential area with grand homes and pools north of Montana Avenue.' },
      { name: 'Sunset Park', description: 'Family-friendly neighborhood south of Pico with comfortable homes and backyard pools.' },
      { name: 'Santa Monica Canyon', description: 'Charming canyon neighborhood with eclectic homes and pools near the beach.' },
    ],
    landmarks: ['Santa Monica Pier', 'Third Street Promenade', 'Montana Avenue'],
    climateNotes: 'Santa Monica has a quintessential coastal climate with summer highs around 75-80°F and persistent marine influence keeping temperatures mild year-round.',
    waterNotes: 'Santa Monica water comes from local wells and imported sources with moderate mineral content; salt air from the coast is a constant consideration.',
    metaTitle: 'Santa Monica Pool Service | Cabana Pools',
    metaDescription: 'Premium pool service in Santa Monica, CA. Coastal pool experts serving North of Montana, Sunset Park and all areas. Free quote.',
    heroDescription: 'Coastal pool excellence in Santa Monica, from North of Montana estates to Sunset Park family homes.',
    introContent: 'Cabana Pools delivers premium pool maintenance throughout Santa Monica. The ideal coastal climate makes pools a year-round centerpiece of outdoor living. Our team provides expert care that accounts for the marine environment while keeping your water sparkling and balanced.',
    faqs: [
      { question: 'How much is pool service in Santa Monica?', answer: 'Santa Monica pool service ranges from $150-$220/month for weekly maintenance with chemicals included, depending on pool size and location.' },
      { question: 'Do you serve North of Montana?', answer: 'Yes, we serve all Santa Monica neighborhoods including North of Montana, Sunset Park, Santa Monica Canyon, and the Wilshire Montana area.' },
      { question: 'How does coastal weather affect my pool?', answer: 'Salt air and marine moisture can corrode metal parts and affect water chemistry. Our service includes coastal-specific monitoring and protection.' },
    ],
    nearbyCities: ['brentwood', 'venice', 'pacific-palisades'],
  },

  // ============================================================
  // CALABASAS
  // ============================================================
  {
    name: 'Calabasas',
    slug: 'calabasas',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91302'],
    coordinates: { lat: 34.1367, lng: -118.6609 },
    urlPath: '/california/los-angeles-pool-service/calabasas-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'The Oaks', description: 'Gated luxury community with estate homes and resort-style pools among oak-studded hillsides.' },
      { name: 'Calabasas Park', description: 'Family-oriented neighborhood with well-maintained homes and pools near parks and trails.' },
    ],
    landmarks: ['The Commons at Calabasas', 'Malibu Creek State Park', 'King Gillette Ranch'],
    climateNotes: 'Calabasas sits in the western hills between the Valley and Malibu with hot summers reaching 95°F. Fire season brings Santa Ana winds, ash, and debris.',
    waterNotes: 'Las Virgenes MWD supplies water with moderate hardness; oak trees produce heavy leaf and pollen debris that accumulates in pools.',
    metaTitle: 'Calabasas Pool Service | Cabana Pools',
    metaDescription: 'Expert pool maintenance in Calabasas, CA. Serving The Oaks, Calabasas Park and gated communities. Get a free quote today.',
    heroDescription: 'Premium pool care in Calabasas, from gated estates at The Oaks to family homes near the Commons.',
    introContent: 'Cabana Pools serves Calabasas homeowners with premium pool maintenance tailored to this hillside community. The oak-studded terrain creates constant debris challenges, while hot summers demand diligent chemical management. Our team handles it all with expert weekly service.',
    faqs: [
      { question: 'Do you service gated communities in Calabasas?', answer: 'Yes, we have access to The Oaks, Calabasas Hills, and other gated communities. We service many estate pools throughout Calabasas.' },
      { question: 'How much does pool service cost in Calabasas?', answer: 'Calabasas pool service typically runs $160-$225/month for weekly service with chemicals included.' },
      { question: 'How do you manage oak tree debris?', answer: 'Our service includes thorough skimming, basket cleaning, and filter maintenance to handle the heavy oak leaf, acorn, and pollen deposits common in Calabasas.' },
    ],
    nearbyCities: ['hidden-hills', 'woodland-hills', 'agoura-hills'],
  },

  // ============================================================
  // CHATSWORTH
  // ============================================================
  {
    name: 'Chatsworth',
    slug: 'chatsworth',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91311'],
    coordinates: { lat: 34.2572, lng: -118.6004 },
    urlPath: '/california/los-angeles-pool-service/chatsworth-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Chatsworth Lake Manor', description: 'Equestrian-friendly area with spacious properties and pools in a semi-rural setting.' },
      { name: 'Oakwood Knoll', description: 'Residential neighborhood with family homes and established pools near community parks.' },
    ],
    landmarks: ['Chatsworth Park', 'Stoney Point', 'Santa Susana Pass State Historic Park'],
    climateNotes: 'Chatsworth is in the northwestern San Fernando Valley with hot, dry summers frequently exceeding 100°F. Santa Ana winds bring additional heat and fire risk.',
    waterNotes: 'LADWP water supply with moderate hardness; the extreme heat drives heavy evaporation and increased chemical consumption.',
    metaTitle: 'Chatsworth Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Chatsworth, CA. Valley heat experts keeping your pool balanced through hot summers. Free quote.',
    heroDescription: 'Pool service built for Chatsworth heat, keeping your water balanced through the Valley\'s hottest summer days.',
    introContent: 'Cabana Pools provides dependable pool service to Chatsworth in the northwestern Valley. With some of the hottest temperatures in LA County, Chatsworth pools need extra attention to chemical balance and equipment performance. Our team delivers reliable weekly care through every heat wave.',
    faqs: [
      { question: 'Why does Chatsworth heat affect my pool?', answer: 'Temperatures above 100°F accelerate chlorine loss, increase evaporation, and promote algae growth. Our service adjusts chemical dosing for these extreme conditions.' },
      { question: 'How much is pool service in Chatsworth?', answer: 'Chatsworth pool service typically costs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service equestrian properties?', answer: 'Yes, we serve all Chatsworth properties including the larger lots in Chatsworth Lake Manor and other equestrian-zoned areas.' },
    ],
    nearbyCities: ['west-hills', 'woodland-hills', 'calabasas'],
  },

  // ============================================================
  // PACIFIC PALISADES
  // ============================================================
  {
    name: 'Pacific Palisades',
    slug: 'pacific-palisades',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90272'],
    coordinates: { lat: 34.0281, lng: -118.5260 },
    urlPath: '/california/los-angeles-pool-service/pacific-palisades-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'The Riviera', description: 'Prestigious hillside community with ocean views and pools in one of LA\'s most desirable addresses.' },
      { name: 'Castellammare', description: 'Coastal bluff neighborhood with dramatic homes and pools perched above the Pacific.' },
    ],
    landmarks: ['Will Rogers State Historic Park', 'Temescal Gateway Park', 'Palisades Village'],
    climateNotes: 'Pacific Palisades enjoys a mild coastal climate with summers around 78-84°F. Canyon areas can be warmer, while blufftop locations catch ocean breezes.',
    waterNotes: 'LADWP water with moderate mineral content; ocean proximity means salt air exposure for coastal-facing pools.',
    metaTitle: 'Pacific Palisades Pool Service | Cabana Pools',
    metaDescription: 'Premium pool care in Pacific Palisades, CA. Serving The Riviera, Castellammare and all Palisades areas. Free quote available.',
    heroDescription: 'Premium pool service for Pacific Palisades, from The Riviera to ocean-view Castellammare estates.',
    introContent: 'Cabana Pools provides premium pool maintenance to Pacific Palisades, one of LA\'s most beautiful coastal communities. From hillside estates with ocean views to canyon retreats, our team delivers expert care adapted to each property\'s unique setting and exposure.',
    faqs: [
      { question: 'How much is pool service in Pacific Palisades?', answer: 'Pacific Palisades pool service typically ranges from $160-$235/month depending on pool size and property access.' },
      { question: 'Do you service The Riviera and Castellammare?', answer: 'Yes, we serve all Pacific Palisades neighborhoods including The Riviera, Castellammare, Huntington Palisades, and the Village area.' },
      { question: 'Can you handle hillside and blufftop pools?', answer: 'Absolutely. Our technicians are experienced with the challenging terrain and access requirements common in Pacific Palisades properties.' },
    ],
    nearbyCities: ['malibu', 'brentwood', 'santa-monica'],
  },

  // ============================================================
  // BEVERLY HILLS
  // ============================================================
  {
    name: 'Beverly Hills',
    slug: 'beverly-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90210', '90211', '90212'],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    urlPath: '/california/los-angeles-pool-service/beverly-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Trousdale Estates', description: 'Mid-century modern enclave with sleek homes and pools commanding city views from the hillside.' },
      { name: 'The Flats', description: 'Prestigious area south of Sunset with grand estates and resort-style pools behind manicured hedges.' },
    ],
    landmarks: ['Rodeo Drive', 'Beverly Gardens Park', 'Greystone Mansion'],
    climateNotes: 'Beverly Hills has a mild year-round climate with summer highs around 84-90°F. Hillside properties above Sunset are slightly warmer than the flatlands.',
    waterNotes: 'Beverly Hills water comes from local wells and imported sources with moderate mineral content; many estates have complex pool and spa systems.',
    metaTitle: 'Beverly Hills Pool Service | Cabana Pools',
    metaDescription: 'Elite pool service in Beverly Hills, CA. Expert care for Trousdale Estates, The Flats and luxury properties. Get a free quote.',
    heroDescription: 'Elite pool service for Beverly Hills, maintaining world-class pools across The Flats and Trousdale Estates.',
    introContent: 'Cabana Pools provides elite pool maintenance to Beverly Hills properties. With some of the most impressive residential pools in the world, Beverly Hills demands the highest level of service. Our experienced technicians deliver meticulous care for complex pool and spa systems.',
    faqs: [
      { question: 'How much is pool service in Beverly Hills?', answer: 'Beverly Hills pool service ranges from $175-$300/month depending on pool complexity, size, and features.' },
      { question: 'Can you maintain complex pool systems?', answer: 'Yes, we handle multi-zone systems, infinity edges, attached spas, water features, and automation controllers common in Beverly Hills estates.' },
      { question: 'Do you service Trousdale Estates?', answer: 'Yes, we serve all Beverly Hills areas including Trousdale Estates, The Flats, Beverly Hills Post Office, and the hillside neighborhoods.' },
    ],
    nearbyCities: ['west-hollywood', 'bel-air', 'brentwood'],
  },

  // ============================================================
  // PASADENA
  // ============================================================
  {
    name: 'Pasadena',
    slug: 'pasadena',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91101', '91104', '91107'],
    coordinates: { lat: 34.1478, lng: -118.1445 },
    urlPath: '/california/los-angeles-pool-service/pasadena-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'San Rafael', description: 'Hillside neighborhood with Craftsman homes and pools surrounded by arroyo-adjacent natural beauty.' },
      { name: 'South Pasadena (adjacent)', description: 'Charming community with historic homes and established pools in a tree-lined setting.' },
      { name: 'Linda Vista', description: 'Upscale area near the Rose Bowl with spacious properties and well-appointed pools.' },
    ],
    landmarks: ['Rose Bowl', 'Old Town Pasadena', 'Huntington Library'],
    climateNotes: 'Pasadena is warmer than coastal LA with summer highs reaching 95-100°F. The San Gabriel Mountain backdrop creates warm, dry conditions.',
    waterNotes: 'Pasadena Water and Power draws from local wells and imported supplies with moderate to high mineral content.',
    metaTitle: 'Pasadena Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Pasadena, CA. Serving San Rafael, Linda Vista and all neighborhoods. Get a free quote today.',
    heroDescription: 'Trusted pool care in Pasadena, from the Rose Bowl area to hillside homes against the San Gabriel Mountains.',
    introContent: 'Cabana Pools provides reliable pool service throughout Pasadena. With warm inland temperatures and mineral-rich local water, Pasadena pools need attentive professional care. Our technicians deliver consistent weekly service adapted to this city\'s unique climate and water conditions.',
    faqs: [
      { question: 'How much does pool service cost in Pasadena?', answer: 'Pasadena pool service typically runs $145-$200/month for weekly maintenance with chemicals included.' },
      { question: 'Does Pasadena water affect my pool?', answer: 'Local well water can be mineral-rich, contributing to calcium scaling. Our service includes regular hardness testing and prevention measures.' },
      { question: 'What areas of Pasadena do you cover?', answer: 'We serve all Pasadena neighborhoods including San Rafael, Linda Vista, Madison Heights, and the area near the Rose Bowl.' },
    ],
    nearbyCities: ['glendale', 'arcadia', 'la-canada-flintridge'],
  },

  // ============================================================
  // LA CANADA FLINTRIDGE
  // ============================================================
  {
    name: 'La Canada Flintridge',
    slug: 'la-canada-flintridge',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91011'],
    coordinates: { lat: 34.2000, lng: -118.1878 },
    urlPath: '/california/los-angeles-pool-service/la-canada-flintridge-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Flintridge', description: 'Upscale hillside community with spacious homes and pools backed by mountain views.' },
      { name: 'Paradise Valley', description: 'Secluded canyon neighborhood with established estates and pools in a natural setting.' },
    ],
    landmarks: ['Descanso Gardens', 'JPL (Jet Propulsion Laboratory)', 'Flintridge Riding Club'],
    climateNotes: 'La Canada Flintridge sits at higher elevation against the San Gabriel Mountains with hot summers reaching 95°F. Cool canyon breezes moderate temperatures in some areas.',
    waterNotes: 'Foothill Municipal Water District provides water with moderate mineral content from local and imported sources.',
    metaTitle: 'La Canada Flintridge Pool Service | Cabana Pools',
    metaDescription: 'Expert pool care in La Canada Flintridge, CA. Foothill pool specialists serving Flintridge and Paradise Valley. Free quote.',
    heroDescription: 'Foothill pool service in La Canada Flintridge, keeping your pool pristine against the San Gabriel Mountain backdrop.',
    introContent: 'Cabana Pools serves La Canada Flintridge with expert pool maintenance adapted to this scenic foothill community. The mountain-adjacent setting brings hot summers and natural debris, while the community\'s high standards demand meticulous pool care. Our team delivers both.',
    faqs: [
      { question: 'How much is pool service in La Canada Flintridge?', answer: 'Pool service in La Canada Flintridge typically costs $155-$210/month for weekly maintenance with chemicals included.' },
      { question: 'Do you handle debris from mountain trees?', answer: 'Yes, our service includes thorough debris removal from the oak, sycamore, and pine trees common in the La Canada Flintridge foothills.' },
      { question: 'What areas do you cover?', answer: 'We serve all of La Canada Flintridge including Flintridge, Paradise Valley, and the neighborhoods near Descanso Gardens and JPL.' },
    ],
    nearbyCities: ['pasadena', 'glendale', 'arcadia'],
  },

  // ============================================================
  // HOLLYWOOD HILLS
  // ============================================================
  {
    name: 'Hollywood Hills',
    slug: 'hollywood-hills',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90068', '90046'],
    coordinates: { lat: 34.1147, lng: -118.3367 },
    urlPath: '/california/los-angeles-pool-service/hollywood-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Beachwood Canyon', description: 'Iconic neighborhood below the Hollywood Sign with hillside homes and pools with dramatic views.' },
      { name: 'Laurel Canyon', description: 'Legendary canyon community with eclectic homes and pools nestled among lush vegetation.' },
    ],
    landmarks: ['Hollywood Sign', 'Runyon Canyon Park', 'Hollywood Bowl'],
    climateNotes: 'Hollywood Hills has varied microclimates based on elevation and canyon orientation, with summer temps ranging from 85-95°F. Canyon bottoms trap heat.',
    waterNotes: 'LADWP water with moderate hardness; steep terrain and narrow roads create access challenges for pool service equipment.',
    metaTitle: 'Hollywood Hills Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Hollywood Hills, CA. Hillside pool experts serving Beachwood Canyon, Laurel Canyon and more. Free quote.',
    heroDescription: 'Hillside pool experts in Hollywood Hills, maintaining pools from Laurel Canyon to Beachwood with stunning views.',
    introContent: 'Cabana Pools provides expert pool service to the iconic Hollywood Hills. Steep terrain, narrow roads, and varied microclimates make this one of LA\'s most challenging areas for pool maintenance. Our experienced technicians navigate these conditions to deliver consistent, high-quality care.',
    faqs: [
      { question: 'Can you access hillside pools in the Hollywood Hills?', answer: 'Yes, our technicians are experienced with the steep terrain, narrow roads, and challenging access common in Hollywood Hills properties.' },
      { question: 'How much is pool service in Hollywood Hills?', answer: 'Hollywood Hills pool service ranges from $155-$225/month depending on pool size and access difficulty.' },
      { question: 'Do you cover Laurel and Beachwood Canyons?', answer: 'Yes, we serve all Hollywood Hills areas including Laurel Canyon, Beachwood Canyon, Outpost Estates, and the Bird Streets.' },
    ],
    nearbyCities: ['west-hollywood', 'studio-city', 'bel-air'],
  },

  // ============================================================
  // RANCHO PALOS VERDES
  // ============================================================
  {
    name: 'Rancho Palos Verdes',
    slug: 'rancho-palos-verdes',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90275'],
    coordinates: { lat: 33.7444, lng: -118.3870 },
    urlPath: '/california/los-angeles-pool-service/rancho-palos-verdes-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Portuguese Bend', description: 'Scenic coastal area with ranch-style properties and pools overlooking the Pacific.' },
      { name: 'Miraleste', description: 'Hilltop neighborhood with panoramic views and pools catching coastal breezes.' },
    ],
    landmarks: ['Trump National Golf Club', 'Point Vicente Lighthouse', 'Terranea Resort'],
    climateNotes: 'Rancho Palos Verdes enjoys a mild Mediterranean climate with summer highs around 75-82°F. Coastal fog and marine layers are common.',
    waterNotes: 'California Water Service provides moderately hard water; the elevated coastal setting exposes pools to persistent ocean winds.',
    metaTitle: 'Rancho Palos Verdes Pool Service | Cabana Pools',
    metaDescription: 'Expert pool maintenance in Rancho Palos Verdes, CA. Coastal pool specialists on the PV Peninsula. Get a free quote today.',
    heroDescription: 'Coastal pool care in Rancho Palos Verdes, keeping your pool pristine above the Pacific.',
    introContent: 'Cabana Pools serves Rancho Palos Verdes with expert coastal pool maintenance. Perched on the PV Peninsula with sweeping ocean views, RPV pools face constant marine exposure. Our team protects your pool and equipment from these conditions while maintaining crystal-clear water.',
    faqs: [
      { question: 'How does ocean wind affect RPV pools?', answer: 'Persistent coastal winds carry salt, sand, and debris into pools. Our service includes enhanced cleaning and corrosion monitoring for these conditions.' },
      { question: 'How much is pool service in Rancho Palos Verdes?', answer: 'RPV pool service typically costs $150-$210/month for weekly maintenance with chemicals included.' },
      { question: 'Do you cover Portuguese Bend?', answer: 'Yes, we serve all RPV neighborhoods including Portuguese Bend, Miraleste, Eastview, and the areas near Terranea Resort.' },
    ],
    nearbyCities: ['palos-verdes-estates', 'rolling-hills-estates', 'torrance'],
  },

  // ============================================================
  // BURBANK
  // ============================================================
  {
    name: 'Burbank',
    slug: 'burbank',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91501', '91505', '91506'],
    coordinates: { lat: 34.1808, lng: -118.3090 },
    urlPath: '/california/los-angeles-pool-service/burbank-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Magnolia Park', description: 'Charming neighborhood with vintage shops and homes featuring well-maintained backyard pools.' },
      { name: 'Burbank Hills', description: 'Hillside community with larger homes and pools overlooking the valley and studios.' },
    ],
    landmarks: ['Warner Bros. Studios', 'Walt Disney Studios', 'Downtown Burbank'],
    climateNotes: 'Burbank sits at the eastern edge of the San Fernando Valley with warm summers reaching 95°F. The Verdugo Mountains provide a scenic backdrop and some wind shelter.',
    waterNotes: 'Burbank Water and Power supplies water from local wells and imports with moderate mineral content.',
    metaTitle: 'Burbank Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Burbank, CA. Serving Magnolia Park, Burbank Hills and all neighborhoods. Free quote available.',
    heroDescription: 'Dependable pool service in Burbank, from the valley floor to hillside homes near the Verdugos.',
    introContent: 'Cabana Pools delivers reliable pool service throughout Burbank. The warm Valley climate makes pools essential for Burbank homeowners, and our team ensures they stay clean and balanced through hot summers. From Magnolia Park to the Burbank Hills, we provide consistent weekly care.',
    faqs: [
      { question: 'How much does pool service cost in Burbank?', answer: 'Burbank pool service typically runs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'What areas of Burbank do you serve?', answer: 'We cover all Burbank neighborhoods including Magnolia Park, the Hills, Rancho, Media District, and the areas near the studios.' },
      { question: 'Do you handle pool equipment repairs?', answer: 'Yes, we repair and maintain pumps, filters, heaters, salt systems, and automation for Burbank pool owners.' },
    ],
    nearbyCities: ['glendale', 'pasadena', 'studio-city'],
  },

  // ============================================================
  // PLAYA DEL REY
  // ============================================================
  {
    name: 'Playa del Rey',
    slug: 'playa-del-rey',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90293'],
    coordinates: { lat: 33.9581, lng: -118.4420 },
    urlPath: '/california/los-angeles-pool-service/playa-del-rey-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Playa del Rey Bluffs', description: 'Elevated area with homes and pools overlooking the wetlands and Ballona Creek.' },
      { name: 'Surfridge', description: 'Beach-adjacent area with homes near the Dockweiler Beach shoreline.' },
    ],
    landmarks: ['Dockweiler Beach', 'Ballona Wetlands', 'Del Rey Lagoon'],
    climateNotes: 'Playa del Rey has a mild coastal climate with summer highs around 75-80°F. Persistent sea breezes and marine layers keep temperatures comfortable.',
    waterNotes: 'LADWP water with moderate mineral content; the coastal and wetlands proximity creates a humid microclimate affecting pool equipment.',
    metaTitle: 'Playa del Rey Pool Service | Cabana Pools',
    metaDescription: 'Professional pool care in Playa del Rey, CA. Coastal pool specialists near Dockweiler Beach. Get a free quote today.',
    heroDescription: 'Coastal pool service in Playa del Rey, keeping your beachside pool clean and protected from marine conditions.',
    introContent: 'Cabana Pools serves Playa del Rey with coastal-specialized pool maintenance. This small beach community near LAX features pools exposed to persistent ocean breezes and salt air. Our team delivers weekly care that protects your pool and equipment from these marine conditions.',
    faqs: [
      { question: 'How much is pool service in Playa del Rey?', answer: 'Playa del Rey pool service typically costs $140-$190/month for weekly service with chemicals included.' },
      { question: 'Does the beach proximity affect my pool?', answer: 'Yes, salt air and sand are constant factors. Our service includes corrosion monitoring and thorough cleaning to manage coastal exposure.' },
      { question: 'Do you serve the bluff area?', answer: 'Yes, we cover all Playa del Rey areas including the bluffs, lower Playa, and neighborhoods near the wetlands.' },
    ],
    nearbyCities: ['marina-del-rey', 'el-segundo', 'playa-vista'],
  },

  // ============================================================
  // INGLEWOOD
  // ============================================================
  {
    name: 'Inglewood',
    slug: 'inglewood',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90301', '90302', '90305'],
    coordinates: { lat: 33.9617, lng: -118.3531 },
    urlPath: '/california/los-angeles-pool-service/inglewood-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Morningside Park', description: 'Established residential neighborhood with classic homes and well-kept backyard pools.' },
      { name: 'Darby-Dixon', description: 'Family-oriented area with mid-century homes and pools in a walkable community setting.' },
    ],
    landmarks: ['SoFi Stadium', 'The Forum', 'Hollywood Park'],
    climateNotes: 'Inglewood has a pleasant climate moderated by coastal proximity with summer highs around 80-85°F and mild winters.',
    waterNotes: 'Inglewood water comes from local and imported sources with moderate hardness requiring routine chemical management.',
    metaTitle: 'Inglewood Pool Service | Cabana Pools',
    metaDescription: 'Trusted pool maintenance in Inglewood, CA. Serving Morningside Park, Darby-Dixon and all neighborhoods. Free quote available.',
    heroDescription: 'Professional pool care in Inglewood, keeping your backyard pool sparkling near SoFi Stadium and the Forum.',
    introContent: 'Cabana Pools provides reliable pool service to Inglewood homeowners. With a pleasant climate moderated by coastal proximity, Inglewood pools are a great amenity for year-round enjoyment. Our team delivers consistent weekly maintenance to keep your pool clean and chemically balanced.',
    faqs: [
      { question: 'How much is pool service in Inglewood?', answer: 'Inglewood pool service typically runs $135-$180/month for weekly maintenance with chemicals included.' },
      { question: 'What neighborhoods do you serve in Inglewood?', answer: 'We cover all Inglewood neighborhoods including Morningside Park, Darby-Dixon, Centinela Heights, and the areas near SoFi Stadium.' },
      { question: 'Do you offer pool equipment repairs?', answer: 'Yes, we handle pump, filter, heater, and salt system repairs and replacements for Inglewood pool owners.' },
    ],
    nearbyCities: ['el-segundo', 'culver-city', 'torrance'],
  },

  // ============================================================
  // ENCINO
  // ============================================================
  {
    name: 'Encino',
    slug: 'encino',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['91316', '91436'],
    coordinates: { lat: 34.1517, lng: -118.5014 },
    urlPath: '/california/los-angeles-pool-service/encino-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Royal Oaks', description: 'Upscale neighborhood with large homes and pools in a prestigious enclave south of the boulevard.' },
      { name: 'Encino Hills', description: 'Hillside community with estate properties and pools overlooking the San Fernando Valley.' },
    ],
    landmarks: ['Encino Reservoir', 'Balboa Park', 'Ventura Boulevard'],
    climateNotes: 'Encino straddles the Santa Monica Mountains with the Valley floor reaching 100°F in summer while hillside properties are slightly cooler.',
    waterNotes: 'LADWP water with moderate hardness; the intense Valley heat means high evaporation rates and heavy chemical demand.',
    metaTitle: 'Encino Pool Service | Cabana Pools',
    metaDescription: 'Expert pool maintenance in Encino, CA. Serving Royal Oaks, Encino Hills and all Valley neighborhoods. Free quote available.',
    heroDescription: 'Valley pool experts in Encino, from hillside estates south of the boulevard to suburban homes on the valley floor.',
    introContent: 'Cabana Pools provides expert pool service throughout Encino. Whether your pool is in the prestigious Royal Oaks area south of Ventura Boulevard or on the valley floor, our team delivers weekly maintenance calibrated to Encino\'s hot summers and specific water conditions.',
    faqs: [
      { question: 'How much does pool service cost in Encino?', answer: 'Encino pool service ranges from $150-$210/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service south of the boulevard?', answer: 'Yes, we serve all Encino neighborhoods including Royal Oaks, Amestoy Estates, and the hillside properties south of Ventura Boulevard.' },
      { question: 'Why do Encino pools need frequent service?', answer: 'Valley heat accelerates evaporation and chlorine loss while promoting algae. Consistent weekly service prevents these issues from becoming problems.' },
    ],
    nearbyCities: ['sherman-oaks', 'woodland-hills', 'studio-city'],
  },

  // ============================================================
  // TORRANCE
  // ============================================================
  {
    name: 'Torrance',
    slug: 'torrance',
    metro: 'los-angeles',
    state: 'CA',
    zipCodes: ['90501', '90503', '90505'],
    coordinates: { lat: 33.8358, lng: -118.3406 },
    urlPath: '/california/los-angeles-pool-service/torrance-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Seaside', description: 'Coastal area near Torrance Beach with homes and pools enjoying ocean proximity.' },
      { name: 'Southwood', description: 'Well-established residential neighborhood with family homes and mature pool installations.' },
      { name: 'Hollywood Riviera', description: 'Upscale area near the coast with hillside homes and pools featuring ocean views.' },
    ],
    landmarks: ['Torrance Beach', 'Del Amo Fashion Center', 'Madrona Marsh Preserve'],
    climateNotes: 'Torrance has a pleasant South Bay climate with coastal areas staying mild at 75-82°F while inland sections are a few degrees warmer.',
    waterNotes: 'Torrance Municipal Water draws from local wells and imports; water tends to be moderately hard requiring calcium monitoring.',
    metaTitle: 'Torrance Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool service in Torrance, CA. Serving Hollywood Riviera, Seaside, Southwood and more. Get a free quote today.',
    heroDescription: 'South Bay pool experts in Torrance, serving from the Hollywood Riviera to inland neighborhoods.',
    introContent: 'Cabana Pools delivers reliable pool maintenance throughout Torrance. This large South Bay city offers diverse neighborhoods from coastal Hollywood Riviera to inland family communities. Our team provides consistent service adapted to each area\'s specific conditions.',
    faqs: [
      { question: 'How much is pool service in Torrance?', answer: 'Torrance pool service typically costs $140-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all Torrance neighborhoods?', answer: 'Yes, we cover Seaside, Southwood, Hollywood Riviera, Walteria, North Torrance, and all surrounding areas.' },
      { question: 'How does being near the coast affect my pool?', answer: 'Coastal Torrance pools face salt air and marine moisture. Our service includes corrosion checks and chemistry adjustments for these conditions.' },
    ],
    nearbyCities: ['redondo-beach', 'rolling-hills-estates', 'long-beach'],
  },
];
