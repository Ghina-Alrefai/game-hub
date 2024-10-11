
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';
import genres from '../data/genres';
import ms from 'ms'



const api_client = new ApiClient<Genre>('/genres');
 interface FetchResponse<T> {
    count: number; 
    results: T[];
  }
  
  
export interface Genre{
    id:number
    name:string
    image_background:string
}


const useGenres = () => {
return useQuery<FetchResponse<Genre>, Error>({
 queryKey: ['genres'],
 queryFn:api_client.getAll,
 staleTime: ms('24h'),
 initialData: {count : genres.length , results: genres}

 }
 )
}

export default useGenres;