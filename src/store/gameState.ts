import { create } from "zustand";

interface State {
  gameState: "choose" | "game";
}

interface Actions {
  updateGameState: (newState: "choose" | "game") => void;
}

export const useGame = create<State & Actions>((set) => ({
  gameState: "choose",
  updateGameState: (newState) => {
    set({
      gameState: newState,
    });
  },
}));
