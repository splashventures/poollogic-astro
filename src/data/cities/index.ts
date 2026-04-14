import { sanDiegoCities } from './san-diego';
import { losAngelesCities } from './los-angeles';
import { orangeCountyCities } from './orange-county';
import { sacramentoCities } from './sacramento';
import type { City, Metro, MetroSlug } from '@/types';
import { company } from '../company';

export const allCities: City[] = [
  ...sanDiegoCities,
  ...losAngelesCities,
  ...orangeCountyCities,
  ...sacramentoCities,
];

export const metros: Metro[] = [
  {
    name: 'San Diego',
    slug: 'san-diego',
    state: 'CA',
    phone: company.phones.sd,
    coordinates: { lat: 32.7157, lng: -117.1611 },
    address: company.address,
    cities: sanDiegoCities,
  },
  {
    name: 'Los Angeles',
    slug: 'los-angeles',
    state: 'CA',
    phone: company.phones.la,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    address: company.address,
    cities: losAngelesCities,
  },
  {
    name: 'Orange County',
    slug: 'orange-county',
    state: 'CA',
    phone: company.phones.oc,
    coordinates: { lat: 33.7175, lng: -117.8311 },
    address: company.address,
    cities: orangeCountyCities,
  },
  {
    name: 'Sacramento',
    slug: 'sacramento',
    state: 'CA',
    phone: company.phones.sac,
    coordinates: { lat: 38.5816, lng: -121.4944 },
    address: company.addressSac,
    cities: sacramentoCities,
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return allCities.find(c => c.slug === slug);
}

export function getMetroBySlug(slug: MetroSlug): Metro | undefined {
  return metros.find(m => m.slug === slug);
}

export function getCitiesByMetro(metro: MetroSlug): City[] {
  return allCities.filter(c => c.metro === metro);
}

export function getMetroHubCity(metro: MetroSlug): City | undefined {
  return allCities.find(c => c.metro === metro && c.isPrimary);
}

export { sanDiegoCities, losAngelesCities, orangeCountyCities, sacramentoCities };
