/*
 * FILE PATH: alx-listing-app/components/common/Card.tsx
 * Property Card component matching the exact Figma design
 * Features: Discount badges, property types, amenity icons, ratings
 */

import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

/**
 * Property Card component matching Figma design exactly
 * Features discount badges, property type tags, amenity icons, and ratings
 */
const Card: React.FC<CardProps> = ({
  id,
  title = 'Villa Arrecife Beach House',
  location = 'Sidemen, Bali, Indonesia',
  image = '/assets/placeholder-property.jpg',
  price = 2450,
  originalPrice,
  discountPercentage = 30,
  rating = 4.76,
  reviewCount = 172,
  propertyTypes = ['Top Villa', 'Self Checkin', 'Free Reschedule'],
  bedrooms = 4,
  bathrooms = 3,
  area = 2,
  isFavorited = false,
  onFavoriteToggle,
  className = '',
  onClick,
  ...props
}) => {
  // Handle heart/favorite toggle
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking heart
    if (onFavoriteToggle && id) {
      onFavoriteToggle(id);
    }
  };

  // Handle card click
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Format price display
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  // Render star rating with review count
  const renderStars = (rating: number, reviewCount: number) => {
    return (
      <div className="flex items-center space-x-1">
        <svg
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-gray-900">
          {rating}
        </span>
        <span className="text-sm text-gray-500">
          ({reviewCount} reviews)
        </span>
      </div>
    );
  };

  // Render amenity icons with proper bed, bath, guest icons
  const renderAmenities = () => {
    return (
      <div className="flex items-center space-x-3 text-gray-600 text-sm">
        {/* Bedrooms */}
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
          <span>{bedrooms}</span>
        </div>
        
        {/* Bathrooms */}
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2a2 2 0 002-2V5a1 1 0 100-2H3zm6 2a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span>{bathrooms}</span>
        </div>
        
        {/* Area/Guests */}
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
          <span>{area}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group ${className}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      {...props}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = '/assets/placeholder-property.jpg';
          }}
        />
        
        {/* Discount Badge */}
        {discountPercentage && discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {discountPercentage}% Off
          </div>
        )}

        {/* Heart/Favorite Icon */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            isFavorited 
              ? 'bg-red-500 text-white' 
              : 'bg-white bg-opacity-80 text-gray-600 hover:bg-opacity-100'
          }`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className="w-4 h-4" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Property Type Badges */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex flex-wrap gap-1">
            {propertyTypes?.slice(0, 3).map((type, index) => (
              <span
                key={index}
                className="bg-white bg-opacity-90 text-gray-700 text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Rating with Reviews */}
        <div className="flex items-center justify-between mb-2">
          {renderStars(rating, reviewCount)}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-teal-600 transition-colors duration-200">
          {title}
        </h3>
        
        {/* Location */}
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        
        {/* Amenities */}
        <div className="mb-4">
          {renderAmenities()}
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-1">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(price)}
            </span>
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          
          {/* Original price (if discounted) */}
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
