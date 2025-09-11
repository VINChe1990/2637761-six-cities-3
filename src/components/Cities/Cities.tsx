import { useCallback, useMemo, type MouseEvent } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { citiesSelector } from '../../store/offers/selectors';
import { setCity } from '../../store/offers/offers';

const Cities = () => {
  const dispatch = useAppDispatch();
  const { city, cities } = useAppSelector(citiesSelector);

  const handleCityClick = useCallback((event: MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    dispatch(setCity(element.textContent ?? ''));
  }, [dispatch]);

  const citiesList = useMemo(() =>
    cities.map((item) => {
      const tabClass = classNames(
        'locations__item-link',
        'tabs__item',
        {
          'tabs__item--active': item.name === city.name
        }
      );

      return (
        <li key={`${item.id}-${item.name}`} className="locations__item" onClick={handleCityClick}>
          <a className={tabClass} href="#">
            <span>{item.name}</span>
          </a>
        </li>
      );
    }),
  [city, cities, handleCityClick]
  );

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList}
      </ul>
    </section>
  );
};

export default Cities;
