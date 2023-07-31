import { AddMovie } from "../features/movies/AddMovie";
import { MoviesTable } from "../features/movies/MoviesTable";

export const CinemaNow = () => {
  return (
    <div>
      <MoviesTable />
      <AddMovie />
    </div>
  );
};
