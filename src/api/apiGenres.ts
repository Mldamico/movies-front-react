import axios from "./axios";

const getGenres = () => axios.get("/genres");

export { getGenres };
