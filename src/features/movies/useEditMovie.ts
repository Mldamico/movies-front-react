import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editMovieById } from "../../api/apiMovies";

export const useEditMovie = () => {
  const queryClient = useQueryClient();
  const { mutate: editMovie, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, movie }: { id: number; movie: FormData }) =>
      editMovieById(id, movie),
    onSuccess: async () => {
      toast.success("Movie successfully edited");
      await queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { editMovie, isEditing };
};
