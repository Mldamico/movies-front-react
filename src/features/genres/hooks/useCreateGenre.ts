import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { createGenre as createGenreApi } from "../../../api/apiGenres";

export const useCreateGenre = () => {
  const queryClient = useQueryClient();
  const { mutate: createGenre, isLoading: isCreating } = useMutation({
    mutationFn: createGenreApi,
    onSuccess: async () => {
      toast.success("New genre successfully created");
      await queryClient.invalidateQueries({ queryKey: ["genres"] });
    },
    onError: (err: Error) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { isCreating, createGenre };
};
