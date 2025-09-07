import React from 'react';
import Image from 'next/image';

interface PropertyDetailProps {
  property: {
    id: string;
    name?: string;
    title?: string;
    description: string;
    image: string;
    price: number;
    rating?: number;
    address?: {
      city: string;
      country: string;
      street?: string;
    };
    location?: string;
    amenities?: string[];
    bedrooms?: number;
    bathrooms?: number;
    maxGuests?: number;
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const propertyName = property.title || property.name;
  const propertyLocation = property.location || 
    (property.address ? `${property.address.city}, ${property.address.country}` : '');

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{propertyName}</h1>
        <p className="text-gray-600">{propertyLocation}</p>
        {property.rating && (
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 font-semibold">{property.rating}</span>
          </div>
        )}
      </div>

      {/* Property Image */}
      <div className="mb-6">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src={property.image}
            alt={propertyName}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Property Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {property.bedrooms && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-lg">{property.bedrooms}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
            )}
            {property.bathrooms && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-lg">{property.bathrooms}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
            )}
            {property.maxGuests && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-lg">{property.maxGuests}</div>
                <div className="text-sm text-gray-600">Guests</div>
              </div>
            )}
          </div>

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 border rounded-lg p-6 shadow-lg">
            <div className="text-2xl font-bold mb-4">
              ${property.price} <span className="text-base font-normal text-gray-600">/ night</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition">
              Reserve
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
