import { updateComment } from "@/api/comment";
import type { UseMuTationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdateComment(callbacks?: UseMuTationCallback) {
  return useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
