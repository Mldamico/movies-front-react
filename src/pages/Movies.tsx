import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { MoviesCardContainer } from "../features/MoviesCardContainer";
import { getMovies } from "../api/apiMovies";
import { useQuery } from "@tanstack/react-query";

export default function Movies() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">On Cinema now</Heading>
      </Row>
      <MoviesCardContainer movies={movies?.data.showcasing} />
      <Row type="horizontal">
        <Heading as="h2">Next Releases</Heading>
      </Row>
      <MoviesCardContainer movies={movies?.data.nextRelease} />
    </>
  );
}
