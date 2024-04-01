import { Character } from "../../models/types";
import "./CharacterCard.css";

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="card-character">
      <img
        className="card-thumbnail"
        src={character.image}
        alt={character.name}
      />
      <div className="card-content">
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
