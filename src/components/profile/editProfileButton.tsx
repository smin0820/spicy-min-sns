import { useOpenProfileEditorModal } from "@/store/profileEditorModal";
import { Button } from "../ui/button";

export default function EditProfileButton() {
  const openProfileEditorModal = useOpenProfileEditorModal();
  return (
    <Button
      onClick={openProfileEditorModal}
      variant={"secondary"}
      className="cursor-pointer"
    >
      프로필 수정
    </Button>
  );
}
