import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../../services/api";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then((data) => setReviews(data));
  }, []);

  console.log(reviews);
  return (
    <ul>
      Reviews
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h5>{review.author}</h5>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
