// components/booking/OrderSummary.tsx

// We're setting up the type for `bookingDetails` here.
// This helps us (and TypeScript) know what kind of information
// `bookingDetails` is expected to have. It makes our code safer and easier to understand.
interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

// This is our OrderSummary component. It takes `bookingDetails` as a "prop" (property).
// Props are how components talk to each other and pass information down.
const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  // Calculate the grand total by adding the price and the booking fee.
  const grandTotal = bookingDetails.price + bookingDetails.bookingFee;

  return (
    // This is the main container for our order summary.
    // It has a white background, padding, a shadow, and rounded corners,
    // similar to the BookingForm for a consistent look.
    <div className="bg-white p-6 shadow-md rounded-lg">
      {/* Heading for the order details section. */}
      // 'text-2xl font-bold mb-6 text-gray-800' makes the text large, bold, and dark gray.
      // 'mb-6' adds space below the heading.
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Review Order Details</h2>

      {/* Property Information Section */}
      // 'flex items-center mt-4 mb-6' arranges items in a row, centers them vertically,
      // and adds space above and below.
      <div className="flex items-center mt-4 mb-6">
        {/* Placeholder image for the property.
            In a real app, this would be a real image URL from your listing.
            We use 'w-32 h-32' for a fixed size, 'object-cover' to make sure
            the image fills its space without distortion, and 'rounded-md' for rounded corners. */}
        <img
          src="https://placehold.co/128x128/e2e8f0/64748b?text=Property"
          alt="Property"
          className="w-32 h-32 object-cover rounded-md"
          // Adding an onerror to replace the image if it fails to load
          onerror="this.onerror=null;this.src='https://placehold.co/128x128/e2e8f0/64748b?text=Image+Missing';"
        />
        {/* Text details for the property. 'ml-4' adds space to the left. */}
        <div className="ml-4">
          {/* Property name */}
          <h3 className="text-xl font-semibold text-gray-800">{bookingDetails.propertyName}</h3>
          {/* Review score. Using a star emoji for a nice touch. */}
          <p className="text-sm text-gray-600 mt-1">⭐️ 4.76 (345 reviews)</p>
          {/* Stay details */}
          <p className="text-sm text-gray-600 mt-1">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown Section */}
      // 'border-t border-gray-200 pt-6' adds a top border and padding above it,
      // separating this section visually.
      <div className="border-t border-gray-200 pt-6">
        {/* Flexbox for "Booking Fee" and its amount. 'justify-between' pushes them to ends. */}
        <div className="flex justify-between items-center text-gray-700">
          <p>Booking Fee</p>
          <p className="font-medium">${bookingDetails.bookingFee.toFixed(2)}</p> {/* .toFixed(2) ensures 2 decimal places */}
        </div>
        {/* Flexbox for "Subtotal" and its amount. */}
        <div className="flex justify-between items-center text-gray-700 mt-2">
          <p>Subtotal</p>
          <p className="font-medium">${bookingDetails.price.toFixed(2)}</p>
        </div>
        {/* Flexbox for "Grand Total" and its amount. This one is bolder and larger. */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300 font-bold text-lg text-gray-900">
          <p>Grand Total</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
