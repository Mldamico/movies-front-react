import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/apiMovies";

export const useGetMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { movies, isLoading };
};
