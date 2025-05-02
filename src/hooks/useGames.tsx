import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre, Platform } from "./useGenres";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery?.sortBy, search: gameQuery?.searchText } }, [
    gameQuery,
  ]);
export default useGames;
