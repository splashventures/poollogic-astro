import { Service } from '@/types/service';

export const services: Service[] = [
  // ============================================================
  // MAINTENANCE SERVICES
  // ============================================================
  {
    name: 'Weekly Pool Cleaning',
    slug: 'weekly-pool-cleaning',
    urlSlug: 'pool-cleaning-service-san-diego',
    category: 'maintenance',
    shortDescription: 'Professional weekly pool maintenance to keep your water crystal clear and safe.',
    longDescription: `Our weekly pool cleaning service is the foundation of proper pool care. Each visit includes comprehensive water testing, chemical balancing, surface skimming, brushing walls and tiles, vacuuming, emptying baskets, and equipment inspection. We maintain detailed service logs so you always know exactly what was done.`,
    problemStatement: 'Without regular professional maintenance, pools quickly develop algae, cloudy water, and equipment problems. DIY care often misses important steps, leading to expensive repairs and health risks.',
    solutionStatement: 'Our weekly service ensures your pool is always swim-ready. We catch small issues before they become big problems, maintain proper chemistry, and keep your equipment running efficiently.',
    priceRange: { min: 150, max: 250, unit: 'per visit' },
    features: [
      { title: 'Complete Water Testing', description: 'Test and balance pH, chlorine, alkalinity, and calcium hardness' },
      { title: 'Surface Cleaning', description: 'Skim debris, brush walls and tiles, vacuum floor' },
      { title: 'Equipment Check', description: 'Inspect pump, filter, and all equipment for proper operation' },
      { title: 'Basket Maintenance', description: 'Empty skimmer and pump baskets' },
      { title: 'Service Report', description: 'Digital log of all work performed and water chemistry readings' },
    ],
    includes: [
      'All chemicals included in service price',
      'Digital service reports after each visit',
      'Equipment monitoring and alerts',
      'Priority scheduling for repairs',
      'Seasonal service adjustments',
    ],
    metaTitle: 'Weekly Pool Cleaning Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional weekly pool cleaning in San Diego. Chemicals included. Digital reports. 22+ 5-star reviews. Call (619) 913-9335 for a free quote!',
    keywords: ['weekly pool cleaning', 'pool maintenance service', 'pool cleaning near me', 'San Diego pool service'],
    relatedServices: ['pool-filter-cleaning', 'pool-algae-removal', 'water-testing'],
  },

  {
    name: 'Pool Filter Cleaning',
    slug: 'pool-filter-cleaning',
    urlSlug: 'pool-filter-cleaning-service-san-diego',
    category: 'maintenance',
    shortDescription: 'Deep cleaning of pool filters to restore maximum filtration efficiency.',
    longDescription: `Pool filters work hard to keep your water clean, but they need regular cleaning to perform effectively. Our filter cleaning service includes complete disassembly, deep cleaning or replacement of filter media, inspection of internal components, and reassembly. We service cartridge, sand, and DE filters.`,
    problemStatement: 'Dirty filters reduce water circulation, strain your pump, and allow contaminants to remain in your pool. A clogged filter can increase energy costs and lead to equipment failure.',
    solutionStatement: 'Regular filter cleaning restores full filtration capacity, reduces energy consumption, and extends equipment life. We recommend filter cleaning every 3-6 months depending on usage.',
    priceRange: { min: 75, max: 200, unit: 'per service' },
    features: [
      { title: 'Complete Disassembly', description: 'Remove and inspect all filter components' },
      { title: 'Deep Cleaning', description: 'Chemical soak and pressure wash of filter elements' },
      { title: 'Component Inspection', description: 'Check for wear, damage, and proper function' },
      { title: 'Reassembly & Testing', description: 'Proper reinstallation and flow verification' },
    ],
    includes: [
      'All three filter types serviced (cartridge, sand, DE)',
      'Filter media replacement if needed (additional cost for media)',
      'Pressure gauge check and calibration',
      'Written condition report',
    ],
    metaTitle: 'Pool Filter Cleaning Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool filter cleaning in San Diego. Cartridge, sand & DE filters. Restore full filtration. Call (619) 913-9335!',
    keywords: ['pool filter cleaning', 'filter service', 'cartridge filter cleaning', 'sand filter cleaning'],
    relatedServices: ['weekly-pool-cleaning', 'pool-filter-repair', 'pool-pump-repair'],
  },

  {
    name: 'Pool Drain & Restart',
    slug: 'pool-drain-restart',
    urlSlug: 'pool-draining-restart-service-san-diego',
    category: 'maintenance',
    shortDescription: 'Complete pool draining, cleaning, and refilling with fresh water.',
    longDescription: `Sometimes a pool needs more than routine maintenance. Our drain and restart service completely empties your pool, cleans all surfaces, inspects the shell for damage, and refills with fresh water. We then balance the chemistry to prepare for immediate swimming.`,
    problemStatement: 'Over time, dissolved solids accumulate in pool water to levels that chemicals cannot correct. High TDS causes dull water, scaling, and reduced sanitizer effectiveness.',
    solutionStatement: 'A complete drain and restart gives your pool a fresh start. We recommend this service every 3-5 years, or sooner if TDS levels become problematic.',
    priceRange: { min: 350, max: 600, unit: 'one-time' },
    features: [
      { title: 'Complete Draining', description: 'Safely pump out all water with proper disposal' },
      { title: 'Surface Cleaning', description: 'Pressure wash and scrub all pool surfaces' },
      { title: 'Shell Inspection', description: 'Check for cracks, damage, and repair needs' },
      { title: 'Refill & Balance', description: 'Fill with fresh water and balance chemistry' },
    ],
    includes: [
      'Complete water removal and disposal',
      'Pressure washing of all surfaces',
      'Tile and waterline cleaning',
      'Fresh water fill and startup chemicals',
      'Written inspection report',
    ],
    metaTitle: 'Pool Drain & Restart Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool draining and refilling in San Diego. Fresh start for your pool. Complete surface cleaning. Call (619) 913-9335!',
    keywords: ['pool drain service', 'pool refill', 'drain and clean pool', 'pool restart service'],
    relatedServices: ['pool-acid-washing', 'pool-algae-removal', 'weekly-pool-cleaning'],
  },

  {
    name: 'Pool Algae Removal',
    slug: 'pool-algae-removal',
    urlSlug: 'pool-algae-removal-service-san-diego',
    category: 'maintenance',
    shortDescription: 'Complete elimination of algae and restoration of crystal-clear water.',
    longDescription: `Algae can take over a pool in just days during hot weather. Our algae removal service identifies the type of algae present, applies targeted treatment, and restores your pool to pristine condition. We address green algae, mustard algae, and the stubborn black algae that can embed in plaster.`,
    problemStatement: 'Algae blooms make pools unsafe for swimming, clog filters, and can damage surfaces if left untreated. The longer algae grows, the more difficult and expensive removal becomes.',
    solutionStatement: 'Our targeted algae treatment eliminates the current bloom and helps prevent recurrence. We also identify what caused the outbreak to prevent future problems.',
    priceRange: { min: 200, max: 500, unit: 'per service' },
    features: [
      { title: 'Algae Identification', description: 'Determine type and extent of algae growth' },
      { title: 'Shock Treatment', description: 'High-dose chlorine treatment to kill algae' },
      { title: 'Brushing & Vacuuming', description: 'Physical removal of dead algae' },
      { title: 'Prevention Plan', description: 'Recommendations to prevent recurrence' },
    ],
    includes: [
      'All treatment chemicals',
      'Multiple service visits as needed',
      'Filter cleaning during treatment',
      'Water chemistry rebalancing',
      'Written prevention recommendations',
    ],
    metaTitle: 'Pool Algae Removal Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Fast, effective pool algae removal in San Diego. Green, mustard & black algae treatment. Crystal-clear water guaranteed. Call (619) 913-9335!',
    keywords: ['pool algae removal', 'green pool cleanup', 'algae treatment', 'pool algae service'],
    relatedServices: ['weekly-pool-cleaning', 'pool-drain-restart', 'pool-filter-cleaning'],
  },

  {
    name: 'Hot Tub & Spa Cleaning',
    slug: 'hot-tub-cleaning',
    urlSlug: 'hot-tub-cleaning-service-san-diego',
    category: 'maintenance',
    shortDescription: 'Complete hot tub and spa maintenance for safe, relaxing soaks.',
    longDescription: `Hot tubs and spas require different care than pools due to higher temperatures and more concentrated use. Our spa service includes water testing and treatment, filter cleaning, jet and drain maintenance, and shell cleaning. We keep your spa hygienic and ready for relaxation.`,
    problemStatement: 'Spa water can harbor bacteria and develop chemical imbalances faster than pool water. Without proper maintenance, spas can become breeding grounds for harmful organisms.',
    solutionStatement: 'Regular professional spa service maintains safe, balanced water and prevents the biofilm buildup that causes odors and health risks. We recommend weekly service for frequently used spas.',
    priceRange: { min: 75, max: 150, unit: 'per visit' },
    features: [
      { title: 'Water Testing', description: 'Test and balance all chemical levels' },
      { title: 'Filter Service', description: 'Clean or replace spa filter cartridge' },
      { title: 'Surface Cleaning', description: 'Wipe waterline, clean jets, check drains' },
      { title: 'Equipment Check', description: 'Verify heater, pump, and controls operation' },
    ],
    includes: [
      'All sanitizing chemicals',
      'Filter cleaning each visit',
      'Cover inspection and cleaning',
      'Jet and orifice maintenance',
      'Monthly water replacement recommendation tracking',
    ],
    metaTitle: 'Hot Tub & Spa Cleaning Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional hot tub and spa cleaning in San Diego. Safe, relaxing water guaranteed. Expert maintenance. Call (619) 913-9335!',
    keywords: ['hot tub cleaning', 'spa maintenance', 'hot tub service', 'spa cleaning near me'],
    relatedServices: ['weekly-pool-cleaning', 'pool-heater-repair', 'pool-automation-repair'],
  },

  {
    name: 'Pool Acid Washing',
    slug: 'pool-acid-washing',
    urlSlug: 'pool-acid-washing-san-diego',
    category: 'maintenance',
    shortDescription: 'Deep cleaning of pool plaster to remove stains and restore brightness.',
    longDescription: `Acid washing removes a thin layer of pool plaster along with embedded stains, algae, and mineral deposits. This service restores the bright, clean appearance of your pool surface. It is typically performed after draining and is most effective on white or light-colored plaster pools.`,
    problemStatement: 'Over time, pool plaster accumulates stains from minerals, algae, and environmental contamination that cannot be removed by normal cleaning. The surface becomes dingy and unattractive.',
    solutionStatement: 'Acid washing strips away the stained surface layer, revealing fresh plaster beneath. This is a restorative service that can extend the life of your pool finish by years.',
    priceRange: { min: 400, max: 800, unit: 'one-time' },
    features: [
      { title: 'Pool Draining', description: 'Complete water removal with proper disposal' },
      { title: 'Acid Application', description: 'Careful application of muriatic acid solution' },
      { title: 'Scrubbing', description: 'Physical scrubbing to remove stains' },
      { title: 'Neutralization', description: 'Proper acid neutralization before refill' },
    ],
    includes: [
      'Complete draining and refilling',
      'All acid and neutralizing chemicals',
      'Tile and waterline cleaning',
      'Fresh water chemistry balancing',
      'Surface condition assessment',
    ],
    metaTitle: 'Pool Acid Washing Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool acid washing in San Diego. Remove stains, restore brightness. Expert plaster care. Call (619) 913-9335!',
    keywords: ['pool acid wash', 'pool plaster cleaning', 'acid washing service', 'pool stain removal'],
    relatedServices: ['pool-drain-restart', 'pool-algae-removal', 'weekly-pool-cleaning'],
  },

  // ============================================================
  // REPAIR SERVICES
  // ============================================================
  {
    name: 'Pool Heater Repair',
    slug: 'pool-heater-repair',
    urlSlug: 'pool-heater-repair-san-diego',
    category: 'repair',
    shortDescription: 'Expert diagnosis and repair of all pool heater types and brands.',
    longDescription: `When your pool heater stops working, we can diagnose and repair the problem quickly. Our technicians service gas heaters, heat pumps, and solar heating systems. We stock common parts and can often complete repairs in a single visit.`,
    problemStatement: 'A broken pool heater means cold water and an unusable pool during cooler months. Heater problems can range from simple ignition issues to serious heat exchanger failures.',
    solutionStatement: 'Our experienced technicians diagnose heater problems accurately and repair them efficiently. We explain the issue clearly and provide honest assessments of repair vs. replacement decisions.',
    priceRange: { min: 150, max: 600, unit: 'starting at' },
    features: [
      { title: 'Expert Diagnosis', description: 'Identify the exact cause of heater failure' },
      { title: 'All Brands Serviced', description: 'Hayward, Pentair, Raypak, Jandy, and more' },
      { title: 'Quality Parts', description: 'OEM or equivalent quality replacement parts' },
      { title: 'Testing', description: 'Thorough testing after repair' },
    ],
    includes: [
      'Diagnostic fee applied to repair cost',
      'Written estimate before work begins',
      'Parts warranty (manufacturer)',
      'Labor warranty (90 days)',
      'System optimization recommendations',
    ],
    metaTitle: 'Pool Heater Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Expert pool heater repair in San Diego. Gas, heat pump & solar systems. Fast, reliable service. Call (619) 913-9335!',
    keywords: ['pool heater repair', 'heater not working', 'pool heater service', 'gas heater repair'],
    relatedServices: ['pool-heater-installation', 'pool-pump-repair', 'pool-automation-repair'],
  },

  {
    name: 'Pool Pump Repair',
    slug: 'pool-pump-repair',
    urlSlug: 'pool-pump-repair-san-diego',
    category: 'repair',
    shortDescription: 'Fast, reliable repair of pool pumps to restore proper circulation.',
    longDescription: `The pump is the heart of your pool system. When it fails, water quality suffers quickly. Our technicians diagnose pump problems - from motor failure to seal leaks - and perform repairs to restore proper circulation and filtration.`,
    problemStatement: 'A failed pump means no water circulation, which leads to rapid water quality decline. Pump problems can be noisy, leak water, or simply stop running altogether.',
    solutionStatement: 'We diagnose pump issues accurately and repair or replace components as needed. For older single-speed pumps, we may recommend upgrading to energy-efficient variable-speed models.',
    priceRange: { min: 125, max: 500, unit: 'starting at' },
    features: [
      { title: 'Complete Diagnosis', description: 'Identify motor, seal, or impeller issues' },
      { title: 'Motor Repair/Replace', description: 'Repair or replace failed motors' },
      { title: 'Seal Replacement', description: 'Stop leaks with new shaft seals' },
      { title: 'Impeller Service', description: 'Clear clogs and replace worn impellers' },
    ],
    includes: [
      'Diagnostic service',
      'Written estimate approval',
      'Quality replacement parts',
      'Labor warranty (90 days)',
      'Efficiency recommendations',
    ],
    metaTitle: 'Pool Pump Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Fast pool pump repair in San Diego. Motor, seal & impeller service. All brands. Call (619) 913-9335 for same-day service!',
    keywords: ['pool pump repair', 'pump not working', 'pool pump motor', 'pump leak repair'],
    relatedServices: ['pool-pump-installation', 'pool-filter-repair', 'pool-heater-repair'],
  },

  {
    name: 'Pool Filter Repair',
    slug: 'pool-filter-repair',
    urlSlug: 'pool-filter-repair-san-diego',
    category: 'repair',
    shortDescription: 'Repair of pool filter systems to restore proper water filtration.',
    longDescription: `Filter problems affect water clarity and can strain other equipment. We repair cartridge, sand, and DE filters, addressing issues from cracked tanks to faulty multiport valves. Our goal is restoring proper filtration as quickly as possible.`,
    problemStatement: 'Filter problems cause cloudy water, poor circulation, and can damage pumps. Common issues include cracked tanks, failed valves, and internal component failures.',
    solutionStatement: 'We diagnose filter problems accurately and repair them efficiently. When repair isn\'t cost-effective, we provide honest recommendations for replacement.',
    priceRange: { min: 100, max: 400, unit: 'starting at' },
    features: [
      { title: 'All Filter Types', description: 'Cartridge, sand, and DE filter service' },
      { title: 'Valve Repair', description: 'Multiport and push-pull valve service' },
      { title: 'Tank Repair', description: 'Address cracks and structural issues' },
      { title: 'Internal Parts', description: 'Replace laterals, grids, and cartridges' },
    ],
    includes: [
      'Complete filter inspection',
      'Pressure testing',
      'All replacement parts',
      'Flow verification after repair',
      'Maintenance recommendations',
    ],
    metaTitle: 'Pool Filter Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Expert pool filter repair in San Diego. Cartridge, sand & DE filters. All brands serviced. Call (619) 913-9335!',
    keywords: ['pool filter repair', 'filter not working', 'multiport valve repair', 'filter tank repair'],
    relatedServices: ['pool-filter-installation', 'pool-filter-cleaning', 'pool-pump-repair'],
  },

  {
    name: 'Pool Light Repair',
    slug: 'pool-light-repair',
    urlSlug: 'pool-light-repair-san-diego',
    category: 'repair',
    shortDescription: 'Repair and replacement of underwater pool lights for safety and ambiance.',
    longDescription: `Pool lights enhance nighttime swimming and add ambiance to your backyard. When they fail, we can diagnose the problem - whether it is the bulb, fixture, transformer, or wiring - and restore proper lighting. We service incandescent, halogen, and LED pool lights.`,
    problemStatement: 'Non-functioning pool lights limit nighttime pool use and can indicate electrical problems that pose safety risks. Some light failures are simple bulb issues; others involve more complex electrical work.',
    solutionStatement: 'We safely diagnose and repair pool light problems, from simple bulb replacements to complete fixture upgrades. We recommend LED conversions for energy efficiency and longevity.',
    priceRange: { min: 100, max: 450, unit: 'starting at' },
    features: [
      { title: 'Safe Diagnosis', description: 'Proper electrical testing procedures' },
      { title: 'Bulb Replacement', description: 'Incandescent, halogen, and LED bulbs' },
      { title: 'Fixture Repair', description: 'Seal, lens, and housing service' },
      { title: 'LED Upgrades', description: 'Convert to energy-efficient LED lighting' },
    ],
    includes: [
      'Electrical safety inspection',
      'Complete fixture check',
      'Watertight seal verification',
      'GFCI testing',
      'Upgrade recommendations',
    ],
    metaTitle: 'Pool Light Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool light repair in San Diego. LED upgrades available. Safe, reliable service. Call (619) 913-9335!',
    keywords: ['pool light repair', 'underwater light', 'LED pool light', 'pool light not working'],
    relatedServices: ['pool-automation-repair', 'pool-pump-repair', 'weekly-pool-cleaning'],
  },

  {
    name: 'Pool Automation Repair',
    slug: 'pool-automation-repair',
    urlSlug: 'pool-automation-repair-san-diego',
    category: 'repair',
    shortDescription: 'Repair of pool automation systems, controllers, and smart equipment.',
    longDescription: `Modern pools often include automation systems that control pumps, heaters, lights, and water features from a central controller or smartphone app. When these systems malfunction, we can diagnose and repair them, restoring convenient control of your pool.`,
    problemStatement: 'Automation failures can leave you unable to control basic pool functions. Problems range from communication errors to actuator failures to complete control system breakdowns.',
    solutionStatement: 'Our technicians are trained on major automation brands and can diagnose control system problems accurately. We repair or replace components to restore full functionality.',
    priceRange: { min: 150, max: 600, unit: 'starting at' },
    features: [
      { title: 'Major Brands', description: 'Pentair, Hayward, Jandy automation service' },
      { title: 'Controller Repair', description: 'Panel, display, and interface service' },
      { title: 'Actuator Service', description: 'Valve actuator repair and replacement' },
      { title: 'App Integration', description: 'Mobile app troubleshooting and setup' },
    ],
    includes: [
      'Complete system diagnosis',
      'Software/firmware updates',
      'Wiring inspection',
      'Programming verification',
      'User training on operation',
    ],
    metaTitle: 'Pool Automation Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Expert pool automation repair in San Diego. Pentair, Hayward, Jandy systems. Smart pool specialists. Call (619) 913-9335!',
    keywords: ['pool automation repair', 'pool controller repair', 'smart pool system', 'Pentair repair'],
    relatedServices: ['pool-automation-installation', 'pool-pump-repair', 'pool-light-repair'],
  },

  {
    name: 'Salt Water Pool Repair',
    slug: 'salt-water-pool-repair',
    urlSlug: 'salt-water-pool-repair-san-diego',
    category: 'repair',
    shortDescription: 'Repair of salt chlorine generators and salt water pool systems.',
    longDescription: `Salt water pools use chlorine generators to produce chlorine from dissolved salt. When these systems fail, you lose your automatic sanitization. We diagnose and repair salt cells, control boards, and related components to restore proper operation.`,
    problemStatement: 'Salt system failures leave your pool without automatic chlorination, requiring manual chemical addition until repaired. Common issues include cell scaling, board failures, and flow sensor problems.',
    solutionStatement: 'We diagnose salt system problems accurately and repair them efficiently. We also provide maintenance tips to extend cell life and prevent future issues.',
    priceRange: { min: 150, max: 700, unit: 'starting at' },
    features: [
      { title: 'Cell Inspection', description: 'Check for scaling and wear' },
      { title: 'Control Board', description: 'Diagnose and repair electronics' },
      { title: 'Flow Sensors', description: 'Test and replace flow switches' },
      { title: 'Salt Level Testing', description: 'Verify proper salt concentration' },
    ],
    includes: [
      'Complete system diagnosis',
      'Cell cleaning if applicable',
      'Control board testing',
      'Salt level verification',
      'Maintenance recommendations',
    ],
    metaTitle: 'Salt Water Pool Repair Service | San Diego | PoolLogic Pool Service',
    metaDescription: 'Expert salt water pool repair in San Diego. Salt cell, control board & sensor service. Call (619) 913-9335!',
    keywords: ['salt water pool repair', 'salt cell repair', 'chlorine generator', 'salt system service'],
    relatedServices: ['weekly-pool-cleaning', 'pool-automation-repair', 'pool-pump-repair'],
  },

  // ============================================================
  // INSTALLATION SERVICES
  // ============================================================
  {
    name: 'Pool Heater Installation',
    slug: 'pool-heater-installation',
    urlSlug: 'pool-heater-installation-san-diego',
    category: 'installation',
    shortDescription: 'Professional installation of new pool heaters for year-round comfort.',
    longDescription: `Extend your pool season with a professionally installed heater. We install gas heaters, heat pumps, and solar heating systems, helping you choose the right option for your pool, budget, and usage patterns. Proper installation ensures safe, efficient operation for years.`,
    problemStatement: 'Without heating, pool season is limited to a few warm months. Improper heater installation can result in poor performance, safety hazards, and premature failure.',
    solutionStatement: 'We help you select the right heater for your needs and install it properly for safe, efficient operation. A properly sized and installed heater can extend your pool season by months.',
    priceRange: { min: 3500, max: 8000, unit: 'starting at' },
    features: [
      { title: 'Expert Sizing', description: 'Calculate proper heater size for your pool' },
      { title: 'Gas or Electric', description: 'Natural gas, propane, or heat pump options' },
      { title: 'Code Compliance', description: 'Installation meets all local codes' },
      { title: 'System Integration', description: 'Connect to existing automation if present' },
    ],
    includes: [
      'Site evaluation and sizing',
      'Equipment selection assistance',
      'Professional installation',
      'Gas line connection (if applicable)',
      'Startup and operation training',
      'Manufacturer warranty registration',
    ],
    metaTitle: 'Pool Heater Installation | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool heater installation in San Diego. Gas, heat pump & solar options. Extend your pool season. Call (619) 913-9335!',
    keywords: ['pool heater installation', 'heat pump installation', 'pool heating system', 'gas pool heater'],
    relatedServices: ['pool-heater-repair', 'pool-automation-installation', 'pool-pump-installation'],
  },

  {
    name: 'Pool Pump Installation',
    slug: 'pool-pump-installation',
    urlSlug: 'pool-pump-installation-san-diego',
    category: 'installation',
    shortDescription: 'Installation of energy-efficient pool pumps to reduce costs and improve performance.',
    longDescription: `A new pool pump can dramatically reduce energy costs while improving water circulation. We install variable-speed pumps that qualify for utility rebates and provide years of quiet, efficient operation. Proper sizing and installation are critical for performance.`,
    problemStatement: 'Old single-speed pumps waste electricity and run loudly. They cannot adjust speed for different needs, running at full power even when less is sufficient.',
    solutionStatement: 'Variable-speed pumps reduce energy use by up to 80% while providing better filtration through longer, slower run times. We size and install pumps for optimal performance.',
    priceRange: { min: 1500, max: 3500, unit: 'starting at' },
    features: [
      { title: 'Variable Speed', description: 'Energy-efficient VS pump installation' },
      { title: 'Proper Sizing', description: 'Match pump to pool and plumbing' },
      { title: 'Rebate Assistance', description: 'Help with utility rebate applications' },
      { title: 'Programming', description: 'Set optimal speed schedules' },
    ],
    includes: [
      'Pump sizing evaluation',
      'Removal of old pump',
      'Professional installation',
      'Electrical connections',
      'Programming and optimization',
      'Utility rebate paperwork assistance',
    ],
    metaTitle: 'Pool Pump Installation | San Diego | PoolLogic Pool Service',
    metaDescription: 'Energy-efficient pool pump installation in San Diego. Variable speed pumps. Utility rebates available. Call (619) 913-9335!',
    keywords: ['pool pump installation', 'variable speed pump', 'VS pump', 'energy efficient pump'],
    relatedServices: ['pool-pump-repair', 'pool-filter-installation', 'pool-automation-installation'],
  },

  {
    name: 'Pool Filter Installation',
    slug: 'pool-filter-installation',
    urlSlug: 'pool-filter-installation-san-diego',
    category: 'installation',
    shortDescription: 'Installation of new pool filters for improved water clarity and easier maintenance.',
    longDescription: `A properly sized filter is essential for clear water and easy maintenance. We install cartridge, sand, and DE filters, helping you choose the right type for your pool, maintenance preferences, and water quality goals. Proper installation ensures optimal filtration.`,
    problemStatement: 'Undersized or outdated filters struggle to keep water clear and require frequent maintenance. The wrong filter type for your situation creates ongoing hassles.',
    solutionStatement: 'We help you select the right filter type and size, then install it properly for optimal performance. Modern filters offer better filtration with less maintenance.',
    priceRange: { min: 1200, max: 2800, unit: 'starting at' },
    features: [
      { title: 'Right Type', description: 'Cartridge, sand, or DE filter selection' },
      { title: 'Proper Sizing', description: 'Match filter capacity to pool volume' },
      { title: 'Quality Brands', description: 'Pentair, Hayward, Jandy filters' },
      { title: 'Plumbing Integration', description: 'Proper connection to existing system' },
    ],
    includes: [
      'Filter type consultation',
      'Sizing evaluation',
      'Removal of old filter',
      'Professional installation',
      'Startup and break-in procedure',
      'Maintenance training',
    ],
    metaTitle: 'Pool Filter Installation | San Diego | PoolLogic Pool Service',
    metaDescription: 'Professional pool filter installation in San Diego. Cartridge, sand & DE filters. Crystal-clear water. Call (619) 913-9335!',
    keywords: ['pool filter installation', 'new pool filter', 'cartridge filter', 'sand filter installation'],
    relatedServices: ['pool-filter-repair', 'pool-filter-cleaning', 'pool-pump-installation'],
  },

  {
    name: 'Pool Automation Installation',
    slug: 'pool-automation-installation',
    urlSlug: 'pool-automation-installation-san-diego',
    category: 'installation',
    shortDescription: 'Smart pool automation installation for convenient control from anywhere.',
    longDescription: `Control your pool from your smartphone with a modern automation system. We install complete automation packages that control pumps, heaters, lights, and water features from a central controller and mobile app. Enjoy the convenience of smart pool management.`,
    problemStatement: 'Manual pool control is inconvenient and easy to forget. Without automation, you cannot adjust settings remotely or create efficient schedules.',
    solutionStatement: 'Pool automation provides convenient control, energy savings through smart scheduling, and the ability to manage your pool from anywhere. We install and program complete systems.',
    priceRange: { min: 2500, max: 6000, unit: 'starting at' },
    features: [
      { title: 'Smart Control', description: 'Smartphone app control from anywhere' },
      { title: 'Complete Integration', description: 'Control pump, heater, lights, and more' },
      { title: 'Major Brands', description: 'Pentair, Hayward, Jandy systems' },
      { title: 'Voice Control', description: 'Compatible with Alexa and Google Home' },
    ],
    includes: [
      'System design consultation',
      'Equipment compatibility check',
      'Professional installation',
      'Wiring and programming',
      'App setup and training',
      'Ongoing support',
    ],
    metaTitle: 'Pool Automation Installation | San Diego | PoolLogic Pool Service',
    metaDescription: 'Smart pool automation installation in San Diego. Control your pool from anywhere. Pentair, Hayward, Jandy. Call (619) 913-9335!',
    keywords: ['pool automation', 'smart pool', 'pool control system', 'Pentair automation'],
    relatedServices: ['pool-automation-repair', 'pool-pump-installation', 'pool-light-repair'],
  },
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getServicesByCategory(category: 'maintenance' | 'repair' | 'installation'): Service[] {
  return services.filter((service) => service.category === category);
}

export function getMaintenanceServices(): Service[] {
  return getServicesByCategory('maintenance');
}

export function getRepairServices(): Service[] {
  return getServicesByCategory('repair');
}

export function getInstallationServices(): Service[] {
  return getServicesByCategory('installation');
}

export function getServiceByUrlSlug(urlSlug: string): Service | undefined {
  return services.find((service) => service.urlSlug === urlSlug);
}
