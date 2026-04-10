export interface Testimonial {
  id: string;
  customerName: string;
  city: string;
  neighborhood?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  service?: string;
  date: string;
  source: 'google' | 'yelp' | 'facebook' | 'direct';
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'service' | 'scheduling' | 'local';
  cities?: string[];
  services?: string[];
}
