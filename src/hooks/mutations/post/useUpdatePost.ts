import { updatePost } from "@/api/post";
import type { UseMuTationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePost(callbacks?: UseMuTationCallback) {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
