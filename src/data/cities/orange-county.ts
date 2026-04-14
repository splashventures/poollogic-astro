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
      {
        question: 'How does Orange County\'s coastal climate affect pool maintenance frequency?',
        answer:
          'Living near the coast in Orange County means your pool is constantly battling those ocean breezes that carry salt and tiny debris over your fence and into the water. It’s actually pretty different from what folks deal with just 15 miles inland! The coastal humidity also plays tricks with your water chemistry, especially during those hot summer months when water evaporates quickly. That’s why we typically recommend weekly service visits if you’re in Newport or Laguna – it’s just what these local conditions demand.',
      },
      {
        question: 'What makes pool maintenance in Orange County different during Santa Ana wind events?',
        answer:
          'Oh, those Santa Anas – they’re a real headache for pool owners! When those dry winds kick up, they basically dump half your yard, neighborhood dust, and sometimes even wildfire ash right into your pool. Your water chemistry goes haywire pretty quickly as the winds evaporate water and throw your pH off balance. We’ve learned over the years that an extra service visit during these wind events (usually between September and March) saves homeowners a lot of hassle and prevents bigger problems down the road.',
      },
      {
        question: 'How does Orange County\'s water quality impact pool chemical needs?',
        answer:
          'You know, it’s funny – the water coming out of your tap in Fullerton is actually quite different from what they get down in Mission Viejo! North County tends to have harder water with more minerals, while South County’s water has its own unique profile. This means we need to adjust our approach to prevent scaling and maintain proper balance depending on where you live. We’ve found regular testing for calcium hardness and dissolved solids is super important here in OC – it’s just one of those regional quirks we’ve learned to work with.',
      },
      {
        question: 'What should my pool service schedule look like during Orange County\'s winter months?',
        answer:
          'Winter in Orange County isn’t exactly harsh, but it does change how we care for pools! While you can usually scale back to service every 10-14 days instead of weekly, don’t fall for the myth that OC pools can go without maintenance in winter. Those winter rainstorms we get dilute your chemicals and dump loads of debris into the water. The real focus during our mild winters should be keeping drains clear and maintaining your chemical balance – especially important when we get those random 80-degree days in February that can trigger algae growth!',
      },
      {
        question: 'How do Orange County\'s microclimates affect pool equipment longevity?',
        answer:
          'It’s amazing how different your pool equipment needs are depending on whether you’re in Huntington Beach or up in Yorba Linda! Our coastal homeowners battle salt air that’s constantly trying to corrode equipment connections and electrical components. Meanwhile, inland pools in Anaheim and Orange face intense heat that puts extra stress on pumps and filters. We’ve found that customizing maintenance for your specific microclimate with professional check-ups every few months can add years to your equipment life. It’s one of those things that makes pool care in OC unique – we’re dealing with several different climates in one county!',
      },
      {
        question: 'What are the typical pool maintenance costs in Orange County compared to other Southern California regions?',
        answer:
          'I won’t sugarcoat it – you’ll generally pay about 10-15% more for pool care in Orange County than friends might pay out in Riverside or San Bernardino. It’s simply because our unique mix of coastal and inland conditions creates more maintenance challenges. Even within OC, there’s quite a range – coastal properties in Newport or Dana Point typically pay more because of those additional salt-air maintenance needs. Most homeowners I work with budget between $150-200 monthly for good service that addresses our specific regional challenges. It’s an investment that pays off by preventing those costly emergency repairs!',
      },
      {
        question: 'How does Orange County\'s position between coast and desert areas affect seasonal algae prevention?',
        answer:
          'Let me tell you, Orange County sits in this perfect storm zone for algae growth! We get morning coastal fog rolling in, followed by intense afternoon sunshine – especially during spring and fall transitions. Places like Costa Mesa and Irvine get this weird mix of humidity and heat that algae absolutely loves. I’ve seen pools go from crystal clear to green overnight during these seasonal shifts. The winning strategy we’ve developed involves adjusting sanitizer levels based on your specific neighborhood’s microclimate and sometimes using specialized algaecide treatments before problems start. It’s very different from pool care just an hour away in either direction!',
      },
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
      {
        question: 'How does San Clemente\'s coastal climate affect my pool maintenance needs?',
        answer:
          'San Clemente’s oceanfront location brings salt-laden air that can increase the rate of chemical degradation in your pool water, requiring more frequent monitoring of your chemical balance. San Clemente pool service professionals recommend twice-weekly chemical checks during summer months to combat these unique coastal conditions. The coastal fog that often rolls in during summer mornings can also introduce additional moisture that affects evaporation rates and water chemistry, making regular San Clemente pool maintenance essential for keeping your pool pristine.',
      },
      {
        question: 'What should my San Clemente pool service schedule look like during winter months?',
        answer:
          'During San Clemente’s mild winter season, pool cleaning can typically be reduced to every 10-14 days rather than weekly, as cooler temperatures slow algae growth and chemical depletion. However, when Santa Ana winds blow through Orange County, they bring debris, dust, and can rapidly change your pool’s pH balance, requiring additional pool maintenance attention. Many San Clemente pool owners arrange for extra pool service visits during these wind events to prevent potential damage to equipment and water quality.',
      },
      {
        question: 'How does San Clemente\'s water quality impact my pool care costs?',
        answer:
          'San Clemente’s municipal water contains higher mineral content than many inland communities, which can lead to scale buildup and staining if not properly managed through professional San Clemente pool maintenance. This local water characteristic often necessitates the use of specialized scale inhibitors and more frequent filter cleanings as part of your regular pool service, adding approximately 10-15% to annual pool care costs compared to areas with softer water. Regular professional acid washing of pool surfaces is also recommended every 2-3 years in San Clemente to prevent permanent damage from our mineral-rich water.',
      },
      {
        question: 'Are there any seasonal pool cleaning challenges unique to San Clemente?',
        answer:
          'San Clemente’s “June Gloom” marine layer creates perfect conditions for algae growth as the combination of humidity and intermittent sunlight provides an ideal breeding environment. Professional San Clemente pool service is crucial during this period. Additionally, our fall Santa Ana wind events bring not only debris but also phosphates and nitrates from inland areas, which are primary food sources for algae. Expert San Clemente pool cleaning during these seasonal transitions should include stronger algaecides and more thorough filter maintenance to protect your investment.',
      },
      {
        question: 'How does pool equipment longevity compare in San Clemente versus other Orange County areas?',
        answer:
          'Pool equipment in San Clemente typically faces accelerated wear due to our coastal salt air, which can corrode metal components about 20-30% faster than in inland communities. This makes regular San Clemente pool maintenance even more critical for equipment longevity. Heaters and electrical components are particularly vulnerable to San Clemente’s salt-laden marine environment and often require replacement after 6-8 years rather than the standard 10-12 years. Investing in proper equipment covers and preventative pool care through professional San Clemente pool service can significantly extend the lifespan of your pool systems in our coastal climate.',
      },
      {
        question: 'What unique water conservation methods work best for San Clemente pool owners?',
        answer:
          'San Clemente’s combination of coastal humidity and periodic drought conditions creates a unique challenge for pool maintenance. Liquid pool covers work exceptionally well here because our moderate temperature fluctuations maximize their effectiveness, reducing evaporation by up to 40% compared to uncovered pools. Your San Clemente pool service provider can advise on installing wind barriers on the east side of your property to significantly reduce water loss during Santa Ana conditions, when San Clemente experiences rapid evaporation due to hot, dry winds funneling through our coastal canyons.',
      },
      {
        question: 'How should San Clemente pool owners prepare for the impact of marine air on pool surrounds?',
        answer:
          'San Clemente’s marine environment accelerates the breakdown of traditional concrete pool decking, making material selection crucial for longevity. Professional San Clemente pool care includes advising on salt-resistant materials like travertine or specialized sealed pavers that typically last 5-7 years longer in San Clemente than standard concrete decking. Regular application of marine-grade sealants (every 18-24 months rather than the standard 3-5 years) is essential as part of comprehensive pool maintenance to protect your pool surrounds from the corrosive effects of our coastal climate.',
      },
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
      {
        question: 'How does Laguna Beach\'s oceanfront location affect pool maintenance requirements?',
        answer:
          'Laguna Beach’s direct coastal exposure means pool maintenance must address constant salt-laden air that accelerates corrosion of equipment and affects water chemistry. Professional Laguna Beach pool service includes regular inspections and specialized pool cleaning techniques to prevent salt damage, particularly in neighborhoods like South Laguna and North Laguna where ocean proximity demands more frequent pool maintenance and occasional pool repair of corroded components.',
      },
      {
        question: 'What effect does Laguna Beach\'s marine layer have on pool water chemistry?',
        answer:
          'The morning fog in Laguna Beach deposits moisture and sea particles directly into your pool, gradually affecting pH and sanitizer levels. This makes professional pool service essential, especially during May and June. Without consistent pool maintenance and expert pool cleaning, algae blooms can develop quickly. Properties in Woods Cove or Temple Hills where marine layer lingers require specialized Laguna Beach pool service with chemical treatments designed for coastal conditions.',
      },
      {
        question: 'How often should pools in Laguna Beach be professionally serviced?',
        answer:
          'Year-round weekly pool service is essential in Laguna Beach’s coastal environment. The combination of salt air, marine layer moisture, and hillside debris means Laguna Beach pool cleaning and pool maintenance require consistent attention to prevent equipment damage and water quality issues. Some properties in exposed locations like Emerald Bay may benefit from twice-weekly pool service, while properties with heavy landscaping in Bluebird Canyon need more frequent pool cleaning during certain seasons.',
      },
      {
        question: 'What should Laguna Beach homeowners expect to pay for quality pool maintenance?',
        answer:
          'Professional pool service in Laguna Beach typically ranges from $160-$200 monthly for standard weekly pool maintenance, reflecting our coastal area’s specific requirements. Pricing factors include ocean element exposure, hillside accessibility challenges in neighborhoods like Top of the World, and additional features requiring specialized pool cleaning. Investing in proper Laguna Beach pool service is particularly important given how quickly coastal conditions can necessitate pool repair and impact equipment longevity.',
      },
      {
        question: 'How does seasonal tourism in Laguna Beach affect pool service scheduling?',
        answer:
          'Summer tourism creates traffic congestion during art festivals and peak beach season (June-September), which impacts pool service scheduling. Professional Laguna Beach pool cleaning companies plan routes avoiding Festival of Arts congestion and limited access roads in neighborhoods like Three Arch Bay. We recommend establishing consistent early morning pool maintenance schedules during summer to ensure your pool receives proper pool service despite seasonal challenges.',
      },
      {
        question: 'What water quality challenges are unique to Laguna Beach pools?',
        answer:
          'Laguna Beach’s municipal water supply has distinct mineral profiles varying between neighborhoods, with Laguna Canyon sometimes showing different characteristics than coastal areas. Combined with constant salt exposure, this creates unique challenges in pool maintenance to prevent surface staining and equipment scaling. Professional pool service in Laguna Beach includes specialized testing for salt concentration and mineral content, along with targeted pool cleaning techniques not necessary in inland communities like Aliso Viejo or Lake Forest.',
      },
      {
        question: 'How does Laguna Beach\'s canyon-to-coast topography affect pool maintenance needs?',
        answer:
          'Laguna Beach’s dramatic landscape creates microclimate zones affecting pool service requirements. Pools in Laguna Canyon may need more frequent pool cleaning for leaf debris, while properties in Arch Beach Heights face unique wind exposure requiring different pool maintenance strategies. Professional Laguna Beach pool service accounts for these neighborhood-specific conditions, tailoring pool cleaning, chemical treatments, and pool repair strategies to whether you’re in a sheltered canyon or facing direct coastal elements.',
      },
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
      {
        question: 'How do Coto de Caza\'s canyon microclimates affect pool maintenance requirements?',
        answer:
          'Coto de Caza pool maintenance is uniquely influenced by the area’s canyon microclimates, which differ significantly from neighboring communities like Rancho Santa Margarita or Ladera Ranch. The oak-lined canyons and varying elevations create different sun exposure, wind patterns, and debris accumulation across neighborhoods. Properties in The Highlands require more frequent pool cleaning due to elevation, while homes in wind corridors need additional chemical balancing after Santa Ana events. Professional Coto de Caza pool service accounts for these microclimate variations.',
      },
      {
        question: 'What makes Coto de Caza pool service different during fire season?',
        answer:
          'Coto de Caza pool cleaning during fire season requires specialized attention due to the area’s proximity to wilderness. Ash and smoke residue dramatically affect pool water chemistry, increasing chlorine demand and potentially staining pool surfaces. Our Coto de Caza pool maintenance includes more frequent filter cleanings and water testing during fire season, along with specialized treatments to prevent discoloration unique to local vegetation ash. This proactive pool service approach protects your investment during challenging environmental conditions.',
      },
      {
        question: 'Why does pool maintenance in Coto de Caza differ from coastal communities?',
        answer:
          'Coto de Caza pool service addresses unique inland challenges that coastal communities don’t experience. Unlike Newport Beach or Dana Point, Coto de Caza experiences wider temperature swings affecting water chemistry stability. Pool water evaporates faster in this inland microclimate, concentrating chemicals and minerals more quickly. Professional Coto de Caza pool cleaning also manages constant debris from mature oak trees, requiring customized service schedules that reflect these neighborhood-specific conditions.',
      },
      {
        question: 'What should my Coto de Caza pool service schedule include during winter?',
        answer:
          'Year-round Coto de Caza pool maintenance is essential even during mild winters. The rainy season in our canyon community can overwhelm pool drainage and dilute chemicals, requiring prompt adjustments after storms that are more common here than in flatter areas. We recommend weekly Coto de Caza pool service through winter with additional post-rain visits to address how local topography affects water runoff patterns and pool chemistry.',
      },
      {
        question: 'How does local water quality impact Coto de Caza pool maintenance costs?',
        answer:
          'Coto de Caza pool service costs reflect the area’s higher mineral content water, particularly calcium and magnesium compounds that cause scaling on surfaces and equipment. This local water characteristic requires specialized treatments and careful chemical balancing during routine pool maintenance. Investing in proper Coto de Caza pool cleaning prevents significantly higher pool repair costs from scale buildup on equipment and surfaces.',
      },
      {
        question: 'What unique challenges do Santa Ana winds present for pool service in Coto de Caza?',
        answer:
          'Santa Ana winds create specific challenges for Coto de Caza pool maintenance due to the area’s canyon geography. These winds funnel through with greater force than open communities like Mission Viejo, dramatically accelerating evaporation and depositing debris from oak and sycamore trees. Professional Coto de Caza pool cleaning after Santa Ana events includes deep skimming, floor vacuuming, and complete chemical rebalancing to address these unique local conditions.',
      },
      {
        question: 'How does pool equipment longevity differ in Coto de Caza compared to coastal areas?',
        answer:
          'Pool equipment in Coto de Caza experiences more variable conditions than coastal communities, with wider temperature fluctuations and higher UV exposure affecting pump and heater lifespans. Professional Coto de Caza pool maintenance includes regular inspection of equipment seals and gaskets, which degrade faster in inland conditions. Our pool service also provides more frequent filter cleanings to preserve system longevity. Proactive Coto de Caza pool repair prevents costly equipment failures.',
      },
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
      {
        question: 'How does Laguna Niguel\'s microclimate affect pool maintenance compared to other Orange County areas?',
        answer:
          'Laguna Niguel pool maintenance requires special attention due to our unique position between the coast and canyons. This microclimate experiences both coastal moisture and inland heat, which can accelerate algae growth and chemical imbalances. The morning marine layer combined with afternoon sun exposure creates more evaporation than fully coastal areas, making professional Laguna Niguel pool service essential for proper water level and chemical monitoring. Your pool typically needs more consistent attention to sanitizer levels, particularly during transition seasons when temperature fluctuations are common.',
      },
      {
        question: 'What special considerations affect Laguna Niguel pool service during Santa Ana wind events?',
        answer:
          'Santa Ana winds bring excessive debris from surrounding canyons and drastically increase evaporation rates, quickly affecting your pool’s chemical balance. These hot, dry winds also deposit fine dust particles that can cloud water and strain filtration systems. Our Laguna Niguel pool cleaning service recommends covering your pool when possible during these events, and we offer additional visits to address the unique challenges these weather patterns create for pool maintenance in our area.',
      },
      {
        question: 'How often should I schedule professional pool service in Laguna Niguel throughout the year?',
        answer:
          'For optimal results, Laguna Niguel pool service should be scheduled weekly year-round due to our temperate climate that allows extended swimming seasons. During fall months when the area experiences increased leaf debris, more frequent pool cleaning and filter maintenance may be necessary. Winter pool service shouldn’t be reduced—our mild winters still promote algae growth that requires regular Laguna Niguel pool maintenance to prevent costly problems.',
      },
      {
        question: 'What impact does Laguna Niguel\'s water quality have on pool chemistry management?',
        answer:
          'Our municipal water contains specific mineral profiles that influence how pool maintenance should be approached. The slightly higher calcium hardness in local water requires careful monitoring to prevent scaling—a common issue requiring pool repair in South Orange County. Professional Laguna Niguel pool service providers should account for these regional water characteristics when adjusting chemicals, ensuring longer equipment life and better swimming conditions.',
      },
      {
        question: 'How do coastal proximity and canyon areas affect pool equipment in Laguna Niguel?',
        answer:
          'Pool repair needs in Laguna Niguel often stem from a double challenge: salt air from our coastal proximity accelerates corrosion on metal components, while canyon winds carry abrasive particles that wear down equipment faster than inland areas. Heaters and electrical components particularly require additional attention during Laguna Niguel pool maintenance visits. Professional pool service technicians familiar with our local conditions can implement preventative measures that extend equipment lifespan by 2-3 years compared to standard approaches.',
      },
      {
        question: 'What factors influence pool service pricing specifically in Laguna Niguel?',
        answer:
          'Laguna Niguel pool service pricing reflects our area’s unique combination of coastal and canyon environments that create more demanding pool maintenance conditions than neighboring communities. The premium on reliable pool cleaning professionals in South Orange County also affects rates, as does the higher chemical usage required by local water characteristics and climate variations. The investment in quality Laguna Niguel pool maintenance prevents the significantly higher costs of pool repair problems that develop with inadequate service.',
      },
      {
        question: 'Is Your Laguna Niguel Pool Filtration System Due for an Upgrade?',
        answer:
          'Living in Laguna Niguel means enjoying a unique microclimate where coastal breezes meet canyon scenery. But that beautiful environment creates specific challenges for pools that many homeowners don’t realize until they need pool repair for persistently cloudy water. Here’s the truth about our local conditions: The mix of salt air from the ocean and debris from the canyons is absolutely brutal on pool filtration systems. Professional Laguna Niguel pool service technicians have seen perfectly good setups from other areas fail within a few years after moving here. If your system is pushing 5-7 years old and you’re noticing water quality issues—even when chemicals are balanced—it’s probably time for an upgrade. Don’t wait until you need emergency Laguna Niguel pool repair when fighting cloudiness all summer. What makes pool maintenance in our area unique is the combination of fine dust carried by intense Santa Ana winds and higher levels of organic material from our beautifully landscaped canyon surroundings. These particles are smaller and more numerous than what standard filters are designed to handle. The good news? Today’s filtration technology includes systems specifically engineered for our local environmental challenges. An upgrade through professional Laguna Niguel pool service could mean crystal clear water all season with less maintenance and chemical use.',
      },
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
      {
        question: 'How does Costa Mesa\'s coastal location affect my pool maintenance schedule?',
        answer:
          'Costa Mesa’s proximity to the Pacific Ocean means your pool is regularly exposed to salt-laden marine air that accelerates equipment corrosion and affects water chemistry. The morning marine layer frequently introduces extra moisture that impacts chlorine effectiveness and encourages algae growth. We recommend weekly pool cleaning Costa Mesa service, with particular attention to salt buildup on waterlines and equipment surfaces during summer months when ocean breezes are strongest.',
      },
      {
        question: 'What makes pool maintenance in Costa Mesa different from inland Orange County areas?',
        answer:
          'Costa Mesa pool maintenance presents unique challenges from coastal influence compared to inland areas like Tustin or Orange. Your pool deals with more salt exposure, morning fog affecting chemical stability, and higher ambient humidity that slows evaporation rates. These coastal conditions require specialized Costa Mesa pool service to prevent salt-related corrosion and manage marine air effects on surfaces and equipment—considerations less common just 10-15 miles inland.',
      },
      {
        question: 'How do Costa Mesa\'s seasonal weather patterns impact my pool care needs?',
        answer:
          'Costa Mesa’s distinct “May Gray” and “June Gloom” periods bring extended morning cloud cover that reduces natural UV sanitizing effects. During fall Santa Ana wind events, pools receive increased debris while experiencing rapidly dropping humidity that accelerates evaporation. Your Costa Mesa pool maintenance should adapt seasonally, with additional focus on chemical balance during cloudy periods and more frequent Costa Mesa pool cleaning during wind events.',
      },
      {
        question: 'What water quality challenges are specific to Costa Mesa pools?',
        answer:
          'Costa Mesa’s municipal water supply typically has higher mineral content than neighboring Newport Beach, with calcium hardness levels that contribute to scaling on pool surfaces. The coastal location means pool water also has higher absorption rates of airborne salt, affecting pH stability and chlorine effectiveness. Regular testing for calcium hardness and total dissolved solids (TDS) is particularly important for pool maintenance Costa Mesa homeowners to prevent scale buildup and maintain proper water balance.',
      },
      {
        question: 'What should Costa Mesa homeowners budget for professional pool service given local conditions?',
        answer:
          'Pool service in Costa Mesa typically ranges from $110-$165 monthly, reflecting our coastal environmental factors requiring specialized maintenance approaches. Your specific costs may vary based on proximity to the coast (pools in Mesa del Mar or Eastside often require more attention to salt-related issues than Mesa Verde), pool size, equipment complexity, and surrounding landscaping. Costa Mesa pool service pricing includes the additional treatments and procedures necessary to address our unique coastal microclimate conditions.',
      },
      {
        question: 'How can Costa Mesa pool owners maintain water clarity during winter rainy seasons?',
        answer:
          'Costa Mesa’s winter rainfall introduces unique challenges as rainwater disrupts chemical balance and carries environmental contaminants. After significant rain events, your pool requires prompt rebalancing, particularly of alkalinity and pH. We recommend maintaining regular weekly Costa Mesa pool cleaning schedules throughout the rainy season (typically December through March), with additional shock treatments following substantial rainfall to quickly restore proper sanitization levels.',
      },
      {
        question: 'How does Costa Mesa\'s proximity to the coast affect pool equipment lifespan compared to other areas?',
        answer:
          'Pool equipment in Costa Mesa typically experiences 15-20% shorter lifespans than identical systems in inland communities due to salt-laden air accelerating corrosion on motors, heaters, and electrical components. Professional Costa Mesa pool service should include regular equipment rinsing to remove salt residue and application of protective coatings to extend the functional life of your valuable pool systems. Our Costa Mesa pool repair experts can help address salt-related equipment issues before they become costly failures.',
      },
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
