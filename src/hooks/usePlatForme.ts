

import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';
import platforms from '../data/platforms'
import { FetchResponse } from './useData';
import ms from 'ms'





const api_client = new ApiClient<Platform>('/platforms/lists/parents');
export interface Platform{
    id:number
    name:string
    slug:string 
}



export const usePlatForme = () => {
 return useQuery<FetchResponse<Platform>, Error>({

 queryKey: ['platforms'],//error
 queryFn:api_client.getAll,
 staleTime: ms('24h'),
 initialData: {count : platforms.length , results: platforms}

 }
 )
}

