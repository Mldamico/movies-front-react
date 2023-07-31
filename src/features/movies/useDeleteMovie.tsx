import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { deleteMovieById } from "../../api/apiMovies";

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteMovie, isLoading: isDeleting } = useMutation({
    mutationFn: deleteMovieById,
    onSuccess: async () => {
      toast.success("Movie succesfully deleted");
      await queryClient.invalidateQueries({
        queryKey: ["movies"],
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { deleteMovie, isDeleting };
};
