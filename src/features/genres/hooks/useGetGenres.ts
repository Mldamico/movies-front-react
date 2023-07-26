import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../../api/apiGenres";

export const useGetGenres = () => {
  const { data: genres, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  return { genres, isLoading };
};
