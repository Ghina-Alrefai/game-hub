// src/hooks/useFetchGames.ts

import { FetchResponse } from './useData';
import { ApiClient } from '../services/api_client';
import { useInfiniteQuery } from '@tanstack/react-query'; 
import { Platform } from './usePlatForms';
const api_client = new ApiClient<Game>('/games');
import ms from 'ms'
import useStoreGame from '../store';



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const useGames = () =>{
  
  const gameQuery = useStoreGame(s=> s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],  
     queryFn: ({pageParam = 1}) =>
      api_client.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
      getNextPageParam: (lastPage, allPages ) => {
        // Calculate the next page number
        return lastPage.next  ? allPages.length + 1 : undefined;
      },
      staleTime: ms('24h')
  });
}
