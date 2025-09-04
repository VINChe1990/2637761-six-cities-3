import { ChangeEvent, Fragment, useCallback } from 'react';
import { RATING_TITLES, RATING_VALUES } from '../../const';

import '../../styles/main.css';

type RatingStarsProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
};

const RatingStars = ({ rating, onRatingChange }: RatingStarsProps) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onRatingChange(Number(event.target.value));
  }, [onRatingChange]);

  return (
    <>
      {RATING_VALUES.map((starRating) => (
        <Fragment key={starRating}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            type="radio"
            value={starRating}
            id={`${starRating}-stars`}
            onChange={handleChange}
            checked={rating === starRating}
          />
          <label
            htmlFor={`${starRating}-stars`}
            className="reviews__rating-label form__rating-label"
            title={RATING_TITLES[starRating - 1]}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </>
  );
};

export default RatingStars;
