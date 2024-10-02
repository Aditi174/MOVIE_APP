import React, { createContext, useReducer } from "react";
import {
  MovieDataType,
  MovieState,
  MovieContentProps,
  MovieAction,
} from "../Interfaces";
import { moviesData } from "../assets/data";

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: MovieState = {
  movies: MovieList,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};


export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({ state: initialMovieState, dispatch: () => {} });

export const MovieProvider = ({ children }: MovieContentProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
