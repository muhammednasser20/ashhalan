import { useState } from 'react';
import { cars, categories } from '../data/cars';
import { CarCard } from '../components/CarCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export function Cars() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = cars.filter((car) => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[var(--color-surface-2)]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Our Fleet</h1>
          <p className="text-lg text-[var(--color-accent)]">
            Choose from our wide selection of premium vehicles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(17,17,17,0.08)] sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-bold text-[var(--color-text)]">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 hover:bg-[var(--color-surface-2)] rounded-lg transition-colors"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6`}>
                {/* Search */}
                <div>
                  <label className="block mb-3">
                    <Search className="w-4 h-4 inline mr-2 text-[var(--color-primary)]" />
                    Search
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search cars..."
                    className="w-full"
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="block mb-3 text-[var(--color-accent)]">Category</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'bg-[var(--color-surface-2)] text-[var(--color-accent)] hover:bg-[var(--color-border)]'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block mb-3 text-[var(--color-accent)]">
                    Price Range (SAR/day)
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        placeholder="Min"
                        className="w-full"
                      />
                      <span className="text-[var(--color-accent)]">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        placeholder="Max"
                        className="w-full"
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Reset */}
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                    setPriceRange([0, 1000]);
                  }}
                  className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg text-[var(--color-accent)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Cars Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[var(--color-accent)]">
                Showing <span className="font-bold text-[var(--color-text)]">{filteredCars.length}</span> cars
              </p>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                <p className="text-xl text-[var(--color-accent)] mb-4">No cars found matching your criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                    setPriceRange([0, 1000]);
                  }}
                  className="btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
