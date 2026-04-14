export const company = {
  name: 'Cabana Pool Service',

  phone: '(888) 388-9689',
  phoneRaw: '+18883889689',
  email: 'hello@cabanapools.com',

  phones: {
    sd: { display: '(888) 388-9689', raw: '+18883889689' },
    la: { display: '(888) 388-9689', raw: '+18883889689' },
    oc: { display: '(888) 388-9689', raw: '+18883889689' },
    sac: { display: '(916) 909-1244', raw: '+19169091244' },
  },

  address: {
    street: '1223 Cleveland Ave. Ste 200-305',
    city: 'San Diego',
    state: 'CA',
    zip: '92103',
    full: '1223 Cleveland Ave. Ste 200-305, San Diego, CA 92103',
  },

  addressSac: {
    street: '2281 Lava Ridge Court Suite 200',
    city: 'Roseville',
    state: 'CA',
    zip: '95661',
    full: '2281 Lava Ridge Court Suite 200, Roseville, CA 95661',
  },

  coordinates: {
    lat: 32.7494,
    lng: -117.1694,
  },

  url: 'https://cabanapools.com',
  quoteUrl: 'https://quote.cabanapools.com',

  hours: {
    weekdays: { open: '08:00', close: '17:00' },
    saturday: { open: '08:00', close: '17:00' },
    sunday: { open: '08:00', close: '17:00' },
  },

  hoursDisplay: 'Sun - Sat: 8:00 AM - 5:00 PM PST',

  openingHoursSpecification: [
    { dayOfWeek: 'Monday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Tuesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Wednesday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Thursday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Sunday', opens: '08:00', closes: '17:00' },
  ],

  rating: {
    value: 5.0,
    count: 51,
    source: 'Google',
  },

  poolsServed: 5000,
  yearsInBusiness: 6,
  foundedYear: 2020,

  contractorsLicense: '1133031',

  certifications: [
    'Bonded & Insured',
    'Licensed Contractors',
  ],

  social: {
    facebook: 'https://facebook.com/cabanapoolservice',
    instagram: 'https://instagram.com/cabanapools',
    yelp: 'https://yelp.com/biz/cabana-pool-service-san-diego',
    google: 'https://g.page/cabanapools',
  },

  serviceAreaDescription: 'Serving San Diego, Los Angeles, Orange County & Sacramento',

  priceRange: '$$',

  tracking: {
    gtmId: 'GTM-T5D9ZXXK',
    gtmServerUrl: 'https://file.cabanapools.com/gtm.js',
    fbPixelId: '1696161025101791',
    bingUetId: '343173798',
    nextdoorPixelId: 'a4e3828b-aa4f-48f8-bcbe-09e02d81a424',
  },
} as const;

export type Company = typeof company;
