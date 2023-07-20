import { styled } from "styled-components";
import { Movie } from "../types/Movie";

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition: all 0.8s;
  }
  &:hover div {
    transform: rotate(-20deg);
  }
`;

const Image = styled.img`
  /* height: 30rem; */
  min-height: 40vh;
  max-height: 40vh;
`;

const CartTitle = styled.div`
  position: absolute;
  bottom: -3rem;
  right: -0.7rem;
  font-size: 2rem;
  font-weight: 500;
  background-color: var(--color-brand-500);
  padding: 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  text-align: center;
  color: white;

  &:hover {
    transform: rotate(-20deg);
  }
`;

interface MoviesCardProps {
  movie: Movie;
}

export const MoviesCard = ({ movie }: MoviesCardProps) => {
  return (
    <CardStyles>
      <Image src={movie.poster} alt={movie.title} />
      <CartTitle>
        <p>{movie.title}</p>
      </CartTitle>
    </CardStyles>
  );
};
