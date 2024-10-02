import { ReactNode } from "react";

export interface Layoutprops{
    children: ReactNode
}

export interface MovieListprops {
  recommended: MovieDataType[];
}

export interface MovieTrendListprops {
  trendingList: MovieDataType[];
}

export interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface MovieContentProps{
  children: ReactNode
}

export interface MovieState{
  movies: MovieDataType[]
}

export interface MovieAction{
  type: string,
  id: string,
}

export interface MovieCardprops{
  movie: MovieDataType;
}

export interface MovieTrendCardprops{
  movie: MovieDataType;
}