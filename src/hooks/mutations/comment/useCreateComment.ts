import { createComment } from "@/api/comment";
import type { UseMuTationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreateComment(callbacks?: UseMuTationCallback) {
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
