import { useGetGenres } from "./hooks/useGetGenres";
import { Genre, GenresRow } from "./GenresRow";
import { LoadingSpinner } from "../../ui/LoadingSpinner";
import { Table } from "../../ui/Table";
import { Menus } from "../../ui/Menus";

export const GenresTable = () => {
  const { genres, isLoading } = useGetGenres();

  if (isLoading || !genres?.data) return <LoadingSpinner />;
  const genresData: Genre[] = genres?.data;

  return (
    <Menus>
      <Table columns="0.2fr 2.5fr 1fr">
        <Table.Header>
          <div>#</div>
          <div>Name</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={genresData as unknown as Genre[]}
          render={(genre: Genre) => (
            <GenresRow position={genre.id} genre={genre} key={genre.id} />
          )}
        />
      </Table>
    </Menus>
  );
};
