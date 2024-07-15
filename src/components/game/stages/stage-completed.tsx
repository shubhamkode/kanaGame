import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/lib/hooks";
import { useGame } from "@/store/gameState";
import { motion } from "framer-motion";

const StageCompleted = () => {
  const setGameState = useGame((store) => store.updateGameState);
  const { restartGame } = useGlobalContext();


  /* Add motion when stage Completed */

  
  return (
    <motion.div className="mt-4">
      <h2 className="text-3xl text-center font-semibold tracking-wide">
        Congratulations
      </h2>
      <p className="text-center mt-1 text-sm text-muted-foreground">
        You passed all Stages...
      </p>

      <p className="text-center text-sm mt-10">
        Would you like to restart this game or go to main menu?
      </p>
      <div className="flex mt-5 gap-y-4 justify-center items-center gap-x-4">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setGameState("choose")}
        >
          Back to Main Menu
        </Button>
        <Button
          onClick={() => {
            restartGame();
          }}
        >
          Restart Game
        </Button>
      </div>
    </motion.div>
  );
};

export default StageCompleted;
