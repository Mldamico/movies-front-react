import { getMovies } from "../api/apiMovies";
import { useQuery } from "@tanstack/react-query";

export default function Movies() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        {movies?.data.nextRelease.map((movie: any) => (
          <div>
            <img src={movie.poster} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
