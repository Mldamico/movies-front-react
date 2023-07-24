import { styled } from "styled-components";
import { useGetGenres } from "./useGetGenres";
import { Genre, GenresRow } from "./GenresRow";
import { LoadingSpinner } from "../../ui/LoadingSpinner";
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: flex;
  column-gap: 3rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;

  div:nth-child(2) {
    flex-grow: 2;
  }
`;

export const GenresTable = () => {
  const { genres, isLoading } = useGetGenres();

  if (isLoading) return <LoadingSpinner />;

  if (genres)
    return (
      <Table role="table">
        <TableHeader role="row">
          <div>#</div>
          <div>Name</div>
          <div>Edit</div>
          <div>Delete</div>
        </TableHeader>
        {genres?.data.map((genre: Genre, i: number) => (
          <GenresRow position={i + 1} genre={genre} />
        ))}
      </Table>
    );
};
