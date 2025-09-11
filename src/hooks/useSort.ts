import {IPlace} from '../types/place';
import { useAppSelector } from '../hooks';
import { getSortType } from '../store/offers/selectors';
import { useMemo } from 'react';

const useSort = (places: IPlace[]): IPlace[] => {
  const sortType = useAppSelector(getSortType);
  const result = useMemo(() => {
    switch (sortType) {
      case 'Price: low to high':
        return [...places].sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return [...places].sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return [...places].sort((a, b) => b.rating - a.rating);
      case 'Popular':
      default:
        // Возвращаем копию исходного массива без сортировки
        return [...places];
    }
  }, [sortType, places]);

  return result;
};

export default useSort;
