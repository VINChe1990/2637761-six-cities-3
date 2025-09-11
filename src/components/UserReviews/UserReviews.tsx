import { useMemo } from 'react';
import classNames from 'classnames';

import { IReview } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { getOfferReviews } from '../../store/offers/selectors';
import ReviewForm from '../ReviewForm';
import ImageWithFallback from '../ImageWithFallback';

type ReviewsProps = {
  review: IReview;
}

const Review = ({ review }: ReviewsProps) => {
  const date = new Date(review.date);
  const dateTime = date.toISOString();
  const formattedDate = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const starClassName = classNames(`raiting-${Math.round(review.rating)}-star`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <ImageWithFallback
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            fallbackSrc={'img/avatar.svg'}
            width="54"
            height="54"
            alt="Аватар пользователя"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span className={starClassName}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{formattedDate}</time>
      </div>
    </li>
  );
};

const UserReviews = () => {
  const reviews = useAppSelector(getOfferReviews);
  const reviewList = useMemo(() => reviews.map((review) => <Review key={review.id} review={review}/>), [reviews]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewList}
      </ul>
      <ReviewForm />
    </section>
  );
};

export default UserReviews;
