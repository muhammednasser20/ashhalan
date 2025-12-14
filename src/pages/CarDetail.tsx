import { useParams, Link, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import { Users, Fuel, Settings, Briefcase, Star, Check, ArrowLeft, Calendar } from 'lucide-react';
import { useState } from 'react';

export function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);
  
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  if (!car) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-2)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Car not found</h2>
          <Link to="/cars" className="btn no-underline">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 0;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 0;
  };

  const days = calculateDays();
  const totalPrice = days * car.pricePerDay;

  return (
    <div className="min-h-screen bg-[var(--color-surface-2)]">
      {/* Back Button */}
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-3">{car.name}</h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                      <span className="text-lg font-bold text-[var(--color-text)]">{car.rating}</span>
                    </div>
                    <span className="text-[var(--color-accent)]">({car.reviews} reviews)</span>
                    <span className="px-3 py-1 bg-[var(--color-surface-2)] rounded-lg text-sm font-bold text-[var(--color-accent)]">
                      {car.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[var(--color-accent)] mb-1">Price per day</p>
                  <p className="text-3xl font-bold text-[var(--color-primary)]">
                    {car.pricePerDay} SAR
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[var(--color-border)]">
                <div className="text-center">
                  <Users className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <p className="text-sm text-[var(--color-accent)] mb-1">Passengers</p>
                  <p className="font-bold text-[var(--color-text)]">{car.seats} Seats</p>
                </div>
                <div className="text-center">
                  <Settings className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <p className="text-sm text-[var(--color-accent)] mb-1">Transmission</p>
                  <p className="font-bold text-[var(--color-text)]">{car.transmission}</p>
                </div>
                <div className="text-center">
                  <Fuel className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <p className="text-sm text-[var(--color-accent)] mb-1">Fuel Type</p>
                  <p className="font-bold text-[var(--color-text)]">{car.fuelType}</p>
                </div>
                <div className="text-center">
                  <Briefcase className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <p className="text-sm text-[var(--color-accent)] mb-1">Luggage</p>
                  <p className="font-bold text-[var(--color-text)]">{car.luggage} Bags</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                      <span className="text-[var(--color-accent)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="mt-6 p-6 bg-[var(--color-surface-2)] rounded-xl">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Vehicle Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[var(--color-accent)] mb-1">Brand</p>
                    <p className="font-bold text-[var(--color-text)]">{car.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-accent)] mb-1">Model</p>
                    <p className="font-bold text-[var(--color-text)]">{car.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-accent)] mb-1">Year</p>
                    <p className="font-bold text-[var(--color-text)]">{car.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-accent)] mb-1">Doors</p>
                    <p className="font-bold text-[var(--color-text)]">{car.doors} Doors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] sticky top-24">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Book This Car</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block mb-2">
                    <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-primary)]" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-primary)]" />
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Price Summary */}
              <div className="p-4 bg-[var(--color-surface-2)] rounded-xl mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-[var(--color-accent)]">Price per day</span>
                  <span className="font-bold text-[var(--color-text)]">{car.pricePerDay} SAR</span>
                </div>
                {days > 0 && (
                  <>
                    <div className="flex justify-between mb-3">
                      <span className="text-[var(--color-accent)]">Number of days</span>
                      <span className="font-bold text-[var(--color-text)]">{days} days</span>
                    </div>
                    <div className="pt-3 border-t border-[var(--color-border)] flex justify-between">
                      <span className="font-bold text-[var(--color-text)]">Total</span>
                      <span className="text-2xl font-bold text-[var(--color-primary)]">{totalPrice} SAR</span>
                    </div>
                  </>
                )}
              </div>

              {car.available ? (
                <Link 
                  to={`/booking/${car.id}`}
                  state={{ pickupDate, returnDate, days, totalPrice }}
                  className="btn w-full text-center no-underline block"
                >
                  Book Now
                </Link>
              ) : (
                <button 
                  disabled
                  className="btn w-full opacity-50 cursor-not-allowed"
                >
                  Currently Unavailable
                </button>
              )}

              <p className="text-xs text-[var(--color-accent)] text-center mt-4">
                Free cancellation up to 24 hours before pickup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
