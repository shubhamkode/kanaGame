"use client";
import { IKanaDictionary } from "@/assets/kanaDictionary";
import { Input } from "./ui/input";

import { useKanaStore } from "@/store/kanaStore";
import KanaPanel from "./kanaPanel";

import { Label } from "./ui/label";
import { valuesInSet } from "@/lib/helpers/helpers";
import { Collapsible } from "./ui/collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Button } from "./ui/button";
import {
  DoubleArrowDownIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IChooseKanaTab {
  dictionary: IKanaDictionary;
  startsWith: "h_" | "k_";
}

const ChooseKanaTab = ({ dictionary, startsWith }: IChooseKanaTab) => {
  const kanaGroups = useKanaStore((store) => store.kanaGroups);
  const addKanaGroup = useKanaStore((store) => store.addKanaGroup);
  const removeKanaGroup = useKanaStore((store) => store.removeKanaGroup);

  const [isAlternativesOpen, setIsAlternativesOpen] = useState(false);
  const [isSimilarOpen, setIsSimilarOpen] = useState(false);

  const toggleKanaGroup = (group: string) => {
    kanaGroups.has(group) ? removeKanaGroup(group) : addKanaGroup(group);
  };

  const isSelectAllChecked: boolean = (() => {
    const dict_keys = Object.keys(dictionary);

    return valuesInSet(kanaGroups, dict_keys);
  })();

  const isSelectSimilarChecked: boolean = (() => {
    const similar_keys = Object.keys(dictionary).filter((value) =>
      value.startsWith(`${startsWith}sim`)
    );
    return valuesInSet(kanaGroups, similar_keys);
  })();

  const isSelectAlternativesChecked: boolean = (() => {
    const alt_keys = Object.keys(dictionary).filter((value) =>
      value.startsWith(`${startsWith}alt`)
    );

    return valuesInSet(kanaGroups, alt_keys);
  })();

  const toggleAllGroups = (state: boolean) => {
    if (state) {
      Object.keys(dictionary).map((value) => addKanaGroup(value));
    } else {
      Object.keys(dictionary).map((value) => {
        if (kanaGroups.has(value)) {
          removeKanaGroup(value);
        }
      });
    }
  };

  const toggleAlternativeGroups = (state: boolean) => {
    const alt_keys = Object.keys(dictionary).filter((value) =>
      value.startsWith(`${startsWith}alt`)
    );
    if (state) {
      alt_keys.map((value) => {
        if (!kanaGroups.has(value)) {
          addKanaGroup(value);
        }
      });
    } else {
      alt_keys.map((value) => {
        if (kanaGroups.has(value)) {
          removeKanaGroup(value);
        }
      });
    }
  };

  const toggleSimilarGroups = (state: boolean) => {
    const similar_keys = Object.keys(dictionary).filter((value) =>
      value.startsWith(`${startsWith}sim`)
    );
    if (state) {
      similar_keys.map((value) => {
        if (!kanaGroups.has(value)) {
          addKanaGroup(value);
        }
      });
    } else {
      similar_keys.map((value) => {
        if (kanaGroups.has(value)) {
          removeKanaGroup(value);
        }
      });
    }
  };

  return (
    <div className="pb-10">
      <div className="w-full flex flex-col gap-y-2 px-2 flex-1 py-2">
        <div className="w-full flex items-center justify-end">
          <div className="flex items-center gap-x-2">
            <Input
              type="checkbox"
              className="w-min"
              id="select-all"
              checked={isSelectAllChecked}
              onChange={(e) => toggleAllGroups(e.target.checked)}
            />
            <Label
              className="text-sm text-muted-foreground"
              htmlFor="select-all"
            >
              Select All
            </Label>
          </div>
        </div>
        {Object.keys(dictionary)
          .filter((value) => value.startsWith(`${startsWith}base`))
          .map((group) => {
            return (
              <KanaPanel
                key={group}
                kanaChars={Object.keys(dictionary[group])}
                romajiChars={Object.values(dictionary[group]).map(
                  (value) => value[0]
                )}
                selected={kanaGroups.has(group) ?? false}
                onChange={() => toggleKanaGroup(group)}
              />
            );
          })}

        {startsWith === "k_" && (
          <Collapsible
            open={isSimilarOpen}
            onOpenChange={setIsSimilarOpen}
            className=" mt-4"
          >
            <div className="sm:items-center justify-between gap-x-5 flex flex-col sm:flex-row items-end">
              <div className="flex items-center gap-x-2 ml-3">
                <Input
                  type="checkbox"
                  className="w-min"
                  id="select-similar"
                  checked={isSelectSimilarChecked}
                  onChange={(e) => toggleSimilarGroups(e.target.checked)}
                />
                <Label
                  className="text-sm text-muted-foreground whitespace-nowrap "
                  htmlFor="select-similar"
                >
                  Select Similar
                </Label>
              </div>
              <CollapsibleTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="flex items-center pl-6 justify-start py-6 w-full ml-8"
                >
                  {isSimilarOpen ? (
                    <DoubleArrowDownIcon
                      className={`text-muted-foreground opacity-0 scale-0 duration-200 ${cn(
                        isSimilarOpen &&
                          "opacity-100 scale-100 duration-200 transition-all"
                      )} `}
                    />
                  ) : (
                    <DoubleArrowRightIcon
                      className={`text-muted-foreground  duration-200 ${cn(
                        isSimilarOpen &&
                          "opacity-0 scale-0 duration-200 transition-all"
                      )} `}
                    />
                  )}
                  <span className="ml-2 text-muted-foreground">
                    Show Similar
                  </span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-3 pl-4 space-y-2">
              {Object.keys(dictionary)
                .filter((value) => value.startsWith(`${startsWith}sim`))
                .map((group) => {
                  return (
                    <KanaPanel
                      key={group}
                      kanaChars={Object.keys(dictionary[group])}
                      romajiChars={Object.values(dictionary[group]).map(
                        (value) => value[0]
                      )}
                      selected={kanaGroups.has(group) ?? false}
                      onChange={() => toggleKanaGroup(group)}
                    />
                  );
                })}
            </CollapsibleContent>
          </Collapsible>
        )}

        <Collapsible
          open={isAlternativesOpen}
          onOpenChange={(open) => {
            setIsAlternativesOpen(open);
          }}
          className="mt-2"
        >
          <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-x-5">
            <div className="flex items-center gap-x-2 ml-3">
              <Input
                type="checkbox"
                className="w-min"
                id="select-alternatives"
                checked={isSelectAlternativesChecked}
                onChange={(e) => toggleAlternativeGroups(e.target.checked)}
              />
              <Label
                className="text-sm text-muted-foreground whitespace-nowrap "
                htmlFor="select-alternatives"
              >
                Select Alternatives
              </Label>
            </div>
            <CollapsibleTrigger asChild>
              <Button
                variant={"secondary"}
                className="flex items-center pl-6 justify-start py-6 w-full"
              >
                {isAlternativesOpen ? (
                  <DoubleArrowDownIcon
                    className={`text-muted-foreground opacity-0 scale-0 duration-200 ${cn(
                      isAlternativesOpen &&
                        "opacity-100 scale-100 duration-200 transition-all"
                    )} `}
                  />
                ) : (
                  <DoubleArrowRightIcon
                    className={`text-muted-foreground  duration-200 ${cn(
                      isAlternativesOpen &&
                        "opacity-0 scale-0 duration-200 transition-all"
                    )} `}
                  />
                )}
                <span className="ml-2 text-muted-foreground">
                  Show Alternatives
                </span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-3 pl-4 space-y-2">
            {Object.keys(dictionary)
              .filter((value) => value.startsWith(`${startsWith}alt`))
              .map((group) => {
                return (
                  <KanaPanel
                    key={group}
                    kanaChars={Object.keys(dictionary[group])}
                    romajiChars={Object.values(dictionary[group]).map(
                      (value) => value[0]
                    )}
                    selected={kanaGroups.has(group) ?? false}
                    onChange={() => toggleKanaGroup(group)}
                  />
                );
              })}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ChooseKanaTab;
