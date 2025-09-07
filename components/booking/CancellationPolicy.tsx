// components/booking/CancellationPolicy.tsx

// This component displays the cancellation policy and ground rules for the booking.
const CancellationPolicy = () => (
  // Main container for this section.
  // 'bg-white p-6 shadow-md rounded-lg mt-6' gives it a white background, padding, shadow,
  // rounded corners, and a top margin to separate it from the sections above.
  <div className="bg-white p-6 shadow-md rounded-lg mt-6">
    {/* Heading for the Cancellation Policy. */}
    // 'text-2xl font-bold mb-4 text-gray-800' makes the text large, bold, and dark gray.
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Cancellation policy</h2>
    {/* The policy text. 'text-gray-700' for slightly darker text, 'leading-relaxed' for better line spacing. */}
    <p className="mt-2 text-gray-700 leading-relaxed">
      You can **cancel for a full refund before August 23**. If you cancel before check-in on August 24, you'll receive a partial refund. Please review the full terms for more details.
    </p>

    {/* Heading for the Ground Rules. 'mt-8' adds more space above this section. */}
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Ground Rules</h2>
    {/* List of ground rules. 'list-disc list-inside' creates a bulleted list. */}
    <ul className="mt-2 text-gray-700 list-disc list-inside leading-relaxed">
      <li>Follow the house rules at all times.</li>
      <li>Treat your Host’s home with respect, as if it were your own.</li>
      <li>Keep noise to a minimum, especially during quiet hours (10 PM - 8 AM).</li>
      <li>No smoking allowed indoors.</li>
      <li>Guests are responsible for any damages incurred during their stay.</li>
    </ul>
  </div>
);

export default CancellationPolicy;
