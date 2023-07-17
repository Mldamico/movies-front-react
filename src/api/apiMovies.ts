import axios from "./axios";

const getMovies = () => axios.get("/movies");

export { getMovies };
