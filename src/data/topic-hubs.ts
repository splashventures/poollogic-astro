export interface TopicHub {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  introContent: string;
  relatedServiceSlugs: string[];
}

export const topicHubs: TopicHub[] = [
  {
    slug: 'pool-cleaning',
    name: 'Pool Cleaning',
    metaTitle: 'Pool Cleaning Guides & Tips | San Diego Pool Care | PoolLogic',
    metaDescription: 'Expert pool cleaning guides for San Diego pool owners. Learn weekly cleaning routines, chemical balancing, skimming techniques, and when to call a professional. 500+ 5-star reviews.',
    heroDescription: 'Everything you need to know about keeping your pool sparkling clean — from weekly routines and chemical balancing to professional deep cleans.',
    introContent: `A clean pool isn't just about appearance — it protects your family's health, extends your equipment's lifespan, and preserves your investment. San Diego's year-round swimming season means your pool needs consistent attention, whether you handle it yourself or hire a professional.

These guides cover every aspect of pool cleaning: weekly maintenance routines, proper chemical testing and balancing, skimming and brushing techniques, vacuuming methods, and how to handle common problems like cloudy water or stubborn stains. We also break down the real costs of pool cleaning in San Diego so you can make informed decisions.

Whether you're a new pool owner learning the basics or a seasoned DIYer looking for advanced tips, these resources will help you maintain crystal-clear water all year long.`,
    relatedServiceSlugs: ['pool-cleaning-service-san-diego', 'pool-acid-washing-san-diego'],
  },
  {
    slug: 'pool-filter',
    name: 'Pool Filters',
    metaTitle: 'Pool Filter Guides: Cleaning, Repair & Installation | PoolLogic',
    metaDescription: 'Complete pool filter guides covering cartridge, sand, and DE filters. Learn cleaning schedules, troubleshooting tips, and when to replace your filter. San Diego pool experts.',
    heroDescription: 'Your pool filter is the backbone of clean water. Learn how to maintain, troubleshoot, and upgrade your filtration system.',
    introContent: `Your pool filter removes debris, bacteria, and contaminants that chemicals alone can't handle. A well-maintained filter means clearer water, lower chemical costs, and less strain on your pump. Neglect it, and you'll see cloudy water, algae growth, and premature equipment failure.

San Diego pools face unique filtration challenges: sunscreen residue from year-round swimming, pollen from native plants, and hard water minerals that clog filter media faster than in other regions. Understanding your filter type — cartridge, sand, or diatomaceous earth (DE) — is the first step toward proper maintenance.

These guides walk you through filter cleaning schedules, pressure gauge readings, signs of wear, and when it makes more sense to replace rather than repair. We also cover the latest energy-efficient filtration options that can save San Diego homeowners hundreds per year on electricity.`,
    relatedServiceSlugs: ['pool-filter-cleaning-service-san-diego', 'pool-filter-repair-san-diego', 'pool-filter-installation-san-diego'],
  },
  {
    slug: 'pool-pump',
    name: 'Pool Pumps',
    metaTitle: 'Pool Pump Guides: Repair, Replacement & Efficiency | PoolLogic',
    metaDescription: 'Expert pool pump guides for San Diego pool owners. Troubleshoot common issues, compare single-speed vs variable-speed pumps, and learn maintenance tips. Call (619) 913-9335.',
    heroDescription: 'Your pump circulates thousands of gallons daily. Learn how to keep it running efficiently and when it\'s time for a repair or upgrade.',
    introContent: `Your pool pump is the heart of your circulation system — it moves water through the filter, distributes chemicals evenly, and prevents stagnation that leads to algae and bacteria. When your pump fails, everything else suffers.

In San Diego, most pools run their pumps 8-12 hours daily during summer. That constant operation means pumps face significant wear over time. Common issues include motor noise, seal leaks, loss of prime, and reduced flow — all problems that get worse (and more expensive) when ignored.

These guides help you diagnose pump problems early, decide between repair and replacement, understand the energy savings of variable-speed upgrades, and maintain your pump for maximum lifespan. San Diego's SDG&E rates make pump efficiency especially important — a variable-speed pump can save $50-80 per month compared to a single-speed model.`,
    relatedServiceSlugs: ['pool-pump-repair-san-diego', 'pool-pump-installation-san-diego'],
  },
  {
    slug: 'pool-heater',
    name: 'Pool Heaters',
    metaTitle: 'Pool Heater Guides: Repair, Sizing & Efficiency | PoolLogic',
    metaDescription: 'Pool heater guides for San Diego homeowners. Compare gas, electric, and heat pump heaters. Troubleshoot common issues and learn maintenance tips. Free quotes available.',
    heroDescription: 'Extend your swimming season year-round. Learn about heater types, efficiency ratings, common repairs, and how to choose the right heater for your San Diego pool.',
    introContent: `While San Diego enjoys mild weather year-round, pool water temperatures can drop into the low 60s during winter months — too cold for comfortable swimming. A properly sized pool heater extends your swimming season to 12 months and increases your home's value.

Choosing the right heater depends on your pool size, desired temperature, budget, and how quickly you need the water heated. Gas heaters heat fastest but cost more to operate. Heat pumps are the most energy-efficient option for San Diego's climate, leveraging our warm ambient air temperatures to heat water at a fraction of the cost.

These guides cover everything from heater sizing and installation considerations to troubleshooting error codes, scheduling maintenance, and understanding when repair costs justify a replacement. We also compare operating costs for each heater type in the San Diego market.`,
    relatedServiceSlugs: ['pool-heater-repair-san-diego', 'pool-heater-installation-san-diego'],
  },
  {
    slug: 'pool-algae',
    name: 'Algae Treatment',
    metaTitle: 'Pool Algae Treatment & Prevention Guides | PoolLogic San Diego',
    metaDescription: 'Identify and eliminate pool algae fast. Expert guides on green, mustard, and black algae treatment plus prevention strategies for San Diego pools. Call (619) 913-9335.',
    heroDescription: 'Green pool? Don\'t panic. Learn how to identify, treat, and prevent every type of pool algae — from green blooms to stubborn black algae.',
    introContent: `Algae is every pool owner's nightmare, but it's also entirely preventable and treatable. San Diego's warm temperatures and abundant sunshine create ideal conditions for algae growth, especially during summer months when pools see heavy use and chlorine demand spikes.

Understanding algae types is crucial for effective treatment. Green algae is the most common and easiest to eliminate with proper shock treatment. Yellow (mustard) algae is chlorine-resistant and requires specialized algaecides. Black algae forms deep roots in plaster and gunite surfaces and is the most difficult to eradicate completely.

These guides teach you how to identify algae by color and location, apply the right treatment protocol for each type, and — most importantly — prevent algae from returning. You'll learn proper chemical maintenance, circulation requirements, and environmental factors specific to San Diego that contribute to algae growth.`,
    relatedServiceSlugs: ['pool-algae-removal-service-san-diego', 'pool-cleaning-service-san-diego'],
  },
  {
    slug: 'pool-drain',
    name: 'Pool Draining',
    metaTitle: 'Pool Draining & Restart Guides | When & How to Drain | PoolLogic',
    metaDescription: 'Learn when and how to safely drain your San Diego pool. Guides on drain-and-restart service, TDS levels, plaster care, and local water regulations. Expert advice.',
    heroDescription: 'Draining your pool is a major operation that requires planning. Learn when it\'s necessary, how it\'s done safely, and what to expect from a professional drain-and-restart.',
    introContent: `Most San Diego pools need to be drained and refilled every 5-7 years as total dissolved solids (TDS) build up to levels that chemicals can't correct. High TDS causes cloudy water, scaling on tile and plaster, and makes chemical treatment less effective no matter how much you add.

Draining a pool incorrectly can cause serious damage: plaster surfaces can crack, fiberglass shells can pop out of the ground from hydrostatic pressure, and improper water disposal can violate San Diego County water regulations. This is one service where professional expertise pays for itself.

These guides explain the signs that indicate your pool needs draining, the step-by-step process for a safe drain-and-restart, San Diego water disposal regulations, and how to care for fresh plaster after refilling. We also cover alternatives to full draining, like partial water replacement, for pools that aren't yet at critical TDS levels.`,
    relatedServiceSlugs: ['pool-draining-restart-service-san-diego', 'pool-acid-washing-san-diego'],
  },
  {
    slug: 'pool-automation',
    name: 'Pool Automation',
    metaTitle: 'Pool Automation Guides: Smart Controls & Systems | PoolLogic',
    metaDescription: 'Pool automation guides for San Diego homeowners. Compare Pentair, Hayward, and Jandy systems. Learn about smart controls, scheduling, and remote monitoring.',
    heroDescription: 'Control your pool from your phone. Learn about automation systems, smart scheduling, remote monitoring, and how technology makes pool ownership easier.',
    introContent: `Pool automation transforms how you manage your pool — instead of manually adjusting valves, timers, and chemical feeders, a single control system handles everything automatically and lets you make changes from your smartphone.

Modern pool automation systems from brands like Pentair IntelliConnect, Hayward OmniLogic, and Jandy iAquaLink can control your pump speed, heater temperature, lighting, water features, and even chemical dosing. For San Diego pool owners, automation is especially valuable for optimizing pump schedules around SDG&E time-of-use rates, potentially saving hundreds per year.

These guides help you understand what automation can do, compare the major systems and their features, learn about installation requirements, and troubleshoot common issues with existing systems. Whether you're upgrading an older pool or building new, automation is one of the best investments you can make in convenience and energy savings.`,
    relatedServiceSlugs: ['pool-automation-repair-san-diego', 'pool-automation-installation-san-diego'],
  },
  {
    slug: 'pool-light',
    name: 'Pool Lights',
    metaTitle: 'Pool Lighting Guides: LED Upgrades & Repair | PoolLogic',
    metaDescription: 'Pool lighting guides for safety and ambiance. Learn about LED upgrades, color-changing options, repair tips, and electrical safety for San Diego pools.',
    heroDescription: 'Transform your backyard with the right pool lighting. Learn about LED options, color-changing systems, safety requirements, and when to upgrade.',
    introContent: `Pool lighting does more than make your backyard look stunning at night — it's a critical safety feature required by code for nighttime swimming. Modern LED pool lights use a fraction of the energy of older incandescent or halogen fixtures while providing brighter, more vibrant illumination.

San Diego homeowners are increasingly upgrading to color-changing LED systems that can set the mood for evening gatherings, highlight water features, and sync with automation systems for one-touch control. These lights last 30,000-50,000 hours compared to 3,000-5,000 for traditional bulbs, making them a smart long-term investment.

These guides cover everything from choosing the right LED fixtures for your pool to understanding GFCI requirements, troubleshooting flickering or dim lights, and planning a complete lighting upgrade. We also address common electrical safety concerns and explain when to call a licensed professional versus handling a simple bulb swap yourself.`,
    relatedServiceSlugs: ['pool-light-repair-san-diego'],
  },
  {
    slug: 'hot-tub',
    name: 'Hot Tubs',
    metaTitle: 'Hot Tub & Spa Care Guides | Maintenance Tips | PoolLogic',
    metaDescription: 'Hot tub and spa maintenance guides for San Diego owners. Learn water chemistry, cleaning schedules, troubleshooting, and when to call for professional service.',
    heroDescription: 'Hot tubs require different care than pools. Learn the essentials of spa water chemistry, maintenance schedules, and how to keep your hot tub safe and inviting.',
    introContent: `Hot tubs and spas require more frequent and precise maintenance than swimming pools. The smaller water volume, higher temperatures, and intense jet action create an environment where chemical balance can shift rapidly — what's safe one day can become a bacteria risk the next if not properly managed.

San Diego's warm climate means many homeowners use their hot tubs year-round, which increases the demands on water chemistry and filtration. Biofilm buildup in jet lines, foam from body oils and products, and pH fluctuations from heavy use are common challenges that require regular attention.

These guides cover proper hot tub water testing and chemical maintenance, filter cleaning schedules, when to drain and refill your spa (typically every 3-4 months), and how to troubleshoot common issues like cloudy water, unpleasant odors, and jet malfunctions. Whether you have an in-ground spa connected to your pool or a standalone portable hot tub, these resources will help you maintain safe, enjoyable water.`,
    relatedServiceSlugs: ['hot-tub-cleaning-service-san-diego'],
  },
  {
    slug: 'saltwater',
    name: 'Saltwater Pools',
    metaTitle: 'Saltwater Pool Guides: Maintenance, Conversion & Care | PoolLogic',
    metaDescription: 'Saltwater pool guides for San Diego homeowners. Learn about salt cell maintenance, conversion costs, chlorine generation, and saltwater-specific care requirements.',
    heroDescription: 'Saltwater pools offer a gentler swimming experience, but they have unique maintenance needs. Learn about salt cell care, conversion, and keeping your system running efficiently.',
    introContent: `Saltwater pools have surged in popularity across San Diego thanks to their softer-feeling water, lower chlorine odor, and reduced chemical handling. But "saltwater" doesn't mean maintenance-free — these systems generate their own chlorine through electrolysis and have specific care requirements that differ from traditional chlorine pools.

The salt chlorine generator (salt cell) is the heart of the system, and it requires regular inspection, cleaning, and eventual replacement (typically every 3-5 years). Salt levels, cyanuric acid, calcium hardness, and pH all need careful monitoring because the electrolysis process naturally raises pH over time.

These guides explain how saltwater systems work, what maintenance they require, the real costs of conversion from traditional chlorine, and how to troubleshoot common salt system issues. We also cover San Diego-specific considerations like our hard water's impact on salt cells and how to protect plaster, tile, and natural stone from salt exposure.`,
    relatedServiceSlugs: ['salt-water-pool-repair-san-diego', 'pool-cleaning-service-san-diego'],
  },
  {
    slug: 'local-guides',
    name: 'Local Guides',
    metaTitle: 'San Diego Local Guides for Pool Owners | PoolLogic',
    metaDescription: 'Discover San Diego attractions, water parks, and local tips for pool owners. Guides to enjoying San Diego\'s outdoor lifestyle. By PoolLogic Pool Service.',
    heroDescription: 'Explore San Diego\'s best attractions, water parks, and outdoor destinations — curated for families and pool lovers who enjoy the San Diego lifestyle.',
    introContent: `San Diego is one of the best cities in America for outdoor living, and pool ownership is a natural extension of that lifestyle. With over 260 sunny days per year, world-class beaches, and some of the country's best water parks and outdoor attractions, there's always something to explore.

These local guides highlight San Diego's top destinations for families and outdoor enthusiasts — from iconic landmarks and water parks to hidden gems in neighborhoods across the county. Whether you're a longtime resident or recently relocated, these guides help you make the most of everything San Diego has to offer.

As your local pool service provider, we know San Diego inside and out. We service pools in 24 cities across the county, and our team lives and works in the same communities we serve.`,
    relatedServiceSlugs: ['pool-cleaning-service-san-diego'],
  },
  {
    slug: 'general',
    name: 'General Pool Care',
    metaTitle: 'General Pool Care Tips & Advice | PoolLogic San Diego',
    metaDescription: 'General pool care advice for San Diego homeowners. Pool myths debunked, success stories, seasonal tips, and expert insights from PoolLogic Pool Service.',
    heroDescription: 'Practical pool care advice that every pool owner should know — from debunking common myths to understanding what truly keeps your pool healthy.',
    introContent: `Owning a pool should be enjoyable, not overwhelming. These general pool care guides address the most common questions and concerns San Diego pool owners face, from separating fact from fiction about pool maintenance to understanding what truly matters for water quality and equipment longevity.

We cover topics that don't fit neatly into a single category: common pool care myths that waste your time and money, real customer success stories that show what professional service looks like in practice, and seasonal considerations specific to San Diego's unique climate.

Whether you're considering hiring a pool service for the first time, comparing DIY versus professional maintenance, or just want to be a more informed pool owner, these resources give you the knowledge you need to make smart decisions about your pool.`,
    relatedServiceSlugs: ['pool-cleaning-service-san-diego'],
  },
];

export function getTopicHub(slug: string): TopicHub | undefined {
  return topicHubs.find((hub) => hub.slug === slug);
}
