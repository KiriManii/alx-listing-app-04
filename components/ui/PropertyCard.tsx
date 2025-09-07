import React from 'react';
import Link from 'next/link';

// Support both existing and API data structures
interface PropertyCardProps {
  property: {
    id?: string;
    name: string;
    title?: string;
    image: string;
    price: number;
    rating?: number;
    address?: {
      city: string;
      country: string;
    };
    location?: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Handle both data structures
  const propertyId = property.id || property.name;
  const propertyName = property.title || property.name;
  const propertyLocation = property.location || 
    (property.address ? `${property.address.city}, ${property.address.country}` : '');

  return (
    <Link href={`/property/${propertyId}`}>
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
        <img src={property.image} alt={propertyName} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">{propertyLocation}</p>
          <div className="flex items-center mt-2">
            <span className="text-indigo-600 font-bold">${property.price}</span>
            {property.rating && (
              <span className="ml-auto text-sm">⭐ {property.rating}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
