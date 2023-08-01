import { useLocation } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { Menus } from "../../ui/Menus";
import { Table } from "../../ui/Table";
import { MoviesRow } from "./MoviesRow";
import { useGetMoviesFilter } from "./useGetMoviesFilter";
import { LoadingSpinner } from "../../ui/LoadingSpinner";

export const MoviesTable = () => {
  const { pathname } = useLocation();
  const pathNameArr = pathname.split("/");
  const filterOption = pathNameArr[pathNameArr.length - 1];

  const filter =
    filterOption === "on-cinema-now" ? "showcasing" : "nextRelease";
  const params = {
    [filter]: true,
  };
  const { movies, isLoading } = useGetMoviesFilter(params);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Menus>
      <Table columns="3fr 5fr 2fr 1rem">
        <Table.Header>
          <div>Poster</div>
          <div>Title</div>
          <div>Release Date</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={movies?.data}
          render={(movie: Movie) => <MoviesRow key={movie.id} movie={movie} />}
        />
      </Table>
    </Menus>
  );
};
