import {combineReducers} from '@reduxjs/toolkit';
import {SliceSpace} from '../types/types';
import {offers} from './offers/offers';
import {favorites} from './favorites/favorites';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [SliceSpace.Offers]: offers.reducer,
  [SliceSpace.Favorites]: favorites.reducer,
  [SliceSpace.User]: user.reducer
});
