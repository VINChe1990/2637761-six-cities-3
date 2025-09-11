import { State } from '../../types/store';
import { SliceSpace } from '../../types/types';
import { createSelector } from '@reduxjs/toolkit';

export const getFavorites = (state: State) => state[SliceSpace.Favorites].favorites;

export const getFavoritesCount = createSelector(
  getFavorites,
  (favorites)=> favorites.length
);

export const getIsFavorite = createSelector(
  [
    (state: State) => state[SliceSpace.Favorites].favorites,
    (_: State, placeId: string) => placeId
  ],
  (favorites, placeId): boolean => favorites.some((r) => r.id === placeId)
);

