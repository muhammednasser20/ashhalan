import { Link } from 'react-router-dom';
import { Car as CarType } from '../data/cars';
import { Users, Fuel, Settings, Briefcase, Star } from 'lucide-react';

interface CarCardProps {
  car: CarType;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_24px_rgba(17,17,17,0.08)] hover:shadow-[0_16px_40px_rgba(17,17,17,0.12)] transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
        {!car.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="px-4 py-2 bg-white rounded-lg font-bold text-[var(--color-accent)]">
              Not Available
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-sm font-bold text-[var(--color-accent)]">
          {car.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Title & Rating */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{car.name}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
              <span className="text-sm font-bold text-[var(--color-text)]">{car.rating}</span>
            </div>
            <span className="text-sm text-[var(--color-accent)]">({car.reviews} reviews)</span>
          </div>
        </div>
        
        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-accent)]">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-accent)]">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-accent)]">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-accent)]">{car.luggage} Bags</span>
          </div>
        </div>
        
        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[var(--color-accent)] mb-1">Price per day</p>
            <p className="text-2xl font-bold text-[var(--color-primary)]">
              {car.pricePerDay} SAR
            </p>
          </div>
          <Link 
            to={`/car/${car.id}`}
            className="btn no-underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
