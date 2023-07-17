import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5239/api",
});

export default instance;
