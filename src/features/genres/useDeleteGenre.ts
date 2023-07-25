import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGenreById } from "../../api/apiGenres";
import { toast } from "react-hot-toast";

export const useDeleteGenre = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteGenre, isLoading: isDeleting } = useMutation({
    mutationFn: deleteGenreById,
    onSuccess: async () => {
      toast.success("Genre succesfully deleted");
      await queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { deleteGenre, isDeleting };
};
