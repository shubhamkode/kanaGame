"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { useGame } from "@/store/gameState";
import Header from "@/components/Header";
import GameContainer from "@/components/game/Container";

import SnackBar from "@/components/SnackBar";
import {
  hiraganaDictionary,
  katakanaDictionary,
} from "@/assets/kanaDictionary";

import ChooseKanaTab from "@/components/ChooseKanaTab";

const TabValues = {
  Hiragana: "hiragana",
  Katakana: "katakana",
} as const;

export default function HomePage() {
  const gameState = useGame((store) => store.gameState);

  return (
    <div className="max-w-screen-md w-full min-h-screen flex flex-col relative ">
      <Header />
      {/* SnackBar */}
      {gameState === "game" ? (
        <SnackBar />
      ) : (
        <div className="px-8 mt-4 relative">
          <p className="text-sm py-3 px-4 rounded-lg bg-muted text-muted-foreground">
            Select group of characters you would like to study..
          </p>
        </div>
      )}
      {/* Main Content */}
      <div className={`flex flex-col items-center w-full mt-6 flex-1`}>
        {
          {
            choose: <ChooseGame />,
            game: <GameContainer />,
          }[gameState]
        }
      </div>
    </div>
  );
}

const ChooseGame = () => {
  return (
    <Tabs
      defaultValue={TabValues.Hiragana}
      className="w-full  flex flex-col flex-1 px-8"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={TabValues.Hiragana}>Hiragana</TabsTrigger>
        <TabsTrigger value={TabValues.Katakana}>Katakana</TabsTrigger>
      </TabsList>

      <TabsContent value={TabValues.Hiragana} className="w-full flex-1">
        <ChooseKanaTab dictionary={hiraganaDictionary} startsWith="h_" />
      </TabsContent>
      <TabsContent value={TabValues.Katakana} className="w-full flex-1">
        <ChooseKanaTab dictionary={katakanaDictionary} startsWith="k_" />
      </TabsContent>
    </Tabs>
  );
};
