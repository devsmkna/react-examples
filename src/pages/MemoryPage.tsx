import { useCharacters } from "../hooks/useAPI";
import { MemoryGrid } from "../components/MemoryGrid/MemoryGrid";
import { useSearchParams } from "react-router-dom";

export const MemoryPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters] = useCharacters(page, {});

  if (characters.length === 0) {
    return <p>Loading...</p>;
  }

  const generateGrid = [...characters, ...characters].sort(
    () => Math.random() - 0.5
  );

  return <MemoryGrid elements={generateGrid}></MemoryGrid>;
};
