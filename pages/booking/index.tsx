// pages/booking/index.tsx

// Import the components we'll use on this page.
// The '@/' is a shortcut that means "start from the root of our project".
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy"; // We'll add this component later

// This is our main BookingPage component.
// It's like the main assembly line where all the parts come together.
export default function BookingPage() {
  // These are some example details for our booking.
  // In a real app, this information would come from a server or a previous page.
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House", // Name of the place being booked
    price: 7500, // Price per night (or total, depends on context, but here assumed per total nights)
    bookingFee: 65, // An extra fee for booking
    totalNights: 3, // How many nights the booking is for
    startDate: "24 August 2024", // When the booking starts
  };

  return (
    // This is the main container for our page.
    // 'container mx-auto p-6' makes sure it's centered and has some space around it.
    <div className="container mx-auto p-6">
      {/* This 'grid' layout helps us arrange items side-by-side or stacked on smaller screens.
          'grid-cols-2' means two columns on larger screens.
          'gap-6' adds space between the columns. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Added md:grid-cols-2 for responsiveness */}
        {/* Here we put our BookingForm component. */}
        <BookingForm />
        {/* Here we put our OrderSummary component and pass it the bookingDetails. */}
        <OrderSummary bookingDetails={bookingDetails} />
      </div>

      {/* Add the CancellationPolicy component below the form and summary. */}
      {/* This will appear below the main grid layout. */}
      <CancellationPolicy />
    </div>
  );
}
