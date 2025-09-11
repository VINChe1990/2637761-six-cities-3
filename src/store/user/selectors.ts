import {State} from '../../types/store';
import { AuthorizationStatus } from '../../const';
import {SliceSpace} from '../../types/types';
import { ISiteUser } from '../../types/user';
import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: State) => state[SliceSpace.User];

export const getAuthStatus = createSelector(
  selectUserState,
  (userState): AuthorizationStatus => userState.authStatus
);

export const getUserLogged = createSelector(
  selectUserState,
  (userState): boolean => userState.authStatus === AuthorizationStatus.Auth
);

export const getUser = createSelector(
  selectUserState,
  (userState): ISiteUser | undefined => userState.User
);
