"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IQuestionGeneratorReturnType } from "@/lib/helpers/generators";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useSnackStore } from "@/store/snackStore";
import { Input } from "@/components/ui/input";

interface IStageProps {
  updateGameStage: () => void;
  generateNewQuestion: () => IQuestionGeneratorReturnType;
  info: {
    title: string;
    description: string;
  };
}

export default function Stage({
  updateGameStage,
  generateNewQuestion,
  info,
}: IStageProps) {
  const [showSuccess, showError] = useSnackStore((store) => [
    store.success,
    store.error,
  ]);

  const [stageState, setStageState] = useState<{
    progress: number;
    currentQuestion: IQuestionGeneratorReturnType;
  }>({
    progress: 0,
    currentQuestion: generateNewQuestion(),
  });

  useEffect(() => {
    if (stageState.progress >= 20) {
      updateGameStage();
    }

    setStageState((prev) => ({
      ...prev,
      currentQuestion: generateNewQuestion(),
    }));
  }, [stageState.progress, updateGameStage, generateNewQuestion]);

  const handleClick = (option: string) => {
    if (option === stageState.currentQuestion.answer) {
      showSuccess("Correct!");
      setStageState((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 1, 20),
      }));
    } else {
      showError("Wrong!");
      setStageState((prev) => ({
        ...prev,
        progress: Math.max(0, prev.progress - 1),
      }));
    }
  };

  const handleSubmit = (value: string) => {
    if (stageState.currentQuestion.answer.indexOf(value) > -1) {
      showSuccess(
        `${stageState.currentQuestion.question} =  ${stageState.currentQuestion.answer[0]}`
      );
      setStageState((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 1, 20),
      }));
    } else {
      showError(
        `${stageState.currentQuestion.question} =  ${stageState.currentQuestion.answer[0]}`
      );
      setStageState((prev) => ({
        ...prev,
        progress: Math.max(0, prev.progress - 1),
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, type: "tween" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      key="main"
      className="w-full flex items-center flex-col py-4"
    >
      {/*       Progress bar */}
      <Progress
        value={(stageState.progress / 20) * 100}
        className="max-w-lg w-full mb-10"
      />

      {/* Stage Information */}
      <div className="mt-4 flex flex-col items-center">
        <p className="text-muted-foreground">
          <span className="mr-2 text-xl">{info.title}</span>
          <span className="text-sm">{info.description}</span>
        </p>
      </div>

      {/* Questions */}
      <p className="text-[40px] w-[400px] text-center mt-5">
        {stageState.currentQuestion.question}
      </p>

      {stageState.currentQuestion.options !== undefined ? (
        <div className="max-w-md w-full mt-5">
          <div className="space-x-5 grid grid-cols-3">
            {stageState.currentQuestion.options.map((option) => (
              <Button
                variant="outline"
                key={option}
                size="lg"
                className="text-lg font-semibold"
                onClick={() => {
                  handleClick(option);
                }}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <FormInput handleSubmit={handleSubmit} />
      )}
    </motion.div>
  );
}

interface IFormInput {
  handleSubmit: (value: string) => void;
}

const FormInput = ({ handleSubmit }: IFormInput) => {
  const [answer, setAnswer] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(answer);
    setAnswer("");
  };

  return (
    <form onSubmit={onSubmit} className="mt-5 w-full  flex justify-center">
      <Input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        autoFocus
        className="max-w-xs text-lg text-center ring-2 ring-primary active:ring-prim"
      />
    </form>
  );
};
