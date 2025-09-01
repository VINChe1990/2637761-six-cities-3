import {createSlice} from '@reduxjs/toolkit';
import {FavoritesState} from '../../types/store';
import {changeFavoriteAction, fetchFavoritesAction} from '../../store/apiActions';
import {SliceSpace} from '../../types/types';
import { FavoriteStatus } from '../../types/place';

const initialState: FavoritesState = {
  favorites: [],
  dataLoading: false,
  hasError: false,
};

export const favorites = createSlice({
  name: SliceSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.dataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.dataLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.dataLoading = false;
        state.hasError = true;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, { payload: result }) => {
        switch (result.status) {
          case FavoriteStatus.Added:
            state.favorites.push(result.place);
            break;
          case FavoriteStatus.Removed:
            state.favorites = state.favorites.filter((r) => r.id !== result.place.id);
            break;
        }
        state.dataLoading = false;
      })
      .addCase(changeFavoriteAction.rejected, (state) => {
        state.dataLoading = false;
        state.hasError = true;
      });
  }
});
