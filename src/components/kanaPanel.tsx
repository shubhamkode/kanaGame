import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const KanaPanel = ({
  romajiChars,
  kanaChars,
  selected,
  onChange,
}: {
  romajiChars: string[];
  kanaChars: string[];
  selected: boolean;
  onChange: () => void;
}) => {
  const [showKanaCharacters, setShowKanaCharacters] = useState<boolean>(false);

  const [panelSelected, setPanelSelected] = useState(selected);

  useEffect(() => {
    setPanelSelected(selected);
  }, [selected]);

  return (
    <div
      className={`flex justify-start px-6 gap-x-8 items-center border-[1px] rounded-lg  ${cn(
        panelSelected && "bg-secondary"
      )}`}
    >
      <Input
        type="checkbox"
        checked={selected}
        className="w-min"
        onChange={(e) => {
          setPanelSelected((prev) => !prev);
          onChange();
        }}
      />
      <div
        className="flex w-full py-2"
        onClick={() => {
          setPanelSelected((prev) => !prev);
          onChange();
        }}
        onMouseDown={() => setShowKanaCharacters(true)}
        onMouseUp={() => setShowKanaCharacters(false)}
        onMouseLeave={() => setShowKanaCharacters(false)}
        onTouchStart={() => setShowKanaCharacters(true)}
        onTouchEnd={() => setShowKanaCharacters(false)}
        onTouchMove={() => setShowKanaCharacters(false)}
      >
        {showKanaCharacters
          ? kanaChars.map((kana, index) => (
              <p className="first:ml-0 ml-3 text-lg" key={index}>
                {kana}
              </p>
            ))
          : romajiChars.map((romaji, index) => (
              <p className="first:ml-0 ml-2 text-lg" key={index}>
                {romaji}
              </p>
            ))}
      </div>
    </div>
  );
};

export default KanaPanel;
