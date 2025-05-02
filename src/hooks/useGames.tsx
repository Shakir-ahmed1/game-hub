import useData from "./useData";
import { Genre, Platform } from "./useGenres";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  background_image: string;
  metacritic: number;
  rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery?.sortBy, search: gameQuery?.searchText } }, [
    gameQuery,
  ]);
export default useGames;
