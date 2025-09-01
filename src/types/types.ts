import { City } from './city';
import { FavoriteStatus, IPlace } from './place';
import { IUser } from './user';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IComment {
  comment: string;
  rating: number;
}

export interface IReview extends IComment {
  id: string;
  date: string;
  user: IUser;
}

export type CommentData = {
  placeId: string;
  comment: IComment;
};

export type ChangeFavoriteData = {
  placeId: string;
  status: FavoriteStatus;
};

export type ChangeFavoriteResult = {
  status: FavoriteStatus;
  place: IPlace;
};

export enum FavoriteButtonViewType {
  PlaceCard = 'place-card',
  Offer = 'offer',
}


export type MapProps = {
  viewType: MapViewType;
  city: City;
  places: IPlace[];
  selectedPlace: string;
}

export enum MapViewType {
  Offer = 'offer',
  Cities = 'cities',
}

export enum SliceSpace {
  Offers = 'Offers',
  Favorites = 'Favorites',
  User = 'User'
}
