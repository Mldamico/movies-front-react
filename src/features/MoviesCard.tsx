import { styled } from "styled-components";
import { Movie } from "../types/Movie";

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  padding: 1rem;
  padding-bottom: 2.5rem;

  &:hover {
    background-color: var(--color-brand-200);
    transition: all 0.8s;
  }
  p {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Image = styled.img``;

interface MoviesCardProps {
  movie: Movie;
}

export const MoviesCard = ({ movie }: MoviesCardProps) => {
  return (
    <CardStyles>
      <div>
        <Image src={movie.poster} alt={movie.title} />
      </div>
      <div>
        <p>{movie.title}</p>
      </div>
    </CardStyles>
  );
};
