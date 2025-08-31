import {createSlice} from '@reduxjs/toolkit';
import {FavoritesState} from '../../types/store';
import {fetchFavoritesAction} from '../../store/apiActions';
import {SliceSpace} from '../../types/types';

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
      });
  }
});
