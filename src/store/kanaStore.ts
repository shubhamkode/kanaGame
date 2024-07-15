import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface KanaStoreState {
  kanaGroups: Set<string>;
  addKanaGroup: (group: string) => void;
  removeKanaGroup: (group: string) => void;
  resetKanaGroup: () => void;
}

export const useKanaStore = create<KanaStoreState>()(
  devtools((set) => ({
    kanaGroups: new Set<string>(),
    addKanaGroup: (group: string) =>
      set((state) => ({ kanaGroups: new Set(state.kanaGroups).add(group) })),
    removeKanaGroup: (group: string) =>
      set((state) => {
        const newKanaGroups = new Set(state.kanaGroups);
        newKanaGroups.delete(group);

        return { kanaGroups: newKanaGroups };
      }),
    resetKanaGroup: () => set((state) => ({ kanaGroups: new Set<string>() })),
  }))
);
