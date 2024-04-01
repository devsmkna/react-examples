import "./CharacterList.css";

import { useCharacters } from "../../hooks/useAPI";
import { Character } from "../../models/types";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useSearchParams } from "react-router-dom";

const CharacterList = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters] = useCharacters(page, {});

  return (
    <div className="characters-list-wrapper">
      <div className="characters-list">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
