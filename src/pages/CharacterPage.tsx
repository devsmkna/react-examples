import { useCharacters } from "../hooks/useAPI";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Character } from "../models/types";
import { Card } from "../components/Card/Card";
import { Paginator } from "../components/Paginator/Paginator";

const CharacterPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters, maxPages] = useCharacters(page, {});
  const [previousPage, nextPage] = useOutletContext<[() => void, () => void]>();

  return (
    <div>
      <div className="text-center my-4">
        <Paginator
          currentPage={page}
          maxPages={maxPages}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4">
        {characters.map((character: Character) => (
          <Card
            key={character.id}
            title={character.name}
            mediaURI={character.image}
            description={character.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;
