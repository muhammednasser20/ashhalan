import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-2)]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Contact Us</h1>
          <p className="text-lg text-[var(--color-accent)]">
            Get in touch with our team. We're here to help you with any questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Main Office</h3>
                  <p className="text-[var(--color-accent)]">
                    King Fahd Road<br />
                    Al Olaya District<br />
                    Riyadh 12211<br />
                    Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Phone</h3>
                  <p className="text-[var(--color-accent)] mb-2">
                    <a href="tel:+966123456789" className="hover:text-[var(--color-primary)] transition-colors">
                      +966 12 345 6789
                    </a>
                  </p>
                  <p className="text-[var(--color-accent)]">
                    <a href="tel:+966987654321" className="hover:text-[var(--color-primary)] transition-colors">
                      +966 98 765 4321
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Email</h3>
                  <p className="text-[var(--color-accent)] mb-2">
                    <a href="mailto:info@ashhalan.sa" className="hover:text-[var(--color-primary)] transition-colors">
                      info@ashhalan.sa
                    </a>
                  </p>
                  <p className="text-[var(--color-accent)]">
                    <a href="mailto:support@ashhalan.sa" className="hover:text-[var(--color-primary)] transition-colors">
                      support@ashhalan.sa
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Business Hours</h3>
                  <p className="text-[var(--color-accent)] mb-1">Sunday - Thursday: 8:00 AM - 10:00 PM</p>
                  <p className="text-[var(--color-accent)] mb-1">Friday: 2:00 PM - 10:00 PM</p>
                  <p className="text-[var(--color-accent)]">Saturday: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Message Sent!</h3>
                  <p className="text-[var(--color-accent)]">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label>Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="btn w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Riyadh</h3>
              <p className="text-[var(--color-accent)] mb-3">King Fahd Road, Al Olaya District</p>
              <a href="tel:+966123456789" className="text-[var(--color-primary)]">+966 12 345 6789</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Jeddah</h3>
              <p className="text-[var(--color-accent)] mb-3">Palestine Street, Al Andalus District</p>
              <a href="tel:+966126543210" className="text-[var(--color-primary)]">+966 12 654 3210</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Dammam</h3>
              <p className="text-[var(--color-accent)] mb-3">King Khalid Street, Al Faisaliyah</p>
              <a href="tel:+966138765432" className="text-[var(--color-primary)]">+966 13 876 5432</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
