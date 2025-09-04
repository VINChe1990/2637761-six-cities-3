import classNames from 'classnames';
import Header from '../../components/Header';
import Cities from '../../components/Cities';
import CityPlaces from '../../components/CityPlaces';

import { useAppSelector } from '../../hooks';
import { getCityPlacesCount } from '../../store/offers/selectors';

const MainPage = () => {
  const cityOffersEmpty = useAppSelector(getCityPlacesCount) === 0;

  const mainPageClass = classNames(
    'page__main',
    'page__main--index',
    {
      'page__main--index-empty': cityOffersEmpty
    }
  );
  const placeContainerClass = classNames(
    'container',
    'cities__places-container',
    {
      'cities__places-container--empty': cityOffersEmpty
    }
  );

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={mainPageClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <div className={placeContainerClass}>
            <CityPlaces />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
