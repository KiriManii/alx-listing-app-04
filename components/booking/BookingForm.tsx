// components/booking/BookingForm.tsx

// This is our BookingForm component. It's a "functional component" in React,
// which is like a small function that returns some HTML-like code (JSX).
const BookingForm = () => (
  // This is the main container for our form.
  // 'bg-white p-6 shadow-md rounded-lg' are Tailwind CSS classes:
  // - 'bg-white': makes the background white.
  // - 'p-6': adds padding (space) all around the inside of the box.
  // - 'shadow-md': gives it a medium shadow, making it pop out a bit.
  // - 'rounded-lg': makes the corners nicely rounded.
  <div className="bg-white p-6 shadow-md rounded-lg">
    {/* This is the heading for the contact information section. */}
    // 'text-2xl font-bold' makes the text large and bold.
    // 'mb-6' adds some space below the heading.
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Details</h2>
    <form>
      {/* Contact Information Section */}
      {/* 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6' sets up a grid:
          - 'grid-cols-1': one column on small screens.
          - 'md:grid-cols-2': two columns on medium screens and larger.
          - 'gap-4': adds space between the grid items.
          - 'mb-6': adds space below this section. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          {/* Label for the input field. 'block' makes it take its own line. */}
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          {/* Input field for first name. */}
          // 'border p-3 w-full mt-1 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500' are Tailwind classes:
          // - 'border': adds a border.
          // - 'p-3': padding inside the input.
          // - 'w-full': makes it take up the full width available.
          // - 'mt-1': margin top.
          // - 'rounded-md': slightly rounded corners.
          // - 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500': when you click on it, it gets a blue outline (focus effect).
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel" // 'tel' type is good for phone numbers
            id="phoneNumber"
            name="phoneNumber"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      {/* Payment Information Section */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Information</h2>
      <div className="mb-6">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="•••• •••• •••• ••••"
          />
        </div>
        {/* Two columns for Expiration Date and CVV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="123"
            />
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing Address</h2>
      <div className="mb-6">
        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="123 Main St"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="aptSuite" className="block text-sm font-medium text-gray-700 mb-1">Apt/Suite (Optional)</label>
          <input
            type="text"
            id="aptSuite"
            name="aptSuite"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Apt 4B"
          />
        </div>
        {/* Two columns for City and State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="New York"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="NY"
            />
          </div>
        </div>
        {/* Two columns for Zip Code and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="10001"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="USA"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      {/* 'mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition duration-300'
          - 'mt-6': margin top.
          - 'bg-blue-600': blue background.
          - 'text-white': white text.
          - 'py-3 px-6': vertical and horizontal padding.
          - 'rounded-lg': very rounded corners.
          - 'w-full': full width.
          - 'text-lg font-semibold': larger, bolder text.
          - 'hover:bg-blue-700': darkens the blue when you hover over it.
          - 'transition duration-300': makes the hover effect smooth over 0.3 seconds. */}
      <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
