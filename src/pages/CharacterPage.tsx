import { useCharacters } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Character } from "../models/types";
import { Card } from "../components/Card/Card";
import TemplatePage from "./TemplatePage";

const CharacterPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [characters, maxPages] = useCharacters(page, {});

  return (
    <TemplatePage maxPages={maxPages}>
      {characters.map((character: Character) => (
        <Card
          key={character.id}
          title={character.name}
          mediaURI={character.image}
          description={character.species}
        />
      ))}
    </TemplatePage>
  );
};

export default CharacterPage;
