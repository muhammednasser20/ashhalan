import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Lock, User, Phone } from 'lucide-react';

export function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', formData);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-2)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(17,17,17,0.12)] p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-14 h-14 bg-[var(--color-primary)] rounded-xl flex items-center justify-center">
                <Car className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--color-primary)] leading-none">Ashhalan</span>
                <span className="text-xs text-[var(--color-accent)]">Car Rental</span>
              </div>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">Create Account</h1>
            <p className="text-[var(--color-accent)]">Join us to start renting cars</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-[var(--color-primary)]" />
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="mb-2 block text-[var(--color-accent)]">Last Name</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+966 XX XXX XXXX"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-[var(--color-primary)]" />
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="mb-2 block text-[var(--color-accent)]">Confirm Password</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="w-4 h-4 mt-1" />
              <label className="text-sm text-[var(--color-accent)] cursor-pointer">
                I agree to the{' '}
                <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button type="submit" className="btn w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--color-accent)]">
              Already have an account?{' '}
              <Link to="/login" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                Log in
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <div className="text-center mb-4">
              <span className="text-sm text-[var(--color-accent)]">Or sign up with</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[var(--color-border)] rounded-xl text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[var(--color-border)] rounded-xl text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
