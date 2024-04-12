import { useCharacters } from "../hooks/useAPI";
import { MemoryGrid } from "../components/MemoryGrid/MemoryGrid";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { OutletContext } from "../models/types";
import { PageInfo } from "../components/PageInfo/PageInfo";

export const MemoryPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters, maxPages] = useCharacters(page, {});
  const { nextPage, prevPage } = useOutletContext<OutletContext>();

  if (characters.length === 0) {
    return <p>Loading...</p>;
  }

  const generateGrid = [...characters, ...characters].sort(
    () => Math.random() - 0.5
  );

  return (
    <>
      <PageInfo
        page={page}
        maxPages={maxPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <MemoryGrid elements={generateGrid}></MemoryGrid>
    </>
  );
};
