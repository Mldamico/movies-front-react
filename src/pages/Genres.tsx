import { AddGenre } from "../features/genres/AddGenre";
import { GenresTable } from "../features/genres/GenresTable";

export const Genres = () => {
  return (
    <div>
      <GenresTable />
      <AddGenre />
    </div>
  );
};
