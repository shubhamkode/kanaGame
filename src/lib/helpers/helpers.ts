import { IKanaDictionary, kanaDictionary } from "@/assets/kanaDictionary";
import { use } from "react";

export const inArray =
  <T>(arr: ReadonlyArray<T>) =>
  (data: T) => {
    return arr.indexOf(data) > -1;
  };

export function removeFromArray<T>(arr: Array<T>) {
  return (data: T) => {
    const newArr = [...arr];

    newArr.splice(newArr.indexOf(data), 1);
    return newArr;
  };
}

export function flattenDict(dict: IKanaDictionary): Record<string, string[]> {
  const flattenedDict: Record<string, string[]> = {};

  Object.keys(dict).map((group) => {
    Object.keys(dict[group]).map((kana) => {
      flattenedDict[kana] = dict[group][kana];
    });
  });

  return flattenedDict;
}

export function shuffleArray<T>(arr: Readonly<Array<T>>) {
  //a function that returns a new shuffled array
  const sorted = arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  return [...sorted];
}

export const valuesInSet = <T>(a: Set<T>, b: Array<T>) => {
  for (const x of b.values()) {
    if (!a.has(x)) {
      return false;
    }
  }
  return true;
};

export const getUsableKanasFromGroups =
  (kanaDictionary: IKanaDictionary) => (kanaSet: Set<string>) => {
    //a function that takes in a set and kanadictionary
    // returns an array of all kanas from kanaDictionary with available keys from set

    const useableKanas: string[] = [];

    for (const group of kanaSet.values()) {
      useableKanas.push(...Object.keys(kanaDictionary[group]));
    }
    return useableKanas;
  };

export const getUseableKanaKeys =
  (kanaDictionary: IKanaDictionary) => (kanaSet: Set<string>) => {
    const useableKanasKeys: string[][] = [];

    for (const group of kanaSet.values()) {
      useableKanasKeys.push(...Object.values(kanaDictionary[group]));
    }

    return useableKanasKeys.flat();
  };
