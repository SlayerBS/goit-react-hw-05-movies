import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../../services/api";
import { toast } from "react-toastify";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then((data) => {
      if (data.length === 0) {
        toast.error("No reviews");
        return;
      }
      setReviews(data);
    });
  }, []);

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
