export interface IUser {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Token = string;

export interface ISiteUser extends IUser {
  email: string;
  token: Token;
}

export type AuthData = {
  login: string;
  password: string;
};
