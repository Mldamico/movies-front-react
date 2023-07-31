import { styled } from "styled-components";
import { MoviesCard } from "./MoviesCard";
import { Movie } from "../../types/Movie";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const CardContainerStyles = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

type MovieType = "next" | "now";

interface MoviesCardProps {
  movies: Movie[];
  type: MovieType;
}

export const MoviesCardContainer = ({ movies, type }: MoviesCardProps) => {
  return (
    <>
      <CardContainerStyles>
        {movies?.map((movie: Movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </CardContainerStyles>
      <Link
        to={type === "next" ? `/movies/next-releases` : `/movies/on-cinema-now`}
      >
        <Button>{type === "next" ? "Next Releases" : "Showcasing Now"}</Button>
      </Link>
    </>
  );
};
