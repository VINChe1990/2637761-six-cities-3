import {State} from '../../types/store';
import { AuthorizationStatus } from '../../const';
import {SliceSpace} from '../../types/types';
import { ISiteUser } from '../../types/user';

const getAuthStatus = (state: State): AuthorizationStatus => state[SliceSpace.User].authStatus;
const getUser = (state: State): ISiteUser | undefined => state[SliceSpace.User].User;

export { getAuthStatus, getUser };
