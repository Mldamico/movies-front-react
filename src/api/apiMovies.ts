import { CreateMovieProps } from "../types/Movie";
import axios from "./axios";

const getMovies = () => axios.get("/movies");

const getMoviesByFilter = (params: {}) =>
  axios.get("/movies/filter", { params });

const deleteMovieById = (id: number) => axios.delete(`/movies/${id}`);

const editMovieById = (id: number, movie: Partial<CreateMovieProps>) =>
  axios.put(`/movies/${id}`, { movie });

const createMovie = (movie: CreateMovieProps) =>
  axios.post("movies", { movie });

export {
  getMovies,
  getMoviesByFilter,
  deleteMovieById,
  createMovie,
  editMovieById,
};
