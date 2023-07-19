import axios from "./axios";

const getActors = () => axios.get("/actors");

export { getActors };
