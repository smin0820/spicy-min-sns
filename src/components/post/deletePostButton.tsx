import { useOpenAlertModal } from "@/store/alertModal";
import { Button } from "../ui/button";
import { useDeletePost } from "@/hooks/mutations/post/useDeletePost";
import { toast } from "sonner";
import type { PostEntity } from "@/types";

export default function DeletePostItemButton({ id }: { id: number }) {
  const openAlertModal = useOpenAlertModal();

  const { mutate: deletPost, isPending: isDeletePostPending } = useDeletePost({
    onError: (error) => {
      toast.error("포스트 삭제에 실패했습니다.", {
        position: "top-center",
      });
    },
  });

  const handleDeleteClick = () => {
    openAlertModal({
      title: "포스트 삭제",
      description: "삭제된 포스트는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?",
      onPositive: () => {
        deletPost(id);
      },
    });
  };

  return (
    <Button
      disabled={isDeletePostPending}
      onClick={handleDeleteClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      삭제
    </Button>
  );
}
