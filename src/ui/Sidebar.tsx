import { MdOutlineLocalMovies, MdOutlineRecentActors } from "react-icons/md";
export const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-2 py-4 pl-16">
      <div className="flex flex-row items-center gap-4 text-lg">
        <MdOutlineLocalMovies />
        <span>Movies</span>
      </div>
      <div className="flex flex-row items-center gap-4 text-lg">
        <MdOutlineRecentActors /> <span>Actors</span>
      </div>
    </nav>
  );
};
