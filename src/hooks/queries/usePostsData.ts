import { fetchPost } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQuery } from "@tanstack/react-query";

export function usePostsData() {
  return useQuery({
    queryKey: QUERY_KEYS.post.list,
    queryFn: () => fetchPost(),
  });
}
