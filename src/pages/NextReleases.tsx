import { AddMovie } from "../features/movies/AddMovie";
import { MoviesTable } from "../features/movies/MoviesTable";

export const NextReleases = () => {
  return (
    <>
      <MoviesTable />
      <AddMovie />
    </>
  );
};
