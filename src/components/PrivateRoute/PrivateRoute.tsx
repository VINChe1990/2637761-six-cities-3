import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user/selectors';

interface LocationState {
  from: string;
}

type PrivateRouteProps = {
  children: JSX.Element;
  onlyUnAuth?: boolean;
}

const PrivateRoute = ({ children, onlyUnAuth}: PrivateRouteProps) => {

  const authStatus = useAppSelector(getAuthStatus);

  const location = useLocation();
  const state = location.state as LocationState;

  if (onlyUnAuth && authStatus === AuthorizationStatus.Auth) {
    const from = state?.from || { pathname : AppRoute.Main };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && authStatus !== AuthorizationStatus.Auth) {
    return <Navigate state={{ from: location}} to={AppRoute.Login}/>;
  }
  return children;
};

export default PrivateRoute;
