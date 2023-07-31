import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { MoviesCardContainer } from "../features/movies/MoviesCardContainer";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { useGetMovies } from "../features/movies/useGetMovies";

export default function Movies() {
  const { isLoading, movies } = useGetMovies();

  if (isLoading || !movies) return <LoadingSpinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">On Cinema now</Heading>
      </Row>
      <MoviesCardContainer type="now" movies={movies.data.showcasing} />
      <Row type="horizontal">
        <Heading as="h2">Next Releases</Heading>
      </Row>
      <MoviesCardContainer type="next" movies={movies.data.nextRelease} />
    </>
  );
}
