import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5239/api",
});

axios.interceptors.request.use((config) => {
  const queryClient = useQueryClient();
  console.log(queryClient);
  // const token = store.getState().account.user?.token;
  // if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
