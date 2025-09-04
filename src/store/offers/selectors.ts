import {State} from '../../types/store';
import {SortType} from '../../const';
import { City } from '../../types/city';
import { IOffer, IPlace } from '../../types/place';
import { IReview, SliceSpace } from '../../types/types';

const getDataIsLoading = (state: State): boolean => state[SliceSpace.Offers].dataLoading;
const getAllCities = (state: State): City[] => state[SliceSpace.Offers].cities;
const getCity = (state: State): City => state[SliceSpace.Offers].city;
const getCityPlaces = (state: State): IPlace[] => state[SliceSpace.Offers].cityPlaces;
const getCityPlacesCount = (state: State): number => state[SliceSpace.Offers].cityPlacesCount;
const getSortType = (state: State): SortType => state[SliceSpace.Offers].sortType;

const getOffer = (state: State): IOffer | undefined => state[SliceSpace.Offers].offerView.offer;
const getOfferNearPlaces = (state: State): IPlace[] => state[SliceSpace.Offers].offerView.nearPlaces;
const getOfferReviews = (state: State): IReview[] => state[SliceSpace.Offers].offerView.reviews;

export { getDataIsLoading, getAllCities, getCity, getCityPlaces, getCityPlacesCount, getSortType, getOffer, getOfferNearPlaces, getOfferReviews };
