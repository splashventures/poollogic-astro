export const company = {
  // Business Name (must be identical everywhere)
  name: 'PoolLogic Pool Service',

  // Contact (NAP must be 100% consistent)
  phone: '(619) 913-9335',
  phoneRaw: '+16199139335',
  email: 'hello@poollogicsd.com',

  // Address
  address: {
    street: '1223 Cleveland Ave, #200-301',
    city: 'San Diego',
    state: 'CA',
    zip: '92103',
    full: '1223 Cleveland Ave, #200-301, San Diego, CA 92103',
  },

  // Coordinates (San Diego, CA)
  coordinates: {
    lat: 32.7494,
    lng: -117.1694,
  },

  // URLs
  url: 'https://poollogicsd.com',
  quoteUrl: 'https://quote.poollogicsd.com',

  // Business Hours
  hours: {
    weekdays: { open: '08:00', close: '17:00' },
    saturday: { open: '08:00', close: '17:00' },
    sunday: { open: '08:00', close: '17:00' },
  },

  hoursDisplay: 'Mon-Sun: 8AM - 5PM',

  openingHoursSpecification: [
    { dayOfWeek: 'Monday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Tuesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Wednesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Thursday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Sunday', opens: '08:00', closes: '17:00' },
  ],

  // Trust Signals
  rating: {
    value: 4.9,
    count: 500,
    source: 'Google',
  },

  // Customer count
  poolsServed: 1042,

  yearsInBusiness: 6,
  foundedYear: 2020,

  // Certifications/Trust Badges
  certifications: [
    'Bonded & Insured',
    'Certified Technicians',
  ],

  // Social Media
  social: {
    facebook: 'https://facebook.com/PoolLogicPoolService',
    instagram: 'https://instagram.com/poollogicsd',
    yelp: 'https://yelp.com/biz/poollogic-pool-service-san-diego',
    google: 'https://g.page/poollogicsd',
  },

  // Service Area Description
  serviceAreaDescription: 'Serving greater San Diego County',

  // Price Range (for schema)
  priceRange: '$$',
} as const;

export type Company = typeof company;
