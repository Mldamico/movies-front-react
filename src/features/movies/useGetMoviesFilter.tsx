import { useQuery } from "@tanstack/react-query";
import { getMoviesByFilter } from "../../api/apiMovies";

export const useGetMoviesFilter = (params: {}) => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies", params],
    queryFn: () => getMoviesByFilter(params),
  });
  console.log(params);

  return { movies, isLoading };
};
