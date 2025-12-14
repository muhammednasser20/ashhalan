import { Shield, Award, Users, MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.7)), url(https://images.unsplash.com/photo-1722009591790-f47342aa9d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NjU3MDgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Ashhalan</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Leading the way in premium car rental services across Saudi Arabia since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-6">Our Story</h2>
            <p className="text-lg text-[var(--color-accent)] mb-4">
              Founded in 2015, Ashhalan has grown to become one of Saudi Arabia's most trusted car rental companies. 
              We started with a simple vision: to provide reliable, high-quality vehicles and exceptional customer service 
              to everyone exploring our beautiful country.
            </p>
            <p className="text-lg text-[var(--color-accent)]">
              Today, we operate across all major cities in Saudi Arabia, offering a diverse fleet of vehicles ranging from 
              economy cars to luxury SUVs. Our commitment to excellence and customer satisfaction remains at the heart of 
              everything we do.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-[var(--color-surface-2)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">500+</p>
              <p className="text-[var(--color-accent)]">Vehicles</p>
            </div>
            <div className="text-center p-8 bg-[var(--color-surface-2)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">50,000+</p>
              <p className="text-[var(--color-accent)]">Happy Customers</p>
            </div>
            <div className="text-center p-8 bg-[var(--color-surface-2)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">15+</p>
              <p className="text-[var(--color-accent)]">Locations</p>
            </div>
            <div className="text-center p-8 bg-[var(--color-surface-2)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">9+</p>
              <p className="text-[var(--color-accent)]">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[var(--color-surface-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Our Values</h2>
            <p className="text-lg text-[var(--color-accent)] max-w-2xl mx-auto">
              The principles that guide our business and shape our relationships with customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Safety First</h3>
              <p className="text-[var(--color-accent)]">
                All vehicles undergo rigorous safety checks and maintenance to ensure your security on the road.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Quality Service</h3>
              <p className="text-[var(--color-accent)]">
                We strive for excellence in every interaction, ensuring a seamless rental experience from start to finish.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Customer Focus</h3>
              <p className="text-[var(--color-accent)]">
                Your satisfaction is our priority. We listen, adapt, and continuously improve our services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_24px_rgba(17,17,17,0.08)] text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Accessibility</h3>
              <p className="text-[var(--color-accent)]">
                With locations across Saudi Arabia, we make it easy to rent a car wherever you need one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Our Commitment</h2>
            <p className="text-lg text-[var(--color-accent)] max-w-3xl mx-auto">
              At Ashhalan, we are committed to providing more than just a car rental service. We aim to be your 
              trusted travel partner, offering reliable vehicles, transparent pricing, and exceptional support 
              throughout your journey. Whether you're traveling for business or pleasure, exploring cities or 
              venturing into the desert, we have the perfect vehicle to match your needs.
            </p>
          </div>

          <div className="bg-[var(--color-primary)] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the Ashhalan difference. Book your car today and discover why we're Saudi Arabia's 
              preferred car rental choice.
            </p>
            <a href="/cars" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90 shadow-[0_14px_30px_rgba(255,255,255,0.3)] no-underline">
              Browse Our Fleet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
