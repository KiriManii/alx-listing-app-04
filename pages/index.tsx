import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HERO_IMAGE } from '@/constants';
import Pill from '@/components/ui/Pill';
import PropertyCard from '@/components/ui/PropertyCard';

const FILTERS = [
  'Luxury Villa',
  'Pool',
  'Free Parking',
  'Self Checkin',
  'Beachfront',
  'Mountain View',
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to load properties. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filtered = activeFilter
    ? properties.filter(p => p.category?.includes(activeFilter))
    : properties;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <p className="text-lg">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
      <section
        className="h-64 bg-cover bg-center rounded-lg mb-8 flex items-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(label => (
            <Pill
              key={label}
              label={label}
              selected={activeFilter === label}
              onClick={() => setActiveFilter(activeFilter === label ? null : label)}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(property => (
            <PropertyCard key={property.id || property.name} property={property} />
          ))}
        </div>
        {filtered.length === 0 && !loading && (
          <p className="text-center text-gray-500 text-lg">No properties found.</p>
        )}
      </section>
    </>
  );
};

export default HomePage;
