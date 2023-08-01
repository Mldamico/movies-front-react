import axios from "./axios";

const getGenres = () => axios.get("/genres");

const deleteGenreById = (id: number) => axios.delete(`/genres/${id}`);

const editGenreById = (id: number, name: string) =>
  axios.put(`/genres/${id}`, { name });

const createGenre = (name: string) => axios.post("/genres", { name });

export { getGenres, deleteGenreById, createGenre, editGenreById };
