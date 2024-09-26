// src/hooks/useFetchGames.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import useData from './useData';
import { Genre } from './useGenres';


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
}
interface FetchGame{
  count: number;
  results: Game[];
}
export const useFetchGames = (SelectedGenre:Genre | null ,SelectedPlatform:Platform | null) => 
  useData<Game>('/games' , {
    params: {
      genres: SelectedGenre?.id,
      platforms: SelectedPlatform?.id
    } },
    [
      SelectedGenre?.id,
      SelectedPlatform?.id
    ]
  );