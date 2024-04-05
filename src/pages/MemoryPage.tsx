import { useCharacters } from "../hooks/useAPI";
import { MemoryGrid } from "../components/MemoryGrid/MemoryGrid";

export const MemoryPage = () => {
  const [characters] = useCharacters(1, {});

  if (characters.length === 0) {
    return <p>Loading...</p>;
  }

  const generateGrid = [...characters, ...characters].sort(
    () => Math.random() - 0.5
  );

  return <MemoryGrid elements={generateGrid}></MemoryGrid>;
};
