import { useCharacters } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Character } from "../models/types";
import { Card } from "../components/Card/Card";

const CharacterPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters] = useCharacters(page, {});

  return (
    <div>
      <div className="characters-list-wrapper">
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
    </div>
  );
};

export default CharacterPage;
