import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RCharacters.css";
import RCard from "../RCard/RCard";

type APIResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: APICharacter[];
};

type APICharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

const RCharacters = () => {
  const [characters, setCharacters] = useState<APICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }: { data: APIResponse }) => {
        setMaxPages(data.info.pages);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(({ data }: { data: APIResponse }) => {
        setCharacters(data.results as APICharacter[]);
      });
  }, [page]);

  return (
    <div className="r-characters-wrapper">
      <div className="r-characters-buttons">
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          {"<"}
        </button>
        <span>
          Pagina
          <input
            type="number"
            min={1}
            max={maxPages}
            value={page}
            onChange={(e) => setPage(+e.target.value)}
          />
          di {maxPages}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page >= maxPages}>
          {">"}
        </button>
      </div>
      <div className="r-characters">
        {characters.map((character: APICharacter) => (
          <RCard
            key={character.id}
            title={character.name}
            thumbnail={character.image}
            description={character.status.toLowerCase()}
            status={character.status.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default RCharacters;
