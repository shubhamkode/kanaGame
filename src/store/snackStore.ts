import { create } from "zustand";

interface State {
  message: undefined | string;
  state: "error" | "success" | "neutral" | undefined;
}
interface Actions {
  success: (message: string) => void;
  error: (message: string) => void;
  clear: () => void;
}

export const useSnackStore = create<State & Actions>((set) => ({
  message: undefined,
  state: undefined,
  success: (message: string) => {
    set((prev) => ({ ...prev, state: "success", message: message }));
  },
  error: (message: string) => {
    set((prev) => {
      return { ...prev, state: "error", message: message };
    });
  },
  clear: () => {
    set((prev) => ({ ...prev, state: undefined, message: undefined }));
  },
}));
