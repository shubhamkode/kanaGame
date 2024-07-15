import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./themeToggle";
import { useGame } from "@/store/gameState";
import { useKanaStore } from "@/store/kanaStore";

export default function Header() {
  const [gameState, setGameState] = useGame((store) => [
    store.gameState,
    store.updateGameState,
  ]);

  const kanaGroups = useKanaStore((store) => store.kanaGroups);

  const canStartGame = kanaGroups.size !== 0;

  return (
    <div className="flex items-center w-full justify-between pt-3 pr-8 sticky top-0 pb-2 px-5 border-b-[1px] z-10 bg-background/50 backdrop-blur-sm">
      <div className="">
        <Link href="/" className="text-lg">
          Kana Game
        </Link>
        <p className="text-xs text-muted-foreground">
          Learn Kanas with KanaGame
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />

        {gameState === "choose" ? (
          <Button
            className=""
            size="sm"
            disabled={!canStartGame}
            onClick={() => {
              setGameState("game");
            }}
          >
            Start Game
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => {
              setGameState("choose");
            }}
          >
            Exit Game
          </Button>
        )}
      </div>
    </div>
  );
}
