// src/hooks/useFetchGames.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from '../App';


export interface Platform{
  id : number
  name: string
  slug: string
}
export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform : Platform}[];
  metacritic:number;
  rating_top:number;
}
interface FetchGame{
  count: number;
  results: Game[];
}
export const useGames = (gameQuery:GameQuery)=> 
  useData<Game>('/games' ,
     {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering : gameQuery.sortOrder,
      search : gameQuery.searchText,
      rating_top :gameQuery.rating_top
    } 
  },
[  gameQuery.genre?.id,
   gameQuery.platform?.id]
  );