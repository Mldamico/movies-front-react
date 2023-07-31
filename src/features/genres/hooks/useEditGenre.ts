import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editGenreById } from "../../../api/apiGenres";

export const useEditGenre = () => {
  const queryClient = useQueryClient();
  const { mutate: editGenre, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      editGenreById(id, name),
    onSuccess: async () => {
      toast.success("Genres successfully edited");
      await queryClient.invalidateQueries({ queryKey: ["genres"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { editGenre, isEditing };
};
