import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createMovie as createMovieApi } from "../../api/apiMovies";

export const useCreateMovie = () => {
  const queryClient = useQueryClient();
  const { mutate: createMovie, isLoading: isCreating } = useMutation({
    mutationFn: createMovieApi,
    onSuccess: async () => {
      toast.success("New movie successfully created");
      await queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err: Error) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { isCreating, createMovie };
};
