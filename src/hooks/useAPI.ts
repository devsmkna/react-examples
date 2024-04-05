import axios from "axios";
import { useState, useEffect } from "react";
import {
  Response,
  Character,
  Location,
  Episode,
  QueryParamsCharacter,
  QueryParamsLocation,
  QueryParamsEpisode,
} from "../models/types";

const useAPI = <T>(
  uri: string,
  page: number,
  queryParams: QueryParamsCharacter | QueryParamsLocation | QueryParamsEpisode
) => {
  const [response, setResponse] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [maxPages, setMaxPages] = useState<number>(0);

  useEffect(() => {
    getResponse();
  }, [uri, page]);

  const getResponse = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get<Response<T>>(uri + `/?page=${page}`, {
        params: queryParams,
      });

      setMaxPages(response.data.info.pages);

      setResponse(response.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return [response, maxPages, isLoading, isError, setResponse] as [
    T[],
    number,
    boolean,
    boolean,
    React.Dispatch<React.SetStateAction<T[]>>
  ];
};

export const useCharacters = (
  page: number,
  queryParams: QueryParamsCharacter
) =>
  useAPI<Character>(
    "https://rickandmortyapi.com/api/character",
    page,
    queryParams
  );

export const useLocations = (page: number, queryParams: QueryParamsLocation) =>
  useAPI<Location>(
    "https://rickandmortyapi.com/api/location",
    page,
    queryParams
  );

export const useEpisodes = (page: number, queryParams: QueryParamsEpisode) =>
  useAPI<Episode>("https://rickandmortyapi.com/api/episode", page, queryParams);
