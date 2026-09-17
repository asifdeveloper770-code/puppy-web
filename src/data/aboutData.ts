import { Testimonial } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sarah & David Miller',
    location: 'Austin, Texas',
    rating: 5,
    puppyBreed: 'Golden Retriever (Oliver’s brother)',
    quote: 'Bringing Leo into our home was the smoothest experience ever. He came crate-trained, healthy, and so calm around our 4-year-old daughter. PuppyHaven truly cares about their dogs!',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    puppyImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'test-2',
    author: 'Marcus Vance',
    location: 'Chicago, Illinois',
    rating: 5,
    puppyBreed: 'French Bulldog',
    quote: 'The flight nanny brought Winston directly to our airport gate with all vet documents and starter toys. The health guarantee and transparent pedigree gave us total peace of mind.',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    puppyImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'test-3',
    author: 'Elena Rostova',
    location: 'Seattle, Washington',
    rating: 5,
    puppyBreed: 'Maltipoo',
    quote: 'As an allergy sufferer, Teddy is a blessing! Zero shedding, incredibly loving, and so smart. Their lifetime nutrition and support group answered every question we had in the first week.',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    puppyImage: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=300&q=80',
  },
];

export const ABOUT_STATS = [
  { label: 'Happy Puppy Adoptions', value: '1,250+' },
  { label: 'Years of Ethical Care', value: '9+' },
  { label: 'Health Guarantee', value: '100%' },
  { label: 'Certified Veterinarian Vetted', value: '15-Point' },
];

export const ABOUT_VALUES = [
  {
    title: 'Strict No-Puppy-Mill Stance',
    description: 'All puppies are born and hand-raised inside our family estate with continuous human touch, expansive grassy play yards, and pure warmth.',
  },
  {
    title: 'DNA & Orthopedic Health Testing',
    description: 'Parent dogs are fully screened for genetic markers, OFA hips/elbows, and cardiac health before breeding to ensure vibrant, long-lived puppies.',
  },
  {
    title: 'Lifelong Companion Guarantee',
    description: 'Our commitment doesn’t end when you take your puppy home. We provide 24/7 care hotline support and a full 1-year genetic health guarantee.',
  },
  {
    title: 'Transparent & Open Visits',
    description: 'We welcome prospective adoptive families to meet the puppies in person or through real-time high-definition video walkthroughs.',
  },
];
