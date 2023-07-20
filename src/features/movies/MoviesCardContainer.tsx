import { styled } from "styled-components";
import { MoviesCard } from "./MoviesCard";
import { Movie } from "../../types/Movie";

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

interface MoviesCardProps {
  movies: Movie[];
}

export const MoviesCardContainer = ({ movies }: MoviesCardProps) => {
  return (
    <CardContainerStyles>
      {movies?.map((movie: Movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </CardContainerStyles>
  );
};
