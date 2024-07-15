import { kanaDictionary, getKanaToRomajiMap } from "@/assets/kanaDictionary";
import {
  getUsableKanasFromGroups,
  getUseableKanaKeys,
  removeFromArray,
  shuffleArray,
} from "./helpers";
import { cartesianProduct } from "./cartesianProduct";

export type IQuestionGeneratorReturnType = {
  question: string;
  answer: string | string[];
  options?: string[] | undefined;
};

const stage1QuestionsGenerator = (
  kanaGroups: Set<string>
): (() => IQuestionGeneratorReturnType) => {
  const getUseableKanas = getUsableKanasFromGroups(kanaDictionary)(kanaGroups);
  const kanaRomajiMap = getKanaToRomajiMap();

  const useableKanaKeys = getUseableKanaKeys(kanaDictionary)(kanaGroups);

  return () => {
    const kana =
      getUseableKanas[Math.floor(Math.random() * getUseableKanas.length)];

    const romaji = kanaRomajiMap[kana];

    const getOptions = (): Array<string> => {
      return [
        romaji[0],
        ...removeFromArray(shuffleArray(useableKanaKeys))(romaji[0]).slice(
          0,
          2
        ),
      ];
    };
    return {
      question: kana,
      answer: romaji[0],
      options: shuffleArray(getOptions()),
    };
  };
};
const stage2QuestionGenerator = (
  kanaGroups: Set<string>
): (() => IQuestionGeneratorReturnType) => {
  const useableKanas = getUsableKanasFromGroups(kanaDictionary)(kanaGroups);
  const kanaRomajiMap = getKanaToRomajiMap();

  return () => {
    const shuffledKanas = shuffleArray(useableKanas);

    const options = shuffledKanas.slice(0, 3);

    return {
      question: kanaRomajiMap[shuffledKanas[0]][0],
      answer: shuffledKanas[0],
      options: shuffleArray(options),
    };
  };
};
const stage3QuestionsGenerator = (
  kanaGroups: Set<string>
): (() => IQuestionGeneratorReturnType) => {
  const useableKanas = getUsableKanasFromGroups(kanaDictionary)(kanaGroups);
  const kanaRomajiMap = getKanaToRomajiMap();

  return () => {
    const question =
      useableKanas[Math.floor(Math.random() * useableKanas.length)];
    return {
      question,
      answer: kanaRomajiMap[question],
    };
  };
};
const stage4QuestionsGenerator = (
  kanaGroups: Set<string>
): (() => IQuestionGeneratorReturnType) => {
  //require 3 kanas
  //require their 3 string[]
  //answer array will be a cartesian product of their 3 string[]
  const useableKanas = getUsableKanasFromGroups(kanaDictionary)(kanaGroups);
  const kanaRomajiMap = getKanaToRomajiMap();

  return () => {
    const kanas = shuffleArray(useableKanas).slice(0, 3);

    return {
      question: kanas.join(""),
      answer: cartesianProduct(
        kanaRomajiMap[kanas[0]],
        cartesianProduct(kanaRomajiMap[kanas[1]], kanaRomajiMap[kanas[2]])
      ),
    };
  };
};

export const questionsGenerator = {
  1: stage1QuestionsGenerator,
  2: stage2QuestionGenerator,
  3: stage3QuestionsGenerator,
  4: stage4QuestionsGenerator,
} as const;
