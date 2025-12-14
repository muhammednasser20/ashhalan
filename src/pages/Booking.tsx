import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';

export function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);
  
  const { pickupDate, returnDate, days, totalPrice } = location.state || {};
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    licenseNumber: '',
    address: '',
    city: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!car || !pickupDate || !returnDate) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-2)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Invalid booking</h2>
          <button onClick={() => navigate('/cars')} className="btn">
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--color-surface-2)] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 shadow-[0_16px_48px_rgba(17,17,17,0.12)] text-center max-w-md">
          <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Booking Confirmed!</h2>
          <p className="text-[var(--color-accent)] mb-8">
            Your reservation for <span className="font-bold">{car.name}</span> has been confirmed. 
            We've sent a confirmation email to {formData.email}.
          </p>
          <div className="space-y-3">
            <button onClick={() => navigate('/')} className="btn w-full">
              Back to Home
            </button>
            <button onClick={() => navigate('/cars')} className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
              Browse More Cars
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface-2)]">
      {/* Header */}
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
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-8">Complete Your Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>ID Number</label>
                    <input
                      type="text"
                      required
                      value={formData.idNumber}
                      onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Driver's License Number</label>
                    <input
                      type="text"
                      required
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-[var(--color-primary)]" />
                  <h2 className="text-2xl font-bold text-[var(--color-text)]">Payment Information</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label>Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      required
                      value={formData.cardName}
                      onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label>CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn w-full">
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] sticky top-24">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Booking Summary</h3>
              
              <div className="mb-6">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">{car.name}</h4>
                <p className="text-sm text-[var(--color-accent)]">{car.category}</p>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Pickup Date</span>
                  <span className="font-bold text-[var(--color-text)]">{pickupDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Return Date</span>
                  <span className="font-bold text-[var(--color-text)]">{returnDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Duration</span>
                  <span className="font-bold text-[var(--color-text)]">{days} days</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Daily Rate</span>
                  <span className="font-bold text-[var(--color-text)]">{car.pricePerDay} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Subtotal</span>
                  <span className="font-bold text-[var(--color-text)]">{totalPrice} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-accent)]">Tax (15%)</span>
                  <span className="font-bold text-[var(--color-text)]">{Math.round(totalPrice * 0.15)} SAR</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)] flex justify-between">
                <span className="text-lg font-bold text-[var(--color-text)]">Total Amount</span>
                <span className="text-2xl font-bold text-[var(--color-primary)]">
                  {Math.round(totalPrice * 1.15)} SAR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
