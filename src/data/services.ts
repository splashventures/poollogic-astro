import type { Service } from '@/types';

export const services: Service[] = [
  // ============================================================
  // MAINTENANCE SERVICES
  // ============================================================
  {
    name: 'Weekly Pool Cleaning',
    slug: 'weekly-pool-cleaning',
    urlSlug: 'weekly-pool-cleaning-service',
    category: 'maintenance',
    shortDescription:
      'We test and adjust chemicals, brush sidewalls, empty skimmer baskets, skim the surface, and keep your pool crystal clear year round!',
    longDescription:
      'We clean your pool to the highest industry standards. Our weekly pool cleaning service covers every detail: comprehensive water testing and chemical balancing, surface skimming, sidewall and tile brushing, vacuuming, skimmer and pump basket cleaning, and thorough equipment checks. We maintain detailed service logs so you always know the condition of your water and equipment. With consistent weekly visits, we catch small issues before they turn into costly repairs and keep your pool swim-ready every day of the year.',
    features: [
      {
        title: 'Chemical Testing & Balancing',
        description:
          'Test and adjust pH, chlorine, alkalinity, calcium hardness, and stabilizer levels to keep water safe and comfortable',
      },
      {
        title: 'Surface Skimming & Debris Removal',
        description:
          'Remove leaves, insects, and floating debris from the water surface so your pool always looks inviting',
      },
      {
        title: 'Sidewall & Tile Brushing',
        description:
          'Brush pool walls, steps, and waterline tile to prevent algae buildup and calcium deposits',
      },
      {
        title: 'Skimmer & Pump Basket Cleaning',
        description:
          'Empty all baskets to ensure unobstructed water flow and protect your pump from clogs',
      },
      {
        title: 'Equipment Inspection',
        description:
          'Monitor pump, filter pressure, heater, and automation systems each visit to catch problems early',
      },
    ],
    includes: [
      'All chemicals included in service price',
      'Digital service reports after each visit',
      'Filter pressure monitoring',
      'Priority scheduling for repairs',
      'Seasonal service adjustments',
    ],
    metaTitle: 'Weekly Pool Cleaning Service in California | Cabana Pools',
    metaDescription:
      'Professional weekly pool cleaning service in California. Chemical testing, surface skimming, sidewall brushing, and equipment checks included. Get a free quote today!',
    keywords: [
      'weekly pool cleaning',
      'pool cleaning service California',
      'pool maintenance near me',
      'residential pool service',
      'weekly pool maintenance',
    ],
    relatedServices: [
      'pool-filter-cleaning',
      'pool-algae-removal',
      'hot-tub-cleaning',
    ],
  },

  {
    name: 'Pool Filter Cleaning',
    slug: 'pool-filter-cleaning',
    urlSlug: 'pool-filter-cleaning-service',
    category: 'maintenance',
    shortDescription:
      'We make sure your filter keeps your pool water safe and crystal clear with thorough, professional filter cleaning.',
    longDescription:
      "We'll clean your filters regularly to ensure proper function and keep your water safe and crystal clear. Pool filters trap dirt, oils, and microscopic contaminants, but over time they become clogged and lose efficiency. Our filter cleaning service includes complete disassembly, deep chemical soaking, pressure washing of filter elements, inspection of all internal components, and careful reassembly. We service cartridge, sand, and DE filters from all major manufacturers and recommend a cleaning schedule based on your pool's specific needs.",
    features: [
      {
        title: 'Complete Disassembly & Inspection',
        description:
          'Remove and inspect every filter component for wear, cracking, or damage before cleaning',
      },
      {
        title: 'Deep Chemical Soak',
        description:
          'Soak filter elements in professional-grade cleaning solution to dissolve oils, minerals, and organic buildup',
      },
      {
        title: 'High-Pressure Rinse',
        description:
          'Pressure wash each pleat or grid to remove embedded debris and restore filtration capacity',
      },
      {
        title: 'Reassembly & Flow Verification',
        description:
          'Reinstall all components, verify proper seating, and confirm normal operating pressure',
      },
      {
        title: 'Filter Media Assessment',
        description:
          'Evaluate the remaining life of your filter media and recommend replacement when needed',
      },
    ],
    includes: [
      'All three filter types serviced (cartridge, sand, DE)',
      'Filter media replacement recommendation',
      'Pressure gauge check and calibration',
      'Written condition report',
      'O-ring lubrication and inspection',
    ],
    metaTitle: 'Pool Filter Cleaning Service in California | Cabana Pools',
    metaDescription:
      'Professional pool filter cleaning for cartridge, sand, and DE filters in California. Restore full filtration efficiency and keep your water crystal clear.',
    keywords: [
      'pool filter cleaning',
      'cartridge filter cleaning',
      'DE filter cleaning',
      'sand filter cleaning',
      'pool filter service',
    ],
    relatedServices: [
      'weekly-pool-cleaning',
      'pool-filter-repair',
      'pool-filter-installation',
    ],
  },

  {
    name: 'Pool Draining & Restart',
    slug: 'pool-draining-restart',
    urlSlug: 'pool-draining-restart-service',
    category: 'maintenance',
    shortDescription:
      'Complete pool draining, surface cleaning, and refilling with fresh water balanced for immediate swimming.',
    longDescription:
      'Over time, dissolved solids build up in pool water to levels that chemicals alone cannot correct. Our pool draining and restart service gives your pool a fresh start. We safely pump out all water with proper disposal, pressure wash and scrub every surface, inspect the pool shell for cracks or damage, and refill with fresh water. Once filled, we balance the chemistry so your pool is ready for immediate use. We recommend this service every 3 to 5 years or whenever TDS levels exceed acceptable ranges.',
    features: [
      {
        title: 'Safe & Complete Draining',
        description:
          'Pump out all water with proper disposal methods that comply with local regulations',
      },
      {
        title: 'Surface Pressure Washing',
        description:
          'Thoroughly pressure wash walls, floor, steps, and waterline tile to remove all buildup',
      },
      {
        title: 'Shell Inspection',
        description:
          'Examine the pool shell for cracks, delamination, or structural issues while the pool is empty',
      },
      {
        title: 'Fresh Water Fill & Chemistry Balancing',
        description:
          'Refill with fresh water and balance all chemical levels for safe, clear water from day one',
      },
    ],
    includes: [
      'Complete water removal and disposal',
      'Pressure washing of all surfaces',
      'Tile and waterline deep cleaning',
      'Fresh water fill and startup chemicals',
      'Written inspection report',
    ],
    metaTitle: 'Pool Draining & Restart Service in California | Cabana Pools',
    metaDescription:
      'Professional pool draining and restart service in California. Complete surface cleaning, shell inspection, and fresh water chemistry balancing. Call for a free quote!',
    keywords: [
      'pool draining service',
      'pool drain and refill',
      'pool restart service',
      'drain pool near me',
      'pool water replacement',
    ],
    relatedServices: [
      'pool-acid-washing',
      'pool-algae-removal',
      'weekly-pool-cleaning',
    ],
  },

  {
    name: 'Pool Algae Removal',
    slug: 'pool-algae-removal',
    urlSlug: 'pool-algae-removal-service',
    category: 'maintenance',
    shortDescription:
      'Complete elimination of green, mustard, and black algae to restore your pool to crystal-clear condition.',
    longDescription:
      'Algae can take over a pool in just days during warm weather, turning clear water green and making surfaces slippery and unsafe. Our algae removal service identifies the type of algae present, whether green, mustard, or stubborn black algae embedded in plaster, and applies targeted treatment to eliminate it completely. We shock the water, brush all surfaces, vacuum dead algae, clean the filter, and rebalance the chemistry. We also investigate the root cause of the outbreak and provide recommendations to prevent recurrence.',
    features: [
      {
        title: 'Algae Type Identification',
        description:
          'Determine whether the bloom is green, mustard, or black algae and select the most effective treatment approach',
      },
      {
        title: 'High-Dose Shock Treatment',
        description:
          'Apply professional-strength chlorine shock and algaecide to kill all algae throughout the pool',
      },
      {
        title: 'Brushing & Vacuum Removal',
        description:
          'Aggressively brush surfaces to break algae free and vacuum dead algae out of the pool',
      },
      {
        title: 'Filter Cleaning During Treatment',
        description:
          'Clean the filter during the treatment process to maintain circulation and remove trapped algae',
      },
      {
        title: 'Prevention Plan',
        description:
          'Identify the cause of the outbreak and provide actionable steps to prevent future algae growth',
      },
    ],
    includes: [
      'All treatment chemicals and algaecides',
      'Multiple service visits as needed until clear',
      'Filter cleaning during treatment',
      'Complete water chemistry rebalancing',
      'Written prevention recommendations',
    ],
    metaTitle: 'Pool Algae Removal Service in California | Cabana Pools',
    metaDescription:
      'Fast, effective pool algae removal in California. Green, mustard, and black algae treatment. Crystal-clear water guaranteed. Get a free estimate!',
    keywords: [
      'pool algae removal',
      'green pool cleanup',
      'algae treatment service',
      'black algae removal',
      'pool algae service California',
    ],
    relatedServices: [
      'weekly-pool-cleaning',
      'pool-draining-restart',
      'pool-filter-cleaning',
    ],
  },

  {
    name: 'Hot Tub Cleaning',
    slug: 'hot-tub-cleaning',
    urlSlug: 'hot-tub-cleaning-service',
    category: 'maintenance',
    shortDescription:
      'Professional hot tub and spa maintenance for safe, hygienic, and relaxing soaks every time.',
    longDescription:
      'Hot tubs and spas require specialized care due to higher water temperatures and concentrated use. Warm water creates an environment where bacteria and biofilm can develop rapidly without proper maintenance. Our hot tub cleaning service includes thorough water testing and chemical treatment, filter cleaning or replacement, jet and drain maintenance, waterline scrubbing, and shell cleaning. We keep your spa hygienic, balanced, and ready for relaxation year round.',
    features: [
      {
        title: 'Water Testing & Chemical Balancing',
        description:
          'Test and adjust sanitizer, pH, alkalinity, and calcium levels for safe, comfortable spa water',
      },
      {
        title: 'Filter Service',
        description:
          'Clean or replace spa filter cartridges to maintain proper water flow and filtration',
      },
      {
        title: 'Surface & Jet Cleaning',
        description:
          'Wipe the waterline, clean jet orifices, and check drains to prevent biofilm buildup',
      },
      {
        title: 'Equipment Check',
        description:
          'Verify heater, pump, blower, and control panel operation to catch problems early',
      },
    ],
    includes: [
      'All sanitizing and balancing chemicals',
      'Filter cleaning each visit',
      'Cover inspection and cleaning',
      'Jet and orifice maintenance',
      'Water replacement scheduling',
    ],
    metaTitle: 'Hot Tub Cleaning Service in California | Cabana Pools',
    metaDescription:
      'Professional hot tub and spa cleaning in California. Safe water, thorough maintenance, and expert care for your spa. Schedule service today!',
    keywords: [
      'hot tub cleaning',
      'spa maintenance service',
      'hot tub service near me',
      'spa cleaning California',
      'jacuzzi cleaning service',
    ],
    relatedServices: [
      'weekly-pool-cleaning',
      'pool-heater-repair',
      'pool-filter-cleaning',
    ],
  },

  {
    name: 'Pool Acid Washing',
    slug: 'pool-acid-washing',
    urlSlug: 'pool-acid-washing-service',
    category: 'maintenance',
    shortDescription:
      'Deep acid washing of pool plaster to remove stubborn stains, mineral deposits, and discoloration.',
    longDescription:
      "If your pool's showing signs of age, a pool acid washing can give it the refresh it needs. Acid washing removes a thin layer of plaster along with embedded stains, algae residue, and mineral deposits that normal cleaning cannot touch. This restorative service reveals fresh, bright plaster beneath and can dramatically improve the appearance of your pool. It is most effective on white or light-colored plaster surfaces. We handle the entire process: draining, acid application, scrubbing, neutralization, refilling, and final chemistry balancing.",
    features: [
      {
        title: 'Complete Pool Draining',
        description:
          'Safely remove all water with proper disposal before acid treatment begins',
      },
      {
        title: 'Professional Acid Application',
        description:
          'Apply muriatic acid solution evenly across all plaster surfaces with careful technique',
      },
      {
        title: 'Hand Scrubbing',
        description:
          'Scrub every surface by hand to lift stains and ensure thorough, even cleaning',
      },
      {
        title: 'Neutralization & Refill',
        description:
          'Neutralize all acid residue, refill with fresh water, and balance chemistry for immediate use',
      },
    ],
    includes: [
      'Complete draining and refilling',
      'All acid and neutralizing chemicals',
      'Tile and waterline cleaning',
      'Fresh water chemistry balancing',
      'Surface condition assessment and report',
    ],
    metaTitle: 'Pool Acid Washing Service in California | Cabana Pools',
    metaDescription:
      'Professional pool acid washing in California. Remove stains, restore plaster brightness, and refresh your pool surface. Get a free estimate!',
    keywords: [
      'pool acid wash',
      'pool acid washing service',
      'pool plaster cleaning',
      'pool stain removal',
      'acid wash pool California',
    ],
    relatedServices: [
      'pool-draining-restart',
      'pool-algae-removal',
      'weekly-pool-cleaning',
    ],
  },

  // ============================================================
  // REPAIR SERVICES
  // ============================================================
  {
    name: 'Pool Heater Repair',
    slug: 'pool-heater-repair',
    urlSlug: 'pool-heater-repair-service',
    category: 'repair',
    shortDescription:
      'We troubleshoot and fix all pool heating problems to keep your water at the perfect temperature.',
    longDescription:
      'When your pool heater stops working, we diagnose and repair the problem quickly so you can get back to enjoying warm water. Our technicians service gas heaters, heat pumps, and solar heating systems from all major manufacturers including Hayward, Pentair, Raypak, and Jandy. From ignition failures and thermostat issues to heat exchanger problems and error codes, we have the experience to identify the root cause and fix it right the first time. We stock common replacement parts and can often complete repairs in a single visit.',
    features: [
      {
        title: 'Expert Troubleshooting',
        description:
          'Systematic diagnosis to identify the exact cause of heater failure, not just the symptoms',
      },
      {
        title: 'All Brands & Types Serviced',
        description:
          'Hayward, Pentair, Raypak, Jandy, and more, including gas heaters, heat pumps, and solar systems',
      },
      {
        title: 'Quality OEM Parts',
        description:
          'We use original manufacturer or equivalent quality replacement parts for lasting repairs',
      },
      {
        title: 'Post-Repair Testing',
        description:
          'Thorough testing of the complete heating system after repair to verify proper operation',
      },
      {
        title: 'Honest Repair vs. Replace Assessment',
        description:
          'Straightforward advice on whether repairing or replacing your heater makes more financial sense',
      },
    ],
    includes: [
      'Diagnostic fee applied toward repair cost',
      'Written estimate before any work begins',
      'Manufacturer parts warranty',
      '90-day labor warranty',
      'System optimization recommendations',
    ],
    metaTitle: 'Pool Heater Repair Service in California | Cabana Pools',
    metaDescription:
      'Expert pool heater repair in California. Gas heaters, heat pumps, and solar systems. Fast diagnosis and reliable fixes. Call for same-day service!',
    keywords: [
      'pool heater repair',
      'pool heater not working',
      'gas pool heater repair',
      'heat pump repair',
      'pool heater service California',
    ],
    relatedServices: [
      'pool-heater-installation',
      'pool-pump-repair',
      'pool-automation-repair',
    ],
  },

  {
    name: 'Pool Pump Repair',
    slug: 'pool-pump-repair',
    urlSlug: 'pool-pump-repair-service',
    category: 'repair',
    shortDescription:
      'A functional pool pump is critical to usability. We diagnose and repair pump problems fast to restore proper circulation.',
    longDescription:
      'The pump is the heart of your pool system, and when it fails, water quality deteriorates quickly. Our technicians diagnose pump problems ranging from motor failures and seal leaks to impeller clogs and electrical faults. We perform repairs to restore proper circulation and filtration as fast as possible. For older single-speed pumps nearing end of life, we can recommend energy-efficient variable-speed upgrades that may qualify for utility rebates and pay for themselves in energy savings.',
    features: [
      {
        title: 'Complete Motor Diagnosis',
        description:
          'Test motor windings, capacitors, and bearings to pinpoint the exact cause of failure',
      },
      {
        title: 'Seal & Gasket Replacement',
        description:
          'Replace worn shaft seals and housing gaskets to stop leaks and prevent motor damage',
      },
      {
        title: 'Impeller Service',
        description:
          'Clear clogs, replace worn impellers, and restore proper water flow rates',
      },
      {
        title: 'Electrical Troubleshooting',
        description:
          'Diagnose wiring, timer, and control issues that prevent the pump from running correctly',
      },
      {
        title: 'Upgrade Consultation',
        description:
          'Honest assessment of repair vs. replacement, with variable-speed pump recommendations when appropriate',
      },
    ],
    includes: [
      'On-site diagnostic service',
      'Written estimate before work begins',
      'Quality replacement parts',
      '90-day labor warranty',
      'Energy efficiency recommendations',
    ],
    metaTitle: 'Pool Pump Repair Service in California | Cabana Pools',
    metaDescription:
      'Fast, reliable pool pump repair in California. Motor, seal, and impeller service for all brands. Call for same-day diagnosis and repair!',
    keywords: [
      'pool pump repair',
      'pool pump not working',
      'pool pump motor repair',
      'pump leak repair',
      'pool pump service California',
    ],
    relatedServices: [
      'pool-pump-installation',
      'pool-filter-repair',
      'pool-heater-repair',
    ],
  },

  {
    name: 'Pool Filter Repair',
    slug: 'pool-filter-repair',
    urlSlug: 'pool-filter-repair-service',
    category: 'repair',
    shortDescription:
      'Expert repair of cartridge, sand, and DE pool filters to restore clean, clear water.',
    longDescription:
      'Filter problems directly affect water clarity and put extra strain on your pump and other equipment. We repair all filter types, including cartridge, sand, and DE filters, addressing issues from cracked tanks and failed multiport valves to broken laterals and damaged grids. Our technicians diagnose filter problems accurately and restore proper filtration as quickly as possible. When a repair is not cost-effective, we provide honest recommendations for filter replacement.',
    features: [
      {
        title: 'All Filter Types Serviced',
        description:
          'Expert repair for cartridge, sand, and DE filters from Pentair, Hayward, Jandy, and other manufacturers',
      },
      {
        title: 'Valve Repair & Replacement',
        description:
          'Service multiport valves, push-pull valves, and diverter valves to restore proper flow control',
      },
      {
        title: 'Tank & Housing Repair',
        description:
          'Address cracks, damaged clamp bands, and structural issues in filter tanks and housings',
      },
      {
        title: 'Internal Component Replacement',
        description:
          'Replace laterals, grids, cartridges, standpipes, and manifolds as needed',
      },
    ],
    includes: [
      'Complete filter system inspection',
      'Pressure testing after repair',
      'All replacement parts and labor',
      'Flow rate verification',
      'Maintenance schedule recommendations',
    ],
    metaTitle: 'Pool Filter Repair Service in California | Cabana Pools',
    metaDescription:
      'Expert pool filter repair in California. Cartridge, sand, and DE filters. Multiport valve and tank repair for all brands. Call for fast service!',
    keywords: [
      'pool filter repair',
      'multiport valve repair',
      'filter tank repair',
      'pool filter not working',
      'pool filter service California',
    ],
    relatedServices: [
      'pool-filter-installation',
      'pool-filter-cleaning',
      'pool-pump-repair',
    ],
  },

  {
    name: 'Pool Automation Repair',
    slug: 'pool-automation-repair',
    urlSlug: 'pool-automation-repair-service',
    category: 'repair',
    shortDescription:
      'Repair of pool automation controllers, actuators, and smart systems to restore convenient pool management.',
    longDescription:
      'Modern pools rely on automation systems to control pumps, heaters, lights, water features, and chlorinators from a central panel or smartphone app. When these systems malfunction, it can leave you unable to control basic pool functions. Our technicians are trained on all major automation brands, including Pentair IntelliCenter, Hayward OmniLogic, and Jandy iAqualink. We diagnose communication errors, actuator failures, display malfunctions, and complete control system breakdowns, restoring full functionality so you can manage your pool effortlessly.',
    features: [
      {
        title: 'Major Brand Expertise',
        description:
          'Factory-trained service on Pentair, Hayward, and Jandy automation systems and controllers',
      },
      {
        title: 'Controller & Display Repair',
        description:
          'Diagnose and fix panel issues, unresponsive displays, and interface malfunctions',
      },
      {
        title: 'Actuator & Relay Service',
        description:
          'Repair or replace valve actuators, relays, and communication modules',
      },
      {
        title: 'App & Connectivity Troubleshooting',
        description:
          'Resolve Wi-Fi connectivity issues, firmware problems, and mobile app communication failures',
      },
    ],
    includes: [
      'Complete system diagnosis',
      'Software and firmware updates',
      'Wiring and connection inspection',
      'Programming verification and correction',
      'User training on system operation',
    ],
    metaTitle: 'Pool Automation Repair Service in California | Cabana Pools',
    metaDescription:
      'Expert pool automation repair in California. Pentair, Hayward, and Jandy systems. Controller, actuator, and connectivity fixes. Call today!',
    keywords: [
      'pool automation repair',
      'pool controller repair',
      'Pentair IntelliCenter repair',
      'pool automation not working',
      'smart pool system repair',
    ],
    relatedServices: [
      'pool-automation-installation',
      'pool-pump-repair',
      'pool-light-repair',
    ],
  },

  {
    name: 'Pool Light Repair',
    slug: 'pool-light-repair',
    urlSlug: 'pool-light-repair-service',
    category: 'repair',
    shortDescription:
      'Safe diagnosis and repair of underwater pool lights, including LED upgrades for better efficiency.',
    longDescription:
      'Pool lights enhance nighttime swimming safety and add beautiful ambiance to your backyard. When they fail, it limits pool use after dark and may indicate electrical issues that need attention. Our technicians safely diagnose pool light problems, whether the issue is a burned-out bulb, a corroded fixture, a failed transformer, or faulty wiring. We service incandescent, halogen, and LED pool lights, and we recommend LED conversions for customers looking to reduce energy costs and enjoy longer-lasting, more vibrant lighting.',
    features: [
      {
        title: 'Safe Electrical Diagnosis',
        description:
          'Proper electrical testing procedures to identify the exact point of failure safely',
      },
      {
        title: 'Bulb & Lamp Replacement',
        description:
          'Replace incandescent, halogen, or LED lamps with the correct specification for your fixture',
      },
      {
        title: 'Fixture & Seal Repair',
        description:
          'Repair or replace lens gaskets, housing seals, and fixture components to maintain watertight integrity',
      },
      {
        title: 'LED Conversion Options',
        description:
          'Upgrade to energy-efficient, long-lasting LED lights with color-changing capabilities',
      },
    ],
    includes: [
      'Electrical safety inspection',
      'Complete fixture and wiring check',
      'Watertight seal verification',
      'GFCI testing and verification',
      'LED upgrade recommendations',
    ],
    metaTitle: 'Pool Light Repair Service in California | Cabana Pools',
    metaDescription:
      'Professional pool light repair in California. Safe electrical diagnosis, LED upgrades available. Restore your pool lighting today!',
    keywords: [
      'pool light repair',
      'underwater pool light',
      'LED pool light repair',
      'pool light not working',
      'pool light replacement',
    ],
    relatedServices: [
      'pool-light-replacement',
      'pool-automation-repair',
      'pool-pump-repair',
    ],
  },

  {
    name: 'Salt Water Pool Repair',
    slug: 'salt-water-pool-repair',
    urlSlug: 'salt-water-pool-repair-service',
    category: 'repair',
    shortDescription:
      'Repair of salt chlorine generators, salt cells, and control boards to restore automatic sanitization.',
    longDescription:
      'Salt water pools use chlorine generators to produce chlorine automatically from dissolved salt, providing a gentler, more consistent sanitization experience. When these systems fail, your pool loses its automatic chlorination and water quality can decline rapidly. We diagnose and repair salt cells, control boards, flow sensors, and related components across all major brands. We also provide maintenance guidance to extend cell life and prevent common problems like calcium scaling and low salt errors.',
    features: [
      {
        title: 'Salt Cell Inspection & Cleaning',
        description:
          'Inspect the cell for calcium scaling, worn plates, and reduced output, then clean or recommend replacement',
      },
      {
        title: 'Control Board Diagnosis',
        description:
          'Test and repair the electronic control board, error codes, and power supply components',
      },
      {
        title: 'Flow Sensor & Switch Service',
        description:
          'Test and replace flow sensors and switches that prevent the system from activating',
      },
      {
        title: 'Salt Level Verification',
        description:
          'Independently measure salt concentration and calibrate the system for accurate readings',
      },
    ],
    includes: [
      'Complete salt system diagnosis',
      'Cell cleaning (acid wash if applicable)',
      'Control board and wiring inspection',
      'Salt level testing and adjustment',
      'Maintenance recommendations to extend cell life',
    ],
    metaTitle: 'Salt Water Pool Repair Service in California | Cabana Pools',
    metaDescription:
      'Expert salt water pool repair in California. Salt cell, control board, and sensor service for all brands. Restore automatic chlorination today!',
    keywords: [
      'salt water pool repair',
      'salt cell repair',
      'chlorine generator repair',
      'salt system not working',
      'salt water pool service California',
    ],
    relatedServices: [
      'weekly-pool-cleaning',
      'pool-automation-repair',
      'pool-pump-repair',
    ],
  },

  // ============================================================
  // INSTALLATION SERVICES
  // ============================================================
  {
    name: 'Pool Heater Installation',
    slug: 'pool-heater-installation',
    urlSlug: 'pool-heater-installation-service',
    category: 'installation',
    shortDescription:
      'Professional installation of gas heaters, heat pumps, and solar heating systems for year-round swimming.',
    longDescription:
      'Extend your swimming season with a professionally installed pool heater. We install gas heaters, heat pumps, and solar heating systems, helping you choose the right option based on your pool size, budget, climate, and usage patterns. Proper sizing and installation are critical to safe, efficient, and long-lasting operation. Our technicians handle every detail, from equipment selection and gas line connections to electrical work, code compliance, and integration with your existing automation system.',
    features: [
      {
        title: 'Expert Sizing & Selection',
        description:
          'Calculate the right heater size for your pool volume, desired temperature rise, and local climate',
      },
      {
        title: 'Gas, Electric & Solar Options',
        description:
          'Install natural gas, propane, heat pump, or solar heating systems based on your preferences',
      },
      {
        title: 'Full Code Compliance',
        description:
          'Every installation meets local building codes, gas codes, and electrical safety standards',
      },
      {
        title: 'Automation Integration',
        description:
          'Connect your new heater to existing pool automation for convenient remote control',
      },
      {
        title: 'Startup & Training',
        description:
          'Complete system startup, temperature programming, and hands-on operation training',
      },
    ],
    includes: [
      'Site evaluation and heater sizing',
      'Equipment selection assistance',
      'Professional installation and plumbing',
      'Gas line connection (if applicable)',
      'Startup, testing, and owner training',
    ],
    metaTitle: 'Pool Heater Installation Service in California | Cabana Pools',
    metaDescription:
      'Professional pool heater installation in California. Gas heaters, heat pumps, and solar systems. Expert sizing and code-compliant installation. Get a quote!',
    keywords: [
      'pool heater installation',
      'heat pump installation',
      'gas pool heater install',
      'solar pool heater',
      'pool heater installation California',
    ],
    relatedServices: [
      'pool-heater-repair',
      'pool-automation-installation',
      'pool-pump-installation',
    ],
  },

  {
    name: 'Pool Pump Installation',
    slug: 'pool-pump-installation',
    urlSlug: 'pool-pump-installation-service',
    category: 'installation',
    shortDescription:
      'Installation of energy-efficient variable-speed pool pumps to reduce costs and improve circulation.',
    longDescription:
      'A new pool pump can dramatically reduce your energy costs while improving water circulation and filtration. We install variable-speed pumps that comply with California energy regulations, qualify for utility rebates, and provide years of quiet, efficient operation. Proper sizing and installation are essential for performance, so we evaluate your pool volume, plumbing diameter, and equipment pad layout before recommending the right pump. We handle old pump removal, new installation, electrical connections, programming, and rebate paperwork.',
    features: [
      {
        title: 'Variable-Speed Technology',
        description:
          'Install energy-efficient VS pumps that reduce electricity costs by up to 80% compared to single-speed',
      },
      {
        title: 'Proper Sizing & Selection',
        description:
          'Match pump capacity to your pool volume and plumbing system for optimal flow and efficiency',
      },
      {
        title: 'Utility Rebate Assistance',
        description:
          'Help with rebate applications so you can take advantage of available energy incentive programs',
      },
      {
        title: 'Speed Schedule Programming',
        description:
          'Program optimal speed schedules for filtration, cleaning, heating, and water features',
      },
    ],
    includes: [
      'Pump sizing evaluation',
      'Removal and disposal of old pump',
      'Professional installation and plumbing',
      'Electrical connections and bonding',
      'Speed schedule programming and optimization',
    ],
    metaTitle: 'Pool Pump Installation Service in California | Cabana Pools',
    metaDescription:
      'Energy-efficient pool pump installation in California. Variable-speed pumps, utility rebates, and expert installation. Save up to 80% on energy costs!',
    keywords: [
      'pool pump installation',
      'variable speed pump installation',
      'VS pool pump',
      'energy efficient pool pump',
      'pool pump installation California',
    ],
    relatedServices: [
      'pool-pump-repair',
      'pool-filter-installation',
      'pool-automation-installation',
    ],
  },

  {
    name: 'Pool Filter Installation',
    slug: 'pool-filter-installation',
    urlSlug: 'pool-filter-installation-service',
    category: 'installation',
    shortDescription:
      'Installation of properly sized pool filters for improved water clarity, better efficiency, and easier maintenance.',
    longDescription:
      'A properly sized filter is essential for clear water and manageable maintenance. We install cartridge, sand, and DE filters from top manufacturers including Pentair, Hayward, and Jandy, helping you choose the right type and size for your pool volume, pump output, and maintenance preferences. Our installation includes removal of the old filter, proper plumbing connections, initial startup and break-in procedures, and hands-on training so you understand your new filter system.',
    features: [
      {
        title: 'Right Filter Type Selection',
        description:
          'Help you choose between cartridge, sand, or DE filtration based on your pool and lifestyle',
      },
      {
        title: 'Proper Sizing',
        description:
          'Match filter capacity to your pool volume and pump flow rate for optimal performance',
      },
      {
        title: 'Quality Brand Options',
        description:
          'Pentair, Hayward, Jandy, and other top-tier filter systems with strong warranty coverage',
      },
      {
        title: 'Complete Plumbing Integration',
        description:
          'Proper connection to your existing plumbing, valves, and equipment pad layout',
      },
    ],
    includes: [
      'Filter type consultation and sizing',
      'Removal and disposal of old filter',
      'Professional installation and plumbing',
      'Initial startup and break-in procedure',
      'Maintenance training and schedule',
    ],
    metaTitle: 'Pool Filter Installation Service in California | Cabana Pools',
    metaDescription:
      'Professional pool filter installation in California. Cartridge, sand, and DE filters properly sized for crystal-clear water. Call for a free estimate!',
    keywords: [
      'pool filter installation',
      'new pool filter',
      'cartridge filter installation',
      'sand filter installation',
      'pool filter installation California',
    ],
    relatedServices: [
      'pool-filter-repair',
      'pool-filter-cleaning',
      'pool-pump-installation',
    ],
  },

  {
    name: 'Pool Automation Installation',
    slug: 'pool-automation-installation',
    urlSlug: 'pool-automation-installation-service',
    category: 'installation',
    shortDescription:
      'Automation systems can make your pool life easier. Control pumps, heaters, lights, and more from your phone.',
    longDescription:
      'Control your entire pool from your smartphone with a modern automation system. We install complete automation packages from Pentair, Hayward, and Jandy that let you manage pumps, heaters, lights, water features, and chlorinators from a central controller or mobile app. Automation provides convenient remote control, energy savings through intelligent scheduling, and the ability to manage your pool from anywhere. We handle system design, installation, wiring, programming, app setup, and thorough training so you can take full advantage of smart pool technology.',
    features: [
      {
        title: 'Smartphone & App Control',
        description:
          'Manage every pool function from your phone, tablet, or computer, no matter where you are',
      },
      {
        title: 'Complete Equipment Integration',
        description:
          'Connect and control your pump, heater, lights, water features, and salt system from one interface',
      },
      {
        title: 'Major Brand Systems',
        description:
          'Pentair IntelliCenter, Hayward OmniLogic, Jandy iAqualink, and other leading platforms',
      },
      {
        title: 'Voice Control Compatibility',
        description:
          'Set up integration with Amazon Alexa, Google Home, and other smart home ecosystems',
      },
      {
        title: 'Smart Scheduling',
        description:
          'Program intelligent schedules that optimize energy use and keep your pool perfectly maintained',
      },
    ],
    includes: [
      'System design and equipment compatibility check',
      'Professional installation and wiring',
      'Complete programming and schedule setup',
      'Mobile app installation and configuration',
      'Hands-on owner training and documentation',
    ],
    metaTitle:
      'Pool Automation Installation Service in California | Cabana Pools',
    metaDescription:
      'Smart pool automation installation in California. Control your pool from anywhere with Pentair, Hayward, or Jandy systems. Get a free consultation!',
    keywords: [
      'pool automation installation',
      'smart pool system',
      'pool control system',
      'Pentair IntelliCenter installation',
      'pool automation California',
    ],
    relatedServices: [
      'pool-automation-repair',
      'pool-pump-installation',
      'pool-heater-installation',
    ],
  },

  {
    name: 'Pool Light Replacement',
    slug: 'pool-light-replacement',
    urlSlug: 'pool-light-replacement-service',
    category: 'installation',
    shortDescription:
      'Say goodbye to difficult, potentially dangerous swimming pool light replacement. We handle it safely and professionally.',
    longDescription:
      'Replacing underwater pool lights involves working with electricity near water, which requires proper training, tools, and safety procedures. Our technicians handle the entire process safely, from draining the light niche and removing the old fixture to installing the new light, verifying watertight seals, and testing GFCI protection. Whether you need a simple bulb swap or a complete fixture upgrade to modern LED technology, we make the process safe, straightforward, and stress-free. LED upgrades offer dramatic energy savings, longer lifespan, and vibrant color options.',
    features: [
      {
        title: 'Safe Professional Installation',
        description:
          'Trained technicians follow proper safety protocols for all electrical work near water',
      },
      {
        title: 'LED Upgrade Options',
        description:
          'Replace outdated incandescent fixtures with energy-efficient LED lights in white or color-changing',
      },
      {
        title: 'Watertight Seal Guarantee',
        description:
          'New gaskets, cord seals, and proper conduit work to ensure no water intrusion',
      },
      {
        title: 'GFCI Safety Verification',
        description:
          'Test and verify ground fault circuit interrupter protection for all pool lighting circuits',
      },
      {
        title: 'Multiple Fixture Options',
        description:
          'Choose from a range of sizes, brightness levels, and color options to match your vision',
      },
    ],
    includes: [
      'Removal and disposal of old fixture',
      'New light fixture and lamp installation',
      'All gaskets, seals, and hardware',
      'Electrical testing and GFCI verification',
      'Automation integration if applicable',
    ],
    metaTitle: 'Pool Light Replacement Service in California | Cabana Pools',
    metaDescription:
      'Professional pool light replacement in California. Safe installation, LED upgrades, and color-changing options. Let us handle the hard part!',
    keywords: [
      'pool light replacement',
      'LED pool light installation',
      'underwater pool light',
      'pool light upgrade',
      'pool light replacement California',
    ],
    relatedServices: [
      'pool-light-repair',
      'pool-automation-installation',
      'pool-pump-installation',
    ],
  },
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getServicesByCategory(
  category: 'maintenance' | 'repair' | 'installation',
): Service[] {
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
