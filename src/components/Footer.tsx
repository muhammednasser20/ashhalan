import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <img src="/logos/whitelogo.png" alt="Ashhalan Car Rental" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm text-[var(--color-secondary)] mb-4">
              Your trusted partner for premium car rental services across Saudi Arabia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/cars" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Cars</Link></li>
              <li><Link to="/about" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/login" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Login</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Daily Rental</a></li>
              <li><a href="#" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Weekly Rental</a></li>
              <li><a href="#" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Monthly Rental</a></li>
              <li><a href="#" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Chauffeur Service</a></li>
              <li><a href="#" className="text-[var(--color-secondary)] hover:text-white transition-colors text-sm">Airport Transfer</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-secondary)]">King Fahd Road, Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <a href="tel:+966123456789" className="text-sm text-[var(--color-secondary)] hover:text-white transition-colors">+966 12 345 6789</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <a href="mailto:info@ashhalan.sa" className="text-sm text-[var(--color-secondary)] hover:text-white transition-colors">info@ashhalan.sa</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-secondary)]">
            © 2024 Ashhalan Car Rental. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[var(--color-secondary)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-[var(--color-secondary)] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
