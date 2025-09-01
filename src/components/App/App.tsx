import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute } from '../../const';

import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import PrivateRoute from '../PrivateRote/PrivateRoute';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useAppDispatch } from '../../hooks';
import { fetchOffersAction, checkAuthAction } from '../../store/apiActions';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRoute onlyUnAuth>
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute >
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<OfferPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
