// src/hooks/useFetchGames.ts

import { FetchResponse } from './useData';
import { GameQuery } from '../App';
import { ApiClient } from '../services/api_client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'; 
import { Platform } from './usePlatForme';
const api_client = new ApiClient<Game>('/games');
import ms from 'ms'



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const useGames = (gameQuery: GameQuery) =>
  //number 1 to inf query
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],  
     queryFn: ({pageParam = 1}) =>
      api_client.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          rating_top: gameQuery.rating_top, 
          page: pageParam
        },
      }),
      getNextPageParam: (lastPage, allPages ) => {
        // Calculate the next page number
        return lastPage.next  ? allPages.length + 1 : undefined;
      },
      staleTime: ms('24h')
  });
