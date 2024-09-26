// src/hooks/useFetchGames.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import useData from './useData';



export interface Genre{
    id:number
    name:string
    image_background:string
}
interface FetchGenresRespons{
    count :number
    results: Genre[];
}

export const useGenres = () => useData<Genre>('/genres');