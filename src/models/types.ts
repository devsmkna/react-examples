// api types

export type Response<T> = {
  info: Info;
  results: T[];
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

// results types

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: [];
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Episode = {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

// query params types

export type QueryParamsCharacter = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};

export type QueryParamsEpisode = {
  name?: string;
  episode?: string;
};

export type QueryParamsLocation = {
  name?: string;
  type?: string;
  dimension?: string;
};

export type CartProduct = {
  id: string;
  quantity: number;
};

export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
};
