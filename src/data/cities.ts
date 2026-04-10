import { City } from '@/types/city';

export const cities: City[] = [
  // ============================================================
  // ALPINE
  // ============================================================
  {
    name: 'Alpine',
    slug: 'alpine',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91901', '91903'],
    coordinates: { lat: 32.8356, lng: -116.7664 },
    distanceFromHQ: '~30 miles east',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Alpine Village',
        description:
          'Central Alpine community with established homes and pools in a warm foothill setting surrounded by oak woodlands.',
      },
      {
        name: 'Peutz Valley',
        description:
          'Semi-rural area southeast of Alpine proper with larger parcels and pools that face hot summer conditions and limited shade.',
      },
      {
        name: 'Harbison Canyon',
        description:
          'Wooded canyon community west of Alpine where pools contend with significant tree debris from surrounding oaks and pines.',
      },
      {
        name: 'Victoria Park',
        description:
          'Newer residential development in Alpine featuring modern pool designs with energy-efficient equipment and pebble-tec finishes.',
      },
    ],

    landmarks: [
      'Viejas Casino & Resort',
      'Wright\'s Field Park',
      'Alpine Creek Town Center',
      'Cleveland National Forest',
      'Loveland Reservoir',
    ],

    climateNotes:
      'Alpine sits at approximately 1,800 feet elevation in the foothills east of San Diego. Summer highs regularly reach the mid-to-upper 90s, with heat waves pushing past 105°F. Winters can bring overnight freezing temperatures, and the area sees slightly more rainfall than the coast at about 15 inches annually.',

    waterNotes:
      'Alpine is served by the Padre Dam Municipal Water District, which sources water from imported supplies through the San Diego County Water Authority. Water hardness tends to be moderate to high, and many rural properties supplement with well water that may contain elevated iron and mineral levels requiring special pool treatment protocols.',

    metaTitle: 'Alpine Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Reliable pool cleaning and maintenance in Alpine, CA. Serving Alpine Village, Harbison Canyon & surrounding areas. Call PoolLogic at (619) 913-9335 for a free quote!',

    heroDescription: 'Keep your pool crystal clear in Alpine\'s foothill heat. Our CPO-certified technicians handle the hard water, oak debris, and 100°F summers so you can enjoy your mountain retreat worry-free.',

    introContent: `PoolLogic Pool Service delivers dependable pool care to homeowners in Alpine, a charming foothill community nestled in the mountains east of San Diego. With summer temperatures regularly climbing into the high 90s and beyond, a well-maintained pool is essential for Alpine residents who want a cool retreat without driving down the mountain to the coast. Our team understands the unique demands of this inland environment and provides service tailored to Alpine's specific conditions.

As part of our commitment to serving all of San Diego County, PoolLogic Pool Service has been caring for Alpine pools for over a decade. We know that the combination of extreme heat, hard water, and debris from surrounding oak woodlands and chaparral creates a challenging environment for pool maintenance. Our technicians are trained to handle these conditions with proactive chemical management and thorough cleaning protocols.

Whether your pool overlooks the rolling hills of Victoria Park or sits among the oaks of Harbison Canyon, PoolLogic Pool Service treats every Alpine pool with the same professional attention and care that has earned us the trust of 22+ San Diego County communities.`,

    localExpertiseContent:
      'Alpine pools operate in one of San Diego County\'s most demanding climates, and our technicians bring specialized knowledge of foothill pool care. We understand that the extreme heat accelerates chemical consumption and evaporation, while the surrounding native vegetation deposits leaves, bark, and pollen that can stain surfaces and clog filters. Our Alpine service protocols include enhanced debris removal and adjusted chemical dosing to match these conditions.',

    climateContent:
      'Alpine\'s foothill elevation creates a climate that is significantly hotter and drier than coastal San Diego in summer, yet colder in winter. Summer temperatures frequently reach the upper 90s, driving rapid evaporation and chlorine loss. Winter nights can dip below freezing, putting exposed pool plumbing and equipment at risk. PoolLogic Pool Service adjusts seasonal protocols to protect Alpine pools year-round, from aggressive summer chemical programs to winterization measures that prevent freeze damage.',

    faqs: [
      { question: 'How much does pool service cost in Alpine?', answer: 'Most Alpine homes pay between $150–$200/month for weekly pool service, with all chemicals included. Properties at higher elevations near Harbison Canyon or Peutz Valley with well water may require additional mineral treatment, which can adjust pricing slightly.' },
      { question: 'What does your Alpine pool service include?', answer: 'Every visit covers skimming, brushing, vacuuming, filter cleaning, and full chemical balancing,all chemicals included at no extra charge. For Alpine pools, we pay special attention to iron staining from local well water and calcium buildup from Padre Dam MWD\'s moderate-to-high hardness levels.' },
      { question: 'Do you service all neighborhoods in Alpine?', answer: 'Yes, we service the entire Alpine 91901 and 91903 ZIP code area, including Alpine Village, Peutz Valley, Harbison Canyon, and Victoria Park. Our technicians are familiar with the mountain roads and properties throughout the Alpine community near Cleveland National Forest.' },
      { question: 'How fast can you start pool service in Alpine?', answer: 'Most Alpine residents are on a route within 3–5 business days of signing up. We have established weekly routes running through the Alpine area east of San Diego, so fitting in new customers near Viejas Casino or along the Harbison Canyon corridor is straightforward.' },
      { question: 'Why is PoolLogic the best pool service in Alpine?', answer: 'Our CPO-certified technicians understand Alpine\'s unique challenges,extreme summer heat topping 105°F, winter freezing risks at 1,800 feet elevation, and well water iron content that stains pool surfaces. With a 5.0 Google rating across 1,042+ reviews, PoolLogic is the most trusted pool service in the Alpine area.' },
      { question: 'Do you handle pool repairs in Alpine?', answer: 'Absolutely. We repair pumps, filters, heaters, salt systems, and automation controllers for Alpine pool owners. We also address freeze damage that can occur during Alpine\'s cold winter nights, as well as calcium and iron scaling common with local Padre Dam MWD and well water sources.' },
      { question: 'Do you offer year-round pool service in Alpine?', answer: 'Yes, year-round service is essential in Alpine given the dramatic seasonal swings,from 95–105°F summers to below-freezing winter nights at elevation. We adjust chemical dosing seasonally and monitor equipment to prevent freeze damage, keeping your pool protected through every Alpine season.' },
    ],

    nearbyCities: ['el-cajon', 'lakeside', 'jamul', 'ramona'],
  },

  // ============================================================
  // BONITA
  // ============================================================
  {
    name: 'Bonita',
    slug: 'bonita',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91902'],
    coordinates: { lat: 32.6578, lng: -117.0303 },
    distanceFromHQ: '~14 miles south',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Bonita Long Canyon',
        description:
          'Upscale hillside area with larger lots and resort-style pools that enjoy warm inland temperatures and panoramic views of the Sweetwater Valley.',
      },
      {
        name: 'Sunnyside',
        description:
          'Established residential area with tree-lined streets and well-maintained pools in family-friendly settings near Sweetwater Reservoir.',
      },
      {
        name: 'Bonita Village',
        description:
          'Central Bonita community with a mix of ranch-style and newer homes featuring pools ranging from classic plaster to modern pebble finishes.',
      },
      {
        name: 'Central Bonita',
        description:
          'Heart of the community near Rohr Park with mature landscaping that provides shade for pools but also contributes organic debris requiring diligent maintenance.',
      },
    ],

    landmarks: [
      'Sweetwater Regional Park',
      'Rohr Park',
      'Sweetwater Reservoir',
      'Bonita Golf Club',
      'Sunnyside Farms',
    ],

    climateNotes:
      'Bonita occupies a pleasant inland valley position that is slightly warmer than coastal communities but cooler than the deep inland valleys. Summer highs typically reach the mid-80s to low 90s, with moderate humidity. The Sweetwater Valley setting provides some shelter from winds while maintaining comfortable year-round temperatures.',

    waterNotes:
      'Bonita is served by the Sweetwater Authority, which draws from local reservoirs including the Sweetwater Reservoir and imported water. Water hardness is moderate at approximately 200-250 ppm, requiring regular monitoring to prevent calcium scaling on pool surfaces and equipment.',

    metaTitle: 'Bonita Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Quality pool cleaning and maintenance in Bonita, CA. Serving Bonita Long Canyon, Sunnyside & all areas. Call PoolLogic at (619) 913-9335 for a free quote!',

    heroDescription: 'From Bonita Long Canyon estates to Sunnyside family homes, we deliver weekly pool care tailored to the Sweetwater Valley\'s mild climate and lush, tree-shaded properties.',

    introContent: `PoolLogic Pool Service is proud to serve the beautiful community of Bonita, a picturesque unincorporated area in the Sweetwater Valley south of San Diego. Known for its tree-lined streets, equestrian properties, and family-friendly atmosphere, Bonita is home to many residential pools that benefit from the area's warm inland climate and long swimming season.

Our team has been providing premium pool service to Bonita homeowners for over a decade, and we understand what makes this community unique. The combination of mature landscaping, moderate inland heat, and Sweetwater Authority water creates specific pool care requirements that we address through customized maintenance programs.

From the hilltop estates of Bonita Long Canyon to the established neighborhoods near Rohr Park, PoolLogic Pool Service delivers consistent, reliable care that keeps Bonita pools sparkling clean and ready for year-round enjoyment.`,

    localExpertiseContent:
      'Bonita\'s lush landscaping and mature trees are a hallmark of the community, but they also create ongoing debris management challenges for pool owners. Our technicians are experienced at handling the leaf litter, pollen, and organic matter that Bonita\'s abundant vegetation deposits into pools. We also understand the Sweetwater Authority\'s water characteristics and adjust chemical programs accordingly to maintain optimal balance.',

    climateContent:
      'Bonita\'s Sweetwater Valley location provides a mild inland climate that is ideal for year-round pool use. Summer temperatures are warm but not extreme, typically reaching the mid-80s to low 90s. This moderate heat means pools stay at comfortable swimming temperatures without the aggressive evaporation and chemical loss seen in hotter inland valleys. PoolLogic Pool Service takes advantage of these favorable conditions with efficient maintenance programs that keep Bonita pools in excellent shape throughout every season.',

    faqs: [
      { question: 'What does pool service cost in Bonita?', answer: 'Bonita pool owners typically pay between $130–$175/month for weekly service with all chemicals included. Pricing depends on pool size and features, and the Sweetwater Valley\'s mild climate means fewer extreme chemical swings compared to inland areas.' },
      { question: 'What is included in your Bonita pool service?', answer: 'Each weekly visit includes skimming, brushing, vacuuming, filter maintenance, and complete chemical balancing,all chemicals are included. We specifically manage the 200–250 ppm hardness levels common with Bonita\'s Sweetwater Authority water to prevent calcium scale on your tile and equipment.' },
      { question: 'Which Bonita neighborhoods do you serve?', answer: 'We serve all of Bonita within the 91902 ZIP code, including Bonita Long Canyon, Sunnyside, Bonita Village, and Central Bonita. Whether your home is near Sweetwater Regional Park or closer to Rohr Park, our technicians have you covered.' },
      { question: 'How quickly can I start pool service in Bonita?', answer: 'We can typically begin servicing your Bonita pool within 3–5 business days. Our crews run regular routes through the Sweetwater Valley, just 14 miles south of our Hillcrest headquarters, making Bonita one of our most efficiently served communities.' },
      { question: 'Why should I choose PoolLogic for pool service in Bonita?', answer: 'PoolLogic brings CPO-certified expertise to every Bonita pool, with specific knowledge of Sweetwater Authority water chemistry and the moderate hardness levels unique to this area. Our 5.0 Google rating from 1,042+ reviews speaks to the consistent quality Bonita homeowners can expect.' },
      { question: 'Can you repair pool equipment in Bonita?', answer: 'Yes, we handle all pool equipment repairs for Bonita residents, including pumps, heaters, filters, salt chlorine generators, and automation systems. We also address calcium scaling on tile and equipment caused by the moderately hard Sweetwater Authority supply common throughout the Sweetwater Valley.' },
      { question: 'Is year-round pool service necessary in Bonita?', answer: 'Definitely. Bonita\'s mild Sweetwater Valley climate with mid-80s to low-90s summers means algae pressure stays elevated for much of the year. Year-round maintenance prevents costly green pool cleanups and keeps your equipment running efficiently through every season.' },
    ],

    nearbyCities: ['chula-vista', 'national-city', 'spring-valley', 'la-mesa'],
  },

  // ============================================================
  // CARLSBAD
  // ============================================================
  {
    name: 'Carlsbad',
    slug: 'carlsbad',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92008', '92009', '92010', '92011'],
    coordinates: { lat: 33.1581, lng: -117.3506 },
    distanceFromHQ: '~35 miles north',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'La Costa',
        description:
          'Premier resort-style community with luxury pools, spas, and elaborate water features set among rolling hills and championship golf courses.',
      },
      {
        name: 'Aviara',
        description:
          'Upscale planned community adjacent to the Batiquitos Lagoon with high-end pools featuring infinity edges, custom tile, and premium automation.',
      },
      {
        name: 'Bressi Ranch',
        description:
          'Family-focused master-planned neighborhood with well-designed pools and efficient modern equipment in a community-oriented setting.',
      },
      {
        name: 'Carlsbad Village',
        description:
          'Charming coastal downtown area with a mix of vintage and renovated pools in homes just blocks from the beach.',
      },
      {
        name: 'Calavera Hills',
        description:
          'Inland Carlsbad neighborhood near Lake Calavera with pools in a warmer microclimate surrounded by natural open space.',
      },
    ],

    landmarks: [
      'LEGOLAND California',
      'Carlsbad Flower Fields',
      'Batiquitos Lagoon',
      'Carlsbad State Beach',
      'The Crossings at Carlsbad Golf Course',
      'Carlsbad Premium Outlets',
    ],

    climateNotes:
      'Carlsbad enjoys a coastal Mediterranean climate with summer highs averaging 75-82°F near the coast and 80-90°F in inland areas like Calavera Hills. The marine layer is common May through July. Carlsbad receives about 10-12 inches of rain annually and benefits from consistent ocean breezes that moderate temperatures year-round.',

    waterNotes:
      'Carlsbad Municipal Water District supplies water throughout the city, supplemented by the Claude "Bud" Lewis Carlsbad Desalination Plant -- the largest desalination facility in the Western Hemisphere. Desalinated water blended with imported water creates a unique chemistry profile with lower hardness than many inland areas but requires careful pH management.',

    metaTitle: 'Carlsbad Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Expert pool cleaning in Carlsbad, CA. Serving La Costa, Aviara, Bressi Ranch, Carlsbad Village & more. Trusted by hundreds of families. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Trusted by Carlsbad families from Aviara and La Costa to Carlsbad Village. We manage the salt air, marine layer, and unique desalinated water chemistry that coastal pools demand.',

    introContent: `PoolLogic Pool Service delivers premium pool care to homeowners throughout Carlsbad, from the luxury estates of Aviara and La Costa to the charming coastal homes of Carlsbad Village. This beautiful North County coastal city is home to some of the finest residential pools in San Diego County, and our team has the expertise to maintain them at the highest standard.

Carlsbad's unique position along the coast, combined with its diverse neighborhoods spanning from oceanfront to inland hillsides, creates varied pool care requirements. PoolLogic Pool Service has been serving Carlsbad for over a decade, and we understand these nuances. We provide customized maintenance programs that account for each property's specific microclimate, water chemistry, and equipment configuration.

Our Carlsbad service routes are designed for efficiency, allowing us to serve every neighborhood from the flower fields to the lagoon with consistent, on-time service. We are proud to be the pool service provider that Carlsbad families trust to keep their pools pristine year-round.`,

    localExpertiseContent:
      'Carlsbad\'s neighborhoods represent a cross-section of San Diego County\'s finest pool installations. In Aviara, we service resort-quality pools with vanishing edges, glass tile, and integrated spa systems that require meticulous attention to detail. The coastal influence in Carlsbad Village brings salt air challenges that accelerate wear on metal components and affect water chemistry. Our familiarity with Carlsbad\'s unique water supply -- including desalinated water from the Carlsbad Desalination Plant -- allows us to calibrate chemical programs specifically for this city\'s characteristics.',

    climateContent:
      'Carlsbad\'s coastal climate is pleasant but presents distinct challenges for pool owners. The marine layer blankets the coast from late spring through early summer, reducing sunlight and depositing moisture on pool surfaces. Inland neighborhoods like Calavera Hills experience temperatures 10-15 degrees warmer than the coast, meaning faster evaporation and greater potential for algae growth. PoolLogic Pool Service maintains separate chemical protocols for coastal and inland Carlsbad pools to address these microclimate differences.',

    faqs: [
      { question: 'How much is pool service in Carlsbad?', answer: 'Carlsbad pool service generally runs $140–$190/month for weekly maintenance with all chemicals included. Coastal properties near Carlsbad Village may need more attention to salt and marine layer deposits, while inland pools in Bressi Ranch or Calavera Hills face slightly higher evaporation rates.' },
      { question: 'What does weekly pool service in Carlsbad include?', answer: 'Every visit covers skimming, brushing, vacuuming, equipment checks, and full chemical balancing with all chemicals included. Carlsbad pools benefit from the city\'s lower-hardness water thanks to the Carlsbad MWD and local desalination plant, but we still monitor for salt deposition on coastal properties near the Flower Fields and Batiquitos Lagoon.' },
      { question: 'Do you cover all parts of Carlsbad?', answer: 'Yes, we serve all Carlsbad ZIP codes 92008 through 92011, including La Costa, Aviara, Bressi Ranch, Carlsbad Village, and Calavera Hills. From the coastal neighborhoods near LEGOLAND to the inland communities east of El Camino Real, our routes cover the entire city.' },
      { question: 'How soon can you begin pool service in Carlsbad?', answer: 'Most Carlsbad homeowners are added to a route within 3–5 business days. We maintain well-established weekly routes throughout North County, so whether you\'re in Aviara or near the Batiquitos Lagoon, we can get started quickly.' },
      { question: 'What makes PoolLogic the top pool service in Carlsbad?', answer: 'PoolLogic\'s CPO-certified technicians understand the nuances of Carlsbad\'s dual climate,cool marine layer at the coast and warmer conditions inland near Calavera Hills,and tailor chemical programs accordingly. With a 5.0 Google rating from 1,042+ reviews across 22+ San Diego County cities, our North County customers consistently trust us with their pools.' },
      { question: 'Do you offer pool repair services in Carlsbad?', answer: 'Yes, we repair and replace pumps, filters, heaters, salt systems, and pool automation throughout Carlsbad. We also address corrosion from ocean air exposure that commonly affects equipment at coastal properties near Carlsbad Village and Aviara.' },
      { question: 'Do Carlsbad pools need service year-round?', answer: 'Absolutely. Carlsbad\'s mild coastal climate keeps water temperatures elevated enough for algae growth even in winter, and persistent marine layer moisture adds to the challenge. Year-round service protects your investment and ensures your pool is always ready, whether it\'s a sunny day at La Costa or an overcast morning near the coast.' },
    ],

    nearbyCities: ['oceanside', 'encinitas', 'vista', 'san-marcos', 'del-mar'],
  },

  // ============================================================
  // CHULA VISTA
  // ============================================================
  {
    name: 'Chula Vista',
    slug: 'chula-vista',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91910', '91911', '91913', '91914', '91915'],
    coordinates: { lat: 32.6401, lng: -117.0842 },
    distanceFromHQ: '~10 miles south',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Eastlake',
        description:
          'Master-planned community with modern pools, spas, and water features in well-maintained homes with contemporary automation systems.',
      },
      {
        name: 'Otay Ranch',
        description:
          'Large planned community with newer construction featuring energy-efficient pool equipment, variable-speed pumps, and smart controllers.',
      },
      {
        name: 'Rancho Del Rey',
        description:
          'Established family neighborhood with a variety of pool styles from traditional plaster to newer pebble-finish surfaces.',
      },
      {
        name: 'Bonita Long Canyon',
        description:
          'Upscale hillside area with larger lots and resort-style pools that enjoy warm inland temperatures and panoramic views.',
      },
      {
        name: 'Castle Park',
        description:
          'Western Chula Vista neighborhood closer to the bay with older pools that benefit from equipment modernization and resurfacing.',
      },
    ],

    landmarks: [
      'Aquatica San Diego',
      'Living Coast Discovery Center',
      'Otay Valley Regional Park',
      'Chula Vista Bayfront',
      'Chula Vista Elite Athlete Training Center',
      'Mattress Firm Amphitheatre',
    ],

    climateNotes:
      'Chula Vista spans from bayfront to inland foothills, creating diverse microclimates within a single city. Western areas near the bay enjoy mild coastal temperatures around 70-80°F in summer, while eastern communities like Eastlake and Otay Ranch regularly see temperatures in the high 80s to mid-90s. The city receives about 10 inches of annual rainfall.',

    waterNotes:
      'Chula Vista is served by the Sweetwater Authority, which draws from local reservoirs and imported water. The water tends to be moderately hard with calcium levels around 200-250 ppm. Pool owners in eastern Chula Vista may notice higher mineral buildup due to the warmer temperatures concentrating dissolved solids through evaporation.',

    metaTitle: 'Chula Vista Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Professional pool cleaning in Chula Vista, CA. Serving Eastlake, Otay Ranch, Rancho Del Rey & all areas. Licensed & insured. Call PoolLogic at (619) 913-9335 for a free quote!',

    heroDescription: 'San Diego County\'s second-largest city deserves top-tier pool care. We service everything from bayfront properties to the master-planned communities of Eastlake and Otay Ranch.',

    introContent: `PoolLogic Pool Service is the trusted choice for pool cleaning and maintenance throughout Chula Vista. As San Diego County's second-largest city, Chula Vista is home to thousands of residential pools spanning from the bayfront communities in the west to the master-planned neighborhoods of Eastlake and Otay Ranch in the east. Our team has been servicing pools across all of these diverse areas for over a decade with the same commitment to quality and reliability.

Whether you own a newer pool with the latest automation in Otay Ranch or a classic backyard pool in Castle Park, PoolLogic Pool Service has the expertise to keep your water crystal clear. We understand that Chula Vista's geography creates different pool care demands depending on your location -- coastal proximity versus inland heat -- and we customize our service accordingly.

Our Chula Vista customers appreciate our consistency, transparent pricing, and the fact that we are always just a short drive away from our San Diego headquarters. We service Chula Vista pools every week of the year, because in this climate, your pool deserves year-round professional attention.`,

    localExpertiseContent:
      'Chula Vista\'s rapid growth has produced neighborhoods with distinct pool care profiles. The newer communities of Eastlake and Otay Ranch feature pools built with modern construction standards -- pebble-tec finishes, variable-speed pumps, and salt chlorine generators are common. In the established western neighborhoods, we encounter older pool systems that benefit from planned upgrades. PoolLogic Pool Service understands both ends of this spectrum and tailors our approach to match each pool\'s specific needs and equipment.',

    climateContent:
      'Chula Vista\'s climate varies significantly from west to east. The western bayfront neighborhoods enjoy the cooling influence of San Diego Bay with summer temperatures rarely exceeding 80°F. Eastern communities like Eastlake and Otay Ranch sit at higher elevations away from coastal moderation, where summer temperatures routinely reach the high 80s to mid-90s. PoolLogic Pool Service adjusts chemical treatment plans for eastern Chula Vista pools to compensate for these heat-driven factors, including higher evaporation rates and faster chlorine consumption.',

    faqs: [
      { question: 'What is the cost of pool service in Chula Vista?', answer: 'Chula Vista homeowners typically pay $130–$180/month for weekly pool service with all chemicals included. Pools in warmer eastern communities like Eastlake and Otay Ranch may require slightly more chemical usage than those closer to the cooler bayfront, but everything is covered in our pricing.' },
      { question: 'What does your Chula Vista pool service include?', answer: 'Each visit includes full skimming, brushing, vacuuming, filter cleaning, and chemical balancing,all chemicals included. We specifically manage the 200–250 ppm hardness from Sweetwater Authority water that serves Chula Vista, preventing calcium scale on your tile and equipment.' },
      { question: 'Do you serve all Chula Vista neighborhoods?', answer: 'Yes, we cover all Chula Vista ZIP codes 91910 through 91915, including Eastlake, Otay Ranch, Rancho Del Rey, and Castle Park. As San Diego County\'s second-largest city, Chula Vista is one of our busiest service areas from the bayfront to the eastern foothills.' },
      { question: 'How fast can I get pool service started in Chula Vista?', answer: 'Most Chula Vista residents are on a service route within 3–5 business days. We run multiple weekly routes across the city,from Castle Park near the bayfront all the way out to the master-planned communities of Eastlake and Otay Ranch,so availability is excellent.' },
      { question: 'Why choose PoolLogic for pool service in Chula Vista?', answer: 'PoolLogic\'s CPO-certified technicians understand Chula Vista\'s wide climate range, from the mild 70–80°F bayfront to the 85–95°F eastern hills, and adjust chemical programs to match each zone. Our 5.0 Google rating across 1,042+ reviews reflects the reliable, thorough service Chula Vista pool owners depend on.' },
      { question: 'Can you fix pool equipment in Chula Vista?', answer: 'Yes, we handle all pool equipment repairs for Chula Vista customers, including pumps, heaters, filters, salt cells, and automation systems. We frequently service pools near Aquatica and throughout the Otay Ranch master plan, where newer equipment and smart controllers are common.' },
      { question: 'Should I keep pool service in Chula Vista during winter?', answer: 'Yes. Chula Vista\'s South Bay climate stays warm enough year-round that algae can bloom in any month, especially in the eastern neighborhoods near Eastlake and Otay Ranch where temperatures stay higher. Consistent year-round maintenance prevents surprise green pools and keeps equipment in top shape.' },
    ],

    nearbyCities: ['san-diego', 'national-city', 'bonita', 'spring-valley', 'la-mesa'],
  },

  // ============================================================
  // DEL MAR
  // ============================================================
  {
    name: 'Del Mar',
    slug: 'del-mar',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92014'],
    coordinates: { lat: 32.9595, lng: -117.2653 },
    distanceFromHQ: '~20 miles north',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Del Mar Village',
        description:
          'Upscale downtown area with luxury homes and pools steps from the beach, where salt air and ocean mist create constant maintenance considerations.',
      },
      {
        name: 'Del Mar Heights',
        description:
          'Elevated residential area with panoramic ocean views and pools that face consistent coastal winds and salt spray exposure.',
      },
      {
        name: 'Del Mar Mesa',
        description:
          'Master-planned community on the eastern edge of Del Mar with modern homes and pools in a slightly warmer inland microclimate.',
      },
      {
        name: 'Olde Del Mar',
        description:
          'Historic beachside neighborhood with character homes and pools that combine vintage charm with modern upgrades in a prime coastal setting.',
      },
    ],

    landmarks: [
      'Del Mar Racetrack & Fairgrounds',
      'Torrey Pines State Beach',
      'Seagrove Park',
      'Del Mar City Beach',
      'San Dieguito River Park',
    ],

    climateNotes:
      'Del Mar enjoys one of the mildest climates in San Diego County. Perched along the coast, summer highs average 72-78°F with consistent ocean breezes. The marine layer is a regular presence from May through July. Del Mar rarely sees temperatures above 85°F, making it one of the cooler communities in the region.',

    waterNotes:
      'Del Mar receives water from the City of San Diego Public Utilities Department. The water is imported via the San Diego County Water Authority and tends toward moderate hardness. The constant coastal exposure means salt deposition is a primary concern for pool equipment and surfaces in this seaside community.',

    metaTitle: 'Del Mar Pool Service | Premium Coastal Care | PoolLogic Pool Service',
    metaDescription:
      'Luxury pool cleaning in Del Mar, CA. Serving Del Mar Village, Del Mar Heights, Del Mar Mesa & all areas. Coastal pool specialists. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Luxury pool care for Del Mar\'s oceanfront estates and hillside retreats. We specialize in the salt-air corrosion protection and meticulous attention that prestigious coastal pools require.',

    introContent: `PoolLogic Pool Service provides luxury pool care to homeowners in Del Mar, one of San Diego County's most prestigious coastal communities. Known for its world-famous racetrack, stunning beaches, and multimillion-dollar homes, Del Mar demands pool service that matches the quality of its surroundings. Our team delivers exactly that -- meticulous attention to detail, premium products, and a deep understanding of coastal pool care.

Del Mar's compact geography means that nearly every pool in the city faces direct coastal influence. Salt air, marine layer moisture, and ocean winds are constant factors that affect water chemistry, equipment longevity, and surface condition. PoolLogic Pool Service has been maintaining Del Mar pools for over a decade, and our coastal expertise ensures your pool remains in pristine condition despite these environmental challenges.

Whether you own a beachfront estate in Olde Del Mar or a hilltop home in Del Mar Heights with sweeping ocean views, PoolLogic Pool Service provides the premium, personalized service that Del Mar pool owners expect and deserve.`,

    localExpertiseContent:
      'Del Mar pools demand a specialized approach due to the constant coastal exposure. Our technicians apply anti-corrosion treatments to metal components, monitor salt deposition on tile and coping, and adjust chemical programs to account for the marine environment. We understand that Del Mar homeowners have high standards, and our service reflects that with thorough weekly care, clear communication, and a commitment to maintaining pools at a resort-quality level.',

    climateContent:
      'Del Mar\'s coastal position provides mild, stable temperatures that are ideal for swimming but challenging for pool maintenance in subtle ways. The persistent marine layer deposits moisture and salt on pool surfaces, increasing chlorine demand and promoting mineral buildup. Ocean breezes carry fine sand particles that can accumulate in filters. PoolLogic Pool Service accounts for these coastal factors with specialized cleaning protocols and adjusted chemical programs designed specifically for Del Mar\'s maritime environment.',

    faqs: [
      { question: 'How much does pool service in Del Mar cost?', answer: 'Del Mar pool service typically ranges from $160–$210/month for weekly maintenance with all chemicals included. Many Del Mar properties feature premium finishes and infinity edges that require careful attention, and salt deposition from ocean proximity is factored into our service approach.' },
      { question: 'What is included with Del Mar pool service?', answer: 'Every weekly visit covers skimming, brushing, vacuuming, filter care, and complete chemical balancing,all chemicals included. For Del Mar pools, we pay close attention to salt deposition from ocean winds and marine layer moisture that can affect water chemistry and corrode equipment near the coast.' },
      { question: 'Which Del Mar neighborhoods do you service?', answer: 'We service all of Del Mar within the 92014 ZIP code, including Del Mar Village, Del Mar Heights, Del Mar Mesa, and Olde Del Mar. Whether your property overlooks the Del Mar Racetrack or sits atop the bluffs near Torrey Pines State Beach, we have you covered.' },
      { question: 'How quickly can you start servicing my Del Mar pool?', answer: 'We can typically begin service within 3–5 business days for Del Mar residents. Our North County coastal routes run through Del Mar regularly, so scheduling new service near Del Mar Heights or along the Village corridor is efficient.' },
      { question: 'Why is PoolLogic the right choice for Del Mar pool owners?', answer: 'Del Mar\'s prestigious coastal setting demands a premium level of care,our CPO-certified technicians understand salt air corrosion, marine layer chemistry, and the high-end finishes common in Del Mar pools. PoolLogic maintains a perfect 5.0 Google rating from 1,042+ reviews, and our attention to detail matches the standard Del Mar homeowners expect.' },
      { question: 'Do you repair pools in Del Mar?', answer: 'Yes, we perform full equipment repairs in Del Mar, including pumps, heaters, salt systems, filters, and automation controllers. We frequently address ocean-air corrosion on metal components and salt scaling on tile that affects coastal properties near Olde Del Mar and Del Mar Village.' },
      { question: 'Is pool service needed year-round in Del Mar?', answer: 'Absolutely. Del Mar\'s consistent 72–78°F coastal climate and persistent marine layer create year-round conditions for algae growth and salt buildup. Skipping even a few weeks of service can lead to staining, equipment corrosion, and water chemistry problems that are costly to correct.' },
    ],

    nearbyCities: ['san-diego', 'encinitas', 'carlsbad', 'la-jolla', 'poway'],
  },

  // ============================================================
  // EL CAJON
  // ============================================================
  {
    name: 'El Cajon',
    slug: 'el-cajon',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92019', '92020', '92021'],
    coordinates: { lat: 32.7948, lng: -116.9625 },
    distanceFromHQ: '~17 miles east',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Granite Hills',
        description:
          'Upscale hillside community with larger lots and resort-style pools featuring boulder-landscaped settings and panoramic valley views.',
      },
      {
        name: 'Fletcher Hills',
        description:
          'Established mid-century neighborhood with well-maintained pools on tree-lined streets, many benefiting from equipment upgrades.',
      },
      {
        name: 'Bostonia',
        description:
          'Eastern El Cajon area with family homes and pools in a warm microclimate transitioning toward the mountain foothills.',
      },
      {
        name: 'Rancho San Diego',
        description:
          'Master-planned community bordering El Cajon with newer pools and modern equipment in a warm inland setting.',
      },
      {
        name: 'Downtown El Cajon',
        description:
          'Central city area with diverse housing stock and pools of various ages requiring tailored maintenance approaches.',
      },
    ],

    landmarks: [
      'Sycuan Casino Resort',
      'Water Conservation Garden',
      'Summers Past Farms',
      'Flinn Springs County Park',
      'Cajon Classic Cruise Car Show',
      'Parkway Plaza Mall',
    ],

    climateNotes:
      'El Cajon sits in the Cajon Valley, an inland basin known as "The Box" because of its enclosed topography. This box-canyon effect traps heat, making El Cajon one of the hottest cities in San Diego County. Summer highs routinely reach 95-100°F, and triple-digit temperatures are common during heat waves. Winters are mild with occasional frost.',

    waterNotes:
      'The Helix Water District serves most of El Cajon with water sourced from Lake Jennings and imported supplies. Water hardness is moderate to high (250-300 ppm), and the extreme heat accelerates mineral concentration through evaporation. Regular calcium management and pH balancing are critical for El Cajon pools.',

    metaTitle: 'El Cajon Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Expert pool cleaning in El Cajon, CA. Serving Granite Hills, Fletcher Hills, Rancho San Diego & all areas. Beat the heat with PoolLogic! Call (619) 913-9335!',

    heroDescription: 'Pool service built for "The Box",El Cajon\'s heat-trapping valley pushes pools to the limit. Our technicians adjust chemical programs for extreme summer temperatures that regularly exceed 100°F.',

    introContent: `PoolLogic Pool Service provides essential pool care to El Cajon, where scorching summer temperatures make a well-maintained pool more than a luxury -- it is a necessity. Known locally as "The Box" for its heat-trapping valley geography, El Cajon demands pool service professionals who understand extreme heat conditions and their effects on water chemistry, equipment, and pool surfaces.

Our team services pools throughout El Cajon, from the upscale hillside homes of Granite Hills to the family neighborhoods of Fletcher Hills and Bostonia. PoolLogic Pool Service has been the trusted name in El Cajon pool care for over a decade, bringing the inland expertise required to keep pools safe, clean, and inviting even when temperatures soar past 100°F.

We know that El Cajon pool owners rely on their pools for daily relief from the heat, which means downtime is not an option. Our proactive maintenance approach focuses on preventing problems before they occur, keeping your pool ready for use every single day of summer.`,

    localExpertiseContent:
      'El Cajon\'s unique topography creates pool care challenges that coastal service providers often do not understand. The valley\'s enclosed geography traps hot air, and pools here face heat stress conditions that are rare just 15 miles to the west. PoolLogic Pool Service has developed specific protocols for El Cajon\'s extreme environment, including enhanced chemical monitoring during heat waves and adjusted service schedules. Our technicians are familiar with the Helix Water District\'s supply characteristics and manage water chemistry accordingly.',

    climateContent:
      'El Cajon\'s infamous heat is the defining factor in local pool care. The city\'s valley geography creates a heat island effect where summer temperatures consistently run 10-15 degrees hotter than coastal San Diego. Water evaporation rates are among the highest in San Diego County, and pools can lose two inches or more per week during peak summer. The heat also drives intense UV radiation that degrades chlorine rapidly. PoolLogic Pool Service calibrates chemical programs specifically for these conditions, ensuring consistent sanitizer levels even on the hottest days.',

    faqs: [
      { question: 'What does pool service cost in El Cajon?', answer: 'El Cajon pool service typically costs $135–$185/month for weekly maintenance with all chemicals included. The valley\'s extreme summer heat,often exceeding 100°F,increases chemical consumption and evaporation, but all chemicals are covered in your monthly rate.' },
      { question: 'What is included in El Cajon pool service?', answer: 'Every visit includes skimming, brushing, vacuuming, filter cleaning, and full chemical balancing with all chemicals included. In El Cajon, we specifically manage the high 250–300 ppm calcium hardness from Helix Water District supply, which causes aggressive scaling on tile, heaters, and salt cells if left unchecked.' },
      { question: 'Do you service all El Cajon neighborhoods?', answer: 'Yes, we cover the entire El Cajon area across ZIP codes 92019, 92020, and 92021, including Granite Hills, Fletcher Hills, Bostonia, Rancho San Diego, and Downtown. Our technicians know the valley well, from the neighborhoods near Sycuan Casino to the homes around the Water Conservation Garden.' },
      { question: 'How soon can pool service start in El Cajon?', answer: 'Most El Cajon homeowners are added to a route within 3–5 business days. We run established weekly routes throughout the East County valley, about 17 miles from our Hillcrest headquarters, so fitting new El Cajon customers into our schedule is seamless.' },
      { question: 'Why pick PoolLogic for pool service in El Cajon?', answer: 'El Cajon\'s heat-trapping valley geography pushes summer temperatures past 100°F, creating unique chemical and equipment demands that generic pool companies often underestimate. PoolLogic\'s CPO-certified technicians are trained for exactly these conditions, and our 5.0 Google rating from 1,042+ reviews proves we deliver results in challenging environments.' },
      { question: 'Can you handle pool repairs in El Cajon?', answer: 'Absolutely. We repair pumps, filters, heaters, salt chlorine generators, and automation systems for El Cajon pool owners. Heavy calcium scaling from Helix Water District\'s hard water is a frequent issue we address, along with equipment wear from the extreme valley heat that shortens component lifespans.' },
      { question: 'Do El Cajon pools need year-round maintenance?', answer: 'Yes. While El Cajon\'s summers get the most attention with 95–100°F+ temperatures driving rapid chemical loss and algae growth, winter brings its own challenges with cooler valley nights and shifting water chemistry. Year-round service keeps your pool balanced and your equipment protected through every season in "The Box."' },
    ],

    nearbyCities: ['san-diego', 'la-mesa', 'santee', 'lakeside', 'spring-valley', 'alpine'],
  },

  // ============================================================
  // ENCINITAS
  // ============================================================
  {
    name: 'Encinitas',
    slug: 'encinitas',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92007', '92023', '92024'],
    coordinates: { lat: 33.0369, lng: -117.2920 },
    distanceFromHQ: '~25 miles north',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Leucadia',
        description:
          'Bohemian coastal community with eclectic homes and pools surrounded by lush tropical landscaping and mature trees.',
      },
      {
        name: 'Cardiff-by-the-Sea',
        description:
          'Laid-back beach village with pools in coastal homes where salt air and morning fog create unique maintenance needs.',
      },
      {
        name: 'Olivenhain',
        description:
          'Semi-rural inland community with estate properties on large lots featuring resort-style pools and equestrian facilities.',
      },
      {
        name: 'New Encinitas',
        description:
          'Inland planned community along Encinitas Boulevard with family pools and modern equipment in a warmer microclimate.',
      },
      {
        name: 'Old Encinitas',
        description:
          'Historic downtown area near Moonlight Beach with character homes and pools reflecting decades of coastal California living.',
      },
    ],

    landmarks: [
      'Self-Realization Fellowship Temple',
      'Moonlight State Beach',
      'San Elijo Lagoon',
      'Encinitas Community Park',
      'Swami\'s Surf Break',
      'San Diego Botanic Garden',
    ],

    climateNotes:
      'Encinitas enjoys a classic coastal Mediterranean climate with mild temperatures year-round. Coastal areas average 68-78°F in summer while inland Olivenhain can reach the mid-80s. Marine layer fog is common May through July, and the city receives about 10 inches of rain annually concentrated in winter months.',

    waterNotes:
      'The Olivenhain Municipal Water District serves most of Encinitas with imported water from the San Diego County Water Authority. Water tends toward moderate hardness. The coastal proximity means pools near the ocean face salt deposition that can affect water chemistry and equipment condition.',

    metaTitle: 'Encinitas Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Premium pool cleaning in Encinitas, CA. Serving Leucadia, Cardiff, Olivenhain & all areas. Coastal pool care experts. Call PoolLogic at (619) 913-9335 today!',

    heroDescription: 'Serving pools from the surf breaks of Leucadia and Cardiff-by-the-Sea to the estates of Olivenhain. We understand coastal versus inland pool care and customize service for each Encinitas microclimate.',

    introContent: `PoolLogic Pool Service is the preferred pool care provider for homeowners throughout Encinitas, one of North County's most desirable coastal communities. From the surf culture of Leucadia and Cardiff-by-the-Sea to the estate properties of Olivenhain, Encinitas represents the best of the Southern California lifestyle -- and the pools here reflect that quality.

Our team has been servicing Encinitas pools for over a decade, and we understand the nuances of caring for pools in this diverse coastal city. The difference between maintaining a beachfront pool in Cardiff where salt air is a constant factor and an inland estate pool in Olivenhain where heat and debris dominate is significant, and PoolLogic Pool Service has the expertise to handle both.

We are proud to serve a community that values quality and environmental responsibility. PoolLogic Pool Service uses efficient equipment recommendations and smart chemical management to keep Encinitas pools beautiful while respecting the coastal environment that makes this city so special.`,

    localExpertiseContent:
      'Encinitas\'s five distinct communities each present unique pool care scenarios. In Leucadia, tropical landscaping creates lush but debris-heavy pool environments. Cardiff-by-the-Sea pools face direct salt air exposure that accelerates corrosion. Olivenhain estates feature large, complex pool systems with water features and automation that require advanced technical knowledge. PoolLogic Pool Service assigns dedicated technicians to Encinitas routes who understand these neighborhood-specific challenges.',

    climateContent:
      'Encinitas benefits from one of the most temperate climates in San Diego County, but the coastal location still presents pool care challenges. The marine layer deposits salt and moisture that increase chlorine demand, while the mild temperatures encourage year-round pool use that keeps maintenance needs constant. Inland Olivenhain sees warmer summer temperatures than the coast, and PoolLogic Pool Service maintains differentiated chemical protocols for Encinitas\'s coastal and inland zones to ensure optimal pool conditions in every neighborhood.',

    faqs: [
      { question: 'How much is weekly pool service in Encinitas?', answer: 'Encinitas pool service generally ranges from $145–$195/month for weekly visits with all chemicals included. Coastal properties in Leucadia and Cardiff-by-the-Sea may need extra attention for salt and marine layer effects, while inland pools in Olivenhain see slightly warmer conditions and different chemical demands.' },
      { question: 'What does pool service in Encinitas include?', answer: 'Each weekly visit includes thorough skimming, brushing, vacuuming, filter maintenance, and full chemical balancing,all chemicals included. We tailor our approach to Encinitas\'s distinct microclimates, managing marine salt deposition near Moonlight Beach and Swami\'s while addressing the warmer, drier conditions in Olivenhain.' },
      { question: 'Do you serve all Encinitas neighborhoods?', answer: 'Yes, we cover all of Encinitas including Leucadia, Cardiff-by-the-Sea, Olivenhain, New Encinitas, and Old Encinitas across ZIP codes 92007, 92023, and 92024. From the coastal surf breaks to the rural estates near the San Diego Botanic Garden, our routes span the entire community.' },
      { question: 'How fast can you begin servicing my Encinitas pool?', answer: 'We can typically start within 3–5 business days for Encinitas residents. Our North County coastal and inland routes run through the area weekly, making it easy to add new customers whether you\'re near Cardiff-by-the-Sea or up in the Olivenhain hills.' },
      { question: 'What makes PoolLogic the best pool service in Encinitas?', answer: 'Encinitas spans everything from the cool, salt-air coast at Leucadia to the warm inland hills of Olivenhain,and our CPO-certified technicians adjust their chemistry programs for each microclimate. With a 5.0 Google rating from 1,042+ reviews serving 22+ San Diego County cities, PoolLogic brings proven expertise to every Encinitas pool.' },
      { question: 'Do you provide pool repair services in Encinitas?', answer: 'Yes, we repair and replace pumps, filters, heaters, salt systems, and automation equipment throughout Encinitas. Coastal corrosion from ocean air is a common issue we address for homes in Leucadia and Cardiff-by-the-Sea, while inland Olivenhain properties often need scaling and hard water solutions tied to Olivenhain MWD supply.' },
      { question: 'Should I maintain my Encinitas pool year-round?', answer: 'Definitely. Encinitas\'s mild coastal climate with temperatures rarely dropping below the mid-60s means algae pressure never fully subsides, and marine layer moisture keeps surfaces damp and prone to growth. Consistent year-round service prevents buildup and protects your pool through the foggy winters and warm summers alike.' },
    ],

    nearbyCities: ['carlsbad', 'del-mar', 'san-marcos', 'vista', 'san-diego'],
  },

  // ============================================================
  // ESCONDIDO
  // ============================================================
  {
    name: 'Escondido',
    slug: 'escondido',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92025', '92026', '92027', '92029'],
    coordinates: { lat: 33.1192, lng: -117.0864 },
    distanceFromHQ: '~30 miles north',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Hidden Meadows',
        description:
          'Semi-rural gated community in northern Escondido with larger lots and pools surrounded by avocado groves and native vegetation.',
      },
      {
        name: 'Westside Escondido',
        description:
          'Established residential area with traditional pools in a warm microclimate sheltered from coastal breezes.',
      },
      {
        name: 'San Pasqual Valley',
        description:
          'Agricultural area in eastern Escondido with rural properties featuring pools in a hot, arid setting near the Safari Park.',
      },
      {
        name: 'Valley Center Road Corridor',
        description:
          'Growing area with a mix of newer developments and established homes, many with pools that benefit from modern equipment upgrades.',
      },
      {
        name: 'Downtown Escondido',
        description:
          'Revitalized city center area with a mix of historic and updated homes, some featuring renovated pools with contemporary finishes.',
      },
    ],

    landmarks: [
      'San Diego Zoo Safari Park',
      'Daley Ranch',
      'California Center for the Arts',
      'Lake Hodges',
      'Escondido Creek Trail',
      'Queen Califia\'s Magical Circle',
    ],

    climateNotes:
      'Escondido sits in a warm inland valley and is one of the hotter cities in San Diego County. Summer highs regularly reach the low-to-mid 90s, with occasional heat waves pushing past 100°F. The city is sheltered from direct marine influence by coastal mountains, resulting in lower humidity and more intense sun exposure than coastal cities.',

    waterNotes:
      'The Rincon del Diablo Municipal Water District and the City of Escondido Utilities Department supply water to Escondido. Water is predominantly imported and tends toward moderate-to-high hardness (250-350 ppm). The hard water can cause calcium scaling on tile, equipment, and pool surfaces without proactive chemical management.',

    metaTitle: 'Escondido Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Professional pool cleaning in Escondido, CA. Serving Hidden Meadows, San Pasqual & all areas. Hot-weather pool care experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Expert pool maintenance for Escondido\'s warm inland valley. We handle the hard water, heat, and hillside debris that come with caring for pools surrounded by avocado groves and rolling terrain.',

    introContent: `PoolLogic Pool Service brings expert pool care to Escondido, a vibrant inland city nestled in a valley surrounded by avocado groves, citrus orchards, and rolling hillsides. Escondido's warm climate and family-oriented neighborhoods make backyard pools a way of life here, and our team ensures every pool we service is sparkling clean, chemically balanced, and equipment-ready.

From the rural estates of Hidden Meadows to the established neighborhoods near downtown, PoolLogic Pool Service has been serving Escondido for over a decade and understands the city's unique pool care demands. The inland heat, hard local water, and diverse vegetation surrounding many properties create challenges that require knowledgeable, experienced technicians -- exactly what we provide.

Our Escondido customers trust PoolLogic Pool Service because we deliver consistent results week after week. We show up on time, communicate clearly, and treat every pool with the same level of care regardless of size or style.`,

    localExpertiseContent:
      'Escondido\'s diverse geography creates varied pool environments that demand flexible expertise. In Hidden Meadows, pools sit among avocado groves where fallen leaves and organic debris can quickly turn water green if not managed proactively. San Pasqual Valley properties near the Safari Park face hot, arid conditions where evaporation and mineral concentration are constant concerns. Our technicians know Escondido\'s water supply intimately and implement preventive scaling protocols to combat the area\'s higher hardness levels.',

    climateContent:
      'Escondido\'s inland valley position makes it one of the warmer cities in San Diego County. Summer temperatures regularly reach 90-95°F, with multi-day heat waves occasionally pushing past 100°F. This heat drives rapid water evaporation and accelerates chemical consumption. The valley\'s sheltered position traps heat, and pools without afternoon shade can see water temperatures climb into the high 80s, creating ideal conditions for algae growth. PoolLogic Pool Service combats this with optimized chlorine and algaecide programs tailored for Escondido\'s demanding conditions.',

    faqs: [
      { question: 'What is the cost of pool service in Escondido?', answer: 'Escondido pool owners typically pay $135–$185/month for weekly service with all chemicals included. The inland valley\'s hot summers above 90°F increase chemical demand significantly, and the very hard water from Rincon del Diablo MWD (250–350 ppm) requires proactive calcium management,all included in our pricing.' },
      { question: 'What does your weekly Escondido pool service cover?', answer: 'Every visit includes skimming, brushing, vacuuming, filter cleaning, and complete chemical balancing with all chemicals included. Escondido pools face some of the hardest water in the county at 250–350 ppm from Rincon del Diablo MWD, so we place extra emphasis on calcium scale prevention and pH management.' },
      { question: 'Which Escondido neighborhoods do you serve?', answer: 'We serve all of Escondido across ZIP codes 92025 through 92029, including Hidden Meadows, Westside, San Pasqual Valley, and Downtown. From homes near the San Diego Zoo Safari Park to properties along the trails at Daley Ranch and Lake Hodges, our routes cover the entire Escondido area.' },
      { question: 'How quickly can pool service begin in Escondido?', answer: 'We can usually start servicing your Escondido pool within 3–5 business days. Our North County inland routes run through the Escondido valley weekly, so adding new customers near Hidden Meadows or the San Pasqual Valley corridor is efficient.' },
      { question: 'Why should Escondido homeowners choose PoolLogic?', answer: 'Escondido\'s combination of 90–95°F+ summer heat and some of San Diego County\'s hardest water creates aggressive scaling and rapid chlorine loss that demand expert attention. PoolLogic\'s CPO-certified technicians are specifically trained for these inland valley conditions, backed by our 5.0 Google rating across 1,042+ reviews.' },
      { question: 'Can you repair pool equipment in Escondido?', answer: 'Yes, we handle all pool equipment repairs in Escondido, including pumps, heaters, filters, salt cells, and automation systems. The extremely hard Rincon del Diablo MWD water is tough on heaters and salt cells, so we frequently descale and replace components that wear faster in this area near Daley Ranch and Lake Hodges.' },
      { question: 'Is year-round pool service important in Escondido?', answer: 'Yes, it is. Escondido\'s inland valley climate produces intense summers that stress equipment and chemistry, while winter brings cooler temperatures that shift water balance and can cause staining if unmanaged. Keeping service consistent year-round prevents the costly spring surprises many Escondido pool owners face after skipping winter maintenance.' },
    ],

    nearbyCities: ['san-marcos', 'vista', 'poway', 'ramona', 'fallbrook'],
  },

  // ============================================================
  // FALLBROOK
  // ============================================================
  {
    name: 'Fallbrook',
    slug: 'fallbrook',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92028'],
    coordinates: { lat: 33.3764, lng: -117.2511 },
    distanceFromHQ: '~50 miles north',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'De Luz',
        description:
          'Sprawling rural area north of Fallbrook with ranch properties and pools on large parcels surrounded by avocado and citrus groves.',
      },
      {
        name: 'Fallbrook Village',
        description:
          'Central Fallbrook area with established homes and pools in a charming small-town setting near Main Avenue shops and restaurants.',
      },
      {
        name: 'Live Oak Park',
        description:
          'Residential area near the historic Live Oak County Park with mature oak trees that create debris management challenges for pool owners.',
      },
      {
        name: 'Monserate',
        description:
          'Southern Fallbrook neighborhood near Lake Henshaw Road with pools in a warm microclimate and views of surrounding hills.',
      },
    ],

    landmarks: [
      'Fallbrook Art Center',
      'Live Oak County Park',
      'Grand Tradition Estate & Gardens',
      'Los Jilgueros Preserve',
      'Palomares House Museum',
    ],

    climateNotes:
      'Fallbrook sits at about 700 feet elevation in northern San Diego County and is known as the "Avocado Capital of the World" due to its ideal growing conditions. Summers are warm with highs in the upper 80s to mid-90s. The area gets slightly more rainfall than coastal cities at about 15 inches annually. Santa Ana winds can bring extreme heat events.',

    waterNotes:
      'Fallbrook Public Utility District supplies water to the community, primarily sourced from imported water via the San Diego County Water Authority. Water hardness is moderate. Many rural properties in De Luz and surrounding areas rely on well water, which may contain elevated mineral levels that require specialized pool chemistry management.',

    metaTitle: 'Fallbrook Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Reliable pool cleaning in Fallbrook, CA. Serving De Luz, Fallbrook Village & all areas. Rural and estate pool specialists. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Dependable pool care for Fallbrook ranch estates, De Luz properties, and village homes. Our technicians make the drive to the "Avocado Capital" so your pool stays spotless in the rural North County heat.',

    introContent: `PoolLogic Pool Service extends our professional pool care to Fallbrook, the charming agricultural community known as the "Avocado Capital of the World." Nestled in the rolling hills of northern San Diego County, Fallbrook is home to ranch estates, rural properties, and family homes -- many with pools that serve as essential retreats from the warm inland summers.

Our team has been serving Fallbrook pool owners for over a decade, and we appreciate the unique character of this community. Whether you have a pool surrounded by avocado groves in De Luz or a backyard oasis near Fallbrook Village, PoolLogic Pool Service delivers the consistent, professional care your pool deserves.

Fallbrook's distance from the coast does not mean it goes without top-tier pool service. Our dedicated North County routes ensure that Fallbrook customers receive the same high standard of weekly maintenance, reliable communication, and expert equipment care that we provide to every community across our 22+ San Diego County service areas.`,

    localExpertiseContent:
      'Fallbrook\'s rural character creates distinct pool care requirements. Many properties are surrounded by avocado groves, citrus orchards, and native vegetation that deposits significant organic debris into pools. Our technicians are experienced at managing heavy leaf loads and preventing staining from tannin-rich organic matter. We also work with well-water pools common in Fallbrook\'s rural areas, implementing specialized mineral treatment programs to address iron and manganese content.',

    climateContent:
      'Fallbrook\'s inland position and moderate elevation create warm, sunny conditions ideal for pool use but demanding for pool maintenance. Summer highs in the upper 80s to mid-90s drive consistent evaporation and chemical consumption. Santa Ana wind events are particularly impactful in Fallbrook, bringing extreme heat, low humidity, and fine dust that can rapidly degrade water quality. PoolLogic Pool Service provides responsive care during these events and maintains robust seasonal protocols for Fallbrook\'s warm-season demands.',

    faqs: [
      { question: 'How much does pool service in Fallbrook cost?', answer: 'Fallbrook pool service typically runs $150–$200/month for weekly visits with all chemicals included. As one of the farthest communities we serve at roughly 50 miles north, pricing reflects the area\'s hot climate, well water variability, and the mineral-heavy conditions common in the avocado country foothills.' },
      { question: 'What is included with Fallbrook pool service?', answer: 'Every visit covers skimming, brushing, vacuuming, filter maintenance, and full chemical balancing,all chemicals included. Fallbrook pools often contend with mineral-rich well water or Fallbrook PUD supply, and we manage iron staining, calcium buildup, and debris from the surrounding rural landscape and avocado groves.' },
      { question: 'Do you service all areas of Fallbrook?', answer: 'Yes, we serve the entire Fallbrook 92028 ZIP code area, including De Luz, Fallbrook Village, Live Oak Park, and Monserate. From properties near the Grand Tradition Estate to rural homes along the De Luz corridor and Los Jilgueros Preserve, our technicians cover all of the "Avocado Capital."' },
      { question: 'How soon can you start pool service in Fallbrook?', answer: 'We can typically begin service for Fallbrook residents within 5–7 business days, as we coordinate with our North County routes serving the area. Once established, your Fallbrook pool receives consistent weekly visits regardless of the rural roads and distances involved.' },
      { question: 'Why is PoolLogic the best choice for Fallbrook pool owners?', answer: 'Fallbrook\'s unique combination of upper 80s to mid-90s heat, Santa Ana wind events, and variable well water chemistry requires a pool service that truly understands rural North County conditions. PoolLogic\'s CPO-certified technicians manage these challenges daily, which is why we maintain a 5.0 Google rating across 1,042+ reviews countywide.' },
      { question: 'Do you handle pool repairs in Fallbrook?', answer: 'Absolutely. We repair pumps, filters, heaters, salt systems, and automation equipment for Fallbrook pool owners. We also address mineral staining and scaling caused by local well water, as well as equipment stress from Santa Ana wind events that blow debris and ash into pools across the Monserate and De Luz areas.' },
      { question: 'Do Fallbrook pools need service all year?', answer: 'Yes. While Fallbrook\'s hot summers drive the heaviest chemical demand, fall brings Santa Ana wind events that deposit ash and debris into pools, and winter\'s cooler temperatures shift water chemistry in ways that cause staining. Year-round service ensures your pool stays clean and balanced through every Fallbrook season.' },
    ],

    nearbyCities: ['oceanside', 'vista', 'escondido', 'carlsbad'],
  },

  // ============================================================
  // JAMUL
  // ============================================================
  {
    name: 'Jamul',
    slug: 'jamul',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91935'],
    coordinates: { lat: 32.7172, lng: -116.8764 },
    distanceFromHQ: '~22 miles east',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Jamul Highlands',
        description:
          'Elevated rural community with custom homes on large parcels featuring pools with sweeping views of the surrounding mountains and valleys.',
      },
      {
        name: 'Jamul Village',
        description:
          'Central Jamul area with established homes and pools in a foothill setting surrounded by chaparral and oak woodland.',
      },
      {
        name: 'Steel Canyon',
        description:
          'Gated golf course community with upscale homes and well-appointed pools adjacent to the Steel Canyon Golf Club.',
      },
      {
        name: 'Lyons Valley',
        description:
          'Remote rural area south of Jamul with ranch properties and pools in a hot, secluded canyon setting.',
      },
    ],

    landmarks: [
      'Jamul Casino',
      'Steel Canyon Golf Club',
      'Hollenbeck Canyon Wildlife Area',
      'Jamul Mountains',
      'Otay Mountain Wilderness',
    ],

    climateNotes:
      'Jamul sits at approximately 1,000-1,500 feet elevation in the foothills southeast of San Diego. Summer temperatures regularly reach the mid-to-upper 90s, with heat waves pushing past 105°F. Winters can bring freezing overnight temperatures. The area receives slightly more rainfall than the coast and is surrounded by fire-prone chaparral vegetation.',

    waterNotes:
      'Jamul is served by the Padre Dam Municipal Water District and Otay Water District, with water sourced from imported supplies. Some rural properties rely on well water with varying mineral content. Water hardness is generally moderate, but well-water pools may require specialized treatment for iron and other dissolved minerals.',

    metaTitle: 'Jamul Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Professional pool cleaning in Jamul, CA. Serving Steel Canyon, Jamul Highlands & all areas. Rural pool care experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Professional pool service for Jamul\'s spacious foothill properties, from Steel Canyon estates to Lyons Valley ranches. We handle the remote terrain, well water challenges, and extreme summer heat.',

    introContent: `PoolLogic Pool Service provides professional pool care to homeowners in Jamul, a scenic rural community in the foothills southeast of San Diego. Jamul's spacious properties, warm climate, and stunning mountain views make backyard pools a central feature of life here, and our team has the expertise to keep them in pristine condition year-round.

We have been serving Jamul pool owners for over a decade, and we understand the specific challenges of maintaining pools in this foothill environment. From the gated luxury of Steel Canyon to the expansive ranch properties throughout Jamul Highlands and Lyons Valley, PoolLogic Pool Service delivers reliable, professional maintenance regardless of how remote your property may feel.

Our commitment to Jamul means consistent weekly service, honest communication, and technicians who know the area's water, climate, and environmental conditions. When you trust PoolLogic Pool Service with your Jamul pool, you are getting local expertise backed by a full-service San Diego County pool care company.`,

    localExpertiseContent:
      'Jamul\'s rural foothill setting creates unique pool care challenges including heavy organic debris from surrounding chaparral and oak woodland, extreme summer heat, and in some cases well water with elevated mineral content. Our technicians are experienced at managing these conditions with enhanced cleaning protocols, aggressive summer chemical programs, and specialized mineral treatments for well-water pools.',

    climateContent:
      'Jamul\'s elevated foothill position produces hot, dry summers and cool winters with occasional freezing temperatures. Summer highs regularly exceed 95°F, driving rapid evaporation and chlorine loss. The surrounding fire-prone vegetation means ash and fine particulate matter can impact pool water quality during fire season. PoolLogic Pool Service provides responsive service during these events and maintains seasonal protocols that protect Jamul pools through both summer heat and winter cold.',

    faqs: [
      { question: 'What does pool service cost in Jamul?', answer: 'Jamul pool service generally ranges from $155–$210/month for weekly maintenance with all chemicals included. The rural foothill setting, extreme summer heat reaching 105°F+, and well water variability in some areas all factor into ensuring your pool receives the right level of care.' },
      { question: 'What does your Jamul pool service include?', answer: 'Each visit includes skimming, brushing, vacuuming, filter care, and complete chemical balancing,all chemicals included. Jamul pools often deal with mineral-heavy well water or hard water from Padre Dam and Otay Water District sources, so we focus heavily on stain prevention and calcium management.' },
      { question: 'Do you serve all neighborhoods in Jamul?', answer: 'Yes, we cover the entire Jamul 91935 ZIP code, including Jamul Highlands, Jamul Village, Steel Canyon, and Lyons Valley. Whether your property is near Jamul Casino, along the Steel Canyon Golf Club corridor, or out in the rural Lyons Valley area, our technicians service it all.' },
      { question: 'How fast can pool service begin in Jamul?', answer: 'Most Jamul homeowners are on a route within 5–7 business days. We coordinate Jamul visits with our East County routes, about 22 miles from our Hillcrest headquarters, and once scheduled, your pool receives reliable weekly service regardless of the rural setting.' },
      { question: 'Why choose PoolLogic for pool service in Jamul?', answer: 'Jamul\'s extreme conditions,mid-to-upper 90s routinely spiking past 105°F, winter freezing potential, and variable well water quality,demand a pool company with real expertise. PoolLogic\'s CPO-certified technicians are trained for exactly these rural foothill challenges, and our 5.0 Google rating from 1,042+ reviews confirms our track record.' },
      { question: 'Can you fix pool equipment in Jamul?', answer: 'Yes, we provide full equipment repair services in Jamul for pumps, heaters, filters, salt chlorine generators, and automation systems. We commonly address freeze damage from Jamul\'s cold winter nights, heat-related equipment stress during 105°F+ summer spikes, and scaling from mineral-heavy well water and Padre Dam supply.' },
      { question: 'Is year-round pool maintenance necessary in Jamul?', answer: 'Absolutely. Jamul experiences some of the most extreme seasonal swings in San Diego County,brutal summer heat waves above 105°F and winter nights that can drop below freezing. Year-round service protects your equipment from freeze damage in winter and prevents chemical crashes during the intense summer heat in the Steel Canyon and Lyons Valley foothills.' },
    ],

    nearbyCities: ['el-cajon', 'spring-valley', 'alpine', 'chula-vista'],
  },

  // ============================================================
  // LA JOLLA
  // ============================================================
  {
    name: 'La Jolla',
    slug: 'la-jolla',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92037', '92038', '92039', '92092', '92093'],
    coordinates: { lat: 32.8328, lng: -117.2713 },
    distanceFromHQ: '~12 miles northwest',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'La Jolla Shores',
        description:
          'Prestigious beachfront community with luxury pools overlooking the Pacific Ocean, facing constant salt air exposure and coastal winds.',
      },
      {
        name: 'Bird Rock',
        description:
          'Charming coastal village with a mix of contemporary and mid-century homes featuring pools in a relaxed beach neighborhood setting.',
      },
      {
        name: 'La Jolla Village',
        description:
          'Upscale commercial and residential area along Prospect Street with high-end homes and pools in a prime oceanfront location.',
      },
      {
        name: 'La Jolla Country Club',
        description:
          'Exclusive enclave with estate homes and resort-quality pools adjacent to the historic La Jolla Country Club golf course.',
      },
      {
        name: 'University City',
        description:
          'Residential area near UC San Diego with family pools in a slightly inland setting that is warmer and less influenced by marine fog.',
      },
      {
        name: 'La Jolla Alta',
        description:
          'Elevated neighborhood with panoramic ocean and bay views where pools face persistent ocean winds and salt spray from the bluffs.',
      },
    ],

    landmarks: [
      'Torrey Pines State Natural Reserve',
      'La Jolla Cove',
      'Birch Aquarium at Scripps',
      'UC San Diego',
      'Museum of Contemporary Art San Diego',
      'Mount Soledad National Veterans Memorial',
    ],

    climateNotes:
      'La Jolla\'s oceanfront position provides one of the mildest climates in San Diego County. Summer highs average 72-78°F along the coast, with the marine layer common from May through July. La Jolla\'s exposed coastal bluffs experience consistent ocean winds that affect pools year-round. University City, slightly inland, runs a few degrees warmer.',

    waterNotes:
      'La Jolla is served by the City of San Diego Public Utilities Department. Water is imported via the San Diego County Water Authority with moderate hardness (200-300 ppm). The primary water quality concern for La Jolla pools is salt deposition from the marine environment, which can corrode metal components and affect chemical balance.',

    metaTitle: 'La Jolla Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Luxury pool cleaning in La Jolla, CA. Serving La Jolla Shores, Bird Rock, La Jolla Village & all areas. Premium coastal care. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Premium pool care for La Jolla\'s world-class properties. From cliffside infinity pools above the Cove to Bird Rock family pools, our technicians deliver the meticulous service this community expects.',

    introContent: `PoolLogic Pool Service delivers the highest caliber of pool care to La Jolla, San Diego's most prestigious coastal community. Home to world-class oceanfront estates, renowned research institutions, and some of the most spectacular pools in Southern California, La Jolla demands pool service that operates at a luxury level -- and that is exactly what we provide.

Our team has been maintaining La Jolla pools for over a decade, developing deep expertise in the specific challenges that this oceanfront community presents. From the cliffside estates overlooking La Jolla Cove to the family homes of Bird Rock and University City, PoolLogic Pool Service understands that every La Jolla pool is unique and deserves a customized maintenance approach.

La Jolla pool owners expect excellence, and PoolLogic Pool Service delivers. Our technicians are trained in premium pool care techniques, familiar with high-end equipment and automation systems, and committed to maintaining the pristine standards that La Jolla homeowners require.`,

    localExpertiseContent:
      'La Jolla pools rank among the most sophisticated in San Diego County, featuring infinity edges, glass tile, integrated spa systems, and advanced automation. Our technicians receive specialized training for these high-end installations and understand the exacting standards La Jolla homeowners expect. The constant marine exposure along the coast requires aggressive corrosion prevention, enhanced equipment maintenance, and chemical programs calibrated for salt-influenced conditions.',

    climateContent:
      'La Jolla\'s exposed coastal position creates a unique pool care environment. Persistent ocean winds carry salt spray that deposits on pool surfaces, accelerates metal corrosion, and affects water chemistry. The marine layer provides moisture but reduces UV exposure during late spring and early summer, altering chlorine dynamics. PoolLogic Pool Service maintains La Jolla-specific protocols that address these coastal factors, including anti-corrosion treatments for heaters and pumps, enhanced tile cleaning schedules, and adjusted sanitizer programs.',

    faqs: [
      { question: 'How much does pool service cost in La Jolla?', answer: 'La Jolla pool service typically ranges from $165–$220/month for weekly maintenance with all chemicals included. Many La Jolla properties feature high-end finishes, ocean-view infinity pools, and saltwater systems that require meticulous care, and salt deposition from ocean winds is a constant factor we manage.' },
      { question: 'What does your La Jolla pool service include?', answer: 'Every visit covers skimming, brushing, vacuuming, filter maintenance, and complete chemical balancing,all chemicals included. La Jolla\'s coastal environment brings persistent salt deposition and marine layer moisture from winds off La Jolla Cove and Torrey Pines, so we emphasize corrosion prevention and careful water chemistry management.' },
      { question: 'Which La Jolla neighborhoods do you serve?', answer: 'We service all of La Jolla across ZIP codes 92037, 92038, and 92039, including La Jolla Shores, Bird Rock, La Jolla Village, La Jolla Country Club, University City near UCSD, and La Jolla Alta. From the oceanfront estates at La Jolla Cove to the homes above Birch Aquarium, our routes cover every pocket of La Jolla.' },
      { question: 'How quickly can I start pool service in La Jolla?', answer: 'Most La Jolla residents are on a service route within 3–5 business days. Just 12 miles from our Hillcrest headquarters, La Jolla is one of our most accessible and well-covered service areas with multiple weekly routes running through every neighborhood.' },
      { question: 'Why do La Jolla homeowners trust PoolLogic?', answer: 'La Jolla\'s premium coastal pools demand a higher standard of care,from managing salt air corrosion off the Pacific to maintaining pristine water in custom gunite and pebble finishes. Our CPO-certified technicians meet that standard every visit, which is why we hold a perfect 5.0 Google rating across 1,042+ reviews serving San Diego County\'s most discerning homeowners.' },
      { question: 'Do you perform pool repairs in La Jolla?', answer: 'Yes, we handle all pool equipment repairs in La Jolla, including pumps, variable-speed motors, heaters, salt chlorine generators, filters, and smart automation systems. Ocean-air corrosion is the leading cause of premature equipment failure near La Jolla Shores and Bird Rock, and we proactively address it to extend the life of your investment.' },
      { question: 'Do La Jolla pools require year-round service?', answer: 'Yes, without question. La Jolla\'s steady 72–78°F coastal climate and constant marine layer never give algae a true off-season, and salt deposition from ocean winds accumulates on surfaces and equipment every week of the year. Consistent year-round maintenance is essential to protect the high-end pools and finishes La Jolla is known for.' },
    ],

    nearbyCities: ['san-diego', 'del-mar', 'encinitas', 'poway'],
  },

  // ============================================================
  // LA MESA
  // ============================================================
  {
    name: 'La Mesa',
    slug: 'la-mesa',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91941', '91942', '91943', '91944'],
    coordinates: { lat: 32.7678, lng: -117.0231 },
    distanceFromHQ: '~10 miles east',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Mount Helix',
        description:
          'Prestigious hilltop community with custom homes and pools offering panoramic views of San Diego, the mountains, and the Pacific Ocean.',
      },
      {
        name: 'La Mesa Village',
        description:
          'Charming downtown area with character homes and renovated pools in a walkable neighborhood near shops and restaurants.',
      },
      {
        name: 'Windsor Hills',
        description:
          'Established residential area with mid-century homes and well-maintained pools on tree-lined streets in a family-oriented setting.',
      },
      {
        name: 'Northmont',
        description:
          'Northern La Mesa neighborhood with pools in a mix of architectural styles, benefiting from slightly cooler temperatures than the city\'s eastern sections.',
      },
      {
        name: 'Rolando',
        description:
          'Western La Mesa community bordering San Diego with pools in modest family homes, many featuring classic designs ripe for modernization.',
      },
    ],

    landmarks: [
      'Mount Helix Park & Amphitheatre',
      'La Mesa Village',
      'Lake Murray',
      'Harry Griffen Park',
      'Grossmont Center',
      'Grossmont College',
    ],

    climateNotes:
      'La Mesa occupies a transitional zone between coastal and inland San Diego. Summer highs average 82-90°F, warmer than the coast but cooler than deep inland valleys. Mount Helix\'s elevation provides slightly cooler conditions and occasional breezes. La Mesa receives about 12 inches of rain annually.',

    waterNotes:
      'The Helix Water District serves La Mesa with water from Lake Jennings, El Monte Valley wells, and imported supplies. Water hardness is moderate at approximately 200-280 ppm. The transitional climate means pools in La Mesa face a mix of coastal and inland water chemistry challenges.',

    metaTitle: 'La Mesa Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Expert pool cleaning in La Mesa, CA. Serving Mount Helix, La Mesa Village, Windsor Hills & all areas. Trusted by local families. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Reliable pool care for La Mesa, the "Jewel of the Hills." We service pools from Mount Helix estates with panoramic views down to the walkable neighborhoods of La Mesa Village.',
    introContent: `PoolLogic Pool Service is the go-to pool care provider for homeowners throughout La Mesa, the charming "Jewel of the Hills" located just east of San Diego. From the prestigious estates of Mount Helix to the walkable neighborhoods near La Mesa Village, this community offers a wonderful quality of life -- and a climate that makes pool ownership a year-round pleasure.

Our team has been serving La Mesa for over a decade, and we know this city inside and out. We understand that La Mesa's transitional position between coastal and inland San Diego creates a moderate climate that is perfect for swimming but still requires professional pool maintenance to manage heat, hard water, and seasonal fluctuations.

PoolLogic Pool Service serves La Mesa with the same dedication and expertise that we bring to every community in San Diego County. Our weekly maintenance programs, responsive repair service, and transparent communication have made us the preferred choice for La Mesa pool owners who demand reliable, professional care.`,

    localExpertiseContent:
      'La Mesa\'s varied topography means our technicians encounter diverse pool environments within a compact area. Mount Helix properties feature custom, high-end pools with sophisticated equipment and water features. La Mesa Village homes often have charming but older pool systems that benefit from our upgrade expertise. Our familiarity with the Helix Water District\'s supply and La Mesa\'s microclimate variations allows us to optimize chemical programs for each neighborhood.',

    climateContent:
      'La Mesa\'s position in the foothills provides a comfortable climate that avoids the extremes of both the coast and the deep inland valleys. Summer temperatures are warm without being punishing, typically ranging from the low 80s to low 90s. This creates excellent swimming conditions and moderate maintenance demands. Mount Helix\'s elevation brings slightly cooler temperatures and occasional breezes that benefit pools on the hilltop. PoolLogic Pool Service tailors maintenance programs to La Mesa\'s moderate conditions, focusing on consistent chemical balance and proactive equipment care.',

    faqs: [
      { question: 'How much does pool service cost in La Mesa?', answer: 'Most La Mesa homeowners pay between $150 and $250 per month for weekly pool service, with all chemicals included. Pools in hillside areas like Mount Helix may be slightly higher due to access considerations, while standard lots in Rolando or Windsor Hills typically fall in the mid-range.' },
      { question: 'What does PoolLogic\'s La Mesa pool service include?', answer: 'Every visit includes skimming, brushing, vacuuming, filter inspection, and full chemical balancing,all chemicals are included at no extra charge. We also calibrate our treatments for the Helix Water District\'s moderate 200–280 ppm hardness levels common across La Mesa.' },
      { question: 'Do you serve all La Mesa neighborhoods?', answer: 'Yes, we service every La Mesa neighborhood including the hillside estates of Mount Helix, the walkable La Mesa Village area, Windsor Hills, Northmont, and Rolando. We also cover the unincorporated pockets between La Mesa and the surrounding communities near Lake Murray.' },
      { question: 'How quickly can PoolLogic start servicing my La Mesa pool?', answer: 'We can typically begin service within 3–5 business days for La Mesa customers. Because we\'re headquartered just 10 miles west in Hillcrest and already have routes running through the Mount Helix and Lake Murray corridors, fitting new La Mesa clients into our schedule is straightforward.' },
      { question: 'Why is PoolLogic the best pool service in La Mesa?', answer: 'PoolLogic brings CPO-certified technicians, a 5.0 Google rating backed by 1,042+ reviews, and real familiarity with La Mesa\'s transitional coast-to-inland climate that swings from mild mornings to 90°F afternoons. We understand the "Jewel of the Hills" and tailor our chemistry and cleaning schedules to conditions around Lake Murray and Mount Helix.' },
      { question: 'Does PoolLogic handle pool repairs in La Mesa?', answer: 'Absolutely. We handle equipment repairs and replacements including pumps, filters, heaters, salt systems, and automation controllers. Many La Mesa homes near Grossmont Center and La Mesa Village have aging pool equipment from the 1990s and 2000s, and our technicians are experienced with both upgrades and legacy system repairs.' },
      { question: 'Do La Mesa pools need year-round maintenance?', answer: 'Yes,La Mesa\'s inland positioning means summers are warmer than the coast (often hitting the mid-to-upper 80s), which drives algae growth and chemical demand, while winters still see enough warmth to keep biological activity going. Skipping off-season service leads to scale buildup from Helix Water District supply and staining that\'s expensive to reverse.' },
    ],

    nearbyCities: ['san-diego', 'el-cajon', 'spring-valley', 'santee', 'bonita'],
  },

  // ============================================================
  // LAKESIDE
  // ============================================================
  {
    name: 'Lakeside',
    slug: 'lakeside',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92040'],
    coordinates: { lat: 32.8572, lng: -116.9222 },
    distanceFromHQ: '~20 miles east',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Lakeside Proper',
        description:
          'Central Lakeside community with established homes and pools in a warm valley setting near the San Diego River.',
      },
      {
        name: 'Winter Gardens',
        description:
          'Southern Lakeside area with family homes and pools in a slightly more developed setting near commercial centers.',
      },
      {
        name: 'Eucalyptus Hills',
        description:
          'Semi-rural residential area with custom homes on larger lots featuring pools surrounded by eucalyptus groves that produce significant debris.',
      },
      {
        name: 'Moreno Valley',
        description:
          'Eastern Lakeside community transitioning to rural ranch properties with pools in a hot, dry microclimate near the Barona area.',
      },
    ],

    landmarks: [
      'Lindo Lake County Park',
      'Barona Resort & Casino',
      'El Capitan Reservoir',
      'Lakeside Rodeo Grounds',
      'River Park Conservancy Trail',
    ],

    climateNotes:
      'Lakeside occupies a warm inland valley along the San Diego River, east of El Cajon. Summer temperatures regularly reach the mid-90s, with heat waves pushing past 100°F. The area is known for wide temperature swings between day and night. Lakeside receives about 14 inches of rain annually and is surrounded by fire-prone chaparral.',

    waterNotes:
      'Lakeside is served by the Lakeside Water District, which sources water from imported supplies via the San Diego County Water Authority. Water hardness is moderate to high. Some rural properties use well water that may contain elevated minerals, requiring custom pool chemistry management.',

    metaTitle: 'Lakeside Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Dependable pool cleaning in Lakeside, CA. Serving Eucalyptus Hills, Winter Gardens & all areas. Inland pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Hands-on pool maintenance for Lakeside\'s warm inland community along the San Diego River. We manage the heavy debris, hard water, and scorching summers that define East County pool care.',
    introContent: `PoolLogic Pool Service provides professional pool maintenance to homeowners throughout Lakeside, a scenic inland community along the San Diego River east of El Cajon. Lakeside's warm climate and rural character make backyard pools an essential feature of daily life here, and our team delivers the expert care needed to keep them safe, clean, and ready for year-round enjoyment.

We have been serving Lakeside pool owners for over a decade, building a reputation for reliability and expertise in the area's demanding inland conditions. Whether your pool sits among the eucalyptus groves of Eucalyptus Hills or in the established neighborhoods near Lindo Lake, PoolLogic Pool Service provides consistent weekly service tailored to your pool's specific environment.

Our Lakeside customers value the peace of mind that comes with having a dedicated, professional pool service they can count on. With PoolLogic Pool Service, that is exactly what you get -- experienced technicians, transparent communication, and a commitment to keeping your pool in top condition across all 22+ communities we serve in San Diego County.`,

    localExpertiseContent:
      'Lakeside\'s inland valley setting creates pool care challenges that require specialized knowledge. The warm climate drives high evaporation rates and aggressive chemical consumption, while eucalyptus trees and chaparral vegetation deposit heavy debris loads that can stain surfaces and clog filters. Our technicians are experienced at managing these conditions and understand the Lakeside Water District\'s supply characteristics.',

    climateContent:
      'Lakeside\'s position in the San Diego River valley produces hot summers with temperatures commonly reaching the mid-to-upper 90s. Wide daily temperature swings are common, with cool mornings giving way to scorching afternoons. These conditions stress pool equipment and drive rapid chemical changes. PoolLogic Pool Service maintains robust summer protocols for Lakeside pools that include enhanced chemical monitoring, evaporation management, and responsive care during heat wave events.',

    faqs: [
      { question: 'What does pool service cost in Lakeside?', answer: 'Lakeside pool service typically runs $150–$275 per month depending on pool size and condition. Properties in Eucalyptus Hills or Moreno Valley with well water or oversized pools may be on the higher end, while standard pools in Lakeside Proper or Winter Gardens fall in the mid-range. All chemicals are included.' },
      { question: 'What\'s included with PoolLogic\'s Lakeside pool service?', answer: 'Each weekly visit covers skimming, brushing, vacuuming, filter checks, and complete water chemistry balancing with all chemicals included. For Lakeside\'s moderate-to-high hardness water from the Lakeside Water District,and especially properties on well water,we pay extra attention to calcium scale prevention and metal staining.' },
      { question: 'Does PoolLogic service all Lakeside neighborhoods?', answer: 'We serve all of Lakeside including Lakeside Proper, Winter Gardens, Eucalyptus Hills, and the Moreno Valley area. Whether your property is near Lindo Lake or tucked into the hills toward El Capitan Reservoir, our routes cover the entire 92040 zip code.' },
      { question: 'How fast can you start pool service in Lakeside?', answer: 'Most Lakeside customers are on the schedule within 3–7 business days. We maintain regular East County routes through Lakeside, Santee, and El Cajon, so adding new stops near Lindo Lake or along the Winter Gardens corridor is easy to accommodate.' },
      { question: 'What makes PoolLogic the top pool service in Lakeside?', answer: 'Lakeside\'s inland valley climate,mid-90s routinely and 100°F+ heat waves,burns through chlorine fast and demands aggressive chemistry management. Our CPO-certified techs understand the wide temperature swings and well water challenges specific to this area, and our 5.0 Google rating from 1,042+ reviews reflects that expertise.' },
      { question: 'Can PoolLogic repair pool equipment in Lakeside?', answer: 'Yes, we repair and replace pumps, filters, heaters, salt cells, and automation systems. Lakeside\'s extreme summer heat puts heavy strain on pool equipment,especially variable-speed pumps running long hours,and our technicians carry common parts to minimize return trips to this inland valley community.' },
      { question: 'Is year-round pool maintenance necessary in Lakeside?', answer: 'Definitely. Lakeside experiences some of San Diego County\'s most extreme temperature swings,from triple-digit summers to chilly winter mornings near the valley floor. Year-round service prevents calcium scale from the hard local water, protects equipment during cold snaps, and keeps algae from gaining a foothold during Lakeside\'s long, hot warm season.' },
    ],

    nearbyCities: ['el-cajon', 'santee', 'alpine', 'ramona', 'poway'],
  },

  // ============================================================
  // NATIONAL CITY
  // ============================================================
  {
    name: 'National City',
    slug: 'national-city',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91950', '91951'],
    coordinates: { lat: 32.6781, lng: -117.0992 },
    distanceFromHQ: '~8 miles south',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Paradise Hills',
        description:
          'Elevated residential community in southeastern National City with pools offering views of the bay and surrounding hills.',
      },
      {
        name: 'Lincoln Acres',
        description:
          'Established neighborhood with family homes and pools in a warm setting near the community\'s commercial centers.',
      },
      {
        name: 'Sweetwater Town & Country',
        description:
          'Residential area along the Sweetwater River with pools in a mix of single-family and multi-family properties.',
      },
      {
        name: 'Bay Marina District',
        description:
          'Western National City area near the waterfront with pools that face bay breezes and mild coastal temperatures.',
      },
    ],

    landmarks: [
      'Westfield Plaza Bonita',
      'Sweetwater Marsh National Wildlife Refuge',
      'Pepper Park',
      'National City Mile of Cars',
      'Kimball Park',
    ],

    climateNotes:
      'National City sits between San Diego Bay to the west and mild inland hills to the east. The bayfront location provides moderate temperatures year-round, with summer highs averaging 75-82°F. The city is partially sheltered from the strongest marine layer influence but still benefits from coastal moderation.',

    waterNotes:
      'National City receives water from the Sweetwater Authority and the City of San Diego Public Utilities Department. Water hardness is moderate at approximately 200-250 ppm. The proximity to the bay means some properties experience salt air that affects outdoor pool equipment and surfaces.',

    metaTitle: 'National City Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Reliable pool cleaning in National City, CA. Serving Paradise Hills, Lincoln Acres & all neighborhoods. Call PoolLogic at (619) 913-9335 for a free quote!',

    heroDescription: 'Affordable, professional pool service for National City homeowners. Conveniently located between San Diego and Chula Vista, we bring fast response times and South Bay expertise to every visit.',
    introContent: `PoolLogic Pool Service provides professional pool care to homeowners throughout National City, a vibrant South Bay community strategically located between San Diego and Chula Vista. National City's moderate climate and family-oriented neighborhoods make pool ownership a rewarding investment, and our team ensures that investment stays in top condition year-round.

We have been serving National City pool owners for over a decade, and we appreciate the community's diverse character. From the elevated homes of Paradise Hills to the bayfront properties near Pepper Park, PoolLogic Pool Service delivers consistent, reliable maintenance tailored to each neighborhood's specific conditions.

As one of 22+ San Diego County communities we serve, National City receives the full benefit of PoolLogic Pool Service's resources, expertise, and commitment to excellence. Our proximity to this South Bay community means fast response times and efficient service routes.`,

    localExpertiseContent:
      'National City\'s compact geography includes both bayfront and hillside properties, each with different pool care requirements. Bayfront pools contend with salt air and moisture from the bay, while hillside pools in Paradise Hills face warmer temperatures and more direct sun exposure. Our technicians understand these local variations and adjust service protocols accordingly to deliver optimal results in every National City neighborhood.',

    climateContent:
      'National City benefits from its South Bay position, enjoying moderate temperatures that are neither as cool as the outer coast nor as hot as the inland valleys. Summer highs in the upper 70s to low 80s create comfortable swimming conditions with moderate chemical demands. The bay influence keeps humidity slightly higher than inland areas, which can promote algae growth in shaded pools. PoolLogic Pool Service maintains balanced maintenance programs for National City that account for these mild but steady conditions.',

    faqs: [
      { question: 'How much is pool service in National City?', answer: 'National City pool owners typically pay $140–$230 per month for weekly service with all chemicals included. The moderate bayfront climate keeps chemical demand slightly lower than inland cities, making National City one of the more affordable areas in the county to maintain a pool.' },
      { question: 'What does a PoolLogic pool service visit include in National City?', answer: 'Every weekly visit includes skimming, brushing, vacuuming, filter maintenance, and full chemical testing and adjustment,all chemicals included. We calibrate our treatments to the Sweetwater Authority water supply common in National City, which runs a manageable 200–250 ppm hardness.' },
      { question: 'Which National City neighborhoods does PoolLogic cover?', answer: 'We service all National City neighborhoods including Paradise Hills, Lincoln Acres, Sweetwater Town & Country, and the Bay Marina District. Our South Bay routes also cover the areas near Westfield Plaza Bonita and along Sweetwater Road.' },
      { question: 'How soon can PoolLogic start servicing my National City pool?', answer: 'We can usually begin within 3–5 business days. National City is only about 8 miles south of our Hillcrest headquarters, and we already have dense South Bay routes running through Chula Vista, Bonita, and the National City corridor daily.' },
      { question: 'Why choose PoolLogic for pool service in National City?', answer: 'Our CPO-certified technicians understand National City\'s unique bayfront environment, where salt air from San Diego Bay and moisture from Sweetwater Marsh can accelerate corrosion on metal pool components. With a 5.0 Google rating and 1,042+ reviews, we bring South Bay expertise that generic services lack.' },
      { question: 'Does PoolLogic do pool repairs in National City?', answer: 'Yes,we handle pumps, filters, heaters, salt systems, and control automation. National City pools near the bayfront, especially around Pepper Park and the Bay Marina District, often experience accelerated wear from salt-air corrosion, and we specialize in diagnosing and resolving these coastal-proximity issues.' },
      { question: 'Do National City pools need service all year?', answer: 'Yes. National City\'s moderate South Bay climate,75–82°F summers with mild winters,means pools stay warm enough for algae growth in every season. The proximity to San Diego Bay adds airborne salt and mineral deposits that build up on tile and equipment if not addressed through consistent year-round maintenance.' },
    ],

    nearbyCities: ['san-diego', 'chula-vista', 'bonita', 'spring-valley'],
  },

  // ============================================================
  // OCEANSIDE
  // ============================================================
  {
    name: 'Oceanside',
    slug: 'oceanside',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92054', '92056', '92057', '92058'],
    coordinates: { lat: 33.1959, lng: -117.3795 },
    distanceFromHQ: '~38 miles north',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Arrowood',
        description:
          'Master-planned community in eastern Oceanside with family pools and modern equipment in a warm inland microclimate.',
      },
      {
        name: 'Fire Mountain',
        description:
          'Established hilltop neighborhood with panoramic ocean views and pools that face salt air exposure and coastal winds.',
      },
      {
        name: 'South Oceanside',
        description:
          'Beach community with a laid-back vibe and pools in cottages and bungalows just minutes from the surf.',
      },
      {
        name: 'Rancho Del Oro',
        description:
          'Well-planned residential area with newer pools featuring energy-efficient systems and contemporary designs.',
      },
      {
        name: 'Morro Hills',
        description:
          'Semi-rural area on Oceanside\'s eastern fringe with larger properties and pools in an agricultural setting.',
      },
    ],

    landmarks: [
      'Oceanside Pier',
      'Mission San Luis Rey',
      'Oceanside Harbor',
      'California Surf Museum',
      'Camp Pendleton (adjacent)',
      'The Strand',
    ],

    climateNotes:
      'Oceanside experiences a classic Southern California coastal climate. Coastal areas enjoy summer highs in the mid-70s while inland sections reach the mid-80s. The city sits at the northern edge of San Diego County and can be slightly warmer than areas further south due to less consistent marine layer coverage.',

    waterNotes:
      'The City of Oceanside Water Utilities Department provides water sourced from imported Colorado River water, State Water Project supplies, and local recycled water for non-potable uses. Water hardness is moderate at 180-250 ppm, and pH tends toward slightly alkaline.',

    metaTitle: 'Oceanside Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Top-rated pool cleaning in Oceanside, CA. Serving Fire Mountain, Arrowood, Rancho Del Oro & all neighborhoods. Weekly service & repairs. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Comprehensive pool service across Oceanside, from beachside cottages near the pier to inland communities like Arrowood and Rancho Del Oro. Trusted by military families and long-time residents alike.',
    introContent: `PoolLogic Pool Service provides comprehensive pool care throughout Oceanside, San Diego County's third-largest city. From the iconic pier and harbor to the inland communities along Highway 76, Oceanside offers a wide range of residential neighborhoods -- each with pools that deserve professional attention.

Our Oceanside service has been running for over a decade, covering everything from the beach cottages of South Oceanside to the master-planned communities of Arrowood and Rancho Del Oro. PoolLogic Pool Service understands that Oceanside is a city of contrasts: coastal cool meets inland warmth, military families from nearby Camp Pendleton blend with long-time residents, and vintage pools sit alongside brand-new installations.

We are committed to providing Oceanside homeowners with the same high standard of service that has earned PoolLogic Pool Service its reputation across all 22+ San Diego County communities we serve. Consistent weekly service, honest communication, and skilled technicians are what you can expect when you trust us with your pool.`,

    localExpertiseContent:
      'Oceanside\'s geography spans roughly seven miles from the coast to the inland hills, creating meaningful differences in pool care requirements. Coastal pools in Fire Mountain and South Oceanside contend with salt spray and the persistent marine layer. Inland neighborhoods like Arrowood and Morro Hills experience warmer, drier conditions that accelerate evaporation and chemical consumption. PoolLogic Pool Service also has extensive experience working with military families stationed at Camp Pendleton, offering flexible scheduling that accommodates military life.',

    climateContent:
      'Oceanside sits at the intersection of San Diego County\'s coastal and inland climate zones. The western portion benefits from Pacific Ocean moderation with summer temperatures rarely exceeding 80°F. Eastern Oceanside sees temperatures climb to the upper 80s and low 90s as the marine layer thins. Santa Ana wind events, particularly from September through November, can bring sudden temperature spikes and deposit fine particulate matter into pool water. PoolLogic Pool Service monitors forecasts and provides responsive service to address these sudden changes.',

    faqs: [
      { question: 'What does pool service in Oceanside cost?', answer: 'Oceanside pool service generally ranges from $145–$260 per month with all chemicals included. Coastal properties in South Oceanside or near the Harbor tend toward the lower end due to milder temps, while inland neighborhoods like Morro Hills or Rancho Del Oro see more chemical demand from warmer conditions.' },
      { question: 'What\'s included in PoolLogic\'s Oceanside pool service?', answer: 'Weekly service includes skimming, brushing walls and tile, vacuuming, filter inspection, and complete water chemistry management,all chemicals are included. We adjust our protocols for Oceanside\'s slightly alkaline city water (180–250 ppm hardness) to prevent scaling on tile and equipment.' },
      { question: 'Does PoolLogic serve all parts of Oceanside?', answer: 'Yes, we cover all of Oceanside from the coastal neighborhoods near the Oceanside Pier and Harbor through Fire Mountain, Arrowood, Rancho Del Oro, and the inland areas of Morro Hills. Our North County routes service the full range of Oceanside\'s 92054–92058 zip codes.' },
      { question: 'How quickly can PoolLogic start my Oceanside pool service?', answer: 'We can typically begin within 5–7 business days. Oceanside is about 38 miles north of our headquarters, but we maintain dedicated North County routes through Oceanside, Vista, and Carlsbad daily, so adding new clients near Mission San Luis Rey or the Camp Pendleton corridor is routine.' },
      { question: 'Why is PoolLogic the best pool service for Oceanside?', answer: 'Oceanside\'s split personality,coastal mid-70s near the pier and inland mid-80s past the 5 freeway,means a one-size-fits-all approach doesn\'t work. Our CPO-certified technicians adjust chemistry based on whether your pool sits in the marine layer or in the warmer inland pockets, backed by a 5.0 Google rating and 1,042+ reviews.' },
      { question: 'Can PoolLogic handle pool equipment repairs in Oceanside?', answer: 'Absolutely. We repair and replace pumps, filters, heaters, salt cells, and automation systems. Oceanside\'s coastal pools near the Harbor and South Oceanside deal with salt-air corrosion, while inland pools face heat-related wear,our technicians are experienced with both environments across SD County\'s third-largest city.' },
      { question: 'Should Oceanside pools be maintained year-round?', answer: 'Yes. Oceanside\'s mild coastal climate keeps water temperatures warm enough for algae year-round, and the slightly alkaline city water can cause gradual scale buildup if left unchecked. Even in winter, ocean breezes carry salt and sand that deposit on pool surfaces and corrode exposed metal fittings without regular attention.' },
    ],

    nearbyCities: ['carlsbad', 'vista', 'san-marcos', 'fallbrook'],
  },

  // ============================================================
  // POWAY
  // ============================================================
  {
    name: 'Poway',
    slug: 'poway',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92064'],
    coordinates: { lat: 32.9628, lng: -117.0359 },
    distanceFromHQ: '~18 miles northeast',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Green Valley',
        description:
          'Semi-rural area with custom homes on large parcels featuring resort-style pools surrounded by natural open space and mature landscaping.',
      },
      {
        name: 'Garden Road',
        description:
          'Established family neighborhood with well-maintained pools in a community known for its excellent schools and safe streets.',
      },
      {
        name: 'South Poway',
        description:
          'Residential area closer to the Poway Road commercial corridor with a mix of pool styles from classic to contemporary.',
      },
      {
        name: 'Old Coach',
        description:
          'Exclusive gated community in northern Poway with estate homes and luxurious pools on multi-acre parcels in a rural canyon setting.',
      },
      {
        name: 'Poway Estates',
        description:
          'Upscale neighborhood with larger lots and custom pools, many featuring waterfalls, grottos, and elaborate landscape integration.',
      },
    ],

    landmarks: [
      'Lake Poway',
      'Blue Sky Ecological Reserve',
      'Old Poway Park',
      'Iron Mountain Trail',
      'Kumeyaay-Ipai Interpretive Center',
      'Poway Center for the Performing Arts',
    ],

    climateNotes:
      'Poway sits in an inland valley surrounded by mountains and open space, earning it the nickname "The City in the Country." Summer highs average 88-95°F, with heat waves occasionally exceeding 100°F. Nights cool down significantly, creating wide daily temperature swings. Poway receives about 13 inches of rain annually.',

    waterNotes:
      'The City of Poway operates its own water utility, sourcing water from imported supplies via the San Diego County Water Authority and local wells. Water hardness is moderate to high (250-320 ppm). The combination of hard water and hot temperatures means scaling is a persistent concern for Poway pool owners.',

    metaTitle: 'Poway Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'Professional pool cleaning in Poway, CA. Serving Green Valley, Old Coach, Poway Estates & all areas. "City in the Country" pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Pool care designed for Poway\'s "City in the Country" lifestyle. Our technicians service everything from Old Coach luxury estates to family pools along Garden Road, adjusting for the warm inland climate.',
    introContent: `PoolLogic Pool Service is the trusted pool care provider for Poway, the beloved "City in the Country" nestled among the mountains and open spaces north of San Diego. Poway's combination of warm inland temperatures, spacious properties, and family-oriented lifestyle makes backyard pools a centerpiece of daily life -- and our team ensures those pools are always ready for enjoyment.

We have been serving Poway pool owners for over a decade, developing expertise in the specific conditions that define pool care in this community. From the exclusive estates of Old Coach to the family neighborhoods along Garden Road, PoolLogic Pool Service delivers consistent, professional maintenance that Poway families can depend on.

Our commitment to Poway goes beyond routine cleaning. We provide comprehensive pool care including chemical management optimized for local water conditions, equipment maintenance that extends the life of your investment, and repair services that keep your pool running efficiently. PoolLogic Pool Service is proud to serve one of San Diego County's most desirable communities.`,

    localExpertiseContent:
      'Poway\'s diverse pool environments range from modest family setups to elaborate estate installations with waterfalls, grottos, and integrated outdoor living systems. Our technicians are comfortable with this entire spectrum and bring specialized knowledge of inland pool care. The combination of hard local water and hot summer temperatures creates aggressive scaling conditions that we manage with proactive chemical programs. We also understand Poway\'s natural surroundings, adjusting debris management protocols for the oak woodland and chaparral vegetation common throughout the city.',

    climateContent:
      'Poway\'s inland valley position produces warm, sunny summers that are ideal for pool use but demanding for pool maintenance. Temperatures in the upper 80s and low 90s are standard, with occasional heat waves pushing past 100°F. Wide daily temperature swings stress pool equipment, particularly heaters and automation systems. PoolLogic Pool Service calibrates maintenance programs for Poway\'s specific conditions, including enhanced summer chemical protocols and winterization services that protect equipment during the area\'s cool winter nights.',

    faqs: [
      { question: 'How much does pool service cost in Poway?', answer: 'Poway pool service runs between $160–$275 per month with all chemicals included. Larger estate pools in Old Coach or Poway Estates are typically at the higher end, while standard residential pools in South Poway or Green Valley fall mid-range. The higher local water hardness (250–320 ppm) is factored into our chemical programs at no extra charge.' },
      { question: 'What does PoolLogic include in Poway pool service?', answer: 'Every weekly visit covers skimming, brushing, vacuuming, filter inspection, and full chemical balancing with all chemicals included. In Poway, we give special attention to managing the City of Poway\'s harder water supply (250–320 ppm), using sequestrants and adjusted alkalinity targets to prevent calcium scale.' },
      { question: 'Does PoolLogic service all Poway neighborhoods?', answer: 'Yes,we serve all of Poway including Green Valley, Garden Road, South Poway, Old Coach, and Poway Estates. Whether your pool overlooks the trails near Iron Mountain or sits in the family-friendly neighborhoods near Old Poway Park, our technicians cover the entire "City in the Country."' },
      { question: 'How fast can I get started with PoolLogic in Poway?', answer: 'Most Poway homeowners are on the schedule within 3–5 business days. We run established routes through Poway, Rancho Bernardo, and Scripps Ranch daily, so adding new stops near Lake Poway or the Blue Sky Reserve corridor is simple.' },
      { question: 'What makes PoolLogic the best pool service in Poway?', answer: 'Poway\'s "City in the Country" setting brings 88–95°F summer heat with 100°F+ spikes and harder water than most San Diego communities. Our CPO-certified technicians are specifically trained for these conditions,we don\'t treat Poway pools like coastal pools. That local expertise is why we hold a 5.0 Google rating across 1,042+ reviews.' },
      { question: 'Does PoolLogic repair pool equipment in Poway?', answer: 'Yes, we handle all equipment repairs and replacements including pumps, filters, heaters, salt systems, and smart automation. Many Poway properties,especially the larger estates along Old Coach and the custom homes near Garden Road,have complex multi-equipment setups that our technicians are well-versed in servicing.' },
      { question: 'Is year-round service important for Poway pools?', answer: 'Absolutely. Poway\'s wide temperature swings,from triple-digit summer days to cool winter nights in the valley,create ongoing maintenance demands in every season. The City of Poway\'s harder water continuously deposits calcium if not actively managed, and skipping even a few winter weeks can lead to stubborn scale and staining.' },
    ],

    nearbyCities: ['san-diego', 'escondido', 'ramona', 'del-mar', 'la-jolla'],
  },

  // ============================================================
  // RAMONA
  // ============================================================
  {
    name: 'Ramona',
    slug: 'ramona',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92065'],
    coordinates: { lat: 33.0422, lng: -116.8681 },
    distanceFromHQ: '~32 miles northeast',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Ramona Estates',
        description:
          'Rural area with custom homes on large parcels featuring pools surrounded by open rangeland and native chaparral vegetation.',
      },
      {
        name: 'San Diego Country Estates',
        description:
          'Large gated community with hundreds of homes and pools ranging from modest family setups to elaborate custom designs.',
      },
      {
        name: 'Ramona Village',
        description:
          'Central Ramona community near Main Street with established homes and pools in a small-town setting.',
      },
      {
        name: 'Mount Woodson',
        description:
          'Residential area near the famous hiking trail with custom homes and pools at higher elevation surrounded by boulder outcroppings.',
      },
    ],

    landmarks: [
      'Ramona Grasslands Preserve',
      'Mount Woodson Trail (Potato Chip Rock)',
      'Guy B. Woodward Museum',
      'Ramona Bowl Amphitheatre',
      'Highland Valley Trail',
    ],

    climateNotes:
      'Ramona sits at approximately 1,400 feet elevation in the backcountry east of Escondido. Summer temperatures regularly exceed 95°F, with multi-day heat waves pushing past 105°F. Winters can bring freezing temperatures and occasional frost. The area receives about 17 inches of rain annually, more than the coast.',

    waterNotes:
      'Ramona Municipal Water District supplies water to the community from imported sources and local wells. Water hardness varies by source but is often high (300-400 ppm). Many rural properties rely on well water with elevated mineral content including iron and manganese, requiring specialized pool chemistry protocols.',

    metaTitle: 'Ramona Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Professional pool cleaning in Ramona, CA. Serving San Diego Country Estates, Ramona Village & all areas. Backcountry pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Reliable pool care for Ramona\'s backcountry properties where triple-digit summers make a clean pool essential. We service San Diego Country Estates, ranch homes, and everything in between.',
    introContent: `PoolLogic Pool Service provides professional pool care to Ramona, a proud backcountry community east of Escondido where wide-open spaces, rural living, and genuine small-town character define daily life. With summer temperatures regularly pushing past 100°F, pools in Ramona are not a luxury -- they are essential for staying comfortable, and our team keeps them in peak condition.

We have been serving Ramona pool owners for over a decade, and we understand the unique demands of backcountry pool maintenance. From the gated community of San Diego Country Estates to the ranch properties throughout the valley, PoolLogic Pool Service delivers reliable weekly service despite Ramona's distance from the coast.

Our commitment to Ramona homeowners is the same as in every one of the 22+ San Diego County communities we serve: consistent results, honest communication, and technicians who truly understand local conditions. When you choose PoolLogic Pool Service, you are getting a team that knows how to keep Ramona pools sparkling even through the most punishing summer heat.`,

    localExpertiseContent:
      'Ramona\'s backcountry setting presents some of the most challenging pool care conditions in San Diego County. San Diego Country Estates is one of the largest gated communities in the region, with varied pool styles from modest to elaborate. Many Ramona properties rely on well water, which introduces iron, manganese, and other minerals that can stain surfaces and damage equipment. PoolLogic Pool Service has developed specific treatment protocols for well-water pools, including sequestrant programs and specialized filtration recommendations.',

    climateContent:
      'Ramona\'s climate is among the most extreme in San Diego County. Summer temperatures regularly exceed 95°F, with multi-day heat waves pushing past 105°F. The valley\'s inland position and 1,400-foot elevation mean no marine moderation -- when it is hot in Ramona, it is genuinely relentless. This extreme heat creates demanding conditions for pool maintenance, with rapid chlorine degradation, accelerated evaporation, and concentrated mineral buildup. Winter in Ramona brings genuinely cold conditions by San Diego standards, with nighttime temperatures regularly dropping into the 30s and occasional freezing events that threaten exposed pool plumbing.',

    faqs: [
      { question: 'What does pool service cost in Ramona?', answer: 'Ramona pool service typically ranges from $175–$300 per month, reflecting the backcountry distance and more demanding water conditions. Properties in San Diego Country Estates or on well water may be at the higher end, while homes closer to Ramona Village with municipal water fall lower. All chemicals are always included.' },
      { question: 'What\'s included with PoolLogic\'s pool service in Ramona?', answer: 'Each weekly visit includes skimming, brushing, vacuuming, filter checks, and comprehensive chemical management with all chemicals included. Ramona\'s high-hardness water (300–400 ppm from Ramona MWD, and often worse from private wells) requires specialized scale-prevention protocols and metal sequestrant treatments that are standard in our Ramona service.' },
      { question: 'Does PoolLogic cover all Ramona neighborhoods?', answer: 'Yes,we service Ramona Estates, San Diego Country Estates, Ramona Village, and the Mount Woodson area. From properties near the Ramona Grasslands to homes at the base of Potato Chip Rock, our backcountry routes cover the full 92065 zip code at 1,400 feet elevation.' },
      { question: 'How soon can PoolLogic start my pool service in Ramona?', answer: 'We can typically begin within 5–7 business days. Ramona is about 32 miles northeast of our headquarters, but we maintain dedicated backcountry routes that service Ramona, Escondido, and Poway on the same days to ensure consistent weekly visits to this mountain community.' },
      { question: 'Why should I choose PoolLogic for pool service in Ramona?', answer: 'Ramona is one of the toughest pool environments in San Diego County,95–105°F+ summers, winter freezing, 17 inches of rain, and some of the hardest water around. Our CPO-certified technicians bring backcountry expertise that coastal-focused companies simply don\'t have, backed by a 5.0 rating from 1,042+ reviews county-wide.' },
      { question: 'Can PoolLogic handle equipment repairs in Ramona?', answer: 'Yes, we repair and replace pumps, heaters, filters, salt cells, and automation equipment. Ramona\'s extreme temperature range,from summer highs above 105°F to below-freezing winter nights,puts extraordinary stress on pool equipment. We also handle winterization and freeze-protection for plumbing and exposed components at this elevation.' },
      { question: 'Do Ramona pools really need service in winter?', answer: 'Absolutely,in fact, winter is when Ramona pools are most vulnerable. At 1,400 feet, overnight freezing can crack plumbing and damage equipment, and Ramona\'s 17 inches of annual rainfall introduces debris, dirt, and phosphates that fuel algae blooms when spring warmth returns. Year-round maintenance with winterization protocols is essential here.' },
    ],

    nearbyCities: ['escondido', 'poway', 'lakeside', 'alpine', 'san-marcos'],
  },

  // ============================================================
  // SAN DIEGO (HEADQUARTERS)
  // ============================================================
  {
    name: 'San Diego',
    slug: 'san-diego',
    county: 'San Diego',
    state: 'CA',
    zipCodes: [
      '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108',
      '92109', '92110', '92111', '92113', '92114', '92115', '92116', '92117',
      '92119', '92120', '92121', '92122', '92123', '92124', '92126', '92127',
      '92128', '92129', '92130', '92131', '92132', '92134', '92139', '92140',
      '92145', '92154',
    ],
    coordinates: { lat: 32.7157, lng: -117.1611 },
    distanceFromHQ: 'Headquarters',
    isPrimary: true,

    neighborhoods: [
      {
        name: 'Hillcrest',
        description:
          'Vibrant urban neighborhood near our HQ with older homes featuring compact pools and spas that require expert maintenance in a densely landscaped setting.',
      },
      {
        name: 'North Park',
        description:
          'Trendy community with a mix of vintage Craftsman homes and modern renovations, many featuring updated plunge pools and saltwater conversions.',
      },
      {
        name: 'Clairemont',
        description:
          'Classic mid-century San Diego neighborhood with some of the city\'s original residential pools, many benefiting from equipment upgrades and resurfacing.',
      },
      {
        name: 'Scripps Ranch',
        description:
          'Family-oriented master-planned community with modern pools, water features, and automation systems surrounded by eucalyptus groves requiring diligent debris management.',
      },
      {
        name: 'Rancho Bernardo',
        description:
          'Established community popular with families and retirees featuring well-maintained pools in a warm inland microclimate that demands consistent chemical balancing.',
      },
      {
        name: 'Point Loma',
        description:
          'Coastal peninsula neighborhood where salt air and marine fog create unique pool care challenges including accelerated equipment corrosion and elevated chlorine demand.',
      },
    ],

    landmarks: [
      'Balboa Park',
      'San Diego Zoo',
      'Petco Park',
      'USS Midway Museum',
      'Mission Bay Park',
      'Torrey Pines State Natural Reserve',
    ],

    climateNotes:
      'San Diego enjoys a semi-arid Mediterranean climate with average temperatures ranging from 57°F in winter to 76°F in summer. Coastal areas experience morning marine layer fog from May through July, while inland neighborhoods like Scripps Ranch and Rancho Bernardo can see summer highs exceeding 90°F. The city receives only about 10 inches of rain annually, nearly all between November and March.',

    waterNotes:
      'The City of San Diego Public Utilities Department supplies most of San Diego proper. Water is imported from the Colorado River and Northern California via the Metropolitan Water District and San Diego County Water Authority. Local water tends toward moderate hardness (200-300 ppm calcium hardness) and slightly alkaline pH, requiring regular monitoring to prevent calcium scaling on tile lines and pool equipment.',

    metaTitle: 'San Diego Pool Service | #1 Rated | PoolLogic Pool Service',
    metaDescription:
      'San Diego\'s top-rated pool service by PoolLogic. Serving Hillcrest, North Park, Scripps Ranch, Point Loma & all SD neighborhoods. Weekly cleaning, repairs & more. Call (619) 913-9335 for a free quote!',

    heroDescription: 'San Diego\'s hometown pool service, headquartered right here in Hillcrest. We cover every neighborhood from Point Loma and Ocean Beach to Scripps Ranch and Rancho Bernardo with same-technician consistency.',
    introContent: `PoolLogic Pool Service is proud to call San Diego home. Based in the heart of Hillcrest, we have been providing premium pool cleaning, maintenance, and repair services to San Diego homeowners and property managers for over a decade. Our central location allows us to serve every corner of San Diego efficiently, from the coastal communities of Point Loma and Ocean Beach to the inland neighborhoods of Scripps Ranch and Rancho Bernardo.

As San Diego's locally owned and operated pool care company, we understand the unique demands that America's Finest City places on pool owners. The combination of year-round sunshine, imported water with moderate mineral content, and varied microclimates across the city means that no two pools are exactly alike. Whether you have a vintage pool in Clairemont that needs modernization or a state-of-the-art saltwater system in Carmel Valley, PoolLogic Pool Service delivers tailored care that keeps your pool sparkling and safe.

We take pride in our reputation for reliability, transparency, and exceptional results. Our certified pool technicians are background-checked, CPO-certified, and trained to handle everything from routine weekly service to complex equipment diagnostics. When you choose PoolLogic Pool Service in San Diego, you are choosing a team that treats your pool like our own.`,

    localExpertiseContent:
      'Our headquarters location in Hillcrest gives us unmatched local knowledge across all of San Diego\'s diverse neighborhoods. We know that pools in Point Loma face constant salt air exposure that accelerates corrosion on metal components. We understand that Scripps Ranch pools contend with eucalyptus leaf and bark debris that can stain surfaces and clog filters. And we recognize that the older pools common in Clairemont and North Park often have aging plumbing and equipment that benefit from our preventive maintenance approach. Our technicians are assigned to consistent routes within specific San Diego neighborhoods, building genuine relationships with clients and taking personal pride in every pool they maintain.',

    climateContent:
      'San Diego\'s climate is famously mild, but that reputation masks important variations that directly affect pool care. Coastal neighborhoods experience the marine layer -- a persistent morning fog from late May through July that deposits moisture and airborne salt onto pool surfaces. Inland neighborhoods like Scripps Ranch and Rancho Bernardo regularly see summer temperatures in the high 80s and 90s, sometimes exceeding 100°F during Santa Ana wind events, accelerating water evaporation and concentrating dissolved minerals. PoolLogic Pool Service optimizes stabilizer levels to protect your sanitizer investment while keeping water safe and balanced across San Diego\'s diverse microclimates.',

    faqs: [
      { question: 'How much does pool service cost in San Diego?', answer: 'San Diego pool service typically costs $140–$275 per month depending on pool size, features, and location within the city. Coastal pools in Point Loma or La Jolla may differ from inland pools in Scripps Ranch or Rancho Bernardo due to different chemical demands. All chemicals are included with every PoolLogic service plan.' },
      { question: 'What does PoolLogic\'s San Diego pool service include?', answer: 'Every weekly visit includes complete skimming, brushing, vacuuming, filter maintenance, and full water chemistry testing and adjustment,all chemicals included. We tailor our protocols to the City of San Diego\'s water supply (200–300 ppm hardness) and whether your pool sits in the marine layer zone or the warmer inland valleys.' },
      { question: 'Which San Diego neighborhoods does PoolLogic service?', answer: 'We\'re headquartered right in Hillcrest and serve all San Diego neighborhoods including North Park, Clairemont, Scripps Ranch, Rancho Bernardo, Point Loma, Mission Bay, and everywhere in between. From the coast at Torrey Pines to the inland communities near Mission Trails, PoolLogic covers the entire city.' },
      { question: 'How quickly can PoolLogic start my San Diego pool service?', answer: 'Since San Diego is our home base,we\'re headquartered in Hillcrest,we can often start within 2–4 business days. Our densest route coverage is right here in the city, with technicians running through neighborhoods from Point Loma to Rancho Bernardo every day of the week.' },
      { question: 'Why is PoolLogic the best pool service in San Diego?', answer: 'We were founded right here in San Diego in 2020 and built our reputation one neighborhood at a time,from Hillcrest to Scripps Ranch. Our CPO-certified technicians understand the dramatic difference between a coastal Pt. Loma pool under marine layer and an inland Rancho Bernardo pool hitting 90°F+. That local depth is why we hold a 5.0 Google rating from 1,042+ reviews.' },
      { question: 'Does PoolLogic handle pool repairs in San Diego?', answer: 'Yes,we repair and replace pumps, filters, heaters, salt cells, and automation systems city-wide. Whether it\'s a vintage plaster pool in North Park, a modern infinity edge in La Jolla, or a family pool near Balboa Park, our technicians are experienced with every style and era of San Diego pool construction.' },
      { question: 'Do San Diego pools need year-round maintenance?', answer: 'Absolutely. San Diego\'s famously mild climate,averaging 57–76°F at the coast,means pools never fully go dormant. Algae can bloom in any month, the marine layer deposits moisture and salt on coastal pool surfaces nightly, and the City of San Diego\'s moderate water hardness builds scale steadily if not managed. Consistent year-round service is essential.' },
    ],

    nearbyCities: ['chula-vista', 'la-jolla', 'la-mesa', 'el-cajon', 'national-city', 'del-mar', 'encinitas', 'poway'],
  },

  // ============================================================
  // SAN MARCOS
  // ============================================================
  {
    name: 'San Marcos',
    slug: 'san-marcos',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92069', '92078', '92079'],
    coordinates: { lat: 33.1434, lng: -117.1661 },
    distanceFromHQ: '~32 miles north',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'San Elijo Hills',
        description:
          'Master-planned hillside community with modern pools, energy-efficient equipment, and panoramic views of the surrounding North County landscape.',
      },
      {
        name: 'Lake San Marcos',
        description:
          'Lakefront community with established homes and pools in a scenic setting around the private lake, featuring both vintage and updated pool systems.',
      },
      {
        name: 'Rancho Santa Fe Road Corridor',
        description:
          'Growing residential area along Rancho Santa Fe Road with newer homes and contemporary pool designs in a warm inland microclimate.',
      },
      {
        name: 'Twin Oaks Valley',
        description:
          'Semi-rural area in eastern San Marcos with larger properties and pools surrounded by avocado groves and native vegetation.',
      },
      {
        name: 'Discovery Hills',
        description:
          'Newer residential development near Cal State San Marcos with modern pools and efficient equipment in a family-oriented setting.',
      },
    ],

    landmarks: [
      'California State University San Marcos',
      'Lake San Marcos',
      'Double Peak Park',
      'San Marcos Creek Trail',
      'Old California Restaurant Row',
      'Woodland Park',
    ],

    climateNotes:
      'San Marcos occupies a transitional zone between coastal and inland North County. Western areas near Encinitas benefit from some marine influence with summer highs in the low 80s, while eastern areas like Twin Oaks Valley reach the upper 80s to low 90s. The city receives about 12 inches of rain annually.',

    waterNotes:
      'The Vallecitos Water District serves most of San Marcos with imported water from the San Diego County Water Authority. Water hardness is moderate. The Vista Irrigation District also serves portions of the city. Pool owners should monitor calcium levels regularly as the warm inland temperatures can concentrate minerals through evaporation.',

    metaTitle: 'San Marcos Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Quality pool cleaning in San Marcos, CA. Serving San Elijo Hills, Lake San Marcos & all areas. North County pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Growing with San Marcos,from the hilltop views of San Elijo Hills to the lakeside living of Lake San Marcos. We provide weekly pool care calibrated for North County\'s warm, sun-drenched climate.',
    introContent: `PoolLogic Pool Service provides dependable pool care to homeowners throughout San Marcos, a growing North County city that blends new development with established neighborhoods and rural character. From the hilltop views of San Elijo Hills to the lakeside living of Lake San Marcos, this community offers diverse residential settings -- and PoolLogic Pool Service has been keeping its pools pristine for over a decade.

San Marcos's transitional position between the coast and the inland valleys creates a comfortable climate for year-round pool use, but it also means different neighborhoods face different pool care challenges. Our team understands these variations and provides customized service that accounts for each property's specific microclimate and water conditions.

We are proud to serve San Marcos as part of our comprehensive coverage of 22+ San Diego County communities. Our dedicated North County routes ensure consistent, on-time service that San Marcos families can depend on.`,

    localExpertiseContent:
      'San Marcos offers a diverse mix of pool environments, from the modern installations in San Elijo Hills to the established systems around Lake San Marcos and the rural properties of Twin Oaks Valley. Our technicians understand the Vallecitos Water District\'s supply characteristics and the varying conditions across San Marcos\'s different neighborhoods. We tailor our maintenance approach to each pool\'s specific setting, equipment, and water chemistry needs.',

    climateContent:
      'San Marcos\'s climate sits comfortably between the cool coast and the hot inland valleys, providing pleasant swimming conditions for most of the year. Western sections see summer highs in the low 80s with occasional marine influence, while eastern areas like Twin Oaks Valley warm into the upper 80s to low 90s. PoolLogic Pool Service maintains adjusted chemical protocols for San Marcos\'s different climate zones, ensuring optimal water quality whether your pool sits on a coastal-influenced hillside or in the warmer eastern valleys.',

    faqs: [
      { question: 'What is the cost of pool service in San Marcos?', answer: 'San Marcos pool owners typically pay $150–$260 per month for weekly service, all chemicals included. Properties in the hillside community of San Elijo Hills or around Lake San Marcos fall mid-range, while larger pools in Twin Oaks Valley or Discovery Hills may be somewhat higher.' },
      { question: 'What does a PoolLogic pool service visit include in San Marcos?', answer: 'Each weekly visit includes skimming, brushing, vacuuming, filter inspection, and complete chemical testing and treatment,chemicals are always included. We formulate our San Marcos treatments for the Vallecitos Water District supply, which has moderate hardness that still requires monitoring to prevent gradual calcium buildup.' },
      { question: 'Does PoolLogic cover all San Marcos neighborhoods?', answer: 'Yes,we serve all of San Marcos including San Elijo Hills, Lake San Marcos, the Rancho Santa Fe Road corridor, Twin Oaks Valley, and Discovery Hills. Our North County routes cover the full range of 92069, 92078, and 92079 zip codes from the CSUSM campus area to the rural eastern edges.' },
      { question: 'How soon can I start pool service with PoolLogic in San Marcos?', answer: 'We can typically begin within 5–7 business days. San Marcos is about 32 miles north of our headquarters, but our established North County routes run through San Marcos, Vista, and Escondido daily, making it easy to add new clients near Double Peak Park or Lake San Marcos.' },
      { question: 'Why is PoolLogic the right choice for San Marcos pool owners?', answer: 'San Marcos spans a real climate gradient,low 80s in the western neighborhoods near Cal State San Marcos and upper 80s to 90s in the eastern valleys around Twin Oaks. Our CPO-certified techs adjust chemistry based on your pool\'s specific microclimate, not a generic one-size formula. Our 5.0 Google rating from 1,042+ reviews speaks to that precision.' },
      { question: 'Can PoolLogic repair pool equipment in San Marcos?', answer: 'Absolutely. We handle pumps, filters, heaters, salt systems, and automation controllers. San Marcos has seen rapid residential growth,especially in San Elijo Hills and Discovery Hills,meaning many pools have newer variable-speed equipment and smart controls that our technicians are specifically trained to service and optimize.' },
      { question: 'Is year-round pool service necessary in San Marcos?', answer: 'Yes. Even in winter, San Marcos stays warm enough for algae growth, and the Vallecitos Water District water continues depositing minerals on pool surfaces and equipment. The eastern portions of San Marcos get particularly warm in summer, and pools that skip off-season maintenance often return to green water and scale buildup that costs more to correct than consistent service.' },
    ],

    nearbyCities: ['escondido', 'vista', 'carlsbad', 'encinitas', 'poway'],
  },

  // ============================================================
  // SANTEE
  // ============================================================
  {
    name: 'Santee',
    slug: 'santee',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92071', '92072'],
    coordinates: { lat: 32.8384, lng: -116.9739 },
    distanceFromHQ: '~18 miles east',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'West Hills',
        description:
          'Master-planned community on the western edge of Santee with modern homes and well-designed pools featuring contemporary finishes and efficient equipment.',
      },
      {
        name: 'Carlton Hills',
        description:
          'Established family neighborhood with mature landscaping and pools that have been well-loved for decades, many benefiting from renovation and equipment upgrades.',
      },
      {
        name: 'Fanita Ranch Area',
        description:
          'Northern Santee community near the proposed Fanita Ranch development with custom homes and pools on hillside lots with valley views.',
      },
      {
        name: 'Santee Town Center',
        description:
          'Central Santee area near Trolley Square and Mission Gorge Road with accessible family homes and pools in a convenient location.',
      },
      {
        name: 'Riverview',
        description:
          'Southern Santee neighborhood along the San Diego River with pools in a warm setting near the Santee Lakes recreation area.',
      },
    ],

    landmarks: [
      'Santee Lakes Recreation Preserve',
      'Mission Trails Regional Park (eastern access)',
      'Santee Trolley Square',
      'Town Center Community Park',
      'Walker Preserve',
      'Mast Park',
    ],

    climateNotes:
      'Santee sits in the San Diego River valley east of Mission Gorge, experiencing warm inland temperatures. Summer highs average 88-95°F, with heat waves occasionally exceeding 100°F. The river valley setting creates moderate humidity compared to surrounding hilltop communities. Santee receives about 12 inches of rain annually.',

    waterNotes:
      'The Padre Dam Municipal Water District serves Santee with imported water from the San Diego County Water Authority. Water hardness is moderate at approximately 220-280 ppm. The combination of warm temperatures and moderate hardness requires consistent chemical management to prevent scaling and maintain balanced pool water.',

    metaTitle: 'Santee Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Dependable pool cleaning in Santee, CA. Serving West Hills, Carlton Hills, Riverview & all areas. East County pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Trusted pool service for Santee families in the San Diego River valley. We keep pools clean and balanced across West Hills, Carlton Hills, and every neighborhood near Santee Lakes.',
    introContent: `PoolLogic Pool Service delivers reliable pool care to homeowners in Santee, a friendly East County city along the San Diego River valley. Known for its family-oriented neighborhoods, excellent parks, and warm climate, Santee is a community where backyard pools are a staple of daily life -- and our team ensures they stay in outstanding condition year-round.

We have been serving Santee pool owners for over a decade, building strong relationships with families throughout the city. From the modern homes of West Hills to the established neighborhoods of Carlton Hills and the riverfront properties near Santee Lakes, PoolLogic Pool Service provides consistent weekly maintenance tailored to each pool's specific needs.

Santee's warm inland climate means pools see heavy use from spring through fall, and PoolLogic Pool Service keeps them ready for every swim. Our proactive maintenance approach prevents problems before they develop, saving Santee homeowners time, money, and the frustration of unexpected pool issues.`,

    localExpertiseContent:
      'Santee\'s San Diego River valley setting creates warm conditions that demand attentive pool care. Our technicians are experienced with the Padre Dam Municipal Water District\'s supply characteristics and the specific challenges of East County pool maintenance. We understand that Santee pools face steady heat exposure from late spring through early fall, and we calibrate our chemical programs to maintain consistent water quality throughout the extended swimming season.',

    climateContent:
      'Santee\'s position in the San Diego River valley produces warm, sunny conditions that are excellent for swimming but require professional attention to maintain pool water quality. Summer temperatures average in the upper 80s to mid-90s, driving evaporation and chlorine consumption. The valley setting can trap heat during multi-day warm spells, pushing conditions even higher. PoolLogic Pool Service maintains robust warm-weather protocols for Santee pools that keep chemical levels stable and water sparkling even during the hottest stretches of summer.',

    faqs: [
      { question: 'How much does pool service in Santee cost?', answer: 'Santee pool service ranges from $150–$260 per month depending on pool size and features, with all chemicals included. Standard residential pools near the Santee Town Center or Carlton Hills fall mid-range, while larger setups in West Hills or the Fanita Ranch area may be at the higher end.' },
      { question: 'What\'s included in PoolLogic\'s Santee pool service?', answer: 'Every weekly visit covers skimming, brushing, vacuuming, filter checks, and full chemical testing and balancing,all chemicals included. We calibrate treatments for the Padre Dam Municipal Water District supply serving Santee, which runs 220–280 ppm hardness and requires consistent calcium management.' },
      { question: 'Does PoolLogic service all Santee neighborhoods?', answer: 'Yes, we serve all of Santee including West Hills, Carlton Hills, the Fanita Ranch area, Santee Town Center, and Riverview. From pools overlooking Santee Lakes to homes near Mission Trails Regional Park, our East County routes cover the full 92071 and 92072 zip codes.' },
      { question: 'How fast can PoolLogic begin service in Santee?', answer: 'Most Santee homeowners are on the schedule within 3–5 business days. We run busy East County routes through Santee, El Cajon, and Lakeside daily, and with Santee just 18 miles from our Hillcrest headquarters, adding new clients near Santee Trolley Square or the lakes area is seamless.' },
      { question: 'What makes PoolLogic the top choice for pool service in Santee?', answer: 'Santee\'s East County heat,88–95°F summers with 100°F+ heat waves,creates one of the most demanding pool environments in the metro area. Our CPO-certified technicians proactively adjust chlorine levels and run times for these conditions rather than reacting after problems start. That approach has earned us a 5.0 Google rating from 1,042+ reviews.' },
      { question: 'Does PoolLogic handle pool repairs in Santee?', answer: 'Yes,we repair and replace pumps, filters, heaters, salt cells, and automation systems. Santee\'s prolonged summer heat puts heavy strain on pool equipment, and many older homes near Carlton Hills and West Hills have equipment that benefits from upgrading to energy-efficient variable-speed pumps and modern controllers.' },
      { question: 'Should I maintain my Santee pool year-round?', answer: 'Yes. Santee\'s warm East County climate means pools rarely get cold enough to go dormant, and the Padre Dam water supply steadily deposits calcium and minerals on surfaces. Skipping winter months leads to scale buildup, staining, and potential algae blooms that are far more expensive to remedy than consistent year-round service through Mission Trails\' mild winters.' },
    ],

    nearbyCities: ['el-cajon', 'lakeside', 'la-mesa', 'san-diego', 'poway'],
  },

  // ============================================================
  // SPRING VALLEY
  // ============================================================
  {
    name: 'Spring Valley',
    slug: 'spring-valley',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['91977', '91978'],
    coordinates: { lat: 32.7448, lng: -116.9989 },
    distanceFromHQ: '~12 miles southeast',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Dictionary Hill',
        description:
          'Western Spring Valley neighborhood at higher elevation with pools offering panoramic views of the surrounding valleys and distant mountains.',
      },
      {
        name: 'Bancroft Drive Area',
        description:
          'Central Spring Valley corridor with family homes and pools of various ages in an accessible, well-connected neighborhood.',
      },
      {
        name: 'Casa de Oro',
        description:
          'Established residential community on the eastern side with pools in a warm microclimate that benefits from extended swimming seasons.',
      },
      {
        name: 'Spring Valley Estates',
        description:
          'Southern Spring Valley area with larger lots and pools in a warm setting near the Sweetwater Reservoir.',
      },
    ],

    landmarks: [
      'Sweetwater Springs County Park',
      'Bancroft Recreational Center',
      'Spring Valley Community Center',
      'Heritage of the Americas Museum',
      'Sweetwater Summit Regional Park',
    ],

    climateNotes:
      'Spring Valley sits in a warm inland valley southeast of San Diego, with summer highs averaging 85-92°F. The area is slightly warmer than the coast but cooler than deep inland valleys like El Cajon and Ramona. Elevation varies throughout the community, creating mild microclimate differences between hilltop and valley properties.',

    waterNotes:
      'Spring Valley is served by the Helix Water District and the Sweetwater Authority, depending on location within the community. Water hardness is moderate at approximately 200-270 ppm. The warm climate and moderate hardness levels require regular monitoring to maintain proper calcium balance in pool water.',

    metaTitle: 'Spring Valley Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Reliable pool cleaning in Spring Valley, CA. Serving Casa de Oro, Dictionary Hill & all areas. Warm-weather pool experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Straightforward, honest pool care for Spring Valley homeowners. From Dictionary Hill properties to Casa de Oro homes, our technicians know the local water and warm inland conditions inside and out.',
    introContent: `PoolLogic Pool Service provides professional pool care to Spring Valley, a welcoming unincorporated community in eastern San Diego County. Spring Valley's warm climate and family-oriented neighborhoods make pool ownership a natural fit, and our team has been keeping local pools clean, balanced, and ready for enjoyment for over a decade.

From the hilltop properties of Dictionary Hill to the established homes near Casa de Oro, PoolLogic Pool Service understands what Spring Valley pool owners need: reliable weekly service, transparent communication, and technicians who know the area's climate and water conditions inside and out.

As part of our coverage of 22+ San Diego County communities, Spring Valley receives the full benefit of PoolLogic Pool Service's professional resources and expertise. Our dedicated East County routes ensure efficient, on-time service that Spring Valley families can count on.`,

    localExpertiseContent:
      'Spring Valley\'s position between the coast and the deeper inland valleys creates moderate but consistently warm conditions that require attentive pool care. Our technicians are familiar with both the Helix Water District and Sweetwater Authority supplies that serve different parts of the community, and we adjust chemical programs accordingly. The area\'s varied topography means some pools sit on exposed hilltops while others are sheltered in valleys, and we tailor our approach to each property\'s specific microclimate.',

    climateContent:
      'Spring Valley enjoys a warm inland climate that provides an extended swimming season from early spring through late fall. Summer temperatures in the mid-80s to low 90s create comfortable pool conditions with moderate chemical demands. The area avoids the extreme heat of deeper inland valleys while staying warm enough for consistent pool use. PoolLogic Pool Service maintains balanced maintenance programs for Spring Valley that account for the steady warmth and ensure pools remain in optimal condition throughout the long swimming season.',

    faqs: [
      { question: 'What does pool service cost in Spring Valley?', answer: 'Spring Valley pool service typically costs $145–$250 per month with all chemicals included. Properties in Spring Valley Estates or the hillside areas of Dictionary Hill may vary slightly from standard lots along Bancroft Drive or in Casa de Oro, but most homeowners fall comfortably in the mid-range.' },
      { question: 'What\'s included with PoolLogic\'s Spring Valley pool service?', answer: 'Weekly service includes skimming, brushing, vacuuming, filter maintenance, and complete chemical testing and balancing,all chemicals included. Spring Valley is split between Helix Water District and Sweetwater Authority supply zones, and we adjust our chemical approach based on which system feeds your property (both run 200–270 ppm hardness).' },
      { question: 'Does PoolLogic cover all Spring Valley neighborhoods?', answer: 'Yes,we serve every part of Spring Valley including Dictionary Hill, the Bancroft Drive area, Casa de Oro, and Spring Valley Estates. Our routes also cover the surrounding areas near Sweetwater Summit Regional Park and the Heritage of the Americas Museum corridor.' },
      { question: 'How quickly can I start service with PoolLogic in Spring Valley?', answer: 'We can usually start within 3–5 business days. Spring Valley is only about 12 miles southeast of our Hillcrest headquarters, and we run daily routes through Spring Valley, La Mesa, and the surrounding East County communities, making scheduling fast and convenient.' },
      { question: 'Why is PoolLogic the best pool service for Spring Valley?', answer: 'Spring Valley\'s warm inland valley climate pushes 85–92°F in summer, creating strong chemical demand and persistent algae pressure. Our CPO-certified technicians know this area well,from the elevated properties on Dictionary Hill to the valley floor near Sweetwater Springs,and deliver service tuned to local conditions, not guesswork. Our 5.0 Google rating from 1,042+ reviews reflects that commitment.' },
      { question: 'Can PoolLogic repair pool equipment in Spring Valley?', answer: 'Yes, we handle all pool equipment repairs and replacements including pumps, filters, heaters, salt cells, and automation controllers. Many Spring Valley homes,particularly the established neighborhoods in Casa de Oro and along Bancroft Drive,have older equipment that we can repair or upgrade to modern energy-efficient systems.' },
      { question: 'Do Spring Valley pools require year-round service?', answer: 'Yes. Spring Valley\'s sheltered inland valley stays warm enough for algae growth even through winter, and minerals from the local Helix and Sweetwater water supplies accumulate on pool surfaces continuously. Skipping seasonal maintenance near Sweetwater Summit means returning to calcium-scaled tile and green water that costs significantly more to restore.' },
    ],

    nearbyCities: ['la-mesa', 'el-cajon', 'chula-vista', 'national-city', 'bonita', 'jamul'],
  },

  // ============================================================
  // VISTA
  // ============================================================
  {
    name: 'Vista',
    slug: 'vista',
    county: 'San Diego',
    state: 'CA',
    zipCodes: ['92081', '92083', '92084', '92085'],
    coordinates: { lat: 33.2000, lng: -117.2425 },
    distanceFromHQ: '~35 miles north',
    isPrimary: false,

    neighborhoods: [
      {
        name: 'Shadowridge',
        description:
          'Large master-planned community with modern pools and energy-efficient equipment in a well-maintained, family-oriented setting.',
      },
      {
        name: 'Vista Village',
        description:
          'Historic downtown area with character homes and renovated pools in a walkable neighborhood near shops and the Moonlight Amphitheatre.',
      },
      {
        name: 'Breeze Hill',
        description:
          'Established residential area in western Vista with pools that benefit from proximity to the coast and slightly cooler temperatures.',
      },
      {
        name: 'East Vista',
        description:
          'Inland area of Vista with warmer temperatures and pools in a mix of established and newer homes surrounded by avocado groves.',
      },
      {
        name: 'California Oaks',
        description:
          'Residential neighborhood in northern Vista with pools in a warm, sunny microclimate near Brengle Terrace Park.',
      },
    ],

    landmarks: [
      'Moonlight Amphitheatre',
      'Alta Vista Botanical Gardens',
      'Brengle Terrace Park',
      'Rancho Guajome Adobe',
      'Wave Waterpark',
      'Guajome Regional Park',
    ],

    climateNotes:
      'Vista occupies a transitional zone between coastal and inland North County. Western areas enjoy marine influence with summer highs in the low 80s, while eastern Vista can reach the upper 80s to low 90s. The city receives about 12-14 inches of rain annually and benefits from the North County breeze patterns.',

    waterNotes:
      'The Vista Irrigation District serves the city with water sourced primarily from Lake Henshaw and imported supplies via the San Diego County Water Authority. Water hardness varies from moderate to moderately high depending on the blend. Some eastern properties near agricultural areas may experience higher mineral levels.',

    metaTitle: 'Vista Pool Service | Trusted Local Pros | PoolLogic Pool Service',
    metaDescription:
      'Quality pool cleaning in Vista, CA. Serving Shadowridge, Vista Village, Breeze Hill & all areas. North County experts. Call PoolLogic at (619) 913-9335!',

    heroDescription: 'Weekly pool service for Vista\'s diverse neighborhoods, from the modern homes of Shadowridge to the charming streets near Vista Village. We handle North County\'s warm climate and hard water with expert care.',
    introContent: `PoolLogic Pool Service provides comprehensive pool care to homeowners throughout Vista, a diverse North County city that ranges from established downtown neighborhoods to modern master-planned communities. Vista's warm climate and family-friendly character make backyard pools a valued feature of life here, and our team has been keeping them in excellent condition for over a decade.

From the modern homes of Shadowridge to the charming streets of Vista Village, PoolLogic Pool Service delivers consistent weekly maintenance that Vista families can count on. We understand the local climate, water conditions, and the specific needs of Vista's varied pool installations, from classic plaster pools to contemporary pebble-finish designs.

Our North County service routes are designed to serve Vista efficiently, ensuring on-time arrivals and thorough service visits. As one of 22+ San Diego County communities we serve, Vista receives the full resources and expertise of PoolLogic Pool Service.`,

    localExpertiseContent:
      'Vista\'s transitional position between coast and inland creates neighborhoods with different pool care demands. Western Vista near Breeze Hill benefits from marine influence and slightly cooler conditions, while eastern areas face warmer temperatures and more debris from surrounding agricultural operations and native vegetation. Our technicians understand the Vista Irrigation District\'s water characteristics and adjust chemical programs for each neighborhood\'s specific conditions.',

    climateContent:
      'Vista\'s climate provides a comfortable balance for pool owners, with western sections enjoying marine-moderated temperatures in the low 80s and eastern areas warming to the upper 80s and low 90s. This variation means pools across the city face different evaporation rates and chemical demands. PoolLogic Pool Service accounts for these differences with tailored maintenance programs that optimize water quality for each Vista neighborhood\'s specific microclimate.',

    faqs: [
      { question: 'How much does pool service in Vista cost?', answer: 'Vista pool service generally costs $150–$260 per month with all chemicals included. Western Vista neighborhoods like Shadowridge tend toward the lower end due to milder coastal-influenced temps, while eastern areas like East Vista and the hills near Guajome Regional Park see more heat and higher chemical demand.' },
      { question: 'What does PoolLogic\'s Vista pool service include?', answer: 'Each weekly visit covers skimming, brushing, vacuuming, filter inspection, and full chemical management,all chemicals included. We formulate our Vista treatments for the Vista Irrigation District water sourced from Lake Henshaw, which runs moderate to moderately high hardness and requires proactive scale-prevention strategies.' },
      { question: 'Does PoolLogic serve all Vista neighborhoods?', answer: 'Yes,we service all of Vista including Shadowridge, Vista Village, Breeze Hill, East Vista, and California Oaks. From homes near the Moonlight Amphitheatre to properties along the Guajome Regional Park corridor, our North County routes cover Vista\'s full 92081–92085 zip code range.' },
      { question: 'How soon can PoolLogic start servicing my Vista pool?', answer: 'We can typically begin within 5–7 business days. Vista is about 35 miles north of our Hillcrest headquarters, but we maintain daily North County routes through Vista, Oceanside, and San Marcos that make adding new clients near Alta Vista Botanical Gardens or the Wave Waterpark area straightforward.' },
      { question: 'Why should Vista pool owners choose PoolLogic?', answer: 'Vista straddles a climate divide,low 80s in the western neighborhoods and upper 80s to 90s on the eastern side,and the Lake Henshaw-sourced water from Vista Irrigation District has its own chemistry profile. Our CPO-certified technicians tailor service to your pool\'s specific location and conditions, earning us a 5.0 Google rating from 1,042+ reviews across 22+ cities.' },
      { question: 'Can PoolLogic handle pool equipment repairs in Vista?', answer: 'Absolutely. We repair and replace pumps, filters, heaters, salt systems, and automation controllers. Vista\'s diverse housing stock,from newer builds in Shadowridge with modern variable-speed equipment to older homes in Vista Village with legacy single-speed setups,is something our technicians navigate daily.' },
      { question: 'Is year-round pool maintenance important in Vista?', answer: 'Yes. Vista\'s North County climate stays mild enough for continuous biological activity in pool water, and the Vista Irrigation District\'s Lake Henshaw supply deposits minerals steadily on surfaces and inside equipment. Eastern Vista\'s warmer pockets are especially prone to winter algae blooms, making consistent year-round service far more cost-effective than seasonal cleanups.' },
    ],

    nearbyCities: ['oceanside', 'carlsbad', 'san-marcos', 'escondido', 'fallbrook'],
  },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

export function getCitiesByCounty(): City[] {
  return cities;
}

export function getPrimaryCities(): City[] {
  return cities.filter((city) => city.isPrimary);
}

export function getNearbyCities(slug: string): City[] {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return city.nearbyCities
    .map((nearbySlug) => getCityBySlug(nearbySlug))
    .filter((c): c is City => c !== undefined);
}
