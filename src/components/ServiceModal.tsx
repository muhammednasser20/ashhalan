import { X, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'daily' | 'airport' | null;
}

export function ServiceModal({ isOpen, onClose, serviceType }: ServiceModalProps) {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const airports = [
    { id: 1, name: 'King Khalid International Airport', city: 'Riyadh', code: 'RUH' },
    { id: 2, name: 'King Abdulaziz International Airport', city: 'Jeddah', code: 'JED' },
    { id: 3, name: 'King Fahd International Airport', city: 'Dammam', code: 'DMM' },
    { id: 4, name: 'Prince Mohammad bin Abdulaziz Airport', city: 'Madinah', code: 'MED' },
    { id: 5, name: 'King Abdullah bin Abdulaziz Airport', city: 'Jizan', code: 'GIZ' },
    { id: 6, name: 'Abha Regional Airport', city: 'Abha', code: 'AHB' }
  ];

  const branches = [
    { id: 1, name: 'Ashhalan Olaya Branch', address: 'King Fahd Road, Al Olaya District, Riyadh', lat: 24.7136, lng: 46.6753 },
    { id: 2, name: 'Ashhalan Al Malaz Branch', address: 'Al Malaz District, Riyadh', lat: 24.6877, lng: 46.7219 },
    { id: 3, name: 'Ashhalan Diplomatic Quarter', address: 'Diplomatic Quarter, Riyadh', lat: 24.8116, lng: 46.6094 }
  ];

  const filteredAirports = airports.filter(airport =>
    airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    airport.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    airport.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDailyOption = (option: 'delivery' | 'pickup') => {
    setSelectedOption(option);
    setShowMap(true);
  };

  const handleMapConfirm = () => {
    navigate('/cars', { state: { serviceType: 'daily', option: selectedOption } });
  };

  const handleAirportSelect = (airport: typeof airports[0]) => {
    navigate('/cars', { state: { serviceType: 'airport', airport: airport } });
  };

  const handleClose = () => {
    setShowMap(false);
    setSelectedOption(null);
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(17,17,17,0.3)] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[var(--color-border)] p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            {serviceType === 'daily' ? 'Daily Rental Service' : 'Airport Service'}
          </h2>
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--color-surface-2)] transition-colors"
          >
            <X className="w-6 h-6 text-[var(--color-accent)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {serviceType === 'daily' && !showMap && (
            <div className="space-y-4">
              <p className="text-[var(--color-accent)] mb-6">Choose how you want to receive your car:</p>
              
              {/* Delivery Option */}
              <button
                onClick={() => handleDailyOption('delivery')}
                className="w-full p-6 border-2 border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Delivery</h3>
                    <p className="text-[var(--color-accent)]">Receive the car at your door step. We'll deliver it anywhere you want.</p>
                  </div>
                </div>
              </button>

              {/* Pickup Option */}
              <button
                onClick={() => handleDailyOption('pickup')}
                className="w-full p-6 border-2 border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Pickup</h3>
                    <p className="text-[var(--color-accent)]">Pick up the car from the nearest branch to you.</p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {serviceType === 'daily' && showMap && (
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  {selectedOption === 'delivery' ? 'Select Delivery Location' : 'Select Nearest Branch'}
                </h3>
                <p className="text-[var(--color-accent)]">
                  {selectedOption === 'delivery' 
                    ? 'Click on the map to set your delivery location' 
                    : 'Choose the branch nearest to you'}
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-96 bg-[var(--color-surface-2)] rounded-xl overflow-hidden border-2 border-[var(--color-border)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" />
                    <p className="text-lg font-bold text-[var(--color-text)] mb-2">Interactive Map</p>
                    <p className="text-sm text-[var(--color-accent)] max-w-sm">
                      {selectedOption === 'delivery' 
                        ? 'Click anywhere on the map to set your delivery location'
                        : 'View our branch locations on the map'}
                    </p>
                  </div>
                </div>
                
                {/* Sample location markers for pickup */}
                {selectedOption === 'pickup' && (
                  <div className="absolute inset-0 p-4">
                    {branches.map((branch, index) => (
                      <div
                        key={branch.id}
                        className="absolute bg-white p-3 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                        style={{
                          top: `${20 + index * 25}%`,
                          left: `${20 + index * 20}%`
                        }}
                      >
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-[var(--color-text)]">{branch.name}</p>
                            <p className="text-xs text-[var(--color-accent)]">{branch.address}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Branch List for Pickup */}
              {selectedOption === 'pickup' && (
                <div className="space-y-3">
                  <h4 className="font-bold text-[var(--color-text)]">Our Branches:</h4>
                  {branches.map((branch) => (
                    <div
                      key={branch.id}
                      className="p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-[var(--color-text)]">{branch.name}</p>
                          <p className="text-sm text-[var(--color-accent)]">{branch.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button onClick={handleMapConfirm} className="btn w-full">
                Continue to Browse Cars
              </button>
            </div>
          )}

          {serviceType === 'airport' && (
            <div className="space-y-6">
              {/* Search */}
              <div>
                <label className="block mb-2">Search Airport</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by airport name, city, or code..."
                  className="w-full"
                />
              </div>

              {/* Airport List */}
              <div className="space-y-3">
                {filteredAirports.length > 0 ? (
                  filteredAirports.map((airport) => (
                    <button
                      key={airport.id}
                      onClick={() => handleAirportSelect(airport)}
                      className="w-full p-5 border-2 border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-2)] transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[var(--color-surface-2)] group-hover:bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                            <span className="text-lg font-bold text-[var(--color-accent)] group-hover:text-white transition-colors">
                              {airport.code}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">{airport.name}</h3>
                            <p className="text-sm text-[var(--color-accent)]">{airport.city}</p>
                          </div>
                        </div>
                        <svg className="w-6 h-6 text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-[var(--color-accent)]">No airports found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
