import type { City } from '@/types';

export const sacramentoCities: City[] = [
  // ============================================================
  // SACRAMENTO (Hub)
  // ============================================================
  {
    name: 'Sacramento',
    slug: 'sacramento',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95814', '95816', '95819'],
    coordinates: { lat: 38.5816, lng: -121.4944 },
    urlPath: '/california/sacramento-pool-service/',
    neighborhoods: [
      {
        name: 'East Sacramento',
        description:
          'Tree-lined residential neighborhood with historic homes and established pools in a warm Central Valley setting.',
      },
      {
        name: 'Land Park',
        description:
          'Family-friendly community near the Sacramento Zoo with mature landscaping and well-used backyard pools.',
      },
      {
        name: 'Natomas',
        description:
          'Newer suburban area in north Sacramento with modern pool installations and energy-efficient equipment.',
      },
    ],
    landmarks: ['California State Capitol', 'Old Sacramento Waterfront', 'Golden 1 Center'],
    climateNotes:
      'Sacramento has a hot Mediterranean climate with summer highs frequently exceeding 95F and stretches above 100F. Winters are mild and rainy, with most of the 18 inches of annual rainfall falling between November and March.',
    waterNotes:
      'City of Sacramento draws water from the Sacramento and American Rivers, delivering relatively soft water compared to Southern California, though summer heat still demands diligent pool chemistry management.',
    metaTitle: 'Sacramento Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool cleaning and maintenance in Sacramento, CA. Trusted by homeowners across the metro. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools provides expert pool service across Sacramento, keeping your pool sparkling through the Capital City\'s hot Central Valley summers.',
    introContent:
      'Cabana Pools is proud to serve the Sacramento metro area with reliable, professional pool maintenance. Our CPO-certified technicians understand the intense summer heat, river-sourced water chemistry, and seasonal debris patterns that define pool care in the Sacramento Valley. From East Sacramento to Natomas, we deliver consistent, high-quality service.',
    faqs: [
      {
        question: 'How much does pool service cost in Sacramento?',
        answer:
          'Most Sacramento homeowners pay between $130 and $180 per month for weekly pool service with all chemicals included. Pricing varies based on pool size and equipment complexity.',
      },
      {
        question: 'Do you service all Sacramento neighborhoods?',
        answer:
          'Yes, we serve the entire Sacramento metro area including East Sacramento, Land Park, Natomas, and surrounding suburbs. Our technicians run established weekly routes throughout the region.',
      },
      {
        question: 'How does Sacramento summer heat affect my pool?',
        answer:
          'Summer highs above 95F accelerate chlorine consumption, increase evaporation, and promote algae growth. Our enhanced summer protocols address all three factors to keep your pool clear.',
      },
    ],
    nearbyCities: ['carmichael', 'fair-oaks', 'rancho-cordova'],
    isPrimary: true,
  },

  // ============================================================
  // EL DORADO HILLS
  // ============================================================
  {
    name: 'El Dorado Hills',
    slug: 'el-dorado-hills',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95762'],
    coordinates: { lat: 38.6857, lng: -121.0819 },
    urlPath: '/california/sacramento-pool-service/el-dorado-hills-pool-service/',
    neighborhoods: [
      {
        name: 'Serrano',
        description:
          'Master-planned community with resort-style homes and pools set among the rolling Sierra foothills.',
      },
      {
        name: 'Town Center',
        description:
          'Central El Dorado Hills area with newer homes, shopping, and family pools in a warm foothill setting.',
      },
      {
        name: 'Promontory',
        description:
          'Upscale gated community with luxury homes and large pools overlooking the foothills and valley.',
      },
    ],
    landmarks: ['El Dorado Hills Town Center', 'Folsom Lake', 'Serrano Village Green'],
    climateNotes:
      'El Dorado Hills sits in the Sierra foothills at about 1,000 feet elevation with summer highs in the upper 90s to low 100s. Winters are cooler than the valley floor with occasional frost.',
    waterNotes:
      'El Dorado Irrigation District supplies water from Folsom Lake with moderate hardness that requires regular monitoring for calcium and pH balance.',
    metaTitle: 'El Dorado Hills Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool maintenance in El Dorado Hills, CA. Serving Serrano, Promontory & Town Center. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools delivers premium pool service to El Dorado Hills, keeping foothill pools clean and balanced through hot Sacramento-area summers.',
    introContent:
      'Cabana Pools provides dependable pool care to El Dorado Hills homeowners in this desirable foothill community east of Sacramento. With summer temperatures regularly exceeding 95F and the area\'s growth bringing many new pools online, reliable professional maintenance is essential. Our technicians serve Serrano, Promontory, and neighborhoods throughout El Dorado Hills.',
    faqs: [
      {
        question: 'Do you service pools in Serrano?',
        answer:
          'Yes, Serrano is a key part of our El Dorado Hills service area. We run weekly routes through Serrano, Promontory, Town Center, and all surrounding EDH neighborhoods.',
      },
      {
        question: 'How does foothills elevation affect my pool?',
        answer:
          'El Dorado Hills pools face hot summer days and cooler nights than the valley floor. This temperature swing affects chemical balance and can increase equipment stress. We adjust protocols accordingly.',
      },
      {
        question: 'Is El Dorado Hills water hard?',
        answer:
          'El Dorado Irrigation District water from Folsom Lake is moderately hard. We monitor calcium hardness and alkalinity to prevent scale buildup on pool surfaces and equipment.',
      },
    ],
    nearbyCities: ['folsom', 'granite-bay', 'roseville'],
    isPrimary: false,
  },

  // ============================================================
  // FOLSOM
  // ============================================================
  {
    name: 'Folsom',
    slug: 'folsom',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95630', '95762'],
    coordinates: { lat: 38.6780, lng: -121.1761 },
    urlPath: '/california/sacramento-pool-service/folsom-pool-service/',
    neighborhoods: [
      {
        name: 'Empire Ranch',
        description:
          'Popular master-planned community in south Folsom with newer homes and modern pool installations.',
      },
      {
        name: 'Broadstone',
        description:
          'Established neighborhood near Folsom Lake with mature trees and well-maintained family pools.',
      },
      {
        name: 'Folsom Ranch',
        description:
          'Newest development area in south Folsom with contemporary homes and energy-efficient pool systems.',
      },
    ],
    landmarks: ['Folsom Lake', 'Folsom Powerhouse State Historic Park', 'Historic Sutter Street'],
    climateNotes:
      'Folsom has hot, dry summers with highs frequently reaching the upper 90s to low 100s. Proximity to Folsom Lake moderates temperatures slightly compared to the valley floor.',
    waterNotes:
      'City of Folsom draws water from Folsom Lake, delivering relatively clean water with moderate hardness that benefits from regular calcium and pH management.',
    metaTitle: 'Folsom Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool care in Folsom, CA. Serving Empire Ranch, Broadstone & Folsom Ranch. Call Cabana Pools for reliable weekly service!',
    heroDescription:
      'Cabana Pools provides expert pool service in Folsom, keeping your pool clean and balanced through the hot Sacramento Valley summers.',
    introContent:
      'Cabana Pools serves Folsom homeowners with professional pool maintenance tailored to this growing community east of Sacramento. From the established neighborhoods near Folsom Lake to the newer developments in Folsom Ranch, our technicians deliver reliable weekly care. We understand the local water supply and climate patterns that shape Folsom pool care needs.',
    faqs: [
      {
        question: 'How does Folsom Lake water affect my pool?',
        answer:
          'Folsom\'s municipal water from Folsom Lake is generally cleaner than groundwater sources, with moderate hardness. We still monitor calcium and alkalinity closely to prevent scaling.',
      },
      {
        question: 'Do you service new construction pools in Folsom Ranch?',
        answer:
          'Yes, we serve all Folsom areas including the new Folsom Ranch developments. We are experienced with modern pool equipment including variable-speed pumps and salt systems.',
      },
      {
        question: 'How much is pool service in Folsom?',
        answer:
          'Folsom pool service typically costs $135 to $180 per month for weekly visits with all chemicals included. Pricing depends on pool size and equipment complexity.',
      },
    ],
    nearbyCities: ['el-dorado-hills', 'orangevale', 'rancho-cordova'],
    isPrimary: false,
  },

  // ============================================================
  // SACRAMENTO-SACRAMENTO (duplicate slug preserved from WP)
  // ============================================================
  {
    name: 'Sacramento',
    slug: 'sacramento-sacramento',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95811', '95818', '95822'],
    coordinates: { lat: 38.5816, lng: -121.4944 },
    urlPath: '/california/sacramento-pool-service/sacramento-sacramento-pool-service/',
    neighborhoods: [
      {
        name: 'Curtis Park',
        description:
          'Historic neighborhood with Craftsman homes and mature trees surrounding well-established pools.',
      },
      {
        name: 'Tahoe Park',
        description:
          'Central Sacramento neighborhood with mid-century homes and pools in a warm urban setting.',
      },
      {
        name: 'Pocket-Greenhaven',
        description:
          'South Sacramento community along the river with family homes and pools in a warm, sheltered area.',
      },
    ],
    landmarks: ['Sacramento River Walk', 'William Land Park', 'Tower Theatre'],
    climateNotes:
      'Central Sacramento experiences some of the hottest summer temperatures in the metro, with highs regularly exceeding 95F and heat waves pushing above 105F in the valley floor.',
    waterNotes:
      'City of Sacramento provides river-sourced water that is relatively soft but requires consistent chemical management during the intense summer heat.',
    metaTitle: 'Sacramento Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool cleaning in Sacramento, CA. Serving Curtis Park, Tahoe Park & Pocket-Greenhaven. Call Cabana Pools for expert care!',
    heroDescription:
      'Cabana Pools provides dependable pool service throughout Sacramento\'s central neighborhoods, keeping pools clear during the Capital City\'s hot summers.',
    introContent:
      'Cabana Pools delivers professional pool care to Sacramento\'s core neighborhoods. From the tree-lined streets of Curtis Park to the family communities of Pocket-Greenhaven, our technicians provide consistent weekly maintenance. The intense Central Valley heat demands proactive pool care, and our team is equipped to handle it.',
    faqs: [
      {
        question: 'What neighborhoods do you service in central Sacramento?',
        answer:
          'We serve Curtis Park, Tahoe Park, Pocket-Greenhaven, Land Park, Oak Park, and all surrounding Sacramento neighborhoods on established weekly routes.',
      },
      {
        question: 'How hot does Sacramento get in summer?',
        answer:
          'Sacramento summer highs regularly exceed 95F, with heat waves pushing above 105F. This extreme heat accelerates chlorine loss and algae growth, making weekly professional service essential.',
      },
      {
        question: 'Do you offer year-round pool service in Sacramento?',
        answer:
          'Yes, year-round service is recommended. While summers demand intensive chemical management, fall brings heavy leaf debris and winter rains can alter water chemistry dramatically.',
      },
    ],
    nearbyCities: ['carmichael', 'fair-oaks', 'rancho-cordova'],
    isPrimary: false,
  },

  // ============================================================
  // ANTELOPE
  // ============================================================
  {
    name: 'Antelope',
    slug: 'antelope',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95843'],
    coordinates: { lat: 38.7085, lng: -121.3610 },
    urlPath: '/california/sacramento-pool-service/antelope-pool-service/',
    neighborhoods: [
      {
        name: 'Antelope Greens',
        description:
          'Residential area near the golf course with family homes and pools in a warm suburban setting.',
      },
      {
        name: 'North Antelope',
        description:
          'Growing residential area with newer homes and modern pool installations north of Antelope Road.',
      },
    ],
    landmarks: ['Antelope Community Park', 'Antelope Greens Golf Course', 'Dry Creek Parkway'],
    climateNotes:
      'Antelope shares Sacramento\'s hot Central Valley climate with summer highs in the mid-to-upper 90s. The area is flat and exposed, with limited natural shade.',
    waterNotes:
      'Sacramento Suburban Water District provides Antelope with a mix of surface and groundwater that tends toward moderate hardness.',
    metaTitle: 'Antelope Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Antelope, CA. Serving Antelope Greens & surrounding neighborhoods. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools keeps Antelope pools sparkling with weekly service designed for the Central Valley\'s intense summer heat.',
    introContent:
      'Cabana Pools provides reliable pool care to Antelope homeowners in this growing Sacramento suburb. The Central Valley heat demands consistent professional maintenance to keep pools safe and clean. Our technicians run regular routes through Antelope, delivering the proactive care your pool needs.',
    faqs: [
      {
        question: 'How much is pool service in Antelope?',
        answer:
          'Antelope pool service typically costs $130 to $170 per month for weekly visits with all chemicals included. Pricing varies based on pool size and equipment.',
      },
      {
        question: 'Do you service all of Antelope?',
        answer:
          'Yes, we cover the entire 95843 ZIP code including Antelope Greens, north Antelope, and all surrounding areas on established weekly routes.',
      },
      {
        question: 'How quickly can I start service in Antelope?',
        answer:
          'Most Antelope residents are scheduled within 3 to 5 business days. We have established routes running through the north Sacramento suburbs weekly.',
      },
    ],
    nearbyCities: ['citrus-heights', 'roseville', 'carmichael'],
    isPrimary: false,
  },

  // ============================================================
  // CARMICHAEL
  // ============================================================
  {
    name: 'Carmichael',
    slug: 'carmichael',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95608'],
    coordinates: { lat: 38.6174, lng: -121.3281 },
    urlPath: '/california/sacramento-pool-service/carmichael-pool-service/',
    neighborhoods: [
      {
        name: 'Fair Oaks Boulevard Corridor',
        description:
          'Central Carmichael area with established homes and mature landscaping around well-used pools.',
      },
      {
        name: 'Carmichael Colony',
        description:
          'Historic neighborhood with larger lots, mature trees, and pools surrounded by lush vegetation.',
      },
      {
        name: 'Ancil Hoffman Area',
        description:
          'Homes near the park and American River with pools in a shaded, natural setting.',
      },
    ],
    landmarks: ['Ancil Hoffman Park', 'Effie Yeaw Nature Center', 'Jensen Botanical Garden'],
    climateNotes:
      'Carmichael has a hot Central Valley climate with summer highs in the mid-to-upper 90s. Proximity to the American River provides slightly cooler evenings than areas farther from water.',
    waterNotes:
      'Carmichael Water District provides well water that is moderately hard with stable mineral content, requiring regular calcium and pH monitoring.',
    metaTitle: 'Carmichael Pool Service | Cabana Pools',
    metaDescription:
      'Trusted pool service in Carmichael, CA. Serving Carmichael Colony, Ancil Hoffman & more. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools delivers expert pool service to Carmichael homeowners, managing tree debris and summer heat in this established Sacramento suburb.',
    introContent:
      'Cabana Pools provides professional pool maintenance to Carmichael, a mature Sacramento suburb known for its tree-lined neighborhoods and American River access. The combination of Central Valley heat, abundant tree debris, and well-sourced water creates specific maintenance demands. Our technicians address each factor with tailored weekly care.',
    faqs: [
      {
        question: 'How does tree debris affect Carmichael pools?',
        answer:
          'Carmichael\'s mature oak, elm, and sycamore trees drop significant debris year-round. Our service includes thorough skimming, basket cleaning, and filter maintenance to handle this ongoing challenge.',
      },
      {
        question: 'Is Carmichael water different from Sacramento city water?',
        answer:
          'Yes, Carmichael Water District uses groundwater rather than river water. It tends to be moderately hard with stable mineral content. We adjust chemical protocols to match these specific conditions.',
      },
      {
        question: 'Do you service pools near the American River?',
        answer:
          'Yes, we serve all Carmichael areas including homes near Ancil Hoffman Park and the American River Parkway, as well as the Colony and central neighborhoods.',
      },
    ],
    nearbyCities: ['fair-oaks', 'sacramento-sacramento', 'citrus-heights'],
    isPrimary: false,
  },

  // ============================================================
  // CITRUS HEIGHTS
  // ============================================================
  {
    name: 'Citrus Heights',
    slug: 'citrus-heights',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95610', '95621'],
    coordinates: { lat: 38.7071, lng: -121.2810 },
    urlPath: '/california/sacramento-pool-service/citrus-heights-pool-service/',
    neighborhoods: [
      {
        name: 'Sunrise Mall Area',
        description:
          'Central Citrus Heights neighborhood with established homes and pools near the city\'s main commercial corridor.',
      },
      {
        name: 'Rusch Park Area',
        description:
          'Family neighborhood near the community park with well-maintained homes and backyard pools.',
      },
      {
        name: 'Woodmore Oaks',
        description:
          'Residential community with oak-studded lots and pools that collect seasonal leaf debris.',
      },
    ],
    landmarks: ['Sunrise Mall', 'Rusch Park', 'Stock Ranch'],
    climateNotes:
      'Citrus Heights shares Sacramento\'s hot dry summers with highs in the mid-to-upper 90s. The area has a flat terrain with suburban development and scattered oak groves.',
    waterNotes:
      'Citrus Heights Water District uses groundwater with moderate hardness that requires regular calcium management and pH monitoring.',
    metaTitle: 'Citrus Heights Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool maintenance in Citrus Heights, CA. Serving all neighborhoods with weekly professional care. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools provides reliable pool service to Citrus Heights, keeping your pool balanced and clean through the Sacramento Valley\'s hot summers.',
    introContent:
      'Cabana Pools delivers dependable pool care to Citrus Heights homeowners. This Sacramento suburb faces the same intense summer heat as the rest of the valley, and pools require consistent professional attention to stay clean and safe. Our technicians serve all Citrus Heights neighborhoods on established weekly routes.',
    faqs: [
      {
        question: 'How much is pool service in Citrus Heights?',
        answer:
          'Citrus Heights pool service typically runs $130 to $170 per month for weekly visits with all chemicals included. Pricing depends on pool size and equipment.',
      },
      {
        question: 'Do you service all of Citrus Heights?',
        answer:
          'Yes, we cover the entire city including the Sunrise Mall area, Rusch Park neighborhoods, Woodmore Oaks, and all surrounding areas on weekly routes.',
      },
      {
        question: 'How does Citrus Heights groundwater affect pools?',
        answer:
          'Citrus Heights Water District groundwater is moderately hard. We proactively manage calcium hardness and alkalinity to prevent scale deposits on your pool surfaces and equipment.',
      },
    ],
    nearbyCities: ['orangevale', 'carmichael', 'antelope'],
    isPrimary: false,
  },

  // ============================================================
  // FAIR OAKS
  // ============================================================
  {
    name: 'Fair Oaks',
    slug: 'fair-oaks',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95628'],
    coordinates: { lat: 38.6446, lng: -121.2722 },
    urlPath: '/california/sacramento-pool-service/fair-oaks-pool-service/',
    neighborhoods: [
      {
        name: 'Old Fair Oaks',
        description:
          'Historic village area with charming older homes, large lots, and established pools under mature oak canopies.',
      },
      {
        name: 'Fair Oaks Ranch',
        description:
          'Semi-rural community with larger properties, equestrian facilities, and pools in a warm setting.',
      },
      {
        name: 'Phoenix Park Area',
        description:
          'Family neighborhood near the community park with well-maintained homes and backyard pools.',
      },
    ],
    landmarks: ['Fair Oaks Village', 'Fair Oaks Bluffs', 'Phoenix Park'],
    climateNotes:
      'Fair Oaks has hot, dry summers typical of the Sacramento Valley with highs in the mid-to-upper 90s. The community\'s signature oak trees provide some shade but also drop significant debris.',
    waterNotes:
      'Fair Oaks Water District provides groundwater with moderate hardness that requires consistent monitoring and calcium management for pool health.',
    metaTitle: 'Fair Oaks Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool care in Fair Oaks, CA. Serving Old Fair Oaks, Fair Oaks Ranch & more. Call Cabana Pools for professional weekly service!',
    heroDescription:
      'Cabana Pools delivers expert pool service to Fair Oaks, handling the oak debris and Central Valley heat that shape this community\'s pool care needs.',
    introContent:
      'Cabana Pools provides professional pool maintenance to Fair Oaks, a Sacramento-area community defined by its majestic oak trees and village charm. Those same oaks drop leaves, acorns, and pollen into pools year-round, and the hot Central Valley climate demands diligent chemical management. Our technicians deliver tailored care to keep Fair Oaks pools pristine.',
    faqs: [
      {
        question: 'How do you handle oak debris in Fair Oaks pools?',
        answer:
          'Fair Oaks is famous for its oaks, and they deposit leaves, acorns, bark, and pollen constantly. Our service includes thorough debris removal, basket cleaning, and filter maintenance at every visit.',
      },
      {
        question: 'Do you service Fair Oaks Ranch?',
        answer:
          'Yes, we serve all Fair Oaks areas including Fair Oaks Ranch, Old Fair Oaks Village, and the Phoenix Park neighborhood on our established weekly routes.',
      },
      {
        question: 'Is Fair Oaks water suitable for pools?',
        answer:
          'Fair Oaks Water District groundwater is moderately hard but suitable for pools with proper management. We monitor and adjust calcium, alkalinity, and pH to maintain optimal balance.',
      },
    ],
    nearbyCities: ['orangevale', 'carmichael', 'folsom'],
    isPrimary: false,
  },

  // ============================================================
  // GOLD RIVER
  // ============================================================
  {
    name: 'Gold River',
    slug: 'gold-river',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95670'],
    coordinates: { lat: 38.6263, lng: -121.2483 },
    urlPath: '/california/sacramento-pool-service/gold-river-pool-service/',
    neighborhoods: [
      {
        name: 'Gold River Town Centre',
        description:
          'Central planned community with townhomes and single-family residences featuring well-maintained pools.',
      },
      {
        name: 'Coloma Estates',
        description:
          'Upscale area within Gold River with larger homes, mature trees, and premium pool installations.',
      },
    ],
    landmarks: ['Gold River Town Centre', 'American River Parkway', 'Bannister Park'],
    climateNotes:
      'Gold River has a hot Central Valley climate with summer highs in the mid-to-upper 90s. Proximity to the American River provides some evening cooling.',
    waterNotes:
      'Golden State Water Company serves Gold River with a blend of surface and groundwater that is moderately hard, requiring standard pool chemistry management.',
    metaTitle: 'Gold River Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Gold River, CA. Serving this master-planned community with expert care. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools provides premium pool service to Gold River\'s master-planned community, keeping pools pristine through Sacramento\'s hot summers.',
    introContent:
      'Cabana Pools serves Gold River homeowners with professional pool care tailored to this well-established Sacramento-area community. Located along the American River, Gold River pools face hot summers and tree debris from the mature landscaping. Our technicians deliver reliable weekly service to keep your pool in peak condition.',
    faqs: [
      {
        question: 'Do you service all of Gold River?',
        answer:
          'Yes, we cover the entire Gold River community including the Town Centre area, Coloma Estates, and all surrounding neighborhoods on our established weekly routes.',
      },
      {
        question: 'How close is your nearest route to Gold River?',
        answer:
          'Gold River is part of our core Sacramento-area service territory. We run routes through Gold River, Rancho Cordova, and Folsom weekly, making scheduling convenient.',
      },
      {
        question: 'Can you maintain my pool\'s automation system?',
        answer:
          'Absolutely. Many Gold River homes have pool automation systems. Our technicians are trained in Pentair, Hayward, and Jandy automation systems for programming and maintenance.',
      },
    ],
    nearbyCities: ['rancho-cordova', 'folsom', 'fair-oaks'],
    isPrimary: false,
  },

  // ============================================================
  // GRANITE BAY
  // ============================================================
  {
    name: 'Granite Bay',
    slug: 'granite-bay',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95746'],
    coordinates: { lat: 38.7632, lng: -121.1639 },
    urlPath: '/california/sacramento-pool-service/granite-bay-pool-service/',
    neighborhoods: [
      {
        name: 'Los Lagos',
        description:
          'Exclusive gated community with luxury estate homes and resort-quality pools and water features.',
      },
      {
        name: 'Granite Bay Hills',
        description:
          'Upscale residential area with large lots, custom homes, and premium pool installations overlooking the foothills.',
      },
      {
        name: 'Folsom Lake Estates',
        description:
          'Homes near Folsom Lake with pools that benefit from the lake\'s cooling influence in summer.',
      },
    ],
    landmarks: ['Folsom Lake State Recreation Area', 'Granite Bay Golf Club', 'Quarry Ponds'],
    climateNotes:
      'Granite Bay sits in the lower Sierra foothills with hot summers reaching the upper 90s to low 100s. The area is slightly cooler than the valley floor, with breezes off Folsom Lake.',
    waterNotes:
      'San Juan Water District supplies Granite Bay with Folsom Lake water that is moderate in hardness, benefiting from regular calcium and alkalinity management.',
    metaTitle: 'Granite Bay Pool Service | Cabana Pools',
    metaDescription:
      'Premium pool care in Granite Bay, CA. Expert service for estate pools near Folsom Lake. Call Cabana Pools for a consultation!',
    heroDescription:
      'Cabana Pools delivers premium pool service to Granite Bay estates, providing the meticulous care that this exclusive foothill community demands.',
    introContent:
      'Cabana Pools provides top-tier pool maintenance to Granite Bay, one of the Sacramento region\'s most prestigious communities. With large estate pools, water features, and premium finishes, Granite Bay properties require experienced, detail-oriented service. Our technicians deliver the consistent quality that Granite Bay homeowners expect.',
    faqs: [
      {
        question: 'Do you handle large estate pools in Granite Bay?',
        answer:
          'Yes, we specialize in maintaining larger residential pools and water features common in Granite Bay. Our technicians are experienced with complex systems and premium finishes.',
      },
      {
        question: 'How much does estate pool service cost in Granite Bay?',
        answer:
          'Granite Bay estate pool pricing ranges from $175 to $300 per month depending on pool size, water features, and system complexity. All chemicals are included.',
      },
      {
        question: 'Do you service gated communities in Granite Bay?',
        answer:
          'Yes, we serve Los Lagos and other gated Granite Bay communities. Our technicians coordinate with gate access systems and respect community protocols.',
      },
    ],
    nearbyCities: ['roseville', 'folsom', 'loomis'],
    isPrimary: false,
  },

  // ============================================================
  // LOOMIS
  // ============================================================
  {
    name: 'Loomis',
    slug: 'loomis',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95650'],
    coordinates: { lat: 38.8210, lng: -121.1930 },
    urlPath: '/california/sacramento-pool-service/loomis-pool-service/',
    neighborhoods: [
      {
        name: 'Del Oro Area',
        description:
          'Residential neighborhood near the high school with family homes and pools in a warm foothill setting.',
      },
      {
        name: 'South Loomis',
        description:
          'Rural and semi-rural area with larger properties, some equestrian, and pools surrounded by oaks and pastures.',
      },
    ],
    landmarks: ['Blue Goose Fruit Shed', 'Loomis Basin Community Park', 'Secret Ravine Trail'],
    climateNotes:
      'Loomis sits in the lower Sierra foothills with hot, dry summers and highs in the mid-to-upper 90s. The area is slightly cooler than the Sacramento Valley floor.',
    waterNotes:
      'Placer County Water Agency supplies Loomis with surface water of moderate hardness from foothill reservoirs, requiring standard calcium and pH management.',
    metaTitle: 'Loomis Pool Service | Cabana Pools',
    metaDescription:
      'Reliable pool maintenance in Loomis, CA. Serving this foothill community with expert weekly care. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools provides dependable pool service to Loomis, keeping foothill pools clean and balanced through hot Sacramento-area summers.',
    introContent:
      'Cabana Pools serves Loomis homeowners with professional pool care adapted to this charming foothill town. The combination of hot summers, rural vegetation, and moderate water hardness creates specific maintenance needs. Our technicians deliver reliable weekly service throughout the Loomis area.',
    faqs: [
      {
        question: 'Do you service rural Loomis properties?',
        answer:
          'Yes, we cover the entire 95650 ZIP code including rural and semi-rural properties in south Loomis, the Del Oro area, and all surrounding neighborhoods.',
      },
      {
        question: 'How much is pool service in Loomis?',
        answer:
          'Loomis pool service typically costs $135 to $180 per month for weekly visits with all chemicals included. Pricing varies based on pool size and equipment.',
      },
      {
        question: 'Do you handle well water pools in Loomis?',
        answer:
          'Yes, some Loomis properties use well water. We adjust chemical protocols and add mineral management treatments to handle elevated hardness or iron in well water sources.',
      },
    ],
    nearbyCities: ['rocklin', 'granite-bay', 'roseville'],
    isPrimary: false,
  },

  // ============================================================
  // ORANGEVALE
  // ============================================================
  {
    name: 'Orangevale',
    slug: 'orangevale',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95662'],
    coordinates: { lat: 38.6785, lng: -121.2258 },
    urlPath: '/california/sacramento-pool-service/orangevale-pool-service/',
    neighborhoods: [
      {
        name: 'Orangevale Park Area',
        description:
          'Central community with established homes, mature citrus trees, and well-maintained backyard pools.',
      },
      {
        name: 'Casa Roble Area',
        description:
          'Family neighborhood near the high school with suburban homes and pools in a warm valley setting.',
      },
      {
        name: 'Hazel Avenue Corridor',
        description:
          'Eastern Orangevale with a mix of residential and semi-rural properties featuring pools of all sizes.',
      },
    ],
    landmarks: ['Orangevale Community Park', 'Orangevale Open Space', 'Folsom Lake access points'],
    climateNotes:
      'Orangevale has a hot Central Valley climate with summer highs in the mid-to-upper 90s. The area has a slightly rural character with more tree coverage than typical suburbs.',
    waterNotes:
      'Orange Vale Water Company provides groundwater with moderate hardness, requiring regular calcium monitoring and pH balancing for pool maintenance.',
    metaTitle: 'Orangevale Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool care in Orangevale, CA. Serving the community with reliable weekly maintenance. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools keeps Orangevale pools sparkling with weekly service designed for the Central Valley\'s hot summers and local water conditions.',
    introContent:
      'Cabana Pools delivers professional pool maintenance to Orangevale homeowners in this family-oriented Sacramento suburb. Hot summers, mature tree debris, and moderately hard groundwater all factor into our tailored service approach. Our technicians run regular routes through Orangevale, providing the consistent care your pool needs.',
    faqs: [
      {
        question: 'Do you service all of Orangevale?',
        answer:
          'Yes, we cover the entire 95662 ZIP code including the Orangevale Park area, Casa Roble neighborhood, Hazel Avenue corridor, and all surrounding areas.',
      },
      {
        question: 'How does Orangevale water quality affect my pool?',
        answer:
          'Orange Vale Water Company groundwater is moderately hard. We manage calcium hardness, alkalinity, and pH to prevent scaling and keep your water balanced.',
      },
      {
        question: 'How much is pool service in Orangevale?',
        answer:
          'Orangevale pool service typically ranges from $130 to $175 per month for weekly visits with all chemicals included, depending on pool size and equipment.',
      },
    ],
    nearbyCities: ['fair-oaks', 'citrus-heights', 'folsom'],
    isPrimary: false,
  },

  // ============================================================
  // RANCHO CORDOVA
  // ============================================================
  {
    name: 'Rancho Cordova',
    slug: 'rancho-cordova',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95670', '95742'],
    coordinates: { lat: 38.5891, lng: -121.3028 },
    urlPath: '/california/sacramento-pool-service/rancho-cordova-pool-service/',
    neighborhoods: [
      {
        name: 'Anatolia',
        description:
          'Newer master-planned community in south Rancho Cordova with modern homes and energy-efficient pool systems.',
      },
      {
        name: 'Mather Field Area',
        description:
          'Residential area near the former air base with established homes and pools in a warm, open setting.',
      },
      {
        name: 'Sunrise Corridor',
        description:
          'Central Rancho Cordova neighborhood with a mix of residential and commercial areas and family pools.',
      },
    ],
    landmarks: ['Mather Regional Park', 'Hagan Community Park', 'American River Parkway'],
    climateNotes:
      'Rancho Cordova has a hot, dry Central Valley climate with summer highs frequently reaching the upper 90s. The area is flat and exposed with limited natural shade.',
    waterNotes:
      'Golden State Water Company and Sacramento County Water Agency serve Rancho Cordova with a blend of surface and groundwater of moderate hardness.',
    metaTitle: 'Rancho Cordova Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Rancho Cordova, CA. Serving Anatolia, Mather & more. Call Cabana Pools for reliable weekly service!',
    heroDescription:
      'Cabana Pools provides reliable pool service to Rancho Cordova, keeping pools balanced and clean through the Sacramento Valley\'s intense summer heat.',
    introContent:
      'Cabana Pools serves Rancho Cordova homeowners with professional pool care adapted to this growing Sacramento suburb. From the newer Anatolia community to established neighborhoods near Mather, our technicians deliver consistent weekly maintenance. The hot Central Valley climate makes professional pool care essential here.',
    faqs: [
      {
        question: 'Do you service the Anatolia development in Rancho Cordova?',
        answer:
          'Yes, Anatolia is a key part of our Rancho Cordova service area. We are experienced with the modern pool equipment and systems common in this newer community.',
      },
      {
        question: 'How much does pool service cost in Rancho Cordova?',
        answer:
          'Rancho Cordova pool service typically costs $130 to $175 per month for weekly visits with all chemicals included. Pricing depends on pool size and equipment.',
      },
      {
        question: 'How does the summer heat affect Rancho Cordova pools?',
        answer:
          'Summer highs in the upper 90s drive rapid chlorine loss, increased evaporation, and algae risk. Our summer protocols include adjusted chemical dosing and enhanced monitoring.',
      },
    ],
    nearbyCities: ['gold-river', 'folsom', 'sacramento-sacramento'],
    isPrimary: false,
  },

  // ============================================================
  // ROCKLIN
  // ============================================================
  {
    name: 'Rocklin',
    slug: 'rocklin',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95677', '95765'],
    coordinates: { lat: 38.7908, lng: -121.2358 },
    urlPath: '/california/sacramento-pool-service/rocklin-pool-service/',
    neighborhoods: [
      {
        name: 'Whitney Ranch',
        description:
          'Popular master-planned community with modern homes and family pools in a warm suburban setting.',
      },
      {
        name: 'Stanford Ranch',
        description:
          'Established planned community with well-maintained homes and pools near excellent schools.',
      },
      {
        name: 'Sunset Whitney',
        description:
          'Neighborhood near the golf course with mature landscaping and pools that collect seasonal debris.',
      },
    ],
    landmarks: ['Quarry Park Adventures', 'William Jessup University', 'Johnson-Springview Park'],
    climateNotes:
      'Rocklin sits in the lower foothills with hot, dry summers reaching the upper 90s. The area receives more wind than the valley floor, which can blow debris into pools.',
    waterNotes:
      'Placer County Water Agency delivers surface water with moderate hardness from foothill reservoirs, requiring regular calcium monitoring and standard pH management.',
    metaTitle: 'Rocklin Pool Service | Cabana Pools',
    metaDescription:
      'Trusted pool care in Rocklin, CA. Serving Whitney Ranch, Stanford Ranch & more. Call Cabana Pools for professional weekly service!',
    heroDescription:
      'Cabana Pools provides expert pool service to Rocklin homeowners, keeping pools in this growing Placer County city clean and balanced year-round.',
    introContent:
      'Cabana Pools delivers dependable pool maintenance to Rocklin, one of the Sacramento region\'s fastest-growing cities. From the popular Whitney Ranch and Stanford Ranch communities to established neighborhoods near the quarries, our technicians provide weekly care adapted to local conditions. We understand Rocklin\'s water supply and climate patterns.',
    faqs: [
      {
        question: 'Do you service Whitney Ranch and Stanford Ranch?',
        answer:
          'Yes, both communities are core parts of our Rocklin service area. We also serve Sunset Whitney, central Rocklin, and all surrounding neighborhoods on weekly routes.',
      },
      {
        question: 'How much is pool service in Rocklin?',
        answer:
          'Rocklin pool service typically costs $135 to $180 per month for weekly visits with all chemicals included. Pricing varies based on pool size and equipment complexity.',
      },
      {
        question: 'Can you handle new pool startups in Rocklin?',
        answer:
          'Absolutely. With all the new construction in Rocklin, we frequently onboard new pools. We handle initial chemical balancing, equipment calibration, and transition to regular weekly service.',
      },
    ],
    nearbyCities: ['roseville', 'loomis', 'granite-bay'],
    isPrimary: false,
  },

  // ============================================================
  // ROSEVILLE
  // ============================================================
  {
    name: 'Roseville',
    slug: 'roseville',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95661', '95678', '95747'],
    coordinates: { lat: 38.7521, lng: -121.2880 },
    urlPath: '/california/sacramento-pool-service/roseville-pool-service/',
    neighborhoods: [
      {
        name: 'West Roseville',
        description:
          'Rapidly growing area with new master-planned communities and modern pool installations.',
      },
      {
        name: 'Granite Bay/South Roseville',
        description:
          'Established neighborhoods along the southern border with mature landscaping and well-used family pools.',
      },
      {
        name: 'Highland Reserve',
        description:
          'Newer upscale community with larger homes and premium pool designs in a warm suburban setting.',
      },
    ],
    landmarks: ['Westfield Galleria at Roseville', 'Maidu Regional Park', 'Roseville Utility Exploration Center'],
    climateNotes:
      'Roseville has a hot, dry Central Valley climate with summer highs regularly reaching the upper 90s. Winters are mild with occasional tule fog events.',
    waterNotes:
      'City of Roseville provides a blend of surface water and treated groundwater with moderate hardness, suitable for pools with standard chemical management.',
    metaTitle: 'Roseville Pool Service | Cabana Pools',
    metaDescription:
      'Professional pool maintenance in Roseville, CA. Serving West Roseville, Highland Reserve & more. Call Cabana Pools for a free quote!',
    heroDescription:
      'Cabana Pools delivers dependable pool service across Roseville, from established neighborhoods to the newest communities in West Roseville.',
    introContent:
      'Cabana Pools provides professional pool care throughout Roseville, one of the Sacramento region\'s largest and fastest-growing cities. With new communities going in and established neighborhoods thriving, Roseville pool owners need consistent professional maintenance. Our technicians serve the entire city with weekly care adapted to local water and climate conditions.',
    faqs: [
      {
        question: 'Do you service West Roseville?',
        answer:
          'Yes, we serve all of Roseville including the rapidly growing West Roseville communities. Our routes expand as the city grows to ensure convenient, timely service.',
      },
      {
        question: 'How much is pool service in Roseville?',
        answer:
          'Roseville pool service typically costs $135 to $180 per month for weekly visits with all chemicals included. Pricing varies based on pool size and equipment.',
      },
      {
        question: 'Do you handle pool equipment in Roseville?',
        answer:
          'Yes, we service and repair pumps, filters, heaters, salt cells, and automation systems. With Roseville\'s many newer pools, we work extensively with the latest pool technology.',
      },
    ],
    nearbyCities: ['rocklin', 'granite-bay', 'antelope'],
    isPrimary: false,
  },

  // ============================================================
  // SUN CITY
  // ============================================================
  {
    name: 'Sun City',
    slug: 'sun-city',
    metro: 'sacramento',
    state: 'CA',
    zipCodes: ['95747'],
    coordinates: { lat: 38.7379, lng: -121.3467 },
    urlPath: '/california/sacramento-pool-service/sun-city-pool-service/',
    neighborhoods: [
      {
        name: 'Sun City Roseville',
        description:
          'Active adult community (55+) with a mix of homes, community pools, and private backyard pools.',
      },
      {
        name: 'Sun City Lincoln Hills',
        description:
          'Large active adult community north of Roseville with resort-style amenities and individual pools.',
      },
    ],
    landmarks: ['Sun City Roseville Clubhouse', 'Timber Creek Lodge', 'Del Webb Boulevard'],
    climateNotes:
      'Sun City communities share the Sacramento Valley\'s hot, dry summer climate with highs in the mid-to-upper 90s. The open landscape means pools are fully exposed to sun all day.',
    waterNotes:
      'City of Roseville and Lincoln water systems provide moderately hard water that requires standard calcium and pH management for pool health.',
    metaTitle: 'Sun City Pool Service | Cabana Pools',
    metaDescription:
      'Expert pool care for Sun City communities near Sacramento. Reliable service for active adult homeowners. Call Cabana Pools today!',
    heroDescription:
      'Cabana Pools provides reliable pool service to Sun City active adult communities, delivering hassle-free maintenance so you can enjoy retirement.',
    introContent:
      'Cabana Pools serves the Sun City active adult communities near Sacramento with dependable pool maintenance. Whether you have a private backyard pool or your HOA manages community facilities, our technicians deliver professional weekly care. We understand the needs of active adult homeowners who want hassle-free pool enjoyment.',
    faqs: [
      {
        question: 'Do you service both Sun City Roseville and Lincoln Hills?',
        answer:
          'Yes, we serve both Sun City Roseville and Sun City Lincoln Hills communities on established weekly routes throughout the area.',
      },
      {
        question: 'Can you work with my Sun City HOA?',
        answer:
          'Absolutely. We work with HOAs and property management companies throughout the Sacramento region. We can coordinate access, scheduling, and reporting to meet community requirements.',
      },
      {
        question: 'How much is pool service in Sun City?',
        answer:
          'Sun City pool service typically costs $130 to $170 per month for weekly visits with all chemicals included. Many Sun City pools are smaller, which keeps pricing accessible.',
      },
    ],
    nearbyCities: ['roseville', 'rocklin', 'antelope'],
    isPrimary: false,
  },
];
