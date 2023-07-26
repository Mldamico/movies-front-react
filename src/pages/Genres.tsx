import { styled } from "styled-components";
import { AddGenre } from "../features/genres/AddGenre";
import { GenresTable } from "../features/genres/GenresTable";

const StyledGenres = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Genres = () => {
  return (
    <StyledGenres>
      <GenresTable />
      <AddGenre />
    </StyledGenres>
  );
};
