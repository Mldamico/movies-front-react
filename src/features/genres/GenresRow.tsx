import { styled } from "styled-components";

import { HiPencil, HiTrash } from "react-icons/hi2";
const TableRow = styled.div`
  display: flex;

  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const GenreStyleText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  flex-grow: 2;
`;

const GenreButton = styled.button`
  padding: 1rem;
`;

export interface Genre {
  id: number;
  name: string;
}

interface GenresRowProps {
  genre: Genre;
  position: number;
}

export const GenresRow = ({ position, genre }: GenresRowProps) => {
  return (
    <>
      <TableRow role="row">
        <p>{position}</p>
        <GenreStyleText>{genre.name}</GenreStyleText>
        <GenreButton>
          <HiPencil />
        </GenreButton>
        <GenreButton>
          <HiTrash />
        </GenreButton>
      </TableRow>
    </>
  );
};
