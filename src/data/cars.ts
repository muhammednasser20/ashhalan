export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  pricePerDay: number;
  image: string;
  transmission: string;
  fuelType: string;
  seats: number;
  doors: number;
  luggage: number;
  features: string[];
  available: boolean;
  rating: number;
  reviews: number;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'تويوتا كامري 2024',
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    category: 'Sedan',
    pricePerDay: 180,
    image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzZWRhbnxlbnwxfHx8fDE3NjU2MzcxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    seats: 5,
    doors: 4,
    luggage: 3,
    features: ['Bluetooth', 'GPS', 'Backup Camera', 'Climate Control', 'Apple CarPlay'],
    available: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'هيونداي توسان 2024',
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2024,
    category: 'SUV',
    pricePerDay: 220,
    image: 'https://images.unsplash.com/photo-1639280791656-5f8506ff21d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXJ8ZW58MXx8fHwxNzY1NjEzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 7,
    doors: 5,
    luggage: 5,
    features: ['4WD', 'Sunroof', 'Leather Seats', 'GPS', 'Parking Sensors'],
    available: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: '3',
    name: 'بي إم دبليو X5 2024',
    brand: 'BMW',
    model: 'X5',
    year: 2024,
    category: 'Luxury SUV',
    pricePerDay: 550,
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY1NjczMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    doors: 5,
    luggage: 4,
    features: ['Premium Sound', 'Panoramic Roof', 'Massage Seats', 'Adaptive Cruise', 'Night Vision'],
    available: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '4',
    name: 'هوندا أكورد 2024',
    brand: 'Honda',
    model: 'Accord',
    year: 2024,
    category: 'Sedan',
    pricePerDay: 170,
    image: 'https://images.unsplash.com/photo-1531181616225-f8e50c1ab53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJ8ZW58MXx8fHwxNzY1NzA4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    doors: 4,
    luggage: 3,
    features: ['Bluetooth', 'GPS', 'Lane Assist', 'Adaptive Cruise', 'USB Charging'],
    available: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '5',
    name: 'تويوتا لاند كروزر 2024',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2024,
    category: 'SUV',
    pricePerDay: 450,
    image: 'https://images.unsplash.com/photo-1763705859529-6a18f667a55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzZXJ2aWNlfGVufDF8fHx8MTc2NTcwODE3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 8,
    doors: 5,
    luggage: 6,
    features: ['4WD', 'Off-Road Mode', 'Premium Sound', 'Third Row', 'Tow Package'],
    available: true,
    rating: 4.9,
    reviews: 284
  },
  {
    id: '6',
    name: 'نيسان صني 2024',
    brand: 'Nissan',
    model: 'Sunny',
    year: 2024,
    category: 'Economy',
    pricePerDay: 120,
    image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzZWRhbnxlbnwxfHx8fDE3NjU2MzcxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    doors: 4,
    luggage: 2,
    features: ['Bluetooth', 'USB', 'Air Conditioning', 'ABS Brakes'],
    available: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: '7',
    name: 'مرسيدس S-Class 2024',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    category: 'Luxury Sedan',
    pricePerDay: 750,
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY1NjczMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    doors: 4,
    luggage: 3,
    features: ['Chauffeur Mode', 'Executive Seats', 'Premium Audio', 'Ambient Lighting', 'Massage'],
    available: true,
    rating: 5.0,
    reviews: 178
  },
  {
    id: '8',
    name: 'كيا سبورتاج 2024',
    brand: 'Kia',
    model: 'Sportage',
    year: 2024,
    category: 'SUV',
    pricePerDay: 200,
    image: 'https://images.unsplash.com/photo-1639280791656-5f8506ff21d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXJ8ZW58MXx8fHwxNzY1NjEzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    doors: 5,
    luggage: 4,
    features: ['Wireless Charging', 'Digital Display', 'Rear Camera', 'Climate Control'],
    available: false,
    rating: 4.6,
    reviews: 112
  }
];

export const categories = [
  'All',
  'Economy',
  'Sedan',
  'SUV',
  'Luxury SUV',
  'Luxury Sedan'
];
