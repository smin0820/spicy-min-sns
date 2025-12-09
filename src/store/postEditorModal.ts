import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const initiaState = {
  isOpen: false,
};

const usePostEditorModalStore = create(
  devtools(
    combine(initiaState, (set) => ({
      action: {
        open: () => {
          set({ isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: "postEditorModalStore" },
  ),
);

export const useOpenPostEditorModal = () => {
  const open = usePostEditorModalStore((store) => store.action.open);
  return open;
};

export const usePostEditModal = () => {
  const {
    isOpen,
    action: { open, close },
  } = usePostEditorModalStore();
  return { isOpen, open, close };
};
