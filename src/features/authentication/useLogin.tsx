import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi(email, password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      localStorage.setItem("user", JSON.stringify(data.data));
      navigate("/dashboard", { replace: true });
    },
    onError: (err: Error) => {
      console.log("Err", err);
      toast.error(`Provided email or password are incorrect`);
    },
  });

  return { login, isLoading };
}
