import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, Phone, User } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img
              src={`${import.meta.env.BASE_URL}logos/logo.png`}
              alt="Ashhalan Car Rental"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-base transition-colors ${
                isActive("/")
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-accent)] hover:text-[var(--color-primary)]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className={`text-base transition-colors ${
                isActive("/cars")
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-accent)] hover:text-[var(--color-primary)]"
              }`}
            >
              Cars
            </Link>
            <Link
              to="/about"
              className={`text-base transition-colors ${
                isActive("/about")
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-accent)] hover:text-[var(--color-primary)]"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base transition-colors ${
                isActive("/contact")
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-accent)] hover:text-[var(--color-primary)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+966123456789"
              className="flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors no-underline"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+966 12 345 6789</span>
            </a>
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all no-underline"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-accent)]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-[var(--color-surface-2)] text-[var(--color-primary)]"
                    : "text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/cars"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/cars")
                    ? "bg-[var(--color-surface-2)] text-[var(--color-primary)]"
                    : "text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cars
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-[var(--color-surface-2)] text-[var(--color-primary)]"
                    : "text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "bg-[var(--color-surface-2)] text-[var(--color-primary)]"
                    : "text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
