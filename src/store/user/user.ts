import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../types/store';
import {checkAuthAction, loginAction, logoutAction} from '../../store/apiActions';
import {SliceSpace} from '../../types/types';
import {AuthorizationStatus} from '../../const';

const initialState: UserState = {
  authStatus: AuthorizationStatus.Unknown,
  User: undefined,
  dataLoading: false,
  hasError: false,
};

export const user = createSlice({
  name: SliceSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.User = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.User = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  }
});
