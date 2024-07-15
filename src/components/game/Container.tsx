"use client";

import { useKanaStore } from "@/store/kanaStore";
import { useState } from "react";

import Stage from "./stages/stage";

import { AnimatePresence } from "framer-motion";
import StageIndicator from "./StageIndicator";

import { questionsGenerator } from "@/lib/helpers/generators";
import StageCompleted from "./stages/stage-completed";

import Provider from "@/lib/hooks";

const stageInfoRecord = [
  {
    title: "Stage 1",
    description: "Choose the correct option",
  },
  {
    title: "Stage 2",
    description: "Choose the correct kana",
  },
  {
    title: "Stage 3",
    description: "Enter correct romaji",
  },
  {
    title: "Stage 4",
    description: "Enter correct romaji.",
  },
];

export default function GameContainer() {
  const [gameState, setGameState] = useState<{
    stage: number;
    showStage: boolean;
  }>({
    stage: 1,
    showStage: true,
  });

  const kanaGroups = useKanaStore((store) => store.kanaGroups);

  const updateGameStage = () => {
    setGameState((prev) => ({
      ...prev,
      stage: prev.stage + 1,
      showStage: true,
    }));
  };

  const hideStage = () => {
    setGameState((prev) => ({
      ...prev,
      showStage: false,
    }));
  };
  const restartGame = () => {
    setGameState((prev) => ({ ...prev, stage: 1, showStage: true }));
  };

  if (gameState.stage === 5) {
    return (
      <Provider value={{ restartGame }}>
        <StageCompleted />
      </Provider>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center w-full px-6">
      <AnimatePresence>
        {gameState.showStage ? (
          <StageIndicator
            key="stageIndicator"
            {...stageInfoRecord[gameState.stage - 1]}
            hideStage={hideStage}
          />
        ) : (
          <Stage
            key="stage"
            info={stageInfoRecord[gameState.stage - 1]}
            updateGameStage={updateGameStage}
            generateNewQuestion={questionsGenerator[
              gameState.stage as keyof typeof questionsGenerator
            ](kanaGroups)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
