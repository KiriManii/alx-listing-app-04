import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  comment: string;
  rating: number;
  author: string;
  date: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-600">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">
        Reviews ({reviews.length})
      </h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-semibold text-gray-600">
                  {review.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold">{review.author}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
