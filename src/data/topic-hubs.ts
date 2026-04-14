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
    metaTitle: 'Pool Cleaning Guides & Tips | Cabana Pool Service',
    metaDescription: 'Expert pool cleaning guides covering weekly maintenance, seasonal prep, filter cleaning, and professional service tips for San Diego pool owners.',
    heroDescription: 'Everything you need to know about keeping your pool clean, from weekly routines to seasonal deep cleans.',
    introContent: 'A clean pool is more than just visually appealing; it is essential for the health and safety of everyone who swims in it. Regular cleaning prevents algae growth, maintains proper chemical balance, and extends the life of your pool equipment.\n\nWhether you handle pool cleaning yourself or rely on a professional service, understanding the fundamentals helps you make better decisions about your pool care routine.',
    relatedServiceSlugs: ['weekly-pool-cleaning-service', 'pool-filter-cleaning-service'],
  },
  {
    slug: 'pool-repair',
    name: 'Pool Repair',
    metaTitle: 'Pool Repair Guides & Tips | Cabana Pool Service',
    metaDescription: 'Learn about common pool repairs, DIY fixes, and when to call a professional. Covers pumps, filters, heaters, lights, and more.',
    heroDescription: 'Practical repair guides to help you understand pool equipment issues and make informed decisions about fixes.',
    introContent: 'Pool equipment does not last forever, but knowing what to look for can help you catch problems early and avoid costly emergency repairs. From pumps and filters to heaters and automation systems, each component has common failure points.\n\nThese guides help you understand when a repair is a simple DIY fix and when you need professional help.',
    relatedServiceSlugs: ['pool-pump-repair-service', 'pool-filter-repair-service', 'pool-heater-repair-service'],
  },
  {
    slug: 'pool-heaters',
    name: 'Pool Heaters',
    metaTitle: 'Pool Heater Guides: Repair, Maintenance & Installation | Cabana Pool Service',
    metaDescription: 'Expert guides on pool heater repair, maintenance, installation, and choosing the right heater for your San Diego pool.',
    heroDescription: 'From choosing the right heater to maintenance and repairs, learn how to keep your pool at the perfect temperature.',
    introContent: 'A properly functioning pool heater extends your swimming season and makes your pool comfortable year-round. In San Diego, heat pumps and gas heaters are the most popular options, each with distinct advantages.\n\nThese guides cover everything from selecting the right heater for your climate to routine maintenance that prevents breakdowns.',
    relatedServiceSlugs: ['pool-heater-repair-service', 'pool-heater-installation-service'],
  },
  {
    slug: 'pool-filters',
    name: 'Pool Filters',
    metaTitle: 'Pool Filter Guides: Cleaning, Repair & Maintenance | Cabana Pool Service',
    metaDescription: 'Learn about pool filter cleaning, repair, and maintenance. Expert tips for cartridge, sand, and DE filters.',
    heroDescription: 'Keep your pool water crystal clear with proper filter maintenance, cleaning, and timely repairs.',
    introContent: 'Your pool filter is the workhorse of your circulation system, removing debris and contaminants to keep your water clear and safe. Whether you have a cartridge, sand, or DE filter, regular maintenance is essential.\n\nThese guides cover cleaning schedules, common repair issues, and how to know when it is time for a replacement.',
    relatedServiceSlugs: ['pool-filter-cleaning-service', 'pool-filter-repair-service', 'pool-filter-installation-service'],
  },
  {
    slug: 'pool-pumps',
    name: 'Pool Pumps',
    metaTitle: 'Pool Pump Guides: Repair & Maintenance | Cabana Pool Service',
    metaDescription: 'Expert guides on pool pump repair, troubleshooting, and maintenance tips to keep your pool circulation running smoothly.',
    heroDescription: 'Your pool pump is the heart of your circulation system. Learn how to maintain it and troubleshoot common issues.',
    introContent: 'The pool pump circulates water through your filter and back into the pool, making it one of the most critical pieces of equipment. A failing pump means poor circulation, which leads to algae growth and cloudy water.\n\nThese guides help you understand pump basics, troubleshoot common problems, and decide between repair and replacement.',
    relatedServiceSlugs: ['pool-pump-repair-service', 'pool-pump-installation-service'],
  },
  {
    slug: 'algae-control',
    name: 'Algae Control',
    metaTitle: 'Pool Algae Control & Prevention Guides | Cabana Pool Service',
    metaDescription: 'Comprehensive guides on pool algae removal, prevention, and control techniques for San Diego pool owners.',
    heroDescription: 'Prevent and eliminate pool algae with proven techniques, from basic prevention to advanced treatment methods.',
    introContent: 'Algae is one of the most common pool problems, especially in warm climates like San Diego. It can turn your pool green overnight and make surfaces slippery and unsafe.\n\nThese guides cover the different types of algae, what causes them, and the most effective methods for both prevention and removal.',
    relatedServiceSlugs: ['pool-algae-removal-service', 'weekly-pool-cleaning-service'],
  },
  {
    slug: 'pool-automation',
    name: 'Pool Automation',
    metaTitle: 'Pool Automation Guides: Systems, Installation & Selection | Cabana Pool Service',
    metaDescription: 'Learn about pool automation systems, how to choose the right one, and what to expect during installation in San Diego.',
    heroDescription: 'Simplify your pool maintenance with automation. Learn about systems, features, and installation considerations.',
    introContent: 'Pool automation systems let you control pumps, heaters, lights, and water features from your phone or a central panel. They can save energy, simplify maintenance, and add convenience to your daily pool routine.\n\nThese guides help you understand the options available and what to consider before investing in automation.',
    relatedServiceSlugs: ['pool-automation-repair-service', 'pool-automation-installation-service'],
  },
  {
    slug: 'pool-lighting',
    name: 'Pool Lighting',
    metaTitle: 'Pool Lighting Guides: Repair, Troubleshooting & Upgrades | Cabana Pool Service',
    metaDescription: 'Expert guides on pool light repair, troubleshooting, LED upgrades, and preparing your lighting for night swimming.',
    heroDescription: 'From troubleshooting flickering lights to planning LED upgrades, get your pool lighting right.',
    introContent: 'Pool lighting does more than just illuminate your pool at night; it enhances safety, extends usable swimming hours, and creates ambiance. Modern LED pool lights offer energy efficiency and color options that older incandescent lights cannot match.\n\nThese guides cover common light issues, repair options, and how to upgrade your pool lighting.',
    relatedServiceSlugs: ['pool-light-repair-service', 'pool-light-replacement-service'],
  },
  {
    slug: 'saltwater-pools',
    name: 'Saltwater Pools',
    metaTitle: 'Saltwater Pool Guides: Installation, Repair & Maintenance | Cabana Pool Service',
    metaDescription: 'Learn about saltwater pool systems, installation considerations, common repairs, and maintenance tips for San Diego pools.',
    heroDescription: 'Saltwater pools offer a different swimming experience. Learn about installation, maintenance, and common issues.',
    introContent: 'Saltwater pools use a salt chlorine generator to produce chlorine from dissolved salt, offering a gentler swimming experience with less chemical handling. They have become increasingly popular in San Diego due to the pleasant water feel and reduced need to store chlorine.\n\nThese guides cover everything from initial installation decisions to ongoing maintenance and repair of saltwater systems.',
    relatedServiceSlugs: ['salt-water-pool-repair-service'],
  },
  {
    slug: 'seasonal-pool-care',
    name: 'Seasonal Pool Care',
    metaTitle: 'Seasonal Pool Care Guides: Winterizing, Summer Prep & More | Cabana Pool Service',
    metaDescription: 'Prepare your pool for every season with expert guides on winterizing, summer openings, and protecting equipment year-round.',
    heroDescription: 'Keep your pool in top shape year-round with seasonal preparation guides for every time of year.',
    introContent: 'Pool care needs change with the seasons. In San Diego, the mild climate means pools can be used year-round, but that also means year-round maintenance is essential.\n\nThese guides cover seasonal preparation, from opening your pool for summer to protecting equipment during cooler months.',
    relatedServiceSlugs: ['weekly-pool-cleaning-service', 'pool-draining-restart-service'],
  },
];

export function getTopicHub(slug: string): TopicHub | undefined {
  return topicHubs.find((h) => h.slug === slug);
}
