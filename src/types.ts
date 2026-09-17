export interface Puppy {
  id: string;
  name: string;
  breed: string;
  category: 'all' | 'family' | 'small' | 'hypoallergenic' | 'active';
  age: string;
  gender: 'Male' | 'Female';
  color: string;
  price: number;
  weight: string;
  imageUrl: string;
  temperament: string[];
  healthStatus: {
    vaccinated: boolean;
    dewormed: boolean;
    microchipped: boolean;
    vetChecked: boolean;
    registered: string; // e.g. 'AKC Registered'
  };
  description: string;
  parentsInfo: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  puppyBreed: string;
  quote: string;
  authorImage: string;
  puppyImage: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  puppyId?: string;
  puppyName?: string;
  breedInterest: string;
  preferredDate: string;
  message: string;
  hasYard: string;
}
