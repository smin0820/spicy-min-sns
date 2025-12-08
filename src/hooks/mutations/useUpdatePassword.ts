import { UpdatePassword } from "@/api/auth";
import type { UseMuTationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePassword(callbacks?: UseMuTationCallback) {
  return useMutation({
    mutationFn: UpdatePassword,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
