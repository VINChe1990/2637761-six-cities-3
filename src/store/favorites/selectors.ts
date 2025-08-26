import {State} from '../../types/store';
import { IPlace } from '../../types/place';
import { SliceSpace } from '../../types/types';

const getFavorites = (state: State): IPlace[] => state[SliceSpace.Favorites].favorites;
const getFavoritesCount = (state: State): number => state[SliceSpace.Favorites].favorites.length;

export { getFavorites, getFavoritesCount };
