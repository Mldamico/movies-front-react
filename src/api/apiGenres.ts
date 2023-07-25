import axios from "./axios";

const getGenres = () => axios.get("/genres");

const deleteGenreById = (id: number) => axios.delete(`/genres/${id}`);

export { getGenres, deleteGenreById };
