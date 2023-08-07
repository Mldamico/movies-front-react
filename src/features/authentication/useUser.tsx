import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiAuth";

export function useUser() {
  const getToken = localStorage.getItem("user");

  if (!getToken) return { isAuthenticated: false };
  const parseToken = JSON.parse(getToken);

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(parseToken.token),
  });

  return { isLoading, user, isAuthenticated: user };
}
