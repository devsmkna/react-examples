import { memo, useCallback, useState } from "react";
import { MemoryCard } from "../MemoryCard/MemoryCard";
import { Character } from "../../models/types";

export const MemoryGrid = memo(({ elements }: { elements: Character[] }) => {
  const [currentCard, setCurrentCard] = useState<number>(-1);
  const [showList, setShowList] = useState<number[]>([]);

  const handleClick = useCallback(
    async (id: number, index: number) => {
      console.log("click", id, index, currentCard);
      console.log("showList", showList);

      if (showList.length === elements.length) {
        alert("Hai vinto!")
        return;
      }

      if (showList.includes(index)) return;

      setShowList([...showList, index]);

      // new card
      if (currentCard === -1) {
        setCurrentCard(id);
        return;
      }

      // different card
      if (currentCard !== id) {
        await new Promise(res => setTimeout(res,300))
        setShowList([
          ...showList.filter((i, ins) => ins < showList.length - 1),
        ]);
      }

      // same card
      setCurrentCard(-1);
    },
    [currentCard, showList, elements.length]
  );

  return (
    <div className="grid grid-cols-10 gap-4">
      {elements.map((element, index) => (
        <MemoryCard
          key={index}
          mediaURI={element.image}
          id={element.id}
          index={index}
          clickHandler={handleClick}
          show={showList.includes(index)}
        />
      ))}
    </div>
  );
});
