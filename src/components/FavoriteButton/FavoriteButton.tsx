import classNames from 'classnames';

import '../../styles/main.css';
import { getIsFavorite } from '../../store/favorites/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteAction } from '../../store/apiActions';
import { FavoriteStatus } from '../../types/place';
import { FavoriteButtonViewType } from '../../types/types';
import { getUserLogged } from '../../store/user/selectors';
import { ICON_SIZES } from '../../const';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types/store';

type FavoriteButtonProps = {
  placeId: string;
  viewType: FavoriteButtonViewType;
}

const FavoriteButton = ({ placeId, viewType }: FavoriteButtonProps) => {
  const userLogged = useAppSelector(getUserLogged);

  const dispatch = useAppDispatch();

  const selectIsFavorite = useCallback(
    (state: State) => getIsFavorite(state, placeId),
    [placeId]
  );
  const isFavorite = useSelector(selectIsFavorite);

  const handleChangeFavorite = useCallback(() => {
    dispatch(changeFavoriteAction({
      placeId: placeId,
      status: isFavorite ? FavoriteStatus.Removed : FavoriteStatus.Added
    }));
  }, [dispatch, placeId, isFavorite]);

  const { bookmarkClassName: bookmarkClass, iconClassName: iconClass, width: iconWidth, height: iconHeight, buttonLabelText: buttonLabel } = useMemo(() => {
    const bookmarkClassName = classNames(
      'button',
      `${viewType}__bookmark-button`,
      { [`${viewType}__bookmark-button--active`]: isFavorite }
    );

    const iconClassName = `${viewType}__bookmark-icon`;
    const { width, height } = ICON_SIZES[viewType];
    const buttonLabelText = `${isFavorite ? 'In' : 'To'} bookmarks`;

    return {
      bookmarkClassName,
      iconClassName,
      width,
      height,
      buttonLabelText
    };
  }, [viewType, isFavorite]);

  if (!userLogged){
    return (
      <>
      </>);
  }

  return (
    <button
      className={bookmarkClass}
      type="button"
      onClick={handleChangeFavorite}
    >
      <svg
        className={iconClass}
        width={iconWidth}
        height={iconHeight}
        aria-hidden="true"
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{buttonLabel}</span>
    </button>
  );
};

export default FavoriteButton;
