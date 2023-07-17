import { useEffect } from "react";
import { getMovies } from "../api/apiMovies";
import { useQuery } from "@tanstack/react-query";

export default function Movies() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <p>Loading...</p>;
  

  return <div></div>;
}
