import axios from "./axios";

const login = (email: string, password: string) =>
  axios.post<UserToken>("/accounts/login", { email, password });

const getCurrentUser = (token: string) =>
  axios.post(
    "/accounts/refresh-token",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export { login, getCurrentUser };
