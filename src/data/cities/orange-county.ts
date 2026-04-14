import type { City } from '@/types';

export const orangeCountyCities: City[] = [
  // ============================================================
  // ORANGE COUNTY (Hub)
  // ============================================================
  {
    name: 'Orange County',
    slug: 'orange-county',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92602', '92660', '92691'],
    coordinates: { lat: 33.7175, lng: -117.8311 },
    urlPath: '/california/orange-county-pool-service/',
    isPrimary: true,
    neighborhoods: [
      { name: 'South County', description: 'Upscale communities along the coast and inland hills with resort-style pools and warm year-round weather.' },
      { name: 'North County', description: 'Established cities with diverse neighborhoods and pools in a warm inland climate.' },
      { name: 'Coastal OC', description: 'Beach communities from Seal Beach to Dana Point where salt air and marine conditions shape pool care.' },
    ],
    landmarks: ['Disneyland', 'Laguna Beach', 'Crystal Cove State Park'],
    climateNotes: 'Orange County has a Mediterranean climate with warm, dry summers and mild winters. Coastal areas stay around 78-84°F while inland temps reach the low 90s. Pools are a year-round amenity.',
    waterNotes: 'OC water districts source from local groundwater and imported supplies; mineral content varies by city but is generally moderate to high.',
    metaTitle: 'Orange County Pool Service | Cabana Pools',
    metaDescription: 'Professional pool service across Orange County, CA. Trusted by homeowners from Newport Beach to Mission Viejo. Get a free quote today.',
    heroDescription: 'Expert pool service across Orange County, from coastal Newport Beach to the rolling hills of South County.',
    introContent: 'Cabana Pools provides reliable pool maintenance throughout Orange County. With year-round sunshine and diverse communities from the coast to inland hills, OC pools need consistent professional care. Our technicians understand each city\'s unique conditions and deliver tailored service across the county.',
    faqs: [
      { question: 'What areas of Orange County do you serve?', answer: 'We cover all of Orange County from Seal Beach and Huntington Beach on the coast to Yorba Linda and Anaheim Hills inland, plus all South County communities.' },
      { question: 'How much does pool service cost in Orange County?', answer: 'Most OC homeowners pay $140-$210/month for weekly pool service with chemicals included, depending on pool size and location.' },
      { question: 'How fast can you start service?', answer: 'Most new Orange County customers are on a route within 3-5 business days.' },
    ],
    nearbyCities: ['newport-beach', 'irvine', 'huntington-beach'],
  },

  // ============================================================
  // NEWPORT BEACH (nested under OC hub)
  // ============================================================
  {
    name: 'Newport Beach',
    slug: 'newport-beach',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92660', '92661', '92663'],
    coordinates: { lat: 33.6189, lng: -117.9289 },
    urlPath: '/california/orange-county-pool-service/newport-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Corona del Mar', description: 'Upscale coastal village with ocean-view homes and pools exposed to salt air and marine conditions.' },
      { name: 'Newport Coast', description: 'Luxury gated communities on the hillside with resort-style pools and sweeping Pacific views.' },
      { name: 'Balboa Peninsula', description: 'Beach community with homes and pools in a compact coastal setting near the harbor.' },
    ],
    landmarks: ['Fashion Island', 'Balboa Island', 'Crystal Cove State Park'],
    climateNotes: 'Newport Beach has an ideal coastal climate with summer highs around 78-84°F. Ocean breezes moderate temperatures year-round, though Newport Coast hillside homes can be slightly warmer.',
    waterNotes: 'Newport Beach water comes from local groundwater and imported supplies with moderate mineral content; salt spray from the harbor and ocean affects coastal pool equipment.',
    metaTitle: 'Newport Beach Pool Service | Cabana Pools',
    metaDescription: 'Premium pool service in Newport Beach, CA. Coastal pool experts serving Newport Coast, Corona del Mar and Balboa. Free quote.',
    heroDescription: 'Premium coastal pool care in Newport Beach, from Newport Coast estates to Corona del Mar oceanfront homes.',
    introContent: 'Cabana Pools provides premium pool maintenance to Newport Beach, one of Orange County\'s most prestigious coastal communities. The constant ocean exposure requires specialized care for pool equipment and surfaces. Our team delivers expert service from Newport Coast to the Balboa Peninsula.',
    faqs: [
      { question: 'How does the ocean affect my Newport Beach pool?', answer: 'Salt spray and marine moisture can corrode metal components and alter water chemistry. Our service includes coastal-specific monitoring and equipment protection.' },
      { question: 'How much is pool service in Newport Beach?', answer: 'Newport Beach pool service ranges from $155-$235/month depending on pool size, location, and features.' },
      { question: 'Do you service Newport Coast gated communities?', answer: 'Yes, we have established access to Newport Coast\'s gated communities and service numerous estate pools in the area.' },
    ],
    nearbyCities: ['costa-mesa', 'laguna-beach', 'irvine'],
  },

  // ============================================================
  // MISSION VIEJO (flat under /california/)
  // ============================================================
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92691', '92692'],
    coordinates: { lat: 33.6000, lng: -117.6720 },
    urlPath: '/california/mission-viejo-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Lake Mission Viejo', description: 'Lakeside community with homes and pools near the private recreational lake.' },
      { name: 'Aegean Hills', description: 'Hillside neighborhood with family homes and pools overlooking the Mission Viejo valley.' },
    ],
    landmarks: ['Lake Mission Viejo', 'Mission Viejo Mall', 'Oso Creek Trail'],
    climateNotes: 'Mission Viejo has a warm inland climate with summer highs reaching 88-94°F. The hilly terrain creates varied microclimates across the community.',
    waterNotes: 'El Toro Water District provides water with moderate hardness from local and imported sources.',
    metaTitle: 'Mission Viejo Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Mission Viejo, CA. Serving Lake Mission Viejo, Aegean Hills and all neighborhoods. Free quote.',
    heroDescription: 'Trusted pool care in Mission Viejo, from lakeside homes to hillside communities throughout South County.',
    introContent: 'Cabana Pools serves Mission Viejo with reliable weekly pool maintenance. This master-planned South County community features pools in nearly every neighborhood, and the warm inland climate means they see heavy year-round use. Our technicians deliver consistent care adapted to local conditions.',
    faqs: [
      { question: 'How much does pool service cost in Mission Viejo?', answer: 'Mission Viejo pool service typically runs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve homes near Lake Mission Viejo?', answer: 'Yes, we cover all Mission Viejo neighborhoods including the lake communities, Aegean Hills, Deane Homes, and Olympiad area.' },
      { question: 'What does weekly service include?', answer: 'Every visit includes skimming, brushing, vacuuming, filter check, and full chemical testing and balancing with all chemicals included.' },
    ],
    nearbyCities: ['rancho-santa-margarita', 'laguna-niguel', 'san-juan-capistrano'],
  },

  // ============================================================
  // SAN CLEMENTE (flat)
  // ============================================================
  {
    name: 'San Clemente',
    slug: 'san-clemente',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92672', '92673'],
    coordinates: { lat: 33.4270, lng: -117.6120 },
    urlPath: '/california/san-clemente-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Forster Ranch', description: 'Inland community with family homes and pools in a hillside setting above the coast.' },
      { name: 'Pier Bowl', description: 'Downtown area near the pier with Spanish-style homes and pools close to the beach.' },
    ],
    landmarks: ['San Clemente Pier', 'Trestles Beach', 'Casa Romantica Cultural Center'],
    climateNotes: 'San Clemente enjoys a mild coastal climate with summer highs around 78-84°F. The southernmost OC city benefits from consistent ocean breezes.',
    waterNotes: 'San Clemente sources water from the Municipal Water District of OC with moderate mineral content.',
    metaTitle: 'San Clemente Pool Service | Cabana Pools',
    metaDescription: 'Expert pool care in San Clemente, CA. Coastal pool specialists in south Orange County. Get a free quote today.',
    heroDescription: 'Coastal pool service in San Clemente, keeping your pool pristine in this beautiful beach town.',
    introContent: 'Cabana Pools provides expert pool service to San Clemente at the southern tip of Orange County. The mild coastal climate and laid-back beach lifestyle make pools a centerpiece of outdoor living. Our team handles the salt air and marine conditions that come with this beautiful coastal setting.',
    faqs: [
      { question: 'How much is pool service in San Clemente?', answer: 'San Clemente pool service typically costs $145-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all San Clemente neighborhoods?', answer: 'Yes, we cover Forster Ranch, Pier Bowl, Talega, Sea Summit, and all surrounding communities.' },
      { question: 'How does the coastal location affect pool care?', answer: 'Salt air and ocean moisture require regular equipment checks and chemistry adjustments. Our service includes coastal-specific protocols.' },
    ],
    nearbyCities: ['dana-point', 'san-juan-capistrano', 'laguna-niguel'],
  },

  // ============================================================
  // HUNTINGTON BEACH (flat)
  // ============================================================
  {
    name: 'Huntington Beach',
    slug: 'huntington-beach',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92646', '92647', '92648'],
    coordinates: { lat: 33.6595, lng: -117.9988 },
    urlPath: '/california/huntington-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Huntington Harbour', description: 'Waterfront community with harbor homes and pools surrounded by channels and water views.' },
      { name: 'Seacliff', description: 'Upscale neighborhood near the coast with large homes and well-maintained pools.' },
      { name: 'Downtown HB', description: 'Beach-adjacent area near the pier with homes and pools just blocks from the surf.' },
    ],
    landmarks: ['Huntington Beach Pier', 'Bolsa Chica Ecological Reserve', 'Pacific City'],
    climateNotes: 'Huntington Beach has a classic coastal OC climate with mild summers around 78-82°F. The wide beach and consistent ocean breezes keep temperatures comfortable.',
    waterNotes: 'City of Huntington Beach water comes from local wells and imports; moderate hardness with salt air as a constant coastal factor.',
    metaTitle: 'Huntington Beach Pool Service | Cabana Pools',
    metaDescription: 'Professional pool service in Huntington Beach, CA. Surf City pool experts serving the Harbour, Seacliff and more. Free quote.',
    heroDescription: 'Pool service in Surf City, keeping Huntington Beach pools crystal clear from the harbour to the coastline.',
    introContent: 'Cabana Pools serves Huntington Beach with professional pool maintenance adapted to this iconic surf city. From Huntington Harbour\'s waterfront homes to inland family neighborhoods, our team delivers consistent care that accounts for the coastal environment and keeps your pool swim-ready.',
    faqs: [
      { question: 'How much does pool service cost in Huntington Beach?', answer: 'HB pool service runs $140-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service Huntington Harbour?', answer: 'Yes, we serve all HB neighborhoods including the Harbour, Seacliff, Goldenwest, and the areas near the pier.' },
      { question: 'How does living near the beach affect my pool?', answer: 'Salt spray, sand, and marine moisture can corrode equipment and affect chemistry. Our weekly service monitors and addresses these coastal factors.' },
    ],
    nearbyCities: ['seal-beach', 'costa-mesa', 'newport-beach'],
  },

  // ============================================================
  // RANCHO SANTA MARGARITA (flat)
  // ============================================================
  {
    name: 'Rancho Santa Margarita',
    slug: 'rancho-santa-margarita',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92688'],
    coordinates: { lat: 33.6409, lng: -117.6031 },
    urlPath: '/california/rancho-santa-margarita-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Dove Canyon', description: 'Gated community with upscale homes and pools in a canyon setting near the wilderness.' },
      { name: 'Rancho Cielo', description: 'Hilltop neighborhood with newer homes and pools overlooking the surrounding valleys.' },
    ],
    landmarks: ['Rancho Santa Margarita Lake', 'Tijeras Creek Golf Club', 'Central Park'],
    climateNotes: 'RSM has a warm inland climate with summer highs reaching 90-96°F. Canyon and hillside locations create varied conditions across the community.',
    waterNotes: 'Santa Margarita Water District provides water with moderate hardness from local and imported sources.',
    metaTitle: 'Rancho Santa Margarita Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Rancho Santa Margarita, CA. Serving Dove Canyon, Rancho Cielo and all areas. Free quote.',
    heroDescription: 'Pool care for Rancho Santa Margarita, from gated Dove Canyon to hilltop homes with canyon views.',
    introContent: 'Cabana Pools provides reliable pool service to Rancho Santa Margarita in South Orange County. The warm inland climate and active outdoor lifestyle mean pools are central to RSM living. Our team delivers consistent weekly care adapted to the area\'s specific conditions.',
    faqs: [
      { question: 'Do you service gated communities in RSM?', answer: 'Yes, we have access to Dove Canyon, Robinson Ranch, and other gated communities throughout Rancho Santa Margarita.' },
      { question: 'How much is pool service in Rancho Santa Margarita?', answer: 'RSM pool service typically costs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'How does the inland heat affect my pool?', answer: 'Summer temps in the 90s increase evaporation and chlorine loss. Our service adjusts chemical dosing for these warm inland conditions.' },
    ],
    nearbyCities: ['mission-viejo', 'coto-de-caza', 'laguna-niguel'],
  },

  // ============================================================
  // LAGUNA BEACH (flat)
  // ============================================================
  {
    name: 'Laguna Beach',
    slug: 'laguna-beach',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92651'],
    coordinates: { lat: 33.5427, lng: -117.7854 },
    urlPath: '/california/laguna-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Laguna Village', description: 'Downtown area with art galleries, restaurants, and homes with pools close to Main Beach.' },
      { name: 'Top of the World', description: 'Hilltop neighborhood with panoramic ocean views and pools in a dramatic elevated setting.' },
    ],
    landmarks: ['Heisler Park', 'Laguna Art Museum', 'Crystal Cove State Park'],
    climateNotes: 'Laguna Beach has an idyllic coastal climate with summer highs around 78-82°F. Canyon areas can be warmer while blufftop locations catch ocean breezes.',
    waterNotes: 'South Coast Water District provides water with moderate mineral content; the rugged coastal setting exposes pools to salt spray and ocean wind.',
    metaTitle: 'Laguna Beach Pool Service | Cabana Pools',
    metaDescription: 'Premium pool care in Laguna Beach, CA. Coastal pool experts serving this artistic beach community. Get a free quote.',
    heroDescription: 'Coastal pool care in Laguna Beach, keeping your pool pristine from the village to Top of the World.',
    introContent: 'Cabana Pools delivers premium pool service to Laguna Beach, OC\'s iconic arts and beach community. The dramatic coastal setting means pools face constant salt exposure and canyon conditions. Our experienced team navigates the terrain and protects your pool from marine elements.',
    faqs: [
      { question: 'Can you access hillside pools in Laguna Beach?', answer: 'Yes, our technicians handle the steep terrain, narrow roads, and challenging access common in Laguna Beach\'s canyon and hillside properties.' },
      { question: 'How much is pool service in Laguna Beach?', answer: 'Laguna Beach pool service ranges from $155-$225/month depending on pool size and property access.' },
      { question: 'How does the ocean affect pool maintenance?', answer: 'Salt spray and coastal winds carry corrosive moisture that affects equipment and water chemistry. Our service includes coastal-specific protection.' },
    ],
    nearbyCities: ['newport-beach', 'laguna-niguel', 'dana-point'],
  },

  // ============================================================
  // ORANGE (flat)
  // ============================================================
  {
    name: 'Orange',
    slug: 'orange',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92865', '92866', '92867'],
    coordinates: { lat: 33.7879, lng: -117.8531 },
    urlPath: '/california/orange-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Old Towne Orange', description: 'Historic district with Craftsman and Victorian homes, some with classic pool installations.' },
      { name: 'Orange Park Acres', description: 'Semi-rural equestrian area with larger lots and pools surrounded by open space.' },
    ],
    landmarks: ['Old Towne Orange Plaza', 'Chapman University', 'The Village at Orange'],
    climateNotes: 'Orange has a warm inland climate with summer highs reaching 90-95°F. The city sits in the central OC basin with consistent warm, dry conditions.',
    waterNotes: 'City of Orange water comes from local wells with moderate to high mineral content that can contribute to scaling.',
    metaTitle: 'Orange Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Orange, CA. Serving Old Towne, Orange Park Acres and all neighborhoods. Free quote available.',
    heroDescription: 'Expert pool care in the city of Orange, from historic Old Towne to the open spaces of Orange Park Acres.',
    introContent: 'Cabana Pools provides reliable pool service throughout the city of Orange. With warm inland temperatures and mineral-rich local well water, Orange pools need attentive professional care. Our team delivers consistent weekly maintenance that addresses these specific conditions.',
    faqs: [
      { question: 'How much does pool service cost in Orange?', answer: 'Pool service in Orange typically runs $135-$185/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve Orange Park Acres?', answer: 'Yes, we cover all Orange neighborhoods including Old Towne, Orange Park Acres, and the areas near Chapman University.' },
      { question: 'Does the local water affect my pool?', answer: 'Orange\'s well water tends to be mineral-rich, which can cause calcium scaling. Our service includes regular hardness monitoring and scale prevention.' },
    ],
    nearbyCities: ['anaheim', 'yorba-linda', 'irvine'],
  },

  // ============================================================
  // YORBA LINDA (flat)
  // ============================================================
  {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92886', '92887'],
    coordinates: { lat: 33.8886, lng: -117.8131 },
    urlPath: '/california/yorba-linda-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Black Gold', description: 'Upscale neighborhood with large homes and pools on the hillsides above Yorba Linda.' },
      { name: 'Eastlake Village', description: 'Established community with family homes and pools near parks and trails.' },
    ],
    landmarks: ['Richard Nixon Presidential Library', 'Black Gold Golf Club', 'Yorba Regional Park'],
    climateNotes: 'Yorba Linda has a warm inland climate with summer highs reaching 92-98°F. The hillside location at the edge of the Santa Ana foothills can see higher temperatures.',
    waterNotes: 'Yorba Linda Water District provides water from local and imported sources with moderate mineral content.',
    metaTitle: 'Yorba Linda Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Yorba Linda, CA. Serving Black Gold, Eastlake Village and surrounding areas. Free quote.',
    heroDescription: 'Trusted pool service in Yorba Linda, managing hot foothill summers to keep your pool sparkling.',
    introContent: 'Cabana Pools serves Yorba Linda with reliable pool maintenance tailored to this foothill community. The warm inland climate and active family lifestyle make pools essential. Our technicians deliver weekly care that keeps your pool balanced through hot summers and mild winters.',
    faqs: [
      { question: 'How much is pool service in Yorba Linda?', answer: 'Yorba Linda pool service typically costs $140-$195/month for weekly service with chemicals included.' },
      { question: 'Do you service the hillside neighborhoods?', answer: 'Yes, we cover all Yorba Linda areas including Black Gold, Vista del Verde, and the hillside communities near the foothills.' },
      { question: 'Why is consistent service important in Yorba Linda?', answer: 'Inland heat accelerates chemical loss and evaporation. Weekly service prevents algae and keeps water balanced through hot weather.' },
    ],
    nearbyCities: ['anaheim-hills', 'orange', 'anaheim'],
  },

  // ============================================================
  // SEAL BEACH (flat)
  // ============================================================
  {
    name: 'Seal Beach',
    slug: 'seal-beach',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['90740'],
    coordinates: { lat: 33.7414, lng: -118.1048 },
    urlPath: '/california/seal-beach-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Old Town', description: 'Charming downtown area with beach bungalows and pools steps from the pier.' },
      { name: 'Leisure World', description: 'Large retirement community with community pools and private residences near the Seal Beach border.' },
    ],
    landmarks: ['Seal Beach Pier', 'Seal Beach National Wildlife Refuge', 'Main Street'],
    climateNotes: 'Seal Beach has a mild coastal climate with summer highs around 76-82°F. Persistent ocean breezes and marine layers keep temperatures comfortable.',
    waterNotes: 'City of Seal Beach water has moderate mineral content; the beachfront location means salt air is a persistent factor for pool equipment.',
    metaTitle: 'Seal Beach Pool Service | Cabana Pools',
    metaDescription: 'Expert pool care in Seal Beach, CA. Small-town coastal pool specialists near the pier. Get a free quote today.',
    heroDescription: 'Coastal pool service in Seal Beach, keeping your pool clean and protected in this charming beach town.',
    introContent: 'Cabana Pools provides expert pool maintenance to Seal Beach, a charming small beach town at the northern edge of Orange County. The mild coastal climate is ideal for year-round swimming, but salt air and marine conditions require attentive care. Our team keeps your Seal Beach pool in top condition.',
    faqs: [
      { question: 'How much is pool service in Seal Beach?', answer: 'Seal Beach pool service typically runs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service Leisure World?', answer: 'Yes, we serve pools throughout Seal Beach including the Leisure World community and surrounding neighborhoods.' },
      { question: 'How does the beach location affect my pool?', answer: 'Salt air corrodes metal parts and affects water balance. Our service includes equipment checks and chemistry adjustments for coastal conditions.' },
    ],
    nearbyCities: ['huntington-beach', 'long-beach', 'costa-mesa'],
  },

  // ============================================================
  // ANAHEIM (flat)
  // ============================================================
  {
    name: 'Anaheim',
    slug: 'anaheim',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92801', '92804', '92806'],
    coordinates: { lat: 33.8366, lng: -117.9143 },
    urlPath: '/california/anaheim-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Anaheim Colony', description: 'Historic central area with character homes and established pool installations.' },
      { name: 'West Anaheim', description: 'Suburban residential area with family homes and pools in well-maintained neighborhoods.' },
    ],
    landmarks: ['Disneyland Resort', 'Angel Stadium', 'Honda Center'],
    climateNotes: 'Anaheim has a warm inland climate with summer highs reaching 90-95°F. The flatland location in the OC basin sees consistent heat during summer months.',
    waterNotes: 'City of Anaheim Public Utilities provides water from local wells and imports with moderate mineral content.',
    metaTitle: 'Anaheim Pool Service | Cabana Pools',
    metaDescription: 'Trusted pool maintenance in Anaheim, CA. Serving Anaheim Colony, West Anaheim and all neighborhoods. Free quote available.',
    heroDescription: 'Reliable pool care in Anaheim, keeping your backyard pool sparkling through warm OC summers.',
    introContent: 'Cabana Pools delivers reliable pool service to Anaheim homeowners. As one of Orange County\'s largest cities, Anaheim offers diverse neighborhoods with pools that need consistent professional care. Our team handles the warm inland conditions to keep your pool clean and balanced.',
    faqs: [
      { question: 'How much does pool service cost in Anaheim?', answer: 'Anaheim pool service typically runs $135-$180/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all of Anaheim?', answer: 'Yes, we cover all Anaheim neighborhoods including the Colony, West Anaheim, Platinum Triangle area, and Anaheim Hills.' },
      { question: 'What does weekly service include?', answer: 'Every visit includes skimming, brushing, vacuuming, filter check, and full chemical testing and balancing.' },
    ],
    nearbyCities: ['orange', 'anaheim-hills', 'yorba-linda'],
  },

  // ============================================================
  // COTO DE CAZA (flat)
  // ============================================================
  {
    name: 'Coto de Caza',
    slug: 'coto-de-caza',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92679'],
    coordinates: { lat: 33.5947, lng: -117.5867 },
    urlPath: '/california/coto-de-caza-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Coto de Caza North', description: 'Gated community with executive homes and pools nestled in the foothills.' },
      { name: 'Coto de Caza South', description: 'Exclusive area with luxury estates and resort-style pools near the golf course.' },
    ],
    landmarks: ['Coto de Caza Golf & Racquet Club', 'Thomas F. Riley Wilderness Park', 'Wagon Wheel'],
    climateNotes: 'Coto de Caza sits in the foothills with warm summers reaching 92-98°F. The canyon setting can trap heat, making pools essential.',
    waterNotes: 'Santa Margarita Water District serves the area with moderate-hardness water from local and imported sources.',
    metaTitle: 'Coto de Caza Pool Service | Cabana Pools',
    metaDescription: 'Premium pool maintenance in Coto de Caza, CA. Expert care for this exclusive gated community. Get a free quote.',
    heroDescription: 'Premium pool care for Coto de Caza, maintaining estate pools in this exclusive gated community.',
    introContent: 'Cabana Pools provides premium pool service to the exclusive gated community of Coto de Caza. With hot summers and large estate pools, this South County community demands expert maintenance. Our technicians have established access and deliver meticulous weekly care.',
    faqs: [
      { question: 'Do you have access to Coto de Caza?', answer: 'Yes, our technicians have established gate access and service numerous pools within the Coto de Caza community.' },
      { question: 'How much is pool service in Coto de Caza?', answer: 'Coto de Caza pool service typically ranges from $160-$225/month depending on pool size and features.' },
      { question: 'Can you handle large estate pools?', answer: 'Absolutely. We service pools of all sizes including the larger estate and resort-style pools common in Coto de Caza.' },
    ],
    nearbyCities: ['rancho-santa-margarita', 'mission-viejo', 'laguna-niguel'],
  },

  // ============================================================
  // DANA POINT (flat)
  // ============================================================
  {
    name: 'Dana Point',
    slug: 'dana-point',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92624', '92629'],
    coordinates: { lat: 33.4669, lng: -117.6981 },
    urlPath: '/california/dana-point-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Monarch Beach', description: 'Upscale coastal community with ocean-view homes and pools near the St. Regis resort.' },
      { name: 'Lantern Village', description: 'Downtown area near the harbor with homes and pools in a charming coastal setting.' },
    ],
    landmarks: ['Dana Point Harbor', 'Dana Point Headlands', 'Salt Creek Beach'],
    climateNotes: 'Dana Point has a mild coastal climate with summer highs around 78-84°F. The harbor and headlands create pleasant ocean-moderated conditions year-round.',
    waterNotes: 'South Coast Water District provides water with moderate mineral content; the harbor-adjacent location means salt exposure for coastal properties.',
    metaTitle: 'Dana Point Pool Service | Cabana Pools',
    metaDescription: 'Expert pool service in Dana Point, CA. Coastal pool care for Monarch Beach, Lantern Village and more. Free quote available.',
    heroDescription: 'Coastal pool care in Dana Point, from Monarch Beach oceanfront homes to the charming harbor community.',
    introContent: 'Cabana Pools delivers expert pool service to Dana Point on the South County coast. This beautiful harbor community features pools exposed to ocean breezes and salt air. Our team provides coastal-specialized maintenance that protects your investment and keeps your water crystal clear.',
    faqs: [
      { question: 'How much is pool service in Dana Point?', answer: 'Dana Point pool service typically costs $150-$210/month for weekly maintenance with chemicals included.' },
      { question: 'Do you service Monarch Beach?', answer: 'Yes, we serve all Dana Point areas including Monarch Beach, Lantern Village, Capistrano Beach, and the neighborhoods near the harbor.' },
      { question: 'How does the harbor affect pool maintenance?', answer: 'Harbor proximity brings salt moisture and marine air that can corrode equipment. Our service includes regular corrosion checks and protective measures.' },
    ],
    nearbyCities: ['san-clemente', 'laguna-niguel', 'san-juan-capistrano'],
  },

  // ============================================================
  // LAGUNA NIGUEL (flat)
  // ============================================================
  {
    name: 'Laguna Niguel',
    slug: 'laguna-niguel',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92677'],
    coordinates: { lat: 33.5225, lng: -117.7076 },
    urlPath: '/california/laguna-niguel-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Bear Brand Ranch', description: 'Upscale neighborhood with spacious homes and pools in a hillside setting near the coast.' },
      { name: 'Monarch Summit', description: 'Elevated community with newer homes and pools commanding views of the ocean and hills.' },
    ],
    landmarks: ['Laguna Niguel Regional Park', 'Crown Valley Community Park', 'Aliso and Wood Canyons'],
    climateNotes: 'Laguna Niguel enjoys a pleasant climate moderated by coastal proximity with summer highs around 82-88°F. Hillside areas catch ocean breezes.',
    waterNotes: 'Moulton Niguel Water District provides water with moderate mineral content from local and imported sources.',
    metaTitle: 'Laguna Niguel Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Laguna Niguel, CA. Serving Bear Brand Ranch, Monarch Summit and all areas. Free quote.',
    heroDescription: 'Reliable pool service in Laguna Niguel, where coastal hillsides meet year-round swimming weather.',
    introContent: 'Cabana Pools provides professional pool maintenance to Laguna Niguel in South Orange County. Situated between the coast and inland hills, this community enjoys pleasant year-round pool weather. Our team delivers consistent weekly care that keeps your pool clean and chemically balanced.',
    faqs: [
      { question: 'How much does pool service cost in Laguna Niguel?', answer: 'Laguna Niguel pool service runs $145-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all Laguna Niguel neighborhoods?', answer: 'Yes, we cover Bear Brand Ranch, Monarch Summit, Niguel Summit, and all surrounding areas in Laguna Niguel.' },
      { question: 'Is year-round service necessary?', answer: 'Yes, the mild climate means pools are used nearly year-round, and consistent maintenance prevents algae and equipment issues in every season.' },
    ],
    nearbyCities: ['laguna-beach', 'dana-point', 'mission-viejo'],
  },

  // ============================================================
  // IRVINE (flat)
  // ============================================================
  {
    name: 'Irvine',
    slug: 'irvine',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92602', '92604', '92620'],
    coordinates: { lat: 33.6846, lng: -117.8265 },
    urlPath: '/california/irvine-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Turtle Rock', description: 'Established hillside community with larger homes and pools near UCI and the open space preserves.' },
      { name: 'Woodbridge', description: 'Master-planned community with twin lakes, community pools, and numerous private pool installations.' },
      { name: 'Northwood', description: 'Newer development with modern homes and pools featuring contemporary designs and efficient equipment.' },
    ],
    landmarks: ['Irvine Spectrum Center', 'UCI', 'Great Park'],
    climateNotes: 'Irvine has a warm, pleasant climate with summer highs around 84-90°F. Coastal proximity moderates temperatures, though inland areas near the foothills can be warmer.',
    waterNotes: 'Irvine Ranch Water District provides reliable water with moderate mineral content from a diverse supply portfolio.',
    metaTitle: 'Irvine Pool Service | Cabana Pools',
    metaDescription: 'Professional pool maintenance in Irvine, CA. Serving Turtle Rock, Woodbridge, Northwood and all communities. Free quote.',
    heroDescription: 'Expert pool care in Irvine, from master-planned Woodbridge to the hillsides of Turtle Rock.',
    introContent: 'Cabana Pools provides professional pool service throughout Irvine, one of Orange County\'s largest and most well-planned cities. With numerous master-planned communities and diverse neighborhoods, Irvine features a wide variety of pool types. Our team delivers consistent, tailored care for each.',
    faqs: [
      { question: 'How much is pool service in Irvine?', answer: 'Irvine pool service typically runs $140-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all Irvine villages?', answer: 'Yes, we cover Turtle Rock, Woodbridge, Northwood, University Park, Quail Hill, Portola Springs, and all Irvine communities.' },
      { question: 'Can you maintain modern pool systems?', answer: 'Absolutely. Our technicians are trained on variable-speed pumps, salt systems, automation controllers, and other modern equipment common in newer Irvine homes.' },
    ],
    nearbyCities: ['newport-beach', 'costa-mesa', 'orange'],
  },

  // ============================================================
  // ANAHEIM HILLS (flat)
  // ============================================================
  {
    name: 'Anaheim Hills',
    slug: 'anaheim-hills',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92807', '92808'],
    coordinates: { lat: 33.8484, lng: -117.7472 },
    urlPath: '/california/anaheim-hills-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Anaheim Hills Estates', description: 'Hillside community with upscale homes and pools commanding views of the surrounding valleys.' },
      { name: 'Sycamore Canyon', description: 'Canyon-adjacent neighborhood with family homes and pools near natural open space.' },
    ],
    landmarks: ['Anaheim Hills Golf Course', 'Yorba Regional Park', 'Deer Canyon Park'],
    climateNotes: 'Anaheim Hills sits in the eastern foothills with hot summers reaching 95-100°F. The elevated terrain can trap heat, making pools heavily used.',
    waterNotes: 'City of Anaheim provides water with moderate mineral content; the foothill location means some areas have higher mineral levels.',
    metaTitle: 'Anaheim Hills Pool Service | Cabana Pools',
    metaDescription: 'Expert pool care in Anaheim Hills, CA. Foothill pool specialists serving the Estates, Sycamore Canyon and more. Free quote.',
    heroDescription: 'Foothill pool experts in Anaheim Hills, keeping your pool balanced through hot summer days.',
    introContent: 'Cabana Pools delivers expert pool service to Anaheim Hills in the eastern OC foothills. The warm inland climate and hillside setting create specific pool maintenance needs. Our team is familiar with the area and provides consistent weekly care that keeps your pool in excellent condition.',
    faqs: [
      { question: 'How much does pool service cost in Anaheim Hills?', answer: 'Anaheim Hills pool service typically costs $145-$195/month for weekly maintenance with chemicals included.' },
      { question: 'Why do foothill pools need extra care?', answer: 'Higher temperatures increase chlorine loss and evaporation. Hillside terrain also brings wind-blown debris. Our service accounts for these foothill conditions.' },
      { question: 'What areas of Anaheim Hills do you cover?', answer: 'We serve all Anaheim Hills neighborhoods including the Estates, Sycamore Canyon, and the areas near Weir Canyon and Santiago Canyon.' },
    ],
    nearbyCities: ['yorba-linda', 'orange', 'anaheim'],
  },

  // ============================================================
  // COSTA MESA (flat)
  // ============================================================
  {
    name: 'Costa Mesa',
    slug: 'costa-mesa',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92626', '92627'],
    coordinates: { lat: 33.6412, lng: -117.9187 },
    urlPath: '/california/costa-mesa-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'Mesa Verde', description: 'Established residential area with mid-century and modern homes featuring well-maintained pools.' },
      { name: 'Eastside Costa Mesa', description: 'Growing neighborhood with a mix of renovated homes and pools near Newport Beach.' },
    ],
    landmarks: ['South Coast Plaza', 'Segerstrom Center for the Arts', 'Orange County Fairgrounds'],
    climateNotes: 'Costa Mesa has a mild climate moderated by coastal proximity with summer highs around 80-86°F. Morning marine layers are common.',
    waterNotes: 'Mesa Water District provides water with moderate mineral content; the near-coastal location means salt air is a factor for some properties.',
    metaTitle: 'Costa Mesa Pool Service | Cabana Pools',
    metaDescription: 'Reliable pool maintenance in Costa Mesa, CA. Serving Mesa Verde, Eastside and all neighborhoods. Get a free quote today.',
    heroDescription: 'Expert pool care in Costa Mesa, keeping your pool pristine in this centrally located OC community.',
    introContent: 'Cabana Pools provides reliable pool service to Costa Mesa, centrally located between the OC coast and inland communities. The mild climate makes pools a year-round amenity. Our team delivers consistent weekly maintenance that keeps your pool clean and balanced.',
    faqs: [
      { question: 'How much is pool service in Costa Mesa?', answer: 'Costa Mesa pool service typically runs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve all Costa Mesa neighborhoods?', answer: 'Yes, we cover Mesa Verde, Eastside, Westside, South Coast Metro, and all surrounding areas.' },
      { question: 'How quickly can you start service?', answer: 'Most new Costa Mesa customers are on a route within 3-5 business days.' },
    ],
    nearbyCities: ['newport-beach', 'huntington-beach', 'irvine'],
  },

  // ============================================================
  // SAN JUAN CAPISTRANO (flat)
  // ============================================================
  {
    name: 'San Juan Capistrano',
    slug: 'san-juan-capistrano',
    metro: 'orange-county',
    state: 'CA',
    zipCodes: ['92675'],
    coordinates: { lat: 33.5017, lng: -117.6626 },
    urlPath: '/california/san-juan-capistrano-pool-service/',
    isPrimary: false,
    neighborhoods: [
      { name: 'San Juan Hills', description: 'Hillside community with family homes and pools in a scenic setting above the historic downtown.' },
      { name: 'Los Rios District', description: 'Historic neighborhood near the mission with character homes and established pool installations.' },
    ],
    landmarks: ['Mission San Juan Capistrano', 'Los Rios Historic District', 'San Juan Hills Golf Club'],
    climateNotes: 'San Juan Capistrano has a warm climate with summer highs around 84-90°F. The inland valley setting is slightly warmer than the nearby coast.',
    waterNotes: 'San Juan Capistrano Utilities provides water with moderate mineral content from local and imported sources.',
    metaTitle: 'San Juan Capistrano Pool Service | Cabana Pools',
    metaDescription: 'Professional pool care in San Juan Capistrano, CA. Serving San Juan Hills and the historic district. Free quote available.',
    heroDescription: 'Pool care in historic San Juan Capistrano, from hillside communities to the charming downtown district.',
    introContent: 'Cabana Pools serves San Juan Capistrano with professional pool maintenance. This historic South County community features a mix of older character homes and newer hillside developments, each with distinct pool care needs. Our team provides tailored weekly service for both.',
    faqs: [
      { question: 'How much is pool service in San Juan Capistrano?', answer: 'Pool service in San Juan Capistrano typically costs $140-$190/month for weekly maintenance with chemicals included.' },
      { question: 'Do you serve the hill communities?', answer: 'Yes, we cover all San Juan Capistrano areas including San Juan Hills, the historic district, and newer developments along the ridgelines.' },
      { question: 'What does your service include?', answer: 'Every visit includes skimming, brushing, vacuuming, filter inspection, and complete chemical testing and balancing with all chemicals included.' },
    ],
    nearbyCities: ['dana-point', 'san-clemente', 'mission-viejo'],
  },
];
