

import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';
import platforms from '../data/platforms'
import { FetchResponse } from './useData';





const api_client = new ApiClient<Platform>('/platforms/lists/parents');
interface Platform{
    id:number
    name:string
    slug:string 
}



export const usePlatForme = () => {
 return useQuery<FetchResponse<Platform>, Error>({
 queryKey: ['platforms'],
 queryFn:api_client.getAll,
 staleTime: 60*60*1000*24,
 initialData: {count : platforms.length , results: platforms}

 }
 )
}

