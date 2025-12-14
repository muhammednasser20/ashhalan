import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Search, Shield, Award, Headphones, CheckCircle, Car as CarIcon, Plane } from 'lucide-react';
import { cars } from '../data/cars';
import { CarCard } from '../components/CarCard';
import { ServiceModal } from '../components/ServiceModal';

export function Home() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'daily' | 'airport' | null>(null);

  const featuredCars = cars.filter(car => car.available).slice(0, 3);

  const handleServiceSelect = (service: 'daily' | 'airport') => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Service Selection Modal */}
      <ServiceModal 
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedService(null);
        }}
        serviceType={selectedService}
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.7)), url(https://images.unsplash.com/photo-1722009591790-f47342aa9d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NjU3MDgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Car Rental<br />in Saudi Arabia
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Book your perfect ride with ease. Wide selection, competitive prices, and exceptional service.
            </p>
          </div>

          {/* Service Selection */}
          {/* Service Selection */}
          {/* Service Selection */}
          <div className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(17,17,17,0.2)] p-5 md:p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 text-center">Select Service</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Daily Rent Option */}
              <button
                onClick={() => handleServiceSelect('daily')}
                className="p-5 border-2 border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CarIcon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-1">Daily Rent</h4>
                  <p className="text-sm text-[var(--color-accent)]">Daily/Weekly Rental</p>
                </div>
              </button>

              {/* Airport Option */}
              <button
                onClick={() => handleServiceSelect('airport')}
                className="p-5 border-2 border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Plane className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-1">Airport</h4>
                  <p className="text-sm text-[var(--color-accent)]">Receive the car from airport</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--color-surface-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Why Choose Ashhalan?</h2>
            <p className="text-lg text-[var(--color-accent)] max-w-2xl mx-auto">
              We provide exceptional car rental services with a focus on quality, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center hover:shadow-[0_16px_40px_rgba(17,17,17,0.12)] transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Fully Insured</h3>
              <p className="text-[var(--color-accent)]">All vehicles are fully insured for your peace of mind and safety.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center hover:shadow-[0_16px_40px_rgba(17,17,17,0.12)] transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Premium Fleet</h3>
              <p className="text-[var(--color-accent)]">Wide selection of modern, well-maintained vehicles.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center hover:shadow-[0_16px_40px_rgba(17,17,17,0.12)] transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">24/7 Support</h3>
              <p className="text-[var(--color-accent)]">Round-the-clock customer service for your convenience.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center hover:shadow-[0_16px_40px_rgba(17,17,17,0.12)] transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Easy Booking</h3>
              <p className="text-[var(--color-accent)]">Simple and quick online booking process in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Featured Cars</h2>
              <p className="text-lg text-[var(--color-accent)]">
                Explore our most popular vehicles
              </p>
            </div>
            <Link to="/cars" className="btn no-underline hidden md:inline-block">
              View All Cars
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/cars" className="btn no-underline">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[var(--color-surface-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">How It Works</h2>
            <p className="text-lg text-[var(--color-accent)] max-w-2xl mx-auto">
              Rent a car in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Choose Your Car</h3>
                <p className="text-[var(--color-accent)]">
                  Browse our extensive fleet and select the perfect vehicle for your needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Book Online</h3>
                <p className="text-[var(--color-accent)]">
                  Complete your booking quickly and securely through our online platform.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Hit the Road</h3>
                <p className="text-[var(--color-accent)]">
                  Pick up your car and enjoy your journey with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your perfect car today and experience the best car rental service in Saudi Arabia.
          </p>
          <Link to="/cars" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90 shadow-[0_14px_30px_rgba(255,255,255,0.3)] no-underline">
            Browse Our Fleet
          </Link>
        </div>
      </section>
    </div>
  );
}