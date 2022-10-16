import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsFromFilm } from 'services/api';
import { ReviewsTitle } from './Reviews.styles';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchReviewsList() {
      try {
        const response = await getReviewsFromFilm(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  const showReviews = Boolean(reviews.length);

  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>

      {showReviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
