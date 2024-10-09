// src/hooks/useFetchGames.ts

import { FetchResponse } from './useData';
import { GameQuery } from '../App';
import { ApiClient } from '../services/api_client';
import { useQuery } from '@tanstack/react-query'; 

const api_client = new ApiClient<Game>('/games');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],  
    queryFn: () =>
      api_client.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          rating_top: gameQuery.rating_top, 
        },
      }),
  });
