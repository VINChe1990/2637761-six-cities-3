import classNames from 'classnames';

import '../../styles/main.css';
import { getFavorites } from '../../store/favorites/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteAction } from '../../store/apiActions';
import { FavoriteStatus } from '../../types/place';
import { FavoriteButtonViewType } from '../../types/types';

export type FavoriteButtonProps = {
  placeId: string;
  viewType: FavoriteButtonViewType;
}

const FavoriteButton = ({ placeId, viewType }: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();

  const favoritePlaces = useAppSelector(getFavorites);
  const isFavorite: boolean = favoritePlaces.some((r) => r.id === placeId);

  const handleChangeFavorite = () => {
    dispatch(changeFavoriteAction({
      placeId: placeId,
      status: isFavorite ? FavoriteStatus.Removed : FavoriteStatus.Added
    }));
  };

  const bookmarkClassType = `${viewType}__bookmark`;
  const iconClass = `${bookmarkClassType}-icon`;

  const bookmarkClass = classNames(
    'button',
    `${bookmarkClassType}-button`,
    {
      'place-card__bookmark-button--active': isFavorite && FavoriteButtonViewType.PlaceCard,
      'offer__bookmark-button--active': isFavorite && FavoriteButtonViewType.Offer
    }
  );

  const iconWidth = viewType === FavoriteButtonViewType.PlaceCard ? 18 : 31;
  const iconHeight = viewType === FavoriteButtonViewType.PlaceCard ? 19 : 33;

  return (
    <button
      className={bookmarkClass}
      type="button"
      onClick={handleChangeFavorite}
    >
      <svg className={iconClass} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">${isFavorite ? 'In' : 'To'}To bookmarks</span>
    </button>
  );
};

export default FavoriteButton;
