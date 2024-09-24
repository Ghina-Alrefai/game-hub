// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import useData from './useData';



export interface Genres{
    id:number
    name:string
}
interface FetchGenresRespons{
    count :number
    results: Genres[];
}

export const useGenres = () => useData<Genres>('/genres');